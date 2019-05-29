var _controller = class Controller {

    constructor(app){
        this.context = app;
        this.context.context.innerHTML = ""; //cleaning body
    }

    view(filename, args){
        this.render(require('../views/' + filename + '.synapse.js')(args));
    }

    render(view) {
        this.context.context.innerHTML = view;
        this.navigation(this.context);
    }

    navigation(_context) {
        const links = document.querySelectorAll('router[link]');
        for(let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function() {
                window.history.pushState("", "", links[i].getAttribute('link').toString());
                _context.redirect();
            });
        }
    }

    move(path) {
        this.context.redirect(path);
    }

    authorized() {
        if(!require('../core/Auth')().getAuth()) {
            return false;
        };
        return true;
    }


}

module.exports = _controller;
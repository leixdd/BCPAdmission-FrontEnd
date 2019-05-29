const Controller = require('../core/Controller');
const Http = require('../core/Http');
const Auth = require('../core/Auth')();
const Flash = require('../core/Flash');

class Index extends Controller {

    constructor(app) {
        super(app)
        this._arguments = {};
    }

    index() {
        this.view("index", this._arguments);
        this.formSetup();
    }

    formSetup() {

        let form = document.getElementById('spForm');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitForm();
        });

    }

    submitForm() {
        let btn = document.getElementById('submit-btn');
        btn.innerHTML = /*html*/ `
            <div id='loader_' class="d-flex align-items-center justify-content-center">
                Please Wait &nbsp; &nbsp; 
                <span class='ld ld-ring ld-spin-fast'>&nbsp;</span>
            </div>
        `;

        Http.request('post', 'account/login', {
            data: {
                student_no: document.getElementById('student_no').value,
                password: document.getElementById('password').value,
                sestok: new Date().toLocaleDateString()
            }
        }).catch(err => {
            Flash.flash('error', 'errorMessage', JSON.stringify(err));
            document.getElementById('loader_').remove();
            btn.innerText = 'LOGIN';
        }).then(res => {
            if (!res.success) {
                Flash.flash('error', 'errorMessage', res.errors.access);
                document.getElementById('loader_').remove();
                btn.innerText = 'LOGIN';
            } else {
                Auth.setAuth(res._t0k3n + " : " + res._user)
                this.move('/student');
            }
        })


    }

};

module.exports = function () { return Index; }



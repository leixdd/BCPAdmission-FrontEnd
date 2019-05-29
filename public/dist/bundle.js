!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=15)}([function(t,e,n){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=e,this.context.context.innerHTML=""}var e,o,i;return e=t,(o=[{key:"view",value:function(t,e){this.render(n(6)("./"+t+".synapse.js")(e))}},{key:"render",value:function(t){this.context.context.innerHTML=t,this.navigation(this.context)}},{key:"navigation",value:function(t){for(var e=document.querySelectorAll("router[link]"),n=function(n){e[n].addEventListener("click",function(){window.history.pushState("","",e[n].getAttribute("link").toString()),t.redirect()})},r=0;r<e.length;r++)n(r)}},{key:"move",value:function(t){this.context.redirect(t)}},{key:"authorized",value:function(){return!!n(1)().getAuth()}}])&&r(e.prototype,o),i&&r(e,i),t}();t.exports=o},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,o;return e=t,(r=[{key:"setAuth",value:function(t){sessionStorage.setItem("_sp_ap",JSON.stringify(t))}},{key:"getAuth",value:function(){return sessionStorage.getItem("_sp_ap")}}])&&n(e.prototype,r),o&&n(e,o),t}();t.exports=function(){return new r}},function(t,e,n){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}var a=new(function(){function t(){return r(this,t),this.routes={"/":{path:"index@index",name:"/",title:"BCP_StudentPortal",withAuth:!1},"/forgot-password":{path:"utils/forgot@index",name:"forgot-password",title:"BCP_StudentPortal | Forgot Password",withAuth:!1},"/create-account":{path:"usm/registration@index",name:"create-account",title:"BCP_StudentPortal | Create Account",withAuth:!0},"/student":{path:"usm/student@index",name:"student",title:"BCP_StudentPortal | Student",withAuth:!0}},this}return i(t,[{key:"call",value:function(t){var e=t.route.path.split("@"),r=n(3).Controller(e[0],t.app),o=e[1];window.history.pushState(null,t.route.title,t.route.name),"function"==typeof r[o]&&(r[o](),t.route.withAuth&&(r.authorized()||t.app.redirect("/")))}}]),t}()),u=function(){function t(e){r(this,t),this.context=e}return i(t,[{key:"redirect",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=""===t?window.location.pathname:t;if(void 0!==a.routes[e])a.call({route:a.routes[e],app:this});else this.context.innerHTML="<h1>404</h1>"}}]),t}();t.exports=function(t){return new u(t)}},function(t,e,n){"use strict";function r(t,e){return new(n(4)("./"+t+".controller.js")())(e)}n.r(e),n.d(e,"Controller",function(){return r})},function(t,e,n){var r={"./index.controller.js":5,"./usm/registration.controller.js":12,"./usm/student.controller.js":13,"./utils/forgot.controller.js":14};function o(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id=4},function(t,e,n){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var s=n(0),c=n(10),l=n(1)(),f=n(11),d=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=i(this,a(e).call(this,t)))._arguments={},n}var n,r,d;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,s),n=e,(r=[{key:"index",value:function(){this.view("index",this._arguments),this.formSetup()}},{key:"formSetup",value:function(){var t=this;document.getElementById("spForm").addEventListener("submit",function(e){e.preventDefault(),t.submitForm()})}},{key:"submitForm",value:function(){var t=this,e=document.getElementById("submit-btn");e.innerHTML="\n            <div id='loader_' class=\"d-flex align-items-center justify-content-center\">\n                Please Wait &nbsp; &nbsp; \n                <span class='ld ld-ring ld-spin-fast'>&nbsp;</span>\n            </div>\n        ",c.request("post","account/login",{data:{student_no:document.getElementById("student_no").value,password:document.getElementById("password").value,sestok:(new Date).toLocaleDateString()}}).catch(function(t){f.flash("error","errorMessage",JSON.stringify(t)),document.getElementById("loader_").remove(),e.innerText="LOGIN"}).then(function(n){n.success?(l.setAuth(n._t0k3n+" : "+n._user),t.move("/student")):(f.flash("error","errorMessage",n.errors.access),document.getElementById("loader_").remove(),e.innerText="LOGIN")})}}])&&o(n.prototype,r),d&&o(n,d),e}();t.exports=function(){return d}},function(t,e,n){var r={"./index.synapse.js":7,"./usm/registration.synapse.js":8,"./util/forgot-password.synapse.js":9};function o(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id=6},function(t,e){t.exports=function(t){return'\n        <div class="row dp ml-3 mr-3">\n            <div class="">\n                <div class="col-12">\n                    <div class="card border-primary">\n                        <div class="card-header back-primary text-white text-center">BCP - Student Portal</div>\n                        <div class="card-body">\n                            <div id="errorMessage"></div>\n                            <form id="spForm" class="p-2">\n                                <div class="form-group">\n                                    <label for="student_no"><b>Student Number</b></label>\n                                    <input type="text" id="student_no" class="form-control" required />\n                                </div>\n                                <div class="form-group">\n                                    <label for="password"><b>Password</b></label>\n                                    <router link=\'/forgot-password\' class="txt-primary"><small>[Forgot Password?]</small></router>\n                                    <input type="password" id="password" class="form-control" required />\n                                </div>\n                                <button type="submit" id="submit-btn" class="btn back-primary text-white form-control">LOGIN</button>\n                                \n                                <hr>\n                                \n                                <div class="d-flex justify-content-center">\n                                    <router link=\'/create-account\' class="txt-primary"><small>Create Account</small></router>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                    \n                </div>\n            </div>\n        </div>\n    '}},function(t,e){t.exports=function(t){return'\n        <div class="row dp ml-3 mr-3">\n            <div class="">\n                <div class="col-12">\n                    <div class="card border-primary ">\n                        <div class="card-header back-primary text-white text-center">Create Account</div>\n                        <div class="card-body">\n                            <form id="spForm" class="p-2">\n\n                                <div class="form-group">\n                                    <label for="student_no"><b>Student Number</b></label>\n                                    <input type="text" id="student_no" class="form-control" required />\n                                </div>\n\n                                <div class="form-group">\n                                    <label for="email"><b>Email Address</b></label>\n                                    <input type="email" id="email" class="form-control" required />\n                                </div>\n\n                                <div class="form-group">\n                                    <label for="password"><b>Password</b></label>\n                                    <input type="password" id="password" class="form-control" required />\n                                </div>\n                                \n                                <div class="form-group">\n                                    <label for="password"><b>Re-Type Password</b></label>\n                                    <input type="password" id="repassword" class="form-control" required />\n                                </div>\n\n                                <a href="#" class="btn back-primary text-white form-control">SUBMIT</a>\n                                \n                                <hr>\n                                \n                                <div class="d-flex justify-content-center">\n                                    <router link=\'/\' class="txt-primary"><small>Already have account?</small></router>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    '}},function(t,e){t.exports=function(t){return'\n        <div class="row dp ml-3 mr-3">\n                <div class="">\n                    <div class="col-12">\n                        <div class="card border-primary ">\n                            <div class="card-header back-primary text-white text-center">Forgot Password</div>\n                            <div class="card-body">\n                                <form id="spForm" class="p-2">\n                                    <div class="form-group">\n                                        <label for="email"><b>Email Address</b></label>\n                                        <input type="email" id="email" class="form-control" required/>\n                                    </div>\n                                    <a href="#" class="btn back-primary text-white form-control">RECOVER ACCOUNT</a>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n    '}},function(t,e){t.exports.request=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return $.ajaxSetup({headers:{"Content-Type":"application/json"}}),console.log(t),new Promise(function(r,o){$.ajax({type:t,data:JSON.stringify(n.data),dataType:"json",async:n.async,url:"http://127.0.0.1:8422/api/".concat(e),error:function(t,e,n){o(t)},success:function(t){r(t)}})})}},function(t,e){t.exports.flash=function(t,e,n){var r="";switch(t){case"error":r='\n                <div class="alert alert-danger alert-dismissible fade show" role="alert">\n                    <strong>Opps!</strong> '.concat(n,'\n                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n                        <span aria-hidden="true">&times;</span>\n                    </button>\n                </div>\n            ');break;case"success":r='\n                <div class="alert alert-success alert-dismissible fade show" role="alert">\n                    <strong>Success!</strong> '.concat(n,'\n                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n                        <span aria-hidden="true">&times;</span>\n                    </button>\n                </div>\n            ')}document.getElementById(e).innerHTML=r}},function(t,e,n){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var s=n(0),c=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=i(this,a(e).call(this,t))).arguments_={},n}var n,r,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,s),n=e,(r=[{key:"index",value:function(){this.view("usm/registration",this.arguments_)}}])&&o(n.prototype,r),c&&o(n,c),e}();t.exports=function(){return c}},function(t,e,n){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var s=n(0),c=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=i(this,a(e).call(this,t))).arguments_={},n}var n,r,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,s),n=e,(r=[{key:"index",value:function(){console.log("a")}}])&&o(n.prototype,r),c&&o(n,c),e}();t.exports=function(){return c}},function(t,e,n){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var s=n(0),c=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=i(this,a(e).call(this,t))).arguments_={},n}var n,r,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,s),n=e,(r=[{key:"index",value:function(){this.view("util/forgot-password",this.arguments_)}}])&&o(n.prototype,r),c&&o(n,c),e}();t.exports=function(){return c}},function(t,e,n){"use strict";n.r(e);var r=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=document.getElementById(e)};window.onload=function(){n(2)(new r("app").context).redirect(),$(".dateTimePicker").datepicker({uiLibrary:"bootstrap4"})}}]);
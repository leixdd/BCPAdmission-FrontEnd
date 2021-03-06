module.exports = function (_arguments_) {
    return /* template */`
        <div class="row dp ml-3 mr-3">
            <div class="">
                <div class="col-12">
                    <div class="card border-primary">
                        <div class="card-header back-primary text-white text-center">BCP - Student Portal</div>
                        <div class="card-body">
                            <div id="errorMessage"></div>
                            <form id="spForm" class="p-2">
                                <div class="form-group">
                                    <label for="student_no"><b>Student Number</b></label>
                                    <input type="text" id="student_no" class="form-control" required />
                                </div>
                                <div class="form-group">
                                    <label for="password"><b>Password</b></label>
                                    <router link='/forgot-password' class="txt-primary"><small>[Forgot Password?]</small></router>
                                    <input type="password" id="password" class="form-control" required />
                                </div>
                                <button type="submit" id="submit-btn" class="btn back-primary text-white form-control">LOGIN</button>
                                
                                <hr>
                                
                                <div class="d-flex justify-content-center">
                                    <router link='/create-account' class="txt-primary"><small>Create Account</small></router>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    `;
}
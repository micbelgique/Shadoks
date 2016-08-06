import React, {Component} from 'react';

class Login extends Component{
    render(){
        return (
            <div class="col-md-6">
                <div class="box box-info">
                    <div class="box-header with-border">
                        <h3>Veuillez introduire vos infos de connection</h3>
                    </div>
                    <form class="form-horizontal">
                        <div class="box-body">
                            <div class="form-group">
                                <label class="col-sm-2 control-label" for="Login">
                                    Login
                                </label>
                                <div class="col-sm-10">
                                    <input type="text" id="Login" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-2 control-label" for="Password">
                                    Password
                                </label>
                                <div class="col-sm-10">
                                    <input type="Password" id="Password" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}


export default Login;
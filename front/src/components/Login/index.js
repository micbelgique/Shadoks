import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../../theme/css/AdminLTE.css';
import '../../theme/css/skins/_all-skins.css';

class Login extends Component {
    render() {
        return (
            <div className="hold-transition login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <a href="../../index2.html">
                            <b>Co</b>Workers</a>
                    </div>

                    <div className="login-box-body">
                        <p className="login-box-msg">Sign in to start your session</p>

                        <form action="../../index2.html" method="post">
                            <div className="form-group has-feedback">
                                <input type="email" className="form-control" placeholder="Email"/>
                                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="password" className="form-control" placeholder="Password"/>
                                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                            </div>
                            <div className="row">
                                <div className="col-xs-offset-8 col-xs-4">
                                    <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                                </div>

                            </div>
                        </form>

                        <div className="social-auth-links text-center">
                            <p>- OR -</p>
                            <a href="#" className="btn btn-block btn-social btn-facebook btn-flat">
                                <i className="fa fa-facebook"></i>
                                Sign in using Facebook</a>
                            <a href="#" className="btn btn-block btn-social btn-google btn-flat">
                                <i className="fa fa-google-plus"></i>
                                Sign in using Google+</a>
                        </div>

                        <a href="#">I forgot my password</a><br/>
                        <a href="register.html" className="text-center">Register a new membership</a>

                    </div>
                </div>
            </div>
        )
    }

}

export default Login;

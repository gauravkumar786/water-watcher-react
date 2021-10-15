import React, { Component } from 'react';
import Joi from 'joi-browser';
import { toast } from 'react-toastify';
import axios from 'axios';
import { apiUrl } from '../../src/config.json';
import Form from './common/form';
import auth from '../services/authService';

class Login extends Form {
    state = {
        data: { email: "", password: "" },
        errors: {}
    }

    doSubmit = async () => {
        try {
            const { data } = this.state;
            await auth.login(data.email, data.password);
            window.location = "/dashboard";
        }
        catch (err) {
            if (err.response) {
                toast.error(err.response.data);
            }
        }
    }

    render() {
        const { data, errors } = this.state;
        return (
            <div className="loginPage signup">
                <div className="col-md-6">
                    <div className="logoBg">
                        <img src={process.env.PUBLIC_URL + '/images/logo.png'} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="formLogin">
                        <form onSubmit={this.handleSubmit} >
                            <h3>Login</h3>
                            <div className="form-group">
                                <label htmlFor="text1" className="col-form-label">Email</label>
                                <div className="inputBx">
                                    <input id="text1" type="text" name="email" onChange={this.handleChange} value={data.email} placeholder="Email" className="form-control" />
                                    <i className="fa fa-envelope"></i>
                                    {errors.email && <div className="alert alert-danger">{errors.email}</div>}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="text2" className="col-form-label">Password</label>
                                <div className="inputBx">
                                    <input id="text2" type="password" name="password" onChange={this.handleChange} value={data.password} placeholder="**********" className="form-control" />
                                    <i className="fa fa-lock"></i>
                                    {errors.password && <div className="alert alert-danger">{errors.password}</div>}
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12">
                                    <div className="custom-control custom-checkbox custom-control-inline">
                                        <input name="checkbox" id="checkbox_0" type="checkbox" className="custom-control-input" value="rabbit" />
                                        <label htmlFor="checkbox_0" className="custom-control-label">Remember Me</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
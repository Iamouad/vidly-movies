import React from 'react';
import Form from '../common/form';
import Joi from 'joi-browser'
import {toast } from "react-toastify";
import * as userService from '../../services/userService';
import auth from '../../services/authService';

class RegisterForm extends Form {
    state = { 
        data: {username:'', password: '', name:''},
        errors: {}

     }

     schema = {
         username:Joi.string().required().email().label('Username'),
         password:Joi.string().required().min(5).label('Password'),
         name:Joi.string().required().label('Name'),


     };

    

    doSubmit = async() => {
        //call the server
        try{
            const {data} = this.state;
            const response = await userService.register(data)
            auth.loginWithJwt(response.headers['x-auth-token'])
            window.location = "/"
        }
        catch(ex){
            if(ex.response && ex.response.status === 400){
                toast.error(ex.response.data);
                const {errors} = this.state;
                errors.username = ex.response.data;
                this.setState({errors})
                return
            }
        }
    }
      

    render() { 
        return ( <div className="container">
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit }>
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")} 
            {this.renderInput("name", "Name")}            
            {this.renderButton('Register')}
            
            </form>
        </div> );
    }
}
 
export default RegisterForm;
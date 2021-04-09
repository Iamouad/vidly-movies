import React from 'react';
import Form from '../common/form';
import Joi from 'joi-browser'

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

    

    doSubmit = () =>{
        //call the server
        console.log("success")
    }
      

    render() { 
        return ( <div className="container">
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit }>
            {this.renderInput("username", "text", "Username")}
            {this.renderInput("password", "password", "Password")} 
            {this.renderInput("name", "text", "Name")}            

            {this.renderButton('Register')}
            

            </form>
        </div> );
    }
}
 
export default RegisterForm;
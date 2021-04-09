import { Component } from 'react';
import Joi from 'joi-browser'
import Input from './input';
import Select from './select';



class Form extends Component {
    state = { 
        data : {}, 
        errors : {}
     }

     validate = () => {

        const result = Joi.validate(this.state.data, this.schema, {abortEarly: false})
        const errors = {}
        if(! result.error) return {};

        for(let item of result.error.details)
            errors[item.path[0]] = item.message;
        return errors;
    }

    validateProperty = (input) => {
        const obj = {[input.name] : input.value}
        const schema = {[input.name]: this.schema[input.name]}
        const {error} = Joi.validate(obj, schema)
        return error ? error.details[0].message : null;
    }

    handleSubmit = (e) => {
        e.preventDefault();     
        //handling errors
        const errors = this.validate()
        //if no errors we set it to an empty object
        this.setState({errors})
        if(Object.keys(errors).length > 0) return
        this.doSubmit();
        
    }

    handleChange = (e) => {
        const input = e.currentTarget;
        const errors = {...this.state.errors}
        const errorMsg = this.validateProperty(input)
        if(errorMsg)
            errors[input.name] = errorMsg
        else
            delete errors[input.name]
        const data = {...this.state.data}
        data[e.currentTarget.name] = e.currentTarget.value;
        this.setState({data, errors})
    }

   
    renderButton(label){
        const errors = {...this.state.errors}
        return <button type="submit" 
        disabled={Object.keys(errors).length >0 ? true: false}
        className="btn btn-primary mt-2">{label}</button>
            
    }

    renderInput(name, label, type="text"){
        const {data, errors} = this.state;
        return(<Input
            name={name}
            type={type}
            value={data[name] || '' }
            onChange={this.handleChange}
            label={label}
            error={errors[name] || '' }
        />)
    }

    renderSelect(name, label, options){
        const {data, errors} = this.state;
        return (
            <Select options={options}
             name={name}
             label={label}
             value={data[name]}
             onChange={this.handleChange}
             error={errors[name]}
             />
            )
    }

    
}
 
export default Form;
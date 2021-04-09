import React from 'react';

const Input = (props) => {
    return ( 
        <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input value={props.value}
        onChange={props.onChange} 
        type={props.type}
        name={props.name}
        className="form-control"
        id={props.name}
        placeholder={"Enter " + props.label}/>
        {props.error && <div className="alert alert-danger">{props.error}</div>}
        </div>
        
     );
}
 
export default Input;
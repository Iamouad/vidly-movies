import React from 'react';

const Select = (props) => {
    return ( 
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <select 
             className="form-control"
             id={props.name}
             onChange={props.onChange} 
             placeholder={"Enter " + props.label} 
             value={props.value}
             name={props.name}
             >        
            {props.options.map(g =>
                <option key={g._id}
                    value={g._id} 
                >{g.name}</option>
                )}
            </select>
            {props.error && <div className="alert alert-danger">{props.error}</div>}
            </div>
            

     );
}
 
export default Select;
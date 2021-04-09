import React, { Component } from 'react';

class Counter extends Component {
    
    styles = {
        fontSize: 15,
        fontFamily: 'cursive',
        fontWeight: 'bold'
    }


    render() { 
           
     return ( 
        <div className="row">
            <div className="col-1">
            <span className={this.getBadgeClasses()}>
                {this.formatValue()}</span>
            </div> 
            <div className="col">
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-sm btn-secondary ml-2">+</button>
            <button onClick={() => this.props.onDecrement(this.props.counter)}
            disabled={this.props.counter.value === 0 ? true : false}
             className="btn btn-sm btn-secondary ml-2">-</button>

            <button onClick={() => this.props.onDelete(this.props.counter)} className="btn btn-sm btn-danger ml-2">X</button>
            </div>
            
        </div>
        );
    }


    getBadgeClasses() {
        const { value } = this.props.counter;
        let classes = "m-2 badge badge-";
        classes += value === 0 ? "warning" : "primary";
        return classes;
    }

    formatValue(){
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value; 
    }
}
 
export default Counter;
import React from 'react';

const Like = (props) => {
    let className = "fa fa-heart";
        if(!props.liked)
            className+='-o';
    return (  <i className={className}
        onClick={props.onLike}
        style={{cursor: "pointer"}}>
            
        </i> );
}
 
export default Like;

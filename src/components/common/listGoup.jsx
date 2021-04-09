import React from 'react';

const ListGroup = (props) => {
    const {selectedItem, items} = props;
    return ( 
        <ul className="list-group">

        {items.map(item =>
        <li key={item.id}
        onClick={() => props.onItemChange(item)}        
        className={formatClass(item, selectedItem)}>
        {item.label}
        </li>
        )}
        
        </ul>
     );
}

function formatClass(item, selectedItem) {
    if(item.id === selectedItem[0].id)
        return "btn list-group-item active";
    return "btn list-group-item "
}
 
export default ListGroup;

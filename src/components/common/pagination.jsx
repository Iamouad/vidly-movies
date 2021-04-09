import React from 'react';

const Pagination = (props) => {
    const {totalItems, itemsPerPage, currentPage } = props;
    const nbPages = Math.ceil(totalItems/itemsPerPage)
    if(nbPages <= 1)
        return null;
    let tabPages = [];
    for(let i = 0; i < nbPages; i++)
        tabPages[i] = i+1 ;
    return ( 
        <nav aria-label="Page navigation example">
        <ul className="pagination">
            {tabPages.map(p => 
                    <li key={p} className={p === currentPage? "page-item active" : "page-item"} 
                    onClick={() => props.onPageChange(p)}>
                    <p className="btn page-link" href="#" >{p}</p>
                    </li>
            )}
        
        </ul>
        </nav>
     );
}
 
export default Pagination;

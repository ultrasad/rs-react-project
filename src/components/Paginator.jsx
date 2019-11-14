import React from 'react';
import {Link} from 'react-router-dom';

export default function ({totalPage, currentPage, linkTo}){
    return (
        <nav className="pagination is-small">
        <ul className="pagination-list">
        {
            new Array(totalPage).fill().map((each, idx) => {
                //return <button key={idx} className="button">{idx + 1}</button>
                //return (<li>{idx + 1}</li>)
                const pageNo = idx + 1;
                const className = parseInt(currentPage) === pageNo ? 'pagination-link is-current' : 'pagination-link';
                //return <li key={idx}><Link to={`/pagination?p=`+ pageNo} className={`pagination-link ${parseInt(currentPage) === idx + 1 ? 'is-current' : ''}`}>{idx + 1}</Link></li>
                //return <li key={idx}><Link to={`/pagination?p=`+ pageNo} className={className}>{idx + 1}</Link></li>
                return <li key={idx}><Link to={linkTo + pageNo} className={className}>{idx + 1}</Link></li>
            })
        }
        </ul>
    </nav>
    )
}
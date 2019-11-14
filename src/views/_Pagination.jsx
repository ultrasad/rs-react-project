import React, {useState, useEffect} from 'react';
import axios from 'axios';
//import _ from 'lodash';
//import {Link} from 'react-router-dom';
import Paginator from '../components/Paginator';

//import Level2 from '../components/Level2'

const url = 'https://jsonplaceholder.typicode.com/albums'; //?_page=2&_limit=10
const limit = 9;

export default function Pagination({location}){
    const [albums, setAlbums] = useState({});
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState('0');

    const queryString = location.search;

    //console.log(location.search);

    /* function handleClick(){
        console.log('click...');
        getAlbums();
    } */

    useEffect(() => {
        console.log("queryString: ", queryString.replace(/\?p=/, ''));

        const pageNo = queryString ? queryString.replace(/\?p=/, '') : 1;
        getAlbums(pageNo);

    }, [queryString]);

    async function getAlbums(pageNo = '1'){
        console.log("click search => " + url + "?_page=" + pageNo); //gwen
        const res = await axios.get(`${url}?_limit=${limit}&_page=${pageNo}`)
        const totalCount = parseInt(res.headers['x-total-count']);
        //const pages = Math.ceil(totalCount / limit); //Match ceil
        setTotalPage(Math.ceil(totalCount / limit));

        //console.log('header count => ', totalCount);
        console.log(res.data);
        setAlbums(res.data);

        setCurrentPage(pageNo);
    }

    return (
        <div>
            <h1>Pagination | Albums Length: {albums.length ? albums.length: 0} | Total Page: {totalPage}</h1>
            <hr />

            {/* <p>
                <button className="button" onClick={handleClick}>Get Albums</button>
            </p> */}

            <p className="title">Albums by Pagiantion</p>
            
            <Paginator currentPage={currentPage} totalPage={totalPage} linkTo={`/pagination?p=`} />

            {/* <nav className="pagination is-small">
                <ul className="pagination-list">
                {
                    new Array(totalPage).fill().map((each, idx) => {
                        //return <button key={idx} className="button">{idx + 1}</button>
                        //return (<li>{idx + 1}</li>)
                        const pageNo = idx + 1;
                        const className = currentPage === pageNo.toString() ? 'pagination-link is-current' : 'pagination-link';
                        //return <li key={idx}><Link to={`/pagination?p=`+ pageNo} className={`pagination-link ${parseInt(currentPage) === idx + 1 ? 'is-current' : ''}`}>{idx + 1}</Link></li>
                        return <li key={idx}><Link to={`/pagination?p=`+ pageNo} className={className}>{idx + 1}</Link></li>
                    })
                }
                </ul>
            </nav> */}
            
            <p>{JSON.stringify(albums)}</p>
        </div>
    )
}
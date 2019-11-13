import React, {useRef, useEffect} from 'react';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { movies } from '../db.json';

//import Slick from 'slick-carousel';
//import 'pikaday/css/pikaday.css';

export default function (){

    const slick = useRef(null);

    function handleClick(){
        console.log("click...");
    }

    useEffect(() => {
        $(slick.current).slick({
            slidesToShow: 5,
            arrows: true,
            dots: true
        });

        return () => {
            $(slick.current).slick('unslick');
        }

        //console.log('current: ', $(divSlick.current));

    }, []);

    return (
        <div>
            <h1>Slick</h1>
            <hr />
            <div ref={slick}>
                {movies.map(({id, title}) => {
                    return (
                        <div key={id}>
                            <img style={{ cursor: 'pointer' }} onClick={() => handleClick(id)} name={title} alt={title} title={title} 
                        src={"images/" + id + ".jpg"} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
import React, {useRef, useEffect} from 'react';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { movies } from '../db.json';

//import Slick from 'slick-carousel';
//import 'pikaday/css/pikaday.css';

const log = console.log;

export default function (){

    const ref = useRef(null);

    function handleClick(){
        // `current` points to the mounted text input element
        //ref.current.hide();
        console.log("click...");
    }

    /* useEffect(() => {
        log("mount 1 ", ref.current);
        return () => setTimeout(() => log("unmount 1 ", ref.current), 0);
    }, []); */

    useEffect(() => {

        const element = ref.current;
        log("mount 2 ", element);

        $(element).slick({
            slidesToShow: 5,
            arrows: true,
            dots: true
        });

        //return () => setTimeout(() => log("unmount 2 ", element), 0);
        return () => {
            console.log('return current: ', $(element));
            $(element).slick('unslick');
        }

    }, []);

    return (
        <div>
            <h1>Slick</h1>
            <hr />
            <div ref={ref}>
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
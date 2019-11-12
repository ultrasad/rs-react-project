import React,{useState, useEffect} from 'react';
import {movies} from '../db.json';

//console.log(movie);
const baseStyle = {
    cursor: 'pointer',
}

const countMovie = movies.reduce((acc, each) => {
    return acc + each.duration
}, 0)

export default function Movie(){

    //const [selectMovie, setSelctMovie] = useState(-1);
    const [selectMovie, setSelctMovie] = useState({});
    //const [movieDuration, setMovieDuration] = useState(0);
    const [movieDuration, setMovieDuration] = useState({count: 0, duration: 0, rating: 0});

    function handleClick(id){
        console.log("click => " + id);
        //setSelctMovie(id);
        setSelctMovie({
            ...selectMovie,
            [id]: selectMovie[id] ? false : true // comapre by id is exists
        });

        //setMovieDuration(movieDuration + movies[id].duration)
        /*setMovieDuration(movies.reduce((acc, each) => {
            return selectMovie[each.id] ? acc + 1 : acc
        },0))*/
    }

    useEffect(() => {
        const xxx = movies
        .filter((each, idx, arr) => {
          return selectMovie[each.id]  //true or false (movie is selected)
        })
        .reduce((acc, each, idx, arr) => {
            //return selectMovie[each.id] ? acc + 1 : acc
            //const totalElement = arr.length
            return {
                count: acc.count + 1,
                duration: acc.duration + each.duration,
                rating: acc.rating + each.rating / arr.length
            }
        //}, 0)
        }, {count: 0, duration: 0, rating: 0}) //return acc of reduce

        setMovieDuration(xxx)
    }, [selectMovie])


    return (
        <div>
            {/*<h1>Movie: {selectMovie}</h1>*/}
            <h1>Movie: {JSON.stringify(selectMovie)}, [Length All: {countMovie}, SelectedMovie: {JSON.stringify(movieDuration)}]</h1>
            <hr />
            <div className="columns is-multiline">
            {movies.map(each => {
                //const style = {...baseStyle, border: 'solid 2px'}
                //const style =  (selectMovie === each.id) ? {...baseStyle, border: 'solid 2px', borderColor: 'gray'} : {baseStyle}
                //const style =  {...baseStyle}
                const style =  (selectMovie[each.id] === true) ? {...baseStyle, border: 'solid 2px', borderColor: 'gray'} : {baseStyle}
                return (
                    <div key={each.id} className="column is-one-third has-text-centered" style={style}>
                        <img onClick={() => handleClick(each.id)} name={each.title} alt={each.title} title={each.title} 
                        src={"images/" + each.id + ".jpg"} />
                    </div>
                )
            }
            )}
            </div>
            
        </div>

    )
}
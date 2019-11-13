import React, {useState, useEffect} from 'react';

export default function Clock({children}){ //params children is function in clock main

    const [now, setNow] = useState(new Date())

    useEffect(() => {
        const ref = setInterval(() => {
            //console.log(new Date());
            setNow(new Date())
        }, 1000);

        return () => { // work after first round, and before code up
            clearInterval(ref);
        }

    }, []);

    return (
        <div className="box">

            {children(now.toString())} {/* return function with params value to props */}

            {/*{children(now)}*/}

            {/* <h1 classname="title">Clock</h1>
            <hr />
            <div className="clock" style={{color: 'red'}}>
                <p>Now: {(new Date().toString())}</p>
                {children}
            </div> */}
        </div>
    )
}
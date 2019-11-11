import React, {lazy, Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

//import Home from '../views/Home';
//import About from '../views/About';
//import Contact from '../views/Contact';

const Home = lazy(() => import(/*webpackChunkName: 'home' */ '../views/Home'))
const About = lazy(() => import(/*webpackChunkName: 'about' */ '../views/About'))
const Contact = lazy(() => import(/*webpackChunkName: 'contact' */  '../views/Contact'))

function Loading(){
    return <h1>Loading...</h1>
}

export default function Routes(){
    return (
        <div>
            <div>Routes</div>
            <Suspense fallback={<Loading />}>
            <Switch>

            <Redirect exact from="/" to="/home" />

            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            
            {/*
            <Route path='/home'>
                <Home />
            </Route>
            <Route path='/about'>
                <About />
            </Route>
            <Route path='/contact'>
                <Contact />
            </Route>
            */}

            </Switch>
            </Suspense>
        </div>
    )
}
import React, {lazy, Suspense} from 'react';
//import {Switch, Route, Redirect} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';

//import Home from '../views/Home';
//import About from '../views/About';
//import Contact from '../views/Contact';

const Home = lazy(() => import(/*webpackChunkName: 'home' */ '../views/Home'))
const About = lazy(() => import(/*webpackChunkName: 'about' */ '../views/About'))
const Contact = lazy(() => import(/*webpackChunkName: 'contact' */  '../views/Contact'))
const Movie = lazy(() => import(/*webpackChunkName: 'contact' */  '../views/Movie'))
const Form = lazy(() => import(/*webpackChunkName: 'contact' */  '../views/Form'))
const Form2 = lazy(() => import(/*webpackChunkName: 'contact' */  '../views/Form2'))
const Props = lazy(() => import(/*webpackChunkName: 'contact' */  '../views/Props'))
const Chart = lazy(() => import(/*webpackChunkName: 'contact' */  '../views/Chart'))
const Calendar = lazy(() => import(/*webpackChunkName: 'contact' */  '../views/Calendar'))
const Slick = lazy(() => import(/*webpackChunkName: 'contact' */  '../views/Slick'))
const User = lazy(() => import(/*webpackChunkName: 'contact' */  '../views/User'))
const Search = lazy(() => import(/*webpackChunkName: 'contact' */  '../views/Search'))
const Pagination = lazy(() => import(/*webpackChunkName: 'contact' */  '../views/Pagination'))
const Firebase = lazy(() => import(/*webpackChunkName: 'contact' */  '../views/Firebase'))

function Loading(){
    return <h1>Loading...</h1>
}

export default function Routes(){
    return (
        <div>
            <div>Routes</div>
            <Suspense fallback={<Loading />}>
            <Switch>

            {/*<Redirect from="/" to="/home" />*/}

            <Route exact path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/movie' component={Movie} />
            <Route path='/form' component={Form} />
            <Route path='/form2' component={Form2} />
            <Route path='/props' component={Props} />
            <Route path='/chart' component={Chart} />
            <Route path='/calendar' component={Calendar} />
            <Route path='/slick' component={Slick} />
            <Route path='/user' component={User} />
            <Route path='/search' component={Search} />
            <Route path='/pagination' component={Pagination} />
            <Route path='/firebase' component={Firebase} />
            
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
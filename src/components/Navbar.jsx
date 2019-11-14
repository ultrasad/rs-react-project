import React, {useState} from 'react';
import { NavLink } from 'react-router-dom'

const style = {
    activeClassName: 'is-active',
    className: 'navbar-item is-tab'
}

export default function Navbar(){

    const [isActive, toggleActive] = useState(false);

    function handleClick(){
        console.log("click")
        toggleActive(!isActive)
    }

    return (
        <nav className="navbar">
            <div className={`navbar-menu ${isActive ? 'is-active':''}`} id="mainMenu">
                {/*
                <Link to='/'>Home</Link>
                {' | '}
                <Link to='/about'>About</Link>
                {' | '}
                <Link to='/contact'>Contact</Link>
                */}

                <NavLink exact to='/home' {...style}>Home</NavLink>
                <NavLink to='/about' className="navbar-item is-tab" activeClassName="is-active">About</NavLink>
                <NavLink to='/contact' className="navbar-item is-tab" activeClassName="is-active">Contact</NavLink>
                <NavLink to='/movie' className="navbar-item is-tab" activeClassName="is-active">Movie</NavLink>
                <NavLink to='/form' className="navbar-item is-tab" activeClassName="is-active">Form</NavLink>
                <NavLink to='/form2' className="navbar-item is-tab" activeClassName="is-active">Form2</NavLink>
                <NavLink to='/props' className="navbar-item is-tab" activeClassName="is-active">Props</NavLink>
                <NavLink to='/chart' className="navbar-item is-tab" activeClassName="is-active">Chart</NavLink>
                <NavLink to='/calendar' className="navbar-item is-tab" activeClassName="is-active">Calendar</NavLink>
                <NavLink to='/slick' className="navbar-item is-tab" activeClassName="is-active">Slick</NavLink>
                <NavLink to='/user' className="navbar-item is-tab" activeClassName="is-active">User</NavLink>
                <NavLink to='/search' className="navbar-item is-tab" activeClassName="is-active">Search</NavLink>
                <NavLink to='/pagination' className="navbar-item is-tab" activeClassName="is-active">Pagination</NavLink>
                <NavLink to='/firebase' className="navbar-item is-tab" activeClassName="is-active">Firebase</NavLink>

            </div>
            <div className="navbar-brand">
                {/*
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
                */}

                <a role="button" onClick={handleClick} className={`navbar-burger burger ${isActive ? 'is-active':''}`} href="#test" aria-label="menu" aria-expanded="false" data-target="mainMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
        </nav>
    )
}
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

                <NavLink exact to='/' {...style}>Home</NavLink>
                <NavLink to='/about' className="navbar-item is-tab" activeClassName="is-active">About</NavLink>
                <NavLink to='/contact' className="navbar-item is-tab" activeClassName="is-active">Contact</NavLink>
                <NavLink to='/movie' className="navbar-item is-tab" activeClassName="is-active">Movie</NavLink>
                <NavLink to='/form' className="navbar-item is-tab" activeClassName="is-active">Form</NavLink>

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
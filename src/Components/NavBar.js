import React from 'react'
import avatar from '../img/me/Rannie F. Pavillon.jpg';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <span className="c-white">MY ONLINE PORTFOLIO</span>
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-3">
                        <NavLink to="/" exact className="c-white" activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item mr-3">
                        <NavLink to="/about" exact className="c-white" activeClassName="active">
                            My Skills
                        </NavLink>
                    </li>
                    <li className="nav-item mr-3">
                        <NavLink to="/portfolios" exact className="c-white" activeClassName="active">
                            Portfolio's
                        </NavLink>
                    </li>
                    <li className="nav-item mr-3">
                        <NavLink to="/contact" exact className="c-white" activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;

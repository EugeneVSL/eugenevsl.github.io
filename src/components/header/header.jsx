
import './header.css';
import logo from "../../assets/images/devtask.png";

import React from "react";

export const Header = () => {

    return (
        <header className="masthead mb-auto">
            <a href="/" className="d-flex align-items-center text-decoration-none">
                <img src={logo} className="me-3 rounded" alt="logo" width='70px' />
                <h1 className="float-md-start mb-0">The Development Task</h1>
            </a>
            {/* <nav className="nav nav-masthead justify-content-center float-md-end">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                <a class="nav-link" href="#">Features</a>
                <a class="nav-link" href="#">Contact</a>
            </nav>   */}
        </header>
    )
}
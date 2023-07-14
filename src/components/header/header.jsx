
import './header.css';

import React from "react";

export const Header = () => {

    return (
        <header className="masthead mb-auto">
            <div>
                <h1 className="float-md-start mb-0">The Development Task</h1>
                <nav className="nav nav-masthead justify-content-center float-md-end">
                    {/* <a class="nav-link active" aria-current="page" href="#">Home</a>
                    <a class="nav-link" href="#">Features</a> */}
                    {/* <a class="nav-link" href="#">Contact</a> */}
                </nav>
            </div>
        </header>
    )
}
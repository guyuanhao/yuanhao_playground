import React from 'react';
import { Link } from "react-router-dom";

export const Header= (props) =>{
    return(
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">Yuanhao's playground</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/"  className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Hello"  className="nav-link">Hello</Link>
                    </li>
                </ul> 
            </div>
        </nav>
    )
}
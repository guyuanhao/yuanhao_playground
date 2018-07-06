import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Header extends Component{
    constructor(){
        super();
        this.state = {
            activeTabClassName: "Home"
        };
    }

    setTab(e, tab){
        this.setState({
            activeTabClassName:tab
        });
    }

    render(){
        return(
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <Link to="/" onClick={(e) => this.setTab(e, "Home")} className="navbar-brand">Yuanhao's PG</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" onClick={(e) => this.setTab(e, "Home")}
                                className={(this.state.activeTabClassName === "Home") ? "active nav-link" : "nav-link"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Hello"  onClick={(e) => this.setTab(e, "Hello")}
                                className={(this.state.activeTabClassName === "Hello") ? "active nav-link" : "nav-link"}>Hello</Link>
                        </li>
                    </ul> 
                </div>
            </nav>
        )
    }
}
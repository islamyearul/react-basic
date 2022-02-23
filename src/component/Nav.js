import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><NavLink activeStyle={{color: 'green'}} to="/">Home</NavLink></li>
                        <li><NavLink activeStyle={{color: 'green'}} to="/about">About</NavLink></li>
                        <li><NavLink activeStyle={{ textDecoration: "none", color: "red" }} to="/contact">Contact</NavLink></li>
                        <li><NavLink activeStyle={{color: 'green'}} to="/function">Function</NavLink></li>
                    </ul>
                </nav><hr></hr><hr></hr>
            </div>
        );
    }
}

export default Nav;
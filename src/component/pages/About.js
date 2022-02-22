import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'react-table';

class About extends Component {
    render() {
        return (
            <div>
                <h1 style={{backgroundColor: "black", color: "white"}}>This Is About</h1>
                <button><Link to="/contact/Yearul">Go Contact</Link></button>
        



            </div>
        );
    }
}

export default About;
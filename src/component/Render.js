/* eslint-disable no-undef */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Render extends Component {

    ChangeValue(){
        var container = document.getElementById('element');
        var element= <h1>My name is Islam</h1>
        var callback = function(){
            alert ("this is call back");
        }
        ReactDOM.render(element, container, callback)
    }
    
    render() {
        return (
            <div>
                <h1 id="element">My Name Is Yearul </h1>
                <button onClick={this.ChangeValue}>Change</button>
            </div>
        );
    }
}

export default Render;
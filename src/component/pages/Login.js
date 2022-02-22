import React, { Component } from 'react';

class Login extends Component {
    // constructor(){
    //     super()

    // }

    login=()=>{
        sessionStorage.setItem("userName", "yearul")
    }
    render() {
        return (
            <div>
                <button onClick={this.login}>Login</button>
            </div>
        );
    }
}

export default Login;
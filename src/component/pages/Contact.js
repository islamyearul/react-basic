import React, { Component } from 'react';

class Contact extends Component {
    constructor(){
        super()
        this.state={
            name: '',
            response: '',
        }
    }

onchangehandlar=(e)=>{
const name = e.target.value
this.setState({name: name})
}


    render() {
        return (
            <div>
                <h1 style={{backgroundColor: "green", color: "white"}}>This Is Contact</h1>
                <p>Name: {this.state.name} </p>
                <p>Response: </p>
                <form>
                    <input onChange={this.onchangehandlar} type="text" id='name' placeholder='Name'></input><br></br>
                    <input type="submit" id='submit'value="send"></input>
                </form>
            </div>
        );
    }
}

export default Contact;
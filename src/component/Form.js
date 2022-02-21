import React, { Component } from 'react';
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Form extends Component {
constructor(){
    super()
    this.state ={
        username: ""
    }
}

OnchangeHandler = (event) => {
    //var newname = event.target.value;
    var newname = event.target.name;
    var myvalue = event.target.value;

    this.setState({username: myvalue })
};
onsubmithandler = ()=> {
    alert(this.state.username)
}

    render() {
        return (
            <div>
                <form onSubmit={this.onsubmithandler}>
                    <h2>React Form </h2>
                    <h2>{this.state.username}</h2>
                    {/* <input onChange={this.OnchangeHandler} type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Enter Your name" ></input><br></br> */}
                    <input name="username" onChange={this.OnchangeHandler} type="text" class="form-control"id="" aria-describedby="helpId" placeholder="Enter User name" ></input><br></br>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default Form;


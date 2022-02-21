import React, { Component } from 'react';

class Signupfrom extends Component {
    constructor(){
        super()
        this.state ={
            fname: "",
            lname: "",
            email: "",
            phone: "",
        }
    }
    
    OnchangeHandler = (event) => {
        //var newname = event.target.value;
        var inputName = event.target.name;
        var inputvalue = event.target.value;
    
        this.setState({[inputName]: inputvalue})
    };
    render() {
        return (
            <div>
               
                <form>
                <table>
                    <tr>
                        <td>First Name: </td>
                        <td>{this.state.fname}</td>
                    </tr>
                    <tr>
                        <td>Last Name: </td>
                        <td>{this.state.lname}</td>
                    </tr>
                    <tr>
                        <td>Email: </td>
                        <td>{this.state.email}</td>
                    </tr>
                    <tr>
                        <td>Phone: </td>
                        <td>{this.state.phone}</td>
                    </tr>
                </table>
                <h2>Sign Up Form</h2>
                <input onChange={this.OnchangeHandler} type="text" class="form-control" name="fname" id=""  placeholder="First name"></input><br></br>
               
                <input onChange={this.OnchangeHandler} type="text" class="form-control" name="lname" id=""  placeholder="Last name"></input><br></br>
               
                <input onChange={this.OnchangeHandler} type="email" class="form-control" name="email" id=""  placeholder="Email"></input><br></br>
              
                <input onChange={this.OnchangeHandler} type="number" class="form-control" name="phone" id=""  placeholder="Phone Number"></input><br></br>
            
                <input type="submit" class="form-control" name="submit" value="submit" ></input><br></br>
                </form>
            </div>
        );
    }
}

export default Signupfrom;


import { Component } from "react";

class Setstate extends Component{

    constructor(){
        super()
       this.state={
        name: "Yearul",
        age: 27,
        area: "Noakhali",
        fav:{
            game:"Badminton",
            food: "Fruits",
        }
       }
    }

    changeName(a){
        this.setState({name: a})
    }

    render(){

        return<div>
            <h1>Hi {this.state.name}</h1>
           <h1>Your Age Is:  {this.state.age}</h1>
           <h1>Your Area Is:  {this.state.area}</h1>
           <h1>And Your Favourite Food Is:  {this.state.fav.food}</h1>
           <button onClick={this.changeName.bind(this, "Saiful")}>Change Name</button>
        </div>
    }


}

export default Setstate;
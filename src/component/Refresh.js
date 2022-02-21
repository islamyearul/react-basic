import { Component } from "react";

class Refresh extends Component{

    constructor(){
        super()
        this.reFreshnow=this.reFreshnow.bind(this)
}

    reFreshnow(){
        this.forceUpdate();
    }

    render(){
        return <div>
            <button onClick={this.reFreshnow}>Refresh Now</button>
            <h1>{Math.random()}</h1>
        </div>
    }

}
export default Refresh;


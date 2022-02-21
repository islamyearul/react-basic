import { Component } from "react";

class Conditionreturn extends Component{
    constructor(){
        super()
        this.state={
            login: false,
        }
    }
    render(){
        if (this.state.login===true) {
            return(
                <button>Logout</button>
            )
        }else{
            return(
                <button>Login</button>
            )
        }
    }




}
export default Conditionreturn;
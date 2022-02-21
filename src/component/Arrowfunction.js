import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// function ArrowFunction(){
//     return "Hello";
// }
const Alert=(q)=>{
   alert(q)
}

const ArrowFunction=()=>{
    return(
        <div>
            <button onClick={Alert.bind(this, "Arrow function Success")}  className="btn btn-danger my-5">Test Arrow Function</button>
        </div>
    )
}
export default ArrowFunction;
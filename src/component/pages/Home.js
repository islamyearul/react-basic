import React, { Component } from 'react';
import axios from 'axios'
//import {Navigate } from 'react-router-dom'

//import { Redirect } from 'react-router'


class Home extends Component {

    constructor(){
        super()
        this.state={
            countryes: []
        }
    }

    componentDidMount(){
        axios.get('https://restcountries.com/v2/all')
        .then(res => {
           this.setState({countryes: res.data})
        })
        .catch(err => {
            console.error(err); 
        })
    }


    render() {
        const myData = this.state.countryes;
        const Country = myData.map((mylist)=>{
             return <li>{mylist.name}</li>
         })

        // if(sessionStorage.setItem("userName")==null){
        //     return <Navigate to='/login'></Navigate>
        // }else{
        //     return (
        //         <div>
        //             <h1 style={{backgroundColor: "red", color: "white"}}>This Is Home</h1>
        //             <div>
        //                 <ol>{Country}</ol>
        //             </div>
        //         </div>
        //     );
        // }
        return (
            <div>
                <h1 style={{backgroundColor: "red", color: "white"}}>This Is Home</h1>
                <div>
                    <ol>{Country}</ol>
                </div>
            </div>
        );

      

    
    }
}

export default Home;
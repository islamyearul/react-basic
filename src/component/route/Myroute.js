import React, { Component } from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Notfound from '../pages/Notfound';
import Login from '../pages/Login';




class Myroute extends Component {
    render() {
        return (
            <div>
                 <Routes>
                    <Route exact path='/'  element={<Home /> }></Route>
                    <Route exact path='/login'  element={<Login /> }></Route>
                    <Route path='/about'  element={<About/> }></Route>
                    <Route path='/contact'  element={<Contact/> }></Route>
                    <Route element={<Notfound/> }></Route>
                 </Routes>
            </div>
        );
    }
}

export default Myroute;
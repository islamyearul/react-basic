//import logo from './logo.svg';
import './App.css';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import Home from './component/pages/Home';
import {Route, Routes} from 'react-router-dom'
import Nav from './component/Nav';


function App() {
  return (

   <div>
     <Nav></Nav>
    <Routes>
       <Route exact path='/'  element={<Home /> }></Route>
       <Route path='/about'  element={<About/> }></Route>
       <Route path='/contact'  element={<Contact/> }></Route>
    </Routes>

   </div>

  );
}

export default App;


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addevent from './components/Addevent';
import Getevent from './components/Getevent';
import Mpesapayment from './components/Mpesapayment';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
     <div className='App-header'>
      <h1 id='head1' className='display-4 fw-bold'>PLAVE EVENTS</h1>
      <h2 id='heading3'>Discover and join amazing events happening around you.</h2>
      <h2 id='heading3'>Connect with people, explore opportunities and make memories.</h2>
      </div>

   <Navbar/>
     
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/addevent' element={<Addevent/>}/>
      <Route path='/' element={<Getevent/>}/>
      <Route path='/makepayment' element={<Mpesapayment/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
    </Routes>
    </div>
    </Router>

    
  );
}

export default App;

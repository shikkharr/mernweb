//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Route, Routes} from 'react-router';
import Login from './components/Login';
import Register from './components/Register';
import Bookings from './components/Bookings';
import Booknow from './components/Booknow';

function App() {
  return (
   <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/service" element={<Services/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/bookings" element={<Bookings/>} />
        <Route exact path="/booknow" element={<Booknow/>} />
      </Routes>

      <Footer/>
   </>
  );
}

export default App;

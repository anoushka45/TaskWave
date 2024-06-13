import React from 'react';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Register from './components/register/Register'; // Import the Register component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/register/SignIn';
import Todo from './components/todo/Todo';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='/todo' element={<Todo/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;

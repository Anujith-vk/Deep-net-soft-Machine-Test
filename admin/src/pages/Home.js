import React from 'react';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import Homebody from '../Components/Home/Homebody';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Homebody/>
      <Footer/>
    </div>
  );
}

export default Home;

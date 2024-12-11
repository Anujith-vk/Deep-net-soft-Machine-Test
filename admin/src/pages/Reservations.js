import React from 'react';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import Reservationbody from '../Components/Reservation/Reservationbody';

const Reservations = () => {
  return (
    <div>
      <Navbar/>
      <Reservationbody/>
      <Footer/>
    </div>
  );
}

export default Reservations;

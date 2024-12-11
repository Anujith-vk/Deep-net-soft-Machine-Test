import React, { useEffect, useState } from 'react';
import './Reservationbody.css'
import axios from 'axios'
import {toast,ToastContainer} from 'react-toastify'
const Reservationbody = () => {
  const[reservations,setreservations]=useState([])
  const fetchreservation= async()=>{
    try {
      const response = await axios.get('https://deep-net-soft-machine-test.onrender.com/reservations/display')
      if(response)
      {
        setreservations(response.data.reservation)
      }
    } catch (error) {
      console.log(error); 
    }
  }
  const HandleCancel=async(id)=>{
   try {
    const response=await axios.delete(`https://deep-net-soft-machine-test.onrender.com/reservation/cancel/${id}`)
    if(response)
    {
      setreservations(reservations.filter((item)=>item._id!==id))
      toast.success(response.data.message,{autoClose:800})
    }
   } catch (error) {
    console.log(error);
    
   }
  }
  useEffect(() => {
   fetchreservation()
  }, [])
  return (
    <div className='resarvationmain'>
      {reservations && reservations.length>0 ? reservations.map((item,index)=>(
      <div className="reservationcard" key={index}>
        <p>Name: {item.name}</p>
        <p>Email: {item.email}</p>
        <p>Mobile Number: {item.number}</p>
        <p>Date and Time: {item.date}</p>
        <button onClick={()=>HandleCancel(item._id)}>Cancel</button>
      </div>
      )) : <p style={{color:'white',textAlign:'center'}}>No Reservations</p>}
      <ToastContainer/>
    </div>
  );
}

export default Reservationbody;

import React, { useState } from 'react';
import './Reservationbody.css'
import {toast,ToastContainer} from 'react-toastify'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Reservationbody = () => {
  const navigate=useNavigate()
  const[data,setdata]=useState({
    name:'',
    email:'',
    number:'',
    date:''
  })
  const HandleChange= (e)=>{
    const{name,value}=e.target;
    setdata((prev)=>({...prev,[name]:value}))
  }
  const HandleSubmit=async(e)=>{
    e.preventDefault()
    try {
      const{name,number,email,date}=data
      if(!name||!number||!email||!date)
      {
        toast.error("Plese Provide All The Feilds",{autoClose:800})
      }
      else{
        const response=await axios.post('http://localhost:4000/table/reservation',{name,email,number,date})
        if(response)
        {
          toast.success(response.data.message,{autoClose:800})
          setdata({
            name:'',
            number:'',
            email:'',
            date:''
          })
          setTimeout(() => {
            navigate('/home')
          },1500);
        }
      }
    } catch (error) {
      toast.error((error || error.response.data.message),{autoClose:800})
    }
  }
  return (
    <div className='reservationmain'>
      <div className="formdiv">
        <div className="reservehead"><h3>Enter Your Details</h3></div>
      <form onSubmit={HandleSubmit}>
        <input type="text" placeholder='Enter Your Name' name='name' value={data.name} onChange={HandleChange}/>
        <input type='number' placeholder='Enter Yor Mobile Number' name='number' value={data.number} onChange={HandleChange} />
        <input type='email' placeholder='Enter Your Email Id' name='email'value={data.email} onChange={HandleChange} />
        <label htmlFor="dateandtime">Enter Your Date and Time</label>
        <input className='date' type='datetime-local'name='date' id='dateandtime' value={data.date} onChange={HandleChange}/>
        <p>Note: If You are not reached by the booked time, arfer 30 minuter  your reservation will be cancelled</p>
        <button className='bookbutton'>Book</button>
        <ToastContainer/>
      </form>
      </div>
    </div>
  );
}

export default Reservationbody;

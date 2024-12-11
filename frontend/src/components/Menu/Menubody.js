import React, { useEffect, useState } from 'react';
import './Menubody.css'
import logo from '../../Assets/Logo.png'
import phone from '../../Assets/phone.png'
import email from '../../Assets/email.png'
import location from '../../Assets/location.png'
import facebook from '../../Assets/facebook.png'
import twitter from '../../Assets/twitter.png'
import instagram from '../../Assets/instagram.png'
import youtube from '../../Assets/youtube.png'
import axios from 'axios'
import {toast,ToastContainer} from 'react-toastify'
import firstimage from '../../Assets/Firstimg.png'
import secondimage from '../../Assets/secondimg.png'
import thirdimage from '../../Assets/thirdimg.png'
const Menubody = () => {
const[products,setproducts]=useState([])
const[category,setcategory]=useState([])
const[filter,setfilter]=useState('')


const fetchdata=async function () {
  try {
    const response=await axios.get('https://deep-net-soft-machine-test.onrender.com/products')
    if(response)
    {
      const uniqueCategories = new Set(category);
      response.data.products.forEach((item) => {
        uniqueCategories.add(item.category);
      });

      setcategory([...uniqueCategories]);
      setproducts(response.data.products);
    }
  } catch (error) {
    toast.error(error,{autoClose:800})
  }
}
const Handlefilter=(category)=>{
setfilter(category)
}
const filtered= filter 
  ? products.filter((item)=>(item.category === filter))
  : products
useEffect(() => {
 fetchdata()
}, [])
  return (  
    <div>
    <div className='menumain' style={{background:`url(${firstimage}) no-repeat center`,backgroundSize:'cover'}}>
        <h2>MENU</h2>
        <p className='menudesc'>Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</p>
    </div>
    <div className="menusecond" style={{background:`url(${secondimage})no-repeat center`,backgroundSize:'cover'}}>
    {category && category.length>0 ? category.map((item,index)=>(
        <button className='menubutton' key={index} onClick={()=>{Handlefilter(item)}}>{item}</button>
      )):<p>No Products</p>}
    </div>
    <div className="menuthird" style={{background:`url(${thirdimage}) no-repeat center`,backgroundSize:'cover'}}>
     <div className="menuthirdcontent">
     <div className="thirdtop"><hr className='horizontalline'/><h3>{filter ? filter :"OUR SPECIALS"}</h3><hr className='horizontalline'/></div>
     <div className="thirdlast">
      {filtered && filtered.map((item,index)=>(
     <div className="thirdcard" key={index}>
           <h4>{item.name}..........................${item.price}</h4> 
           <p>{item.description}</p>
        </div> 
        ))} 
     </div>
     </div>
    </div>
    <div className="menufourth">
      <div className="detailcard">
      <h5 >CONNECT WITH US</h5>
      <div className="imagecontent">
        <img src={phone} alt="phone" />
        <p>+91 9567843340</p>
      </div>
      <div className="imagecontent">
        <img src={email} alt="email" />
        <p>info@deepnetsoft.com</p>
      </div>
      </div>
      <div className="detailcard1">
        <div className="detailcard2first">
          <img className='logo2' src={logo} alt="logo" />
        </div>
        <div className="detailcard2second">
          <p style={{color:'#0796EF'}}>DEEP</p>
          <p style={{color:'white'}}>NET</p>
          <p style={{color:'#857878'}}>SOFT</p>
        </div>
        <div className="detailcard2last">
          <img src={facebook} alt="fb" />
          <img src={twitter} alt="tw" />
          <img src={youtube} alt="youtube" />
          <img src={instagram} alt="insta" />
        </div>
      </div>
      <div className="detailcard2">
      <h5 >FIND US</h5>
      <div className="imagecontent">
        <img  src={location} alt="location"style={{height:'25px'}} />
        <div className="addrcontainer">
        <p>First floor, Geo infopark, infopark EXPY, Kakkanad</p>
        </div>
      </div>
      </div>
    </div>
    <ToastContainer/>
    </div>
   
  );
}

export default Menubody;

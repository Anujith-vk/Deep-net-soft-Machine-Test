import React, { useState } from 'react';
import './Addbody.css'
import {toast,ToastContainer} from 'react-toastify'
import axios from 'axios'
const Addbody = () => {
  const[data,setdata]=useState({
    category:'',
    name:'',
    description:'',
    price:''
  })
  const Handledata=(e)=>{
    const{name,value}=e.target;
    setdata((prev)=>({...prev,[name]:value}))
  }
  const HandleSubmit=async (e)=>{
    e.preventDefault();
    try {
      const{category,name,description,price}=data
      if(!category||!name||!description||!price)
      {
        toast.error("Please Provide All the Feilds",{autoClose:800})
      }
      else{
        const response= await axios.post('http://localhost:4000/addproduct',{category,name,description,price})
        if(response)
        {
          toast.success(response.data.message,{autoClose:800})
          setdata({
            category: '',
            name: '',
            description: '',
            price: ''
          });
        }
      }
    } catch (error) {
       toast.error((error || error.response.data.message),{autoClose:800})
    }
  }
  return (
    <div className='addbodymain'>
      <div className="addtop">
        <h2>Enter The Details of Products</h2>
      </div>
      <form onSubmit={HandleSubmit}>
        <div className="formset">
            <label htmlFor="cat">Enter Product Category( in BLOCK letter)</label>
            <input type="text"placeholder='Enter The Product Category  eg. DRINKS, FOOD, BRUNCH ' id='cat' name='category' value={data.category}  onChange={Handledata}/>
        </div>
        <div className="formset">
            <label htmlFor="prod">Enter Product Name</label>
            <input type="text"placeholder='Enter The Product Name' id='prod' name='name' value={data.name}  onChange={Handledata} />
        </div>
        <div className="formset">
            <label htmlFor="desc">Enter Product Description</label>
            <textarea  type="text"placeholder='Enter The Product Description' id='desc' name='description' value={data.description}  onChange={Handledata}/>
        </div>

        <div className="formset">
            <label htmlFor="pr">Enter Product Price</label>
            <input type="text"placeholder='Enter The Product Price' id='pr' name='price' value={data.price}  onChange={Handledata} />
        </div>
        <button className='Addbutton'>ADD</button>
        <ToastContainer/>
      </form>
    </div>
  );
}

export default Addbody;

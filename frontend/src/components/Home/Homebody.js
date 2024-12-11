import React from 'react'
import './Homebody.css'
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import bg1 from '../../Assets/b6.jpg'
function Homebody() {
  const navigate=useNavigate()
  const Handlemenu=()=>{
    navigate('/menu')
  }
  return (
    <div className='homemain' style={{background:`url(${bg1})`}}>
      <div className="homecontent">
        <div className="homehead">
          <h2>DEEP NET SOFT</h2>
          <p>Welcome to Deep Net Soft, where every meal is a masterpiece of flavor and passion. Indulge in a wide variety of dishes, from savory delights to sweet indulgences, crafted to tantalize your taste buds and leave you craving more. Whether you’re seeking classic favorites or unique culinary creations, our menu offers something for everyone, paired with an inviting ambiance that makes every visit special. Explore our menu to discover the magic of culinary artistry!</p>
          <button className='rebutton' onClick={Handlemenu}>Go To Menu <FaArrowRight/></button>
        </div>
      </div>
    </div>
  )
}

export default Homebody

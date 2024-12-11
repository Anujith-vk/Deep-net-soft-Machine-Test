import React from 'react'
import './Homebody.css'
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import homebg from '../../Assets/b6.jpg'
function Homebody() {
  const navigate=useNavigate()
  const Handleadd=()=>{
    navigate('/add')
  }
  return (
    <div className='homemain'style={{background:`url(${homebg})`}}>
      <div className="homecontent">
        <div className="homehead">
          <h2>DEEP NET SOFT</h2>
          <p>Hi Admin, Elevate Deep Net Soft to new heights by introducing fresh and exclusive items to the menu! Adding unique dishes that can’t be found anywhere else will set us apart, keep our guests excited, and create an unforgettable dining experience. Whether it’s a fusion twist, a seasonal special, or a signature dish, every new addition enhances our reputation as a culinary innovator. Your creativity has the power to wow diners and make Deep Net Soft the ultimate destination for food lovers. Let’s keep the magic alive and continue to surprise and delight our guests!</p>
          <button className='homebut' onClick={Handleadd}>ADD ITEM <FaArrowRight/></button>
        </div>
      </div>
    </div>
  )
}

export default Homebody

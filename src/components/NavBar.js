import React from 'react'
import {FaApple} from "react-icons/fa"
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='header'>
    <FaApple className= 'icons'/>
    <h2>Ramiza Phones And Accessories</h2>
    <ul>
    <li> <Link to ="/">Home</Link></li>
    <li><Link to ="/about">About us</Link></li>
    <li><Link to ="/products">Products</Link></li>
    <li><Link to ="/contact">Contact us</Link></li>
    
    </ul>

    </div>
  )
}

export default NavBar
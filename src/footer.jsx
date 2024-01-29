import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import './style.css'

function Footer() {
  return (
    <div className='footer'>
         <h2>
                <strong>Data</strong>it
            </h2>
        <div className='social-icons'>
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        </div>
    </div>
  )
}

export default Footer
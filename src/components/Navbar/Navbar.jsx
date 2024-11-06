import React, { useRef, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

const Navbar = () => {
  const navRef=useRef();
  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
      if (window.scrollY>=80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
      
    })
  },[])
  return (
    <div ref={navRef} className='navbar'>
    <div className="navbar-left">
      <img src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>Experience</li>
        <li>Education</li>
        <li>Projects</li>
        <li>Leadership</li>
        <li>Contact Me</li>
      </ul>
    </div>
    <div className="navbar-right">
      <img src={search_icon} alt="" className='icons' />
      <img src={bell_icon} alt="" className='icons' />
      <div className="navbar-profile">
      <img src={profile_img} alt="" className='profile' />

      </div>
    </div>
      
    </div>
  )
}

export default Navbar

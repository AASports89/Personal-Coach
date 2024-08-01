import React, {useEffect} from 'react';
import '../App.css';
import logo from '../logo.svg';
import Aos from 'aos';

import './login/Login.css';

export default function Navbar() {
    
    useEffect(() => {
		Aos.init({duration:3000});
	}, [])

    return (
		<div className="col-12">
      <header id='header' className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='img-card-overlay' id="logo-over">
        <img id='logo' src={logo} className="card-img" alt="logo"  data-aos="slide-right"/>
        </div>
        <div className="col-10">
        <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
          <a id='home' data-aos="flip-right" className="accordion nav-link active" href='/'>
            <i id='home-icon' className="fa-solid fa-house"></i> 
            Home
          </a>   
          <a id='menu' data-aos="flip-left" className="accordion nav-link active" href="/vault">
            <i id="vault-icon"  className="fa-regular fa-life-ring"></i>
            Vault
          </a>
          <a id='custom' data-aos="flip-right" className="accordion nav-link active" href="/resources">
            <i id='custom-icon' className="fa-brands fa-sourcetree"></i>
            Resources
          </a>
          <a id='vault' data-aos="flip-left" className="accordion nav-link active" href="/testimonials">
            <i id='menu-icon' className="fa-regular fa-comment-dots"></i>
            Testimonials
          </a>
          <a id='custom' data-aos="flip-right" className="accordion nav-link active" data-toggle="modal" data-target="#exampleModal">
                    <i id='home-icon' className="fa-solid fa-user"></i>
                    Log In
          </a>
          <a id='custom' data-aos="flip-left" className="accordion nav-link active" href={'/signup'}>
                    <i id='home-icon' className="fa-solid fa-user-plus"></i>
                    Sign Up
          </a>
          </nav>
          </div>
        </header>
      </div>
    )};
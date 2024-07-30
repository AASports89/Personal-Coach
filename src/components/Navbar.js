import React, {useEffect} from 'react';
import '../App.css';
import logo from '../logo.svg';
import Aos from 'aos';

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
          <a id='home' data-aos="flip-right" className="nav-link active" href='./Home.js'>
            <i id='home-icon' className="fa-solid fa-house"></i> 
            Home
          </a>   
          <a id='menu' data-aos="flip-down" className="nav-link active" href="./vault.js">
            <i id='menu-icon' className="fa-regular fa-life-ring"></i>
            Vault
          </a>
          <a id='custom' data-aos="flip-left" className="nav-link active" href="./resources.js">
            <i id='custom-icon' className="fa-brands fa-sourcetree"></i>
            Resources
          </a>
          <a id='vault' data-aos="flip-left" className="nav-link active" href="./testimonials.js">
            <i id="vault-icon" className="fa-regular fa-comment-dots"></i>
            Testimonials
          </a>
          </nav>
          </div>
        </header>
      </div>
    )};
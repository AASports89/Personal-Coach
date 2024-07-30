import Navbar from './components/Navbar';
import favicon from './logo.svg';
import './App.css';
import Aos from 'aos';

function App() {

  Aos.init({duration:3000});
  const year = new Date().getFullYear();
  
  return(
    <div className="container-fluid">
      <Navbar />
  <div id='embed-1' class="row">
  <div id="embed-2" className='col-3 justify-content-center'>
    </div>
    <div class="embed-responsive embed-responsive-16by9 col-6">
        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/L-iepu3EtyE?si=KzkBlzIp30dPPNbV" allowfullscreen title='Aerials - System Of A Down'></iframe>
    </div>
    <div id="embed-2" className='col-3 justify-content-center'>
      </div>
    </div>
    <div id='embed' class="row">
    <div class="embed-responsive embed-responsive-16by9 col-6">
        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/_CL6n0FJZpk?si=9tDWj735vike9qRE" allowfullscreen title='Seven Nation Army - The White Stripes'></iframe>
      </div>
      <div class="embed-responsive embed-responsive-16by9 col-6">
        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/0J2QdDbelmY?si=uwNmafy2-t9dKs07" allowfullscreen title='Still D.R.E - Dr. Dre ft. Snoop Dogg'></iframe>
      </div>
  </div>


<div class="fixed-bottom">
<footer id='footer' className="navbar navbar-expand-lg navbar-light bg-light">
    <div className='mx-auto'>
    <img id="royal-icon" className='img-card-overlay' src={favicon} alt="Royal Pastry"></img>
    <p className="mx-auto" data-aos="flip-down" id="footer-title"><b id="footer-bold">© Personal Coach - {year}. All Rights Reserved.</b></p>
    <a id="icon-link" className="col px-5" href="https://www.facebook.com">
      <i data-aos="slide-right" id="twitter" className="fa-brands fa-facebook"></i>
    </a> 
    <a id="icon-link" className="col px-5" href="https://www.instagram.com">
      <i data-aos="slide-" id="insta" className="fa-brands fa-instagram"></i>
    </a> 
    <a id="icon-link" className="col px-5" href="https://www.youtube.com">
      <i data-aos="slide-left" id="yelp" className="fa-brands fa-youtube"></i>
    </a> 
    </div>
      </footer>
</div>

</div>
);
}

export default App;

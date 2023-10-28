import React from 'react'
import './App.css';
function Footer(){
  return(
    <footer>
      <div className='footerDiv'>
        <div className='footerLeft'>
          <p>Explore Your Web Development Journery With US</p>
          <a type="button" className="btn btn-primary" href='https://calendly.com/fugohost/30min' target={'_blank'}>Free Consultation</a>
        </div>
        <div className='footerRight'></div>
      </div>
    </footer>
  )
}

export default Footer;
import React from 'react'
function Footer(){
  return(
    <footer>
      <div className='footerDiv'>
        <div className='footerLeft'>
          <p>Explore Your Web Development Journery With US</p>
          <a type="button" className="btn btn-outline-primary bookBtn" href='https://calendly.com/fugohost/30min' target={'_blank'} rel="noreferrer">Free Consultation</a>
        </div>
        <div className='footerRight'></div>
      </div>
    </footer>
  )
}

export default Footer;
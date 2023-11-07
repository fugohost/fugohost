import React from 'react'
function Footer(){
  return(
    <footer>
      <div className='row footerDiv'>
        <div className='col-12 col-md-6 footerLeft'>
          <p>Explore Your Web Development Journery With US</p>
          <a type="button" className="btn btn-outline-primary bookBtn" href='https://calendly.com/fugohost/30min' target={'_blank'} rel="noreferrer">Free Consultation</a>
        </div>
        <div className='d-none d-md-block col-md-6 footerRight'></div>
      </div>
    </footer>
  )
}

export default Footer;
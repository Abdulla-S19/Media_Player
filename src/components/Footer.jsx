import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div style={{height:'300px'}}  className='container w-100 mt-5'>
      <div className='d-flex justify-content-between '>
          {/* Intro */}

          <div style={{width:'400px'}}>

            <h5><i class="fa-solid fa-music me-3"></i>
            Music Player</h5>
            <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.
            </p>
            <p>Code licensed MIT, docs CC BY 3.0.</p>
            <p>Currently v5.3.3.</p>

          </div>

          {/* Links */}
          <div className='d-flex flex-column'>
            <h5>Links</h5>
            <Link to={'/'} style={{textDecoration:'none' ,color:'white'}}>Landind page</Link>
            <Link to={'/home'} style={{textDecoration:'none' ,color:'white'}}>Home page</Link>
            <Link to={'/history'} style={{textDecoration:'none' ,color:'white'}}>Watch History Page</Link>
          </div>


          {/* Guides */}

          <div className='d-flex flex-column'>
            <h5>Guides</h5>  
            <a style={{textDecoration:'none' , color:'white'}} href="https://react.dev/">React</a>
            <a style={{textDecoration:'none' , color:'white'}} href="https://react-bootstrap.netlify.app/">React Bootstrap</a>
            <a style={{textDecoration:'none' , color:'white'}} href="https://bootswatch.com/">React Bootswatch</a>
          </div>


          {/* Contact */}

          <div className='d-flex flex-column ms-5'>
            <h5>Contacts</h5>
            <div className='d-flex me-3'>
              <input type="text" placeholder='Enter your EMAIL here...' className='form-control me-2'/>
              <button className='btn btn-control bg-info'><i class="fa-solid fa-arrow-right"></i></button>
            </div>

            <div className='d-flex justify-content-between mt-3'>
              <a style={{textDecoration:'none' , color:'white'}} href=""><i class="fa-brands fa-twitter"></i></a>
              <a style={{textDecoration:'none' , color:'white'}} href=""><i class="fa-brands fa-instagram"></i></a>
              <a style={{textDecoration:'none' , color:'white'}} href=""><i class="fa-brands fa-facebook"></i></a>
              <a style={{textDecoration:'none' , color:'white'}} href=""><i class="fa-brands fa-linkedin"></i></a>
              <a style={{textDecoration:'none' , color:'white'}} href=""><i class="fa-brands fa-github"></i></a>
              <a style={{textDecoration:'none' , color:'white'}} href=""><i class="fa-solid fa-phone"></i></a>
            </div>

          </div>

      </div>
    </div>
  )
}

export default Footer
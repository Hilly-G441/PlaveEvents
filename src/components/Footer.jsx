import React from 'react'
import image from '../in.avif'
import picture from '../fb.avif'
import photo from '../x.avif'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <div className='row' id='footer'>
        <div className='col-md-4'>
          <b><h3 id='heading3'>QUICK LINKS</h3></b>
           <Link href=''to="/signup" className='text-dark nav-link' id='links'>Signup</Link><br />
           <Link to="/signin" className='text-dark nav-link' id='links'>Signin</Link><br />
           <Link to="/getevent" className='text-dark nav-link' id='links'>Explore Event</Link><br />
           <Link to="/addevent" className='text-dark nav-link' id='links'>Create Event</Link><br />
           <Link to="/aboutus" className='text-dark nav-link' id='links'>About Us</Link><br />

        </div>
        <div className='col-md-4'>
         <b><h3 id='heading3'>STAY IN TOUCH WITH US</h3></b>
         <a href="https://www.facebook.com">
            <img src={picture} alt="" width={50} height={50}/>
          </a>
          <br />
          <br />
          <a href="https://www.instagram.com">
            <img src={image} alt="" width={50} height={50}/>
          </a>
          <br />
          <br />
          <a href="https://www.x.com">
            <img src={photo} alt="" width={50} height={50}/>
          </a>
         
        </div>
        <div className='col-md-4'>

          <h3 id='heading3'>CONTACT US</h3>
          <form action="">
            <input type="text" placeholder='Enter your name' id='navlink'  className='text-dark form-control'/> <br />
            <input type="email" placeholder='📧 Enter your email'  id='navlink' className='text-dark form-control' /><br />
            <textarea cols={15} rows={7}  placeholder='Leave a comment'id='navlink'  className='text-dark form-control'></textarea><br />
             <input type="submit" value="Send Message" id='button' className="btn btn-primary text-dark"></input><br />
          </form><br />
        </div>
          <footer className=' text-light bg-dark p-2 text-center'>
            <h5>Developed by Hilly-G. &copy; 2026. All rights reserved.</h5>
        </footer>
      </div>
  )
}

export default Footer

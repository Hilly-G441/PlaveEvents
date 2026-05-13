import React from 'react'
import Footer from './Footer'

const Aboutus = () => {
  return (
    <div>
        <h2 id='heading3' >GET TO KNOW MORE ABOUT US.</h2>

        <div className='row justify-content-center'>
         <hr />
          <div className='col-md-4'>
            <div className='card shadow mt-2 p-4  card' >
            <h3 id='heading2'>Who we are.</h3>
            <p  id='para3' className='text-dark '>
              Plave events reduces the work of booking and the going to the specific organizers to plan your event.
              We enable you to connect and contact us if you require some of our services.
              You can get us through various social media platforms.
            </p>
            
            <p className='text-warning'>📞 Contact: +254116965679</p>
            <p className='text-warning'>📧 Email: plaveevents@gmail.com</p>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='card shadow mt-2 p-4  card' >
              <h3 id='heading2'>What we offer.</h3>
              <p id='para3' className='text-dark'>
              Plave events books various events ranging from official events i.e 
              seminars, office meetings to friendly parties i.e birthday parties.
              Once you are logged in, you can be able to book for any event and you will be informed 
              immediately about what will happen hence forth.
              Once you book for an event you can be able to pay for it using the Mpesa App.

            </p>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='card shadow mt-2 p-4  card'>
              <h3 id='heading2'>Our Mission.</h3>
              <p id='para3' className='text-dark'>
                We reduce the work load of planning your events by connecting you to the
                 actual planners and organizers. This also saves your budget  since you do not 
                 have to go to the specific organizers.
                To be able to ensure that you're event is fuly booked you will recieve an email 
                showing the overview of what has been done and when they can be able to plan your
                 event.
              </p>

            </div>
          </div>

        </div>
        <hr />
        <br />
      <Footer/>
    </div>
  )
}

export default Aboutus

import React from 'react'
import slide3 from '../images/caurosel.jpg'
import slide2 from '../images/case.jpg'
import slide1 from '../images/cover1.jpg'
const Caurosel = () => {
  return (
    <div>
      {/* setting the carousel */}
       <section className="row">
      <div className="col-md-12">
        {/* carousel starts here */}
        <div className="carousel slide" id="mycarousel" data-bs-ride="carousel">
          {/* image wrapper */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slide1} alt="slide1" className="d-block w-100 carousel-img" id='caurosel'/>
            </div>
            <div className="carousel-item" >
              <img src={slide2} alt="slide2" className="d-block w-100 carousel-img" id='caurosel'/>
            </div>
            <div className="carousel-item" >
              <img src={slide3} alt="slide3" className="d-block w-100 carousel-img" id='caurosel'/>
            </div>

          </div>

          {/* controls */}
          <div>
            <a href="#mycarousel" className="carousel-control-prev" data-bs-slide="prev">
              <span className="carousel-control-prev-icon bg-danger"></span>
            </a>

            <a href="#mycarousel" className="carousel-control-next"data-bs-slide="next">
              <span className="carousel-control-next-icon bg-danger"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Caurosel;

import React from 'react';
import './Banner.css';

const Banner = () => {
    
  return (
        <div>
         <div class="container">
  <div class="row">
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
      <h1 className='mt-3'>Save Your Time with our <span className='text-secondary fw-bold'>Audi A3</span></h1>
      <p>People spend so much time in their cars, and it's a legal way to have fun by speeding a little bit or testing yourself a little bit, and you get to invest in your car. For some people, it becomes their baby.</p>
      <button className='btn btn-secondary me-3'>Book Now</button>
      <button className='btn btn-secondary'>Learn More</button>
    </div>
    <div class="col-12 col-sm-12 col-md-6 col-lg-6">
     <img src='https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/banner_car.png' className='img-fluid banner-image'></img>
    </div>
  </div>
</div>
         </div>  
    )}     


export default Banner;
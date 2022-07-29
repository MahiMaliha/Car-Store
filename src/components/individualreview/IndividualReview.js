import React from 'react';
import './IndividualReview.css';
const IndividualReview = (props) => {
    const {name,Review,img,Rating} = props.review;
    return (
        <div>
           <div class="col">
    <div class="card h-100 w-100 card-bg p-2">
      <img src={img} class="card-img-top img-fluid w-50 mx-auto image-review" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title text-center fw-bold text-secondary ">{name}</h5>
         <p className='text-center'>{Review}</p>
        <h4 class="card-text fw-bold text-center text-secondary"><i class="fa-solid fa-star text-dark "></i> {Rating}</h4>
      
      </div>
      
  </div>
</div>
        </div>
    );
};

export default IndividualReview;
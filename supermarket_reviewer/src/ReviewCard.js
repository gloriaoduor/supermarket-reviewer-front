import React from 'react';

function ReviewCard() {
  return (
    <div className="card" key=
    // get the id of the supermrket
    // {supermarket.id}
    {1}>
    <img
      className="card-image"
      // src
      alt= 'spmkt-logo'
    />
    <div className="card-content">
      <h3 className="card-title">
        Title from API 
        {/* {supermarket.name} */}
      </h3> 
     
      <p className="card-desc">
        Comments
        {/* {reviews.comment} */}
        </p>
    </div>
  </div>
  );
}

export default ReviewCard;
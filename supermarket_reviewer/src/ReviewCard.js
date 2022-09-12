import React from 'react';

function ReviewCard({review}) {
  return (
    <div className="card" key={review.id}>
      <div className="card-content">
        <ul className="">
          <li> Comment:  {review["comment"]}<br></br>
          By: {review["shopper"].name} </li>
       
        </ul>
       
      </div>
    </div>
  );
}

export default ReviewCard;
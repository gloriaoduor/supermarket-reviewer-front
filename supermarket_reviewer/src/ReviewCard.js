import React from 'react';

function ReviewCard({review}) {
  return (
    <div className="card" key={review.id}>
      <div className="card-content">
        <ol
        className="">Comment:  {review["comment"]}<br></br>
        By:  {review["shopper"].name}
        </ol>
       
      </div>
    </div>
  );
}

export default ReviewCard;
import './App.css';
import {useState} from 'react';

function CreateReview() {
    const handleReviewChange = e => {
        setReviewComment(e.target.value);
    };
    const handleNameChange = e => {
        setShopperName(e.target.value);
    };
    function clearForm(){
        setReviewComment("");
        setShopperName("");
        alert("Review added"); 
    }
    const [reviewComment, setReviewComment] = useState("");
    const [shopperName, setShopperName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/newreview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: reviewComment,
        name: shopperName, 
      }),
    })
      .then((r) => r.json());
  }

  return (
    <div >
        <form onSubmit= {handleSubmit}>
            <input placeholder='name' type='text' value={shopperName} onChange = {handleNameChange}></input>
            <input placeholder='comment' type='text' value={reviewComment} onChange = {handleReviewChange}></input>
            <button onClick={clearForm}>Add Review</button>
        </form>
    </div>
  );
}

export default CreateReview;

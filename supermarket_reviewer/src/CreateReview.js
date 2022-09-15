import './App.css';
import {useState} from 'react';

function CreateReview() {
  //display form when add link is clicked 
  const [showForm, setFormStatus] = useState(false)
  const viewData = () => {setFormStatus(true)};

  const [reviewComment, setReviewComment] = useState("");
  const [shopperName, setShopperName] = useState("");
  const [smId, setSmId] = useState("");

  const handleReviewChange = e => {
    setReviewComment(e.target.value);
  };
  const handleNameChange = e => {
    setShopperName(e.target.value);
  };
  
  //clear form on delete
  function clearForm(){
    alert("Are you sure you want to delete?");
    setReviewComment("");
    setShopperName("");
  }
  //clear form after adding review
  function clear(){
    setReviewComment("");
    setShopperName("");
    alert("Review added")
  }
  //get id of selected supermarket
  const onChangeHandler = (e) => {
    const index = e.target.selectedIndex;
    const el = e.target.childNodes[index]
    var option =  el.getAttribute('id'); 
    setSmId(option);
    console.log(smId)
  }
  
  //fxn to post the new review 
  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://sm-reviewer-api.herokuapp.com/newreview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: reviewComment,
        name: shopperName, 
        supermarket_id: smId
      }),
    })
      .then((r) => r.json());
  }

  return (
    <div >
      <a href="#add" onClick={viewData} >Add Review Instead?</a>
      
      {showForm &&(
        <form onSubmit= {handleSubmit} >
          <select id="select" className="pa3 bb br3 grow b--none bg-lightest-blue ma2" 
          onChange={onChangeHandler}>
          <option value="select">Select</option>
            <option id="2" value="Naivas">Naivas</option>
            <option id="3" value="Tuskys">Tuskys</option>
            <option id="1"value="Carrefour">Carrefour</option>
            <option id="6" value="Quickmart">Quickmart</option>
          </select>
          
            <input className="pa3 bb br3 grow b--none bg-lightest-blue ma3" placeholder='name' type='text' value={shopperName} onChange = {handleNameChange}></input>
            <input className="pa3 bb br3 grow b--none bg-lightest-blue ma3" placeholder='comment' type='text' value={reviewComment} onChange = {handleReviewChange}></input>
            <button className="no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa2" onClick={clear}>Add</button>
            <button className='no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa2 delete' onClick={clearForm}>Delete</button>
        </form>)}

    </div>
  );
}

export default CreateReview;

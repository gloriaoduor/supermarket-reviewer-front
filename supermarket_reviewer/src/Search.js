import React from 'react'
import { useState } from 'react'
import ReviewCard from './ReviewCard'

const Search = () => {

  const [searchField, setSearchField] = useState("");
  const [reviewValue, setReview] = useState([]);
  

//search text field to handle data being input 
  const handleChange = e => {
    setSearchField(e.target.value);
  };

  const SearchReview = async (e) => {
    e.preventDefault();
    console.log('submitting');

    const url = `http://localhost:9292/${searchField}`

    try{
      const res = await fetch(url);
      const data = await res.json();
      setReview(data.reviews);
      console.log(reviewValue);
    } catch (err){
      console.log(err);
    }
};



  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Super Reviews:</h2>
      </div>
      <form onSubmit={SearchReview}>
      <div className="pa2">
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Search..." 
          value = {searchField}
          onChange = {handleChange}
        />
         <button className="no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa2">
          Search
        </button>
      </div>
     
      </form>

      <div className="card-list">
        {reviewValue.map(review =>(
          <ReviewCard review={review}/>
        ))}
      </div>
     
      
    </section>
    
  );
}

export default Search
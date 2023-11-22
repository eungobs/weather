import React, {useState} from "react";

export default function Search(props) {
let [city,setCity] =useState ("");
let [message,setMessage]=useState ("");

  function handlesubmit(event) {
    event.preventDefault()
    setMessage (`it is currently 25 degree in  ${city}`);
    
  
  }
  function updatecity(event) {

    setCity (event.target.value)
    

    
  }
  return (
    <div>
    <form  onSubmit= {handlesubmit}>
      <input type="search" placeholder="type city...." onChange={updatecity} />
      <input type="submit" value="search" />
      </form>
     <h2>{message}</h2>
      </div>
  );
}
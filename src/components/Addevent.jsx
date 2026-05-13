import axios from 'axios';
import React , { useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Addevent = () => {
    // declaring state variables
    const[product_name,setProductName] = useState("");
    const[product_description,setProductDescription] = useState("");
    const[product_cost,setProductCost] = useState("");
    const[product_photo,setProductPhoto] = useState("");

    // status messages
    const[loading,setLoading] = useState("")
    const[error,setError] = useState("")
    const[success,setSuccess] = useState ("")
  
    // function to add product
    const handleSubmit = async (e)=>{
    e.preventDefault();
    setLoading("Please wait...");
    try {
    // Retrieve product details
    const formData = new FormData();
    formData.append("product_name",product_name)
    formData.append("product_description",product_description)
    formData.append("product_cost",product_cost)
    formData.append("product_photo",product_photo)

   // posting data to base url (API)
   const response = await axios.post("https://hildaoryx.alwaysdata.net/api/add_product",formData)

   setLoading("")
   setSuccess(response.data.success)
  } catch (error) {
    setError(error.message)
  }

}

  return (
    <div id='product1'>
    <div className='row justify-content-center'>
      
      <br /><br />

      <nav>
        <Link to="/" className=' text-dark btn btn-primary' id='button'>EXPLORE EVENTS</Link>
      </nav>
      <br />
      <br />

      {error}
      {success}
      {loading}
      <div className='col-md-6 card shadow p-4 m-2 ' id='product'>

        <h1 id='heading3'>Create event</h1>

        <form action="" onSubmit={handleSubmit}>
         <input 
         type="text" 
         placeholder='Event name' 
         id='navlink'
         className='form-control text-dark'
         value={product_name}
         onChange={(e) => setProductName(e.target.value)}
         required 
         />
         <br/>

         <textarea 
         name="" 
         placeholder='Event Description' 
         id='navlink'
         className='form-control text-dark'
         value={product_description}
         onChange={(e) => setProductDescription(e.target.value)}
         required
         ></textarea>
         <br/>

         <input 
         type="number" 
         placeholder='Event Cost'
         value={product_cost}
         id='navlink'
         className='form-control text-dark'
         onChange={(e) => setProductCost(e.target.value)}
         required
         />
         <br/>

         <input 
         type="file" 
         className='form-control text-dark' 
         accept='image/*'
         onChange ={(e) => setProductPhoto(e.target.files[0])}
         required
         /> 
         <br/>

         <input 
         type="submit" 
         value="Add Event" 
         id='button'
         className='form-control text-dark btn btn-primary w-50'/>
          
        </form>
      </div>
    </div>
    <br />
    <Footer/>
    </div>
  )
}

export default Addevent

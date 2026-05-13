import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Caurosel from './Caurosel'

const Getevent = () => {
  // declairing state variables
  const[products,setProducts] = useState([])
  const[loading,setLoading] = useState ("")
  const[error,setError] = useState ("")
// navigation
const navigate = useNavigate()

// search term 
const [searchTerm,setSearchTerm] = useState("")

// filter
const filteredProducts = products.filter((product)=> product.product_name.toLowerCase().includes(searchTerm.toLowerCase()))

// sort by price
const [sortOrder, setSortOrder] = useState("");

const sortedProducts = [...filteredProducts].sort((a, b) => {
  if (sortOrder === "low") return a.product_cost - b.product_cost;
  if (sortOrder === "high") return b.product_cost - a.product_cost;
  return 0;
});


// image url
const img_url = "https://hildaoryx.alwaysdata.net/static/images/"

// function to retrieve products
const getProducts = async()=>{
  setLoading("Please wait as we retrieve products...")
  try {
    const response = await axios.get("https://hildaoryx.alwaysdata.net/api/get_product_details")
    setProducts(response.data)
    setLoading("")
  } catch (error) {
    setError(error.message)
  }
}

  // using useEffect to automatically retrieve products from database
  useEffect(()=>{
    getProducts()
  },[]);

  return (
    <div className='row'>
      <div className='row justify-content-center mb-5'>
        
      <div className='col-md-6'>
        <input type="text"
        id='navlink'
        className='form-control w-50 search-bar text-dark'
        placeholder='🔍 Search for an event..'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />
      </div>

      <div className='col-md-6'>
        <select onChange={(e) => setSortOrder(e.target.value)} id='navlink' 
        className="form-control w-50 sort">
         <option value="">Sort by</option>
          <option value="low" className='text-dark'>Price: Low to High</option>
          <option value="high" className='text-dark'>Price: High to Low</option>
        </select>
      </div>

    </div>
    
    <Caurosel/>
    <br />
    <br />
    <br />
    <hr />
      <h3 className='text-dark' id='heading3'>Available Events</h3>
        {loading}
        {error}
      {/* products card design */}
      <br /> <hr /><br />


      {sortedProducts.length > 0 ? (
        sortedProducts.map((product) => (
      <div  key={product.id} className='col-md-3 justify-content-center '>
        <div className='card shadow mt-2 p-4  card' >
          <img src={img_url + product.product_photo} alt={product.product_photo} className='product_img' />

          {/* product details */}
          <div className='card-body ' >
            <h5 className='mt-2' id='heading2'>{product.product_name}</h5>
            <p className='text-dark' id='text'>{product.product_description}</p>
            <b id='head3'>Ksh {product.product_cost}</b> <br/>

            <button className='btn btn-outline-primary mt-2 w-50 ' id='button'  onClick={()=>navigate("/makepayment",{state:{product}})}>Book now</button>
      
            <br />
          </div>
        </div>
        <hr />
      </div>
      
        ))
      ) : (
        <p>No Events found</p>
      )}  
    <Footer/>
    </div>
  )
}

export default Getevent


import '../css/ProductComponent.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'


function ProductComponent(  ) {

    const [product, SetProduct] = useState([])
    
    const {id} = useParams();

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>{
                SetProduct(json)
                 })

    },[])
  return (

    <> 
     
    
    <div className='product_container'>
     
         <div className='product_image'> 
          <img   src={product.image} ></img>
          </div>

        <div className="product_info">
              
          <div className="product_title">
          <h2>{product.title}</h2>
          </div>
          
          <div className="product_discription">
          <p>{product.description}</p>
          </div>
        
          <div className="price">
           <h2> Rs- {product.price}</h2>
          </div>

          <div className="button">
            <button>Buy Now</button>
          </div>

        </div>
      
         
     </div>
     </>
       

         

    

    
  )
}

export default ProductComponent;

import React from 'react'
import '../css/HomePage.css'
 import Navbar from './Navbar';
import { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom';
 import Cart from '../components/Cart'
import Carousel from './Carousel';
 

function HomePage( ) {

    const [products,setProducts]=useState([]);
    const [loader,setLoader] = useState(true);
    const [cart,setCart]= useState([])
    const [warning,setWarning]= useState(false)
    const [show ,setShow ]= useState(true)
  



    const handleClick= (item)=>{
        
        console.log(item)
         let isPresent = false;
         cart.forEach((product)=>{
            if(item.id === product.id)
                isPresent = true
         })
         if(isPresent){
            setWarning(true)
            setTimeout(() => {
                setWarning(false)
            }, 2000);
            return;
        }
           
        setCart([...cart,item]);
         
    }

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
         .then(responce => responce.json())
         .then(data =>{
              setLoader(false);
              setProducts(data);
              console.log(data);
         })
    },[])

  return (
    <div>
        <Navbar size={cart.length}  setShow = {setShow} />
        <div className="carousel div">
        <Carousel/>
        </div>
       


      

        {
            show ? console.log("heello"):  <div className="cart_div"><Cart cart={cart} setCart ={setCart}/></div> 
        }
       
 

        
        {
            warning && <div className="warning">Item already into the cart</div>
        }
        <div className="container">
            {
                loader ? ("Loading Data ....") :
                (products.map(item=>{
                    
                    return(
                        <>
                         <div className="card">
                        <div className="image">
                            <img  src={item.image} alt='image' ></img>
                        </div>
                        <div className="title">
                            <p>{item.title.slice(0,20)}...</p>
                        </div>
                        <div className="decription">
                            <p>{item.description.slice(0,20)}...  </p>
                        </div>
                        <div className="price">
                        <h3> Rs- {item.price}</h3>
                        </div>
                       
                       
                        <div className="buttons">
                            <div className="addto_cart">
                                <button onClick={()=>handleClick(item)}>Add to cart</button>
                            </div>
                            <NavLink to={`product/`+item.id} >
                            <button   >Buy Now</button>
                            </NavLink>
                        </div>
                    

                     </div>
                        </>
                    )
                }))
            }
        </div>

    </div>
  )
}

export default HomePage;
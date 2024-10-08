
import React from 'react'
import { useState } from 'react';
import '../css/Cart.css'

function Cart({cart,setCart}) {

    const [price,setPrice]= useState(0)
    
  return (
    <div>
        {
            cart.map((item)=>{
                return(
                    <>
                      <div className="cart_cotainer">
                        <div className="img_box">
                             <img src={item.image}></img>
                             <p>{item.title.slice(0,10)}</p>
                        </div>
                        <div className="cart_buttons">
                            <button>+</button>
                            <button>-</button>
                        </div>
                        <div className="item_price">
                             <span>RS-{item.price}</span>
                             <div className="remove_button">
                             <button>remove</button>
                             </div>
                             
                        </div>

                        <div className="total_price">
                        <span>{price}</span>
                      </div>

                      </div>
                      

                    </>
                )
                
              
            })
            

        }

    </div>
  )
}

export default Cart;
import React from 'react'

import "./Menu.css"

const Menu = (props) => {
    
   
    return (
        <div className='outer'>
            <div className='main'>
               {props.menu.map((item) => ( 
                <>
                   
                    <div className='menu'>
                        <div>
                        <li >{item.dish}</li>
                        <li className='bold'> {item.des}</li>
                        <li className='color'> {item.price}</li>
                        </div>
                        <div >    
                        <li  >Amount</li>
                        <li ><span >Quantity</span> <span>{item.quantity}</span></li>
                        {/* <input className='move' type="text"></input> */}
                        <button className='btn' onClick={() => {props.addToCart(item)}}
                        >+Add</button>

                    </div>

                       
                    </div>
                   
                </>
               ))}



            </div>
        </div>
    )
}

export default Menu
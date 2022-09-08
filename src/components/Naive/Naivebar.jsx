import React from 'react';
import './Naivebar.css'
import { useState } from 'react';
import Popup from '../popup/Popup';

// import { useSelector,useDispatch } from 'react-redux';
// import Menu from '../Menu/Menu';
// import { increment,decrement } from '../action/Action';
const Naivebar = (props) => {
  // const {quantity}=props;
  const Total = props.menu.map((item) => {
    return item.price * item.quantity

  })
  console.log(Total, "helllllll")
  const itemTotal = Total.reduce((item, amount) => {
    return item + amount
  })
  console.log(itemTotal)
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {

    setIsOpen(!isOpen);

  }

  console.log(props)
  let quantity = 0
  // const itemsPrice =quantity.reduce((menu, amount)=> menu + amount.quantity * amount.price, 0);
  props.menu.forEach((item) => {
    quantity += item.quantity
  })
  // const mystate=useSelector((state)=>state.reducer)
  // const dispatch=useDispatch();
  //   const onAdd()=>{
  //     quantity = quantity+1
  // }

  return (
    <div className='naive'>
      <h3>FoodMate</h3>
      <button className='btn' onClick={togglePopup} >
        <div >
          <span className='cart'> Cart </span>
          <span>{quantity}</span>
        </div>
      </button>
      {isOpen && <Popup

        content={<>
          <div className='bar' >

            {quantity === 0 && <div className='nothing'>Oops!Add Something</div>}
            <h4>Your Reciept</h4>
            <hr />
            {props.menu.map((item) => item.quantity > 0 ? (
              <div key={item.id}>
                <div className='PAPA'>
                  <div className="Demo_Wrapper">
                    <div className="">
                      {item.dish}</div>
                    <div className="">
                      <button className='add' onClick={() => { props.addToCart(item) }} >+</button>

                      <span className='gap'>{item.quantity}</span>

                      <button className='add' onClick={() => { props.addToCart(item, true) }} >-</button>
                    </div>
                  </div>

                  <div className='dish1'>{item.price}</div>



                  {/* <div>{itemsPrice}</div> */}
                </div>
                <hr />
              </div>


            ) : null)
            }

            <h4>Total price</h4>
            <span ><strong>{itemTotal}</strong></span>

          </div>
        </>}

        handleClose={togglePopup}

      />}


    </div>
  )
}

export default Naivebar
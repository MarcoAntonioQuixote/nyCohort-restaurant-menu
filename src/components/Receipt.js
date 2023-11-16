import React from 'react'
import Cart from './Cart';

function Receipt({setUserData, userData}) {
  return (
    <>
        <h4>Thank you {userData.name} for ordering {userData.order.length} items!</h4>
        <Cart userData={userData} order={userData.order}/>
    </>
  )
}

export default Receipt
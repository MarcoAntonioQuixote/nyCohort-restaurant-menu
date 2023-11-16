import React from 'react'
import Form from './Form'
import Receipt from './Receipt'

function Submission({setUserData, userData, order}) {
    return (
        // is userData.confirm is false, show the form, if it's true, then show the receipt.
        <>      
          { !userData.confirm ? <Form setUserData={setUserData} order={order} /> : <Receipt order={order} setUserData={setUserData} userData={userData} />}
        </>
    )
}

export default Submission
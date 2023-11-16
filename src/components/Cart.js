import React  from 'react'

function Cart({order, setConfirm, userData}) {


    const showOrderedItems = order?.map((item,i) => <li key={i}>{item.name}</li>)


    return (
        <div className='cart'>
            Your Cart:
            <ul>
                {showOrderedItems}
            </ul>
            { userData.confirm ? null : 
                <button onClick={() => setConfirm(true)}>Complete Order</button>
            }
        </div>
    )
}

export default Cart
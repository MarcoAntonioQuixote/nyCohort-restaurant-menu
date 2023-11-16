import React from 'react'

function MenuItemCard({food, setOrder}) {

    const handleClick = () => {
        setOrder(prev => [...prev, food])
    }

    return (
        <div onClick={handleClick} className='menuCard'>
            <h4>{food.name} | ${food.price}</h4>
            <img className='menuItemImage' src={food.image} />
        </div>
    )
}

export default MenuItemCard
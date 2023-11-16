import React from 'react';
import { foodItems } from '../foodItems';
import MenuItemCard from './MenuItemCard';

function Menu({setOrder}) {

    const showMenuItems = foodItems.map(food => 
        <MenuItemCard 
            key={food.name} 
            food={food} 
            setOrder={setOrder}
        />)

    return (
        <div className='menu'>
            {showMenuItems}
        </div>
    )
}

export default Menu

// displaying all menu items here
// use a for each loop that will return something

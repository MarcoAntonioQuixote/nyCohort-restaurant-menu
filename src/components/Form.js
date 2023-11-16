import React, { useEffect, useState } from 'react'

function Form({setUserData, order}) { 
    


    const handleChange = (e) => {
        let value = e.target.value;
        let prop = e.target.name;

        setUserData(prev => ({...prev, [prop]: value}))

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData(prev => ({...prev, confirm: true, order}))
    }

    return (
        <form onSubmit={handleSubmit} className='form' >
            <input onChange={handleChange} name="name" type="text" placeholder="What's your name?"/>
            <input onChange={handleChange} name="address" type="text" placeholder='And your addy?' />
            <input onChange={handleChange} name="method" type="text" placeholder='Method of payment?' />
            <button>Submit</button>
        </form>
    )
}

export default Form
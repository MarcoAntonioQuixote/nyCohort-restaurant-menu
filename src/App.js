import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Menu from './components/Menu';
import Submission from './components/Submission';

function App() {

    const [order, setOrder] = useState([]);
    const [userData, setUserData] = useState({confirm: false});
    const [confirm, setConfirm] = useState(false);

    useEffect(() => {
        console.log(userData);
        console.log(order);
    }, [order, userData])

    //state: completed? itemsSelected = [], formData

    //create an application that reflects a restraunt ordering system
    //create State, update that state
    //when you place your order, show a confirmation of that

    return (
        <div className="App-header">
            Order from Mark Anthony's Restaurant
            { !confirm ? 
                <div className='tablet'>
                    <Menu setOrder={setOrder} />                   
                    <Cart order={order} setConfirm={setConfirm} userData={userData}/> 
                </div> : 
                <Submission setUserData={setUserData} userData={userData} order={order}/>
            }
        </div>
    );
}

export default App;

import React from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./views/Home";
import Cart from "./views/Cart";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import CartItem from "./views/CartItem";


const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/calc' element={<Calculator/>}/>
                <Route path='/product/:id' element={<CartItem/>}/>
            </Routes>
        </Router>
    );
};

export default App;
import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import axios from "axios";

const CartItem = () => {
    const [product,setProduct]  =useState({})
    const catalog = useSelector(store=>store.catalog)
    const id = useParams()
    useEffect(() => {
        axios(`https://614dc2cee3cf1f001712d2f5.mockapi.io/api/catalog/${id}`)
            .then(({data}) => {
            setProduct(data)
        })
    }, [id])





    return (

        <div>
            <div>
                {product.title}
            </div>
        </div>
    );
};

export default CartItem;
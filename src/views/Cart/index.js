import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {addToCart, removeFromCart, removeOneProduct} from "../../store/actions";


const Cart = () => {
    const product = useSelector(s => s.cart)
    const dispatch = useDispatch()

    const allPrice = product.reduce((acc,el)=>{
        return (el.quantity * el.price) + acc
    },0)
    return (

        <div className=' container m-auto mt-8'>
            {
                product.length ?  <table className="m-auto table p-4 bg-white shadow rounded-lg">
                    <thead>
                    <tr>
                        <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Название
                        </th>
                        <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Цена
                        </th>
                        <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Количество
                        </th>
                        <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Сумма
                        </th>
                        <th className="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Удалить
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        product.map(el =>

                            <tr className="text-gray-700 text-center">
                                <td className="border p-4 dark:border-dark-5">
                                    {el.title}
                                </td>
                                <td className="border p-4 dark:border-dark-5">
                                    ${el.price}
                                </td>
                                <td className="border p-4 dark:border-dark-5">
                                    <button onClick={()=>dispatch(removeOneProduct(el))}>-</button>
                                    {el.quantity}
                                    <button onClick={()=>dispatch(addToCart(el))}>+</button>
                                </td>
                                <td className="border p-4 dark:border-dark-5">
                                    ${((el.price) * (el.quantity)).toFixed(2)}
                                </td>
                                <td className='border p-4 dark:border-dark-5'>
                                    <button onClick={() => dispatch(removeFromCart(el))} className='btn'>Удалить</button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>

                    <th>Итого: ${allPrice.toFixed(2)}
                    </th>

                </table> : "Корзина пуста!"
            }

        </div>

    );
};

export default Cart;
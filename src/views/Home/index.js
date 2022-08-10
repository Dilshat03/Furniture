import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToCart, getCatalog} from "../../store/actions";
import Spinner from "../../components/Spinner";

const Home = () => {
    const dispatch = useDispatch()
    const catalog = useSelector(store=>store.catalog)
    const isLoading = useSelector(store=>store.isLoadnig)



    useEffect(() => {
        dispatch(getCatalog())
    }, [dispatch])

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <div className='container  mt-6'>
            <div className='	card-grid'>
                {
                    catalog.map(el =>
                        <div className="shadow-lg border-gray-200 rounded-2xl h-full	bg-white w-64 m-auto p-2" key={el.id}>
                            <img src={el.images} alt="adidas" className="w-full p-4 h-36 m-auto"/>
                            <div className="bg-blue-200 m-3 p-4 rounded-lg ">
                                <p className="text-white text-xl font-bold ">
                                    {el.title}
                                </p>
                                <p className="text-gray-50 text-xs">
                                    {el.desc}
                                </p>
                                <div className="flex items-center justify-between ">
                                    <p className="text-white">
                                        {el.price}
                                    </p>
                                    <p>Quantity: {el.amount}</p>
                                    <button type="button"
                                            onClick={()=>dispatch(addToCart(el))}
                                            className="w-10 h-10 text-base font-medium rounded-full text-white bg-pink-500 hover:bg-pink-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             className="mx-auto" fill="white" viewBox="0 0 1792 1792">
                                            <path
                                                d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Home;
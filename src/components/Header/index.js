import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
    const cartLenght = useSelector(s=>s.cart)
    return (
        <nav className="flex bg-white flex-wrap items-center justify-between p-4 bg-green-600">
            <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
                <Link className="text-xl text-gray-800 font-semibold font-heading" to='/'>
                    Super Market
                </Link>
            </div>
            <div className="navbar-menu hidden lg:order-2 lg:block w-full lg:w-1/6">
                <Link className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" to='/'>
                    Home
                </Link>
                <Link className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600" to='/cart'>
                    Cart({cartLenght.length})
                </Link>
            </div>
        </nav>

    );
};

export default Header;
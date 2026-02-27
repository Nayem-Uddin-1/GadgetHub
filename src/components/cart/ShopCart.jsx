import React from 'react'
import TitlePage from '../../pages/TitlePage'
import Container from '../common/Container/Container'
import { Link } from 'react-router-dom'
import { FiRefreshCw, FiTrash2 } from "react-icons/fi";
import CartBttom from './cartscomponents/CartBttom';
import FeatureBar from '../FeatureBar/FeatureBar';
import { useSelector, useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../Redux/cartSlice';

function ShopCart() {

    const dispatch = useDispatch();
    const carts = useSelector((state) => state.cart.cartItems);

    const handleIncrease = (id) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecrease = (id) => {
        dispatch(decreaseQuantity(id));
    };

    const handleDelete = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <section>
            <TitlePage title={"Shopping Cart"} />

            <Container>
                <div className="lg:flex lg:gap-5 justify-between">

                    <div className="my-10 w-full overflow-x-auto">

                        {carts.length === 0 ? (
                            <h2 className="text-center text-xl font-semibold">
                                Your cart is empty
                            </h2>
                        ) : (
                            <table className='w-full border-collapse'>
                                <thead>
                                    <tr>
                                        <th className="p-4 border">Image</th>
                                        <th className="p-4 border">Product Name</th>
                                        <th className="p-4 border">Model</th>
                                        <th className="p-4 border">Quantity</th>
                                        <th className="p-4 border">Unit Price</th>
                                        <th className="p-4 border">Total</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {carts.map((item) => (
                                        <tr key={item.id} className=' bg-white' >
                                            <td className="p-4 border">
                                                <img
                                                    src={item.images[0]}
                                                    alt="product"
                                                    className="w-16 mx-auto"
                                                />
                                            </td>

                                            <td className="p-4 border cursor-pointer text-center">
                                                <Link to={"#"} className='border-b border-dotted  border-blue-500'>
                                                    {item.name}
                                                </Link>
                                            </td>

                                            <td className='border text-center'>
                                                {item.model}
                                            </td>

                                            <td className="p-4 border ">
                                                <div className="flex justify-center items-center gap-2">
                                                    <div className="flex border rounded overflow-hidden  ">
                                                        <button
                                                            onClick={() => handleDecrease(item.id)}
                                                            className="px-3 py-1 border-r hover:bg-gray-100 cursor-pointer"
                                                        >
                                                            -
                                                        </button>

                                                        <input
                                                            type="text"
                                                            value={item.quantity}
                                                            readOnly
                                                            className="w-12 text-center outline-none"
                                                        />

                                                        <button
                                                            onClick={() => handleIncrease(item.id)}
                                                            className="px-3 py-1 border-l hover:bg-gray-100 cursor-pointer"
                                                        >
                                                            +
                                                        </button>
                                                    </div>

                                                    <button className="p-2 border rounded hover:bg-gray-100 cursor-pointer">
                                                        <FiRefreshCw size={14} />
                                                    </button>

                                                    <button
                                                        onClick={() => handleDelete(item.id)}
                                                        className="p-2 border rounded hover:bg-gray-100 cursor-pointer hover:border-red-500 group "
                                                    >
                                                        <FiTrash2 className='group-hover:text-red-500 ' size={14} />
                                                    </button>
                                                </div>
                                            </td>

                                            <td className="p-4 border text-center text-gray-600">
                                                {item.price}$
                                            </td>

                                            <td className="p-4 text-center border font-semibold">
                                                {item.price * item.quantity}$
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}

                    </div>

                    <CartBttom />

                </div>
            </Container>

            <div className='bg-[#0b2c4e]'>
                <FeatureBar type="cart-featurebar" />
            </div>
        </section>
    )
}

export default ShopCart
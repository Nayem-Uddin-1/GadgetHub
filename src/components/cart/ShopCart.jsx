import React from 'react'
import TitlePage from '../../pages/TitlePage'
import Container from '../common/Container/Container'
import { Link } from 'react-router-dom'
import { FiRefreshCw, FiTrash2 } from "react-icons/fi";
import CartBttom from './cartscomponents/CartBttom';


function ShopCart() {
    return (
        <section>
            <TitlePage title={"Shopping Cart"} />
            <Container>  
                <div className="flex justify-between">
                    <div className="my-10 max-w-253.25 ">
                    <table className=''>
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
                            <tr>
                                <td className="p-4 border">
                                    <img
                                        src="https://www.journal-theme.com/5/catalog/view/theme/journal3/image.php/da630b525b23f2d7.webp/100-100/catalog/journal3/catalog/categories/electronics/mobile/phones/pro-phone-11-demo-mock-up/pro-phone-11-demo-mock-up.png"
                                        alt="product"
                                        className="w-16"
                                    />
                                </td>

                                <td className="p-4 border text-blue-600 underline cursor-pointer">

                                    <Link to={"#"} className='' >
                                        Pro Phone 11 Demo Mock-up
                                    </Link>

                                </td>
                                <td className='border'>
                                    model-7349
                                </td>

                                <td className="p-4 border">
                                    <div className="flex items-center gap-2">
                                        <div className="flex border rounded overflow-hidden">
                                            <button
                                                // onClick={decreaseQty}
                                                className="px-3 py-1 border-r hover:bg-gray-100"
                                            >
                                                -
                                            </button>

                                            <input
                                                type="text"
                                                // value={quantity}
                                                value={1}
                                                readOnly
                                                className="w-12 text-center outline-none"
                                            />

                                            <button
                                                // onClick={increaseQty}
                                                className="px-3 py-1 border-l hover:bg-gray-100"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <button className="p-2 border rounded hover:bg-gray-100">
                                            <FiRefreshCw size={14} />
                                        </button>

                                        <button className="p-2 border rounded hover:bg-gray-100">
                                            <FiTrash2 size={14} />
                                        </button>
                                    </div>
                                </td>
                                <td className="p-4 border text-gray-600">
                                    {/* ${unitPrice} */}
                                    1666$
                                </td>

                                <td className="p-4 border font-semibold">
                                    {/* ${total} */}
                                    total 595959
                                </td>

                            </tr>

                        </tbody>

                    </table>
                </div>
                <CartBttom/>
                </div>
            </Container>
        </section>
    )
}

export default ShopCart
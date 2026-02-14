import React from 'react'
import TitlePage from './TitlePage'
import Container from '../components/common/Container/Container'
import { FiShoppingCart, FiTrash2 } from 'react-icons/fi';

function WishList() {
    return (
        <section>
            <TitlePage title={"Wish List"} />

            <Container>

                <div className="max-w-6xl mx-auto p-8 font-sans text-[#444]">
                    {/* Table Container */}
                    <div className="border border-gray-200 rounded-sm overflow-hidden">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-[#f9f9f9] border-b border-gray-200 text-sm">
                                    <th className="p-3 border-r border-gray-200 w-24">Image</th>
                                    <th className="p-3 border-r border-gray-200 text-left">Product Name</th>
                                    <th className="p-3 border-r border-gray-200 w-24">Model</th>
                                    <th className="p-3 border-r border-gray-200 w-24">Stock</th>
                                    <th className="p-3 border-r border-gray-200 w-28">Unit Price</th>
                                    <th className="p-3 w-32">Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-[13px]">
                                <tr className="border-b border-gray-100">
                                    <td className="p-4 border-r border-gray-200 text-center">
                                        <img
                                            src="https://via.placeholder.com/50x40"
                                            alt="Product"
                                            className="mx-auto"
                                        />
                                    </td>
                                    <td className="p-4 border-r border-gray-200">
                                        <span className="text-gray-500 border-b border-dotted border-gray-400 leading-relaxed cursor-pointer">
                                            All-in-One Premium Computer (24-inch, M1 chip with 8-Core CPU and 7-core GPU, 8GB RAM, 256GB) – Green
                                        </span>
                                    </td>
                                    <td className="p-4 border-r border-gray-200 text-center text-gray-500">
                                        model-9580
                                    </td>
                                    <td className="p-4 border-r border-gray-200 text-center text-emerald-600">
                                        In Stock
                                    </td>
                                    <td className="p-4 border-r border-gray-200 text-center font-medium">
                                        $949.24
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="flex justify-center gap-1.5">
                                            <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                                                <FiShoppingCart size={16} />
                                            </button>
                                            <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                                                <FiTrash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Footer Button */}
                    <button className="w-full mt-8 bg-[#1c1c1c] text-white py-3.5 text-sm font-medium rounded-sm uppercase tracking-wide hover:bg-black transition-all">
                        Continue
                    </button>
                </div>


            </Container>
        </section>
    )
}

export default WishList
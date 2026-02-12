import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { LuChevronDown } from 'react-icons/lu';
import { FaArrowLeft, FaCreditCard } from 'react-icons/fa';



function ShippingTax() {

    const amount = "$211.63";

    const [formData, setFormData] = useState({
        country: 'United Kingdom',
        region: '',
        postCode: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Fetching quotes for:', formData);
    };

    const [isShippingOpen, setIsShippingOpen] = useState(false)

    return (
        <>   <div className="panel-heading my-5 ">
            <h4 onClick={() => setIsShippingOpen(!isShippingOpen)}
                className={`panel-title flex transform transisition justify-between ${isShippingOpen ? "text-blue-500 " : "hover:text-blue-500 "} `}>
                <Link>Estimate Shipping & Taxes</Link>
                <span   >
                    <IoIosArrowDown

                        className={` transition-transform duration-300 ${isShippingOpen ? "rotate-180" : ""}  `} />

                </span>
            </h4>
        </div>

            {/* input sections */}
            <div className={`${isShippingOpen ? "block" : "hidden"}`} >

                <div className="font-sans text-gray-700">
                    <p className="mb-6 text-sm text-gray-600">
                        Enter your destination to get a shipping estimate.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Country Select */}
                        <div className="flex items-center">
                            <label className="w-1/3 text-sm">
                                Country <span className="text-red-500">*</span>
                            </label>
                            <div className="relative flex-1">
                                <select
                                    className="w-full p-2 pr-10 border border-gray-300 rounded bg-white appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    value={formData.country}
                                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                >
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                    <option value="Canada">Canada</option>
                                </select>
                                <LuChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs" />
                            </div>
                        </div>

                        {/* Region/State Select */}
                        <div className="flex items-center">
                            <label className="w-1/3 text-sm">
                                Region / State <span className="text-red-500">*</span>
                            </label>
                            <div className="relative flex-1">
                                <select
                                    className="w-full p-2 pr-10 border border-gray-300 rounded bg-white appearance-none text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    value={formData.region}
                                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                                    required
                                >
                                    <option value="">--- Please Select ---</option>
                                    <option value="london">London</option>
                                    <option value="manchester">Manchester</option>
                                </select>
                                <LuChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs" />
                            </div>
                        </div>

                        {/* Post Code Input */}
                        <div className="flex items-center">
                            <label className="w-1/3 text-sm">
                                Post Code <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Post Code"
                                className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                                value={formData.postCode}
                                onChange={(e) => setFormData({ ...formData, postCode: e.target.value })}
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3 mt-4 bg-[#1a1c1e] text-white font-bold rounded hover:bg-black transition-colors"
                        >
                            Get Quotes
                        </button>
                    </form>
                </div>

            </div>

            {/* submit section */}

            <div className="bg-gray-50 font-sans">
                {/* Pricing Table */}
                <div className="border border-gray-300 bg-white overflow-hidden mb-6">
                    {/* Sub-total Row */}
                    <div className="flex border-b border-gray-300">
                        <div className="flex-1 p-3 text-right text-gray-600 border-r border-gray-300">
                            Sub-Total:
                        </div>
                        <div className="w-32 p-3 text-right font-semibold text-gray-800">
                            {amount}
                        </div>
                    </div>

                    {/* Total Row */}
                    <div className="flex">
                        <div className="flex-1 p-3 text-right text-gray-600 border-r border-gray-300">
                            Total:
                        </div>
                        <div className="w-32 p-3 text-right font-semibold text-gray-800">
                            {amount}
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                    <button className="w-full flex items-center justify-center gap-2 py-3 border border-gray-800 bg-white text-gray-700 hover:bg-gray-50 transition-colors">
                        <FaArrowLeft className="text-sm" />
                        Continue Shopping
                    </button>

                    <button className="w-full flex items-center justify-center gap-2 py-3 bg-[#1e2124] text-white font-medium hover:bg-black transition-colors">
                        <FaCreditCard className="text-sm" />
                        Checkout
                    </button>
                </div>
            </div>


        </>
    )
}

export default ShippingTax
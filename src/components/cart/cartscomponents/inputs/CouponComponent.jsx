import React, { useState } from 'react';
import { RiCoupon2Line, RiArrowRightLine } from 'react-icons/ri';

const CouponComponent = ({ isCouponOpen }) => {
    const [coupon, setCoupon] = useState('');

    const handleApply = (e) => {
        e.preventDefault();
        console.log('Applying coupon:', coupon);
        // Add your logic here
    };

    return (
        <div className={` ${isCouponOpen? "block": "hidden"} `}>
            <div className="flex flex-col sm:flex-row items-start gap-4 my-5  max-w-md">
                {/* Label Section */}
                <div className="pt-2">
                    <label
                        htmlFor="coupon"
                        className="text-gray-600 text-sm font-medium leading-tight block w-24"
                    >
                        Enter your coupon here
                    </label>
                </div>

                {/* Input and Button Section */}
                <div className="flex flex-col gap-3 w-full">
                    <div className="relative">
                        <input
                            id="coupon"
                            type="text"
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                            placeholder="Enter your coupon here"
                            className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-0 focus:ring-black transition-all bg-white placeholder:text-gray-400 text-gray-800 outline-none "
                        />
                    </div>

                    <button
                        onClick={handleApply}
                        className="w-full bg-[#1c1e1f] hover:bg-black text-white font-bold py-3 px-6 flex items-center justify-center gap-2 transition-colors duration-200 group"
                    >
                        <RiCoupon2Line className="text-lg group-hover:scale-110 transition-transform" />
                        <span>Apply Coupon</span>
                        <RiArrowRightLine className="text-sm opacity-50 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CouponComponent;
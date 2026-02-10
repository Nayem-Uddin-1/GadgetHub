import React from 'react';
import { FaTruck, FaLock, FaUndo, FaHeadphones } from 'react-icons/fa';
import Container from '../common/Container/Container';

const FeatureBar = () => {
    return (
        <Container>
            <div className=" my-10 bg-[#0b2c4e]  mx-5 md:mx-0 border border-yellow-800 text-white p-8 flex flex-wrap justify-between gap-6">

                {/* Item 1 */}
                <div className="flex items-center gap-4">
                    <FaTruck size={30} />
                    <div>
                        <h4 className="font-bold">Fast Shipping</h4>
                        <p className="text-sm opacity-80">Optional secondary info block text</p>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-4">
                    <FaLock size={30} />
                    <div>
                        <h4 className="font-bold">Secure Shopping</h4>
                        <p className="text-sm opacity-80">Optional secondary info block text</p>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-center gap-4">
                    <FaUndo size={30} />
                    <div>
                        <h4 className="font-bold">Easy Return</h4>
                        <p className="text-sm opacity-80">Optional secondary info block text</p>
                    </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-center gap-4">
                    <FaHeadphones size={30} />
                    <div>
                        <h4 className="font-bold">24h Service</h4>
                        <p className="text-sm opacity-80">Optional secondary info block text</p>
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default FeatureBar;
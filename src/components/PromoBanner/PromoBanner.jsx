import React from 'react'
import { FaApple, FaArrowRight } from 'react-icons/fa';
import Container from '../common/Container/Container';


function PromoBanner() {
    return (
     <Container>
            <div className="bg-black text-white w-full h-[330px] relative  my-20">
                <img
                    src="https://www.journal-theme.com/5/catalog/view/theme/journal3/image.php/10403ad2a13e8c86.webp/1500-300-w/catalog/journal3/assets/images/image-18.png"
                    alt="Laptop Promo"
                    className="w-full h-full"
                />

         
            <div className=" absolute top-20 left-20 ">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#0a192f] border border-blue-900 px-3 py-1 rounded-md text-sm font-medium">
                    <FaApple className="text-white" />
                    <span>Authorised Reseller</span>
                </div>

                {/* Text Group */}
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold my-5 tracking-tight">
                        Get up to <span className="text-white">$500</span> on your trade-in laptop
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Prices as low as $100, offers available while supplies last.
                    </p>
                </div>

                {/* CTA Button */}
                <button className="flex items-center my-10 gap-2 cursor-pointer bg-[#fcd34d] hover:bg-[#fbbf24] text-black font-semibold px-6 py-3 rounded-md transition-colors">
                    Call to Action <FaArrowRight size={14} />
                </button>
            </div>

         
                
        
        </div>
     </Container>
    )
}

export default PromoBanner
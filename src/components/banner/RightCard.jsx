import React from 'react';
import { HiOutlineTag } from 'react-icons/hi';  

const topSellers = [
  {
    id: 1,
    name: 'Flip Phone Demo ...',
    price: 123.79,
    originalPrice: 317.41,
    image: 'https://via.placeholder.com/60',
    hasDiscount: true,
  },
  {
    id: 2,
    name: 'Gray Hoodie',
    price: 688.45,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: 3,
    name: 'Mini Mac Demo M...',
    price: 0.0,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: 4,
    name: 'Moisturizer No 2',
    price: 0.0,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: 5,
    name: 'Kettle 03',
    price: 441.03,
    image: 'https://via.placeholder.com/60',
  },
];

const RightCard = () => {
  return (
    <div className=" w-full h-full bg-white font-sans text-gray-800">
      <h2 className="text-lg font-bold  ">Top Sellers</h2>
      <div className="flex flex-col">
        {topSellers.map((item, index) => (
          <div 
            key={item.id} 
            className={`flex items-center py-4 ${index !== topSellers.length - 1 ? 'border-b border-gray-100' : ''}`}
          >
            {/* Rank Number with Outline Effect */}
            <div className="w-12 text-5xl font-bold text-white drop-shadow-sm" 
                 style={{ WebkitTextStroke: '1px #9ca3af' }}>
              {item.id}
            </div>

            {/* Product Info */}
            <div className="flex-grow px-2">
              <h3 className="text-sm text-gray-500 truncate w-32">{item.name}</h3>
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900">${item.price.toFixed(2)}</span>
                {item.originalPrice && (
                  <span className="text-xs text-gray-400 line-through">
                    ${item.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {/* Product Image */}
            <div className="relative w-16 h-16 bg-gray-50 rounded-md flex items-center justify-center overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="object-contain w-full h-full p-1"
              />
              {item.hasDiscount && (
                <div className="absolute top-0 left-0 bg-red-600 p-0.5">
                  <HiOutlineTag className="text-white text-[10px]" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightCard;
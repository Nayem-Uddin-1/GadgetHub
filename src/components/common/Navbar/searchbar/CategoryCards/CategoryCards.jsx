import React from 'react'
import Container from '../../../Container/Container'
import { FiArrowRight } from 'react-icons/fi';
import { cardsdata } from './cardData'


function CategoryCards() {
  return (
    <Container>
      <div className="bg-gray-100 mt-10 ">
        <div className="flex justify-between">
          {cardsdata.map((item) => (
            <div
              key={item.id}
              className="relative w-[371px] h-64 rounded overflow-hidden group cursor-pointer shadow-lg"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay for text legibility */}
              <div className={`absolute inset-0 ${item.action} transition-opacity group-hover:opacity-80`} />

              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-center items-start text-white">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

                {/* Price Badge */}
                <div className="bg-white text-black px-4 py-2 rounded-lg flex items-center gap-2 mb-6 shadow-md">
                  <span className="text-gray-400 text-sm">from</span>
                  <span className="font-bold text-lg">{item.price}</span>
                </div>

                {/* Shop Now Link */}
                <button className="flex items-center gap-2 group/btn border-transparent hover:border-white transition-all pb-1 hover:text-blue-500  ">
                  <span className="font-medium border-b border-dotted ">Shop now</span>
                  <FiArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default CategoryCards
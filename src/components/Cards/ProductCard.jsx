import React from 'react';

const ProductCard = ({ image, title, description }) => {
  return (
    <div className="bg-gray-100 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
      <img 
        src={image} 
        alt={title} 
        className="mb-4 h-52 w-full object-cover rounded-lg" 
      />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default ProductCard;

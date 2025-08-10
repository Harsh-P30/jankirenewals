import React from 'react';

function ServiceCard({ service }) {
    return (
        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <img
                src={service.image}
                alt={service.title}
                className="mx-auto mb-4 h-20 w-20 object-contain"
            />
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
        </div>
    );
}

export default ServiceCard;

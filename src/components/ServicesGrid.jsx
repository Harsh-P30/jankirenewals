import React, { useEffect, useRef } from 'react';
import ServiceCard from './ServiceCard';
import { service } from '../data/servicesData';


function ServicesGrid() {
    const scrollRef = useRef(null);

    // Auto-scroll logic (infinite)
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let scrollAmount = 0;

        const scrollStep = () => {
            if (scrollContainer) {
                scrollContainer.scrollLeft += 1; // Adjust speed

                // If fully scrolled to the cloned part, reset to original
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                }
            }
        };

        const interval = setInterval(scrollStep, 20); // Adjust interval for speed
        return () => clearInterval(interval);
    }, []);

    // Duplicate the service list to create seamless infinite scroll
    const duplicatedServices = [...service, ...service];


    return (
        <div className="overflow-hidden relative flex justify-center  px-9 items-center bg-gray-50">
            <div
                ref={scrollRef}
                className="flex gap-12 overflow-x-scroll scrollbar-hide scroll-smooth w-full"
                style={{ scrollBehavior: 'smooth' }}
            >
                {duplicatedServices.map((item, index) => (
                    <div key={index} className="min-w-[300px] p-10">
                        <ServiceCard service={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServicesGrid;

const service = [

    {
        title: "Design Support",
        image: "src/assets/ServiceLogos/DesignSupport.png",
        description: "Get expert guidance on layout and planning."
    },
    {
        title: "Installation Support",
        image: "src/assets/ServiceLogos/installationSupport.png",
        description: "Step-by-step support for correct installations."
    },
    {
        title: "One Stop Solution",
        image: "src/assets/ServiceLogos/oneStop.png",
        description: "We handle everything from start to finish."
    },

    {
        title: "After Sales",
        image: "src/assets/ServiceLogos/AfterSales.png",
        description: "Stay supported even after deployment."
    },
    {
        title: "Design Support",
        image: "src/assets/ServiceLogos/DesignSupport.png",
        description: "Get expert guidance on layout and planning."
    },
    {
        title: "Installation Support",
        image: "src/assets/ServiceLogos/installationSupport.png",
        description: "Step-by-step support for correct installations."
    },
    {
        title: "One Stop Solution",
        image: "src/assets/ServiceLogos/oneStop.png",
        description: "We handle everything from start to finish."
    },

]



import React from 'react'

function ServiceCard({ service }) {
    return (
        <div >
            <img src={service.image} alt={title} className=" mb-4 h-52" />
        </div>
    )
}

export default ServiceCard
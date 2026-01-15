import { useLocation, NavLink } from "react-router";

function ProductDescription() {
    const location = useLocation();
    const { image, title, longdescription } = location.state || {};

    // If someone lands directly without state, handle fallback
    if (!title) {
        return (
            <div className="p-10 text-center">
                <h1 className="text-xl font-semibold">No product selected</h1>
                <NavLink to="/product" className="text-blue-600 underline">
                    Back to Products
                </NavLink>
            </div>
        );
    }

    return (

        <div className="p-6 sm:p-20 w-full mx-auto">
            <div className="  xl:flex ">

                <img src={image} alt={title} className="w-full text-base md:h-120 object-contain mb-6" />
                <div className=" md:pt-6 xl:w-1/2 xl:relative right-42 text-justify">
                    <h1 className="text-3xl font-bold mb-4">{title}</h1>
                    <p className="text-gray-700">{longdescription}</p>

                    <button
                        onClick={() => {
                            const phone = "919990233861"; // Your WhatsApp number
                            const message = `Hello, I am interested in the product: " ${title} "`;
                            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                            window.open(url, "_blank");
                        }}
                        className="px-4 py-2 mt-6 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                        Get Product
                    </button>


                </div>

                <div className="mt-6">
                    <NavLink
                        to="/product"
                        className="inline-block text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                        ← Back to Products
                    </NavLink>
                </div>
            </div>





        </div>


    );
}

export default ProductDescription;

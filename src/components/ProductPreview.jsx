import ProductCard from '../components/Cards/ProductCard';
import { products } from '../data/products.js';
import { NavLink } from 'react-router';

function ProductPreview() {
    const preview = products.slice(0, 4);

    return (
        <section id="product_offering" className="flex flex-col justify-center items-center py-26 bg-white">
            <h1 className="text-3xl font-semibold mb-10">Our Star Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 w-full max-w-7xl">
                {preview.map((product, index) => (

                    <NavLink
                        to="/productDescription"
                        state={{
                            image: product.image,
                            title: product.title,
                            longdescription: product.longdescription,
                        }}
                    >
                        <ProductCard
                            key={index}
                            image={product.image}
                            title={product.title}
                            description={product.description}
                        />
                    </NavLink>

                ))}
            </div>

            <NavLink
                to="/product"
                className="mt-8 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="View all products"
            >
                View All
            </NavLink>
        </section>
    );
}

export default ProductPreview;


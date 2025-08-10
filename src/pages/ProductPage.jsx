import ProductCard from '../components/Cards/ProductCard';
import { products } from '../data/products.js';
import { NavLink } from 'react-router';

function ProductPage() {
  return (
    <main className="py-16 bg-white min-h-screen">
      <h1 className="text-4xl font-semibold text-center mb-2">
        All Products
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Explore our complete portfolio.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 w-full max-w-7xl mx-auto">
        {products.map((product, index) => (
          <NavLink
            key={index} // ✅ key moved here (outermost element in map)
            to="/productDescription"
            state={{
              image: product.image,
              title: product.title,
              longdescription: product.longdescription,
            }}
          >
            <ProductCard
              image={product.image}
              title={product.title}
              description={product.description}
              loading="lazy" // ✅ for faster page load
            />
          </NavLink>
        ))}
      </div>
    </main>
  );
}

export default ProductPage;

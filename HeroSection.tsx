import ProductCard from "./ProductCard";
import productPhone from "@/assets/product-phone.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";

const featuredProducts = [
  {
    image: productPhone,
    title: "Latest Smartphone - 256GB Storage, Advanced Camera System",
    price: "699.99",
    originalPrice: "799.99",
    rating: 4.5,
    reviews: 1247,
    discount: "12%"
  },
  {
    image: productLaptop,
    title: "Professional Laptop - Intel i7, 16GB RAM, 512GB SSD",
    price: "1299.99",
    originalPrice: "1499.99",
    rating: 4.8,
    reviews: 856,
    discount: "13%"
  },
  {
    image: productHeadphones,
    title: "Wireless Bluetooth Headphones - Noise Cancelling, 30H Battery",
    price: "199.99",
    originalPrice: "249.99",
    rating: 4.6,
    reviews: 2103,
    discount: "20%"
  },
  {
    image: productPhone,
    title: "Smartphone Pro Max - 512GB, Triple Camera, 5G Ready",
    price: "1199.99",
    rating: 4.7,
    reviews: 934
  },
  {
    image: productLaptop,
    title: "Gaming Laptop - RTX Graphics, 32GB RAM, RGB Keyboard",
    price: "1899.99",
    originalPrice: "2199.99",
    rating: 4.9,
    reviews: 567,
    discount: "14%"
  },
  {
    image: productHeadphones,
    title: "Premium Audio Headphones - Studio Quality, Wired & Wireless",
    price: "399.99",
    rating: 4.8,
    reviews: 1456
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-amozone-dark">Featured Products</h2>
          <button className="text-amozone-orange hover:text-amozone-orange/80 font-medium">
            View All →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
const Footer = () => {
  return (
    <footer className="bg-amozone-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Get to Know Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">About Amozone</a></li>
              <li><a href="#" className="hover:text-white">Investor Relations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Make Money with Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Sell products on Amozone</a></li>
              <li><a href="#" className="hover:text-white">Sell on Amozone Business</a></li>
              <li><a href="#" className="hover:text-white">Become an Affiliate</a></li>
              <li><a href="#" className="hover:text-white">Advertise Your Products</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Payment Products</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Amozone Business Card</a></li>
              <li><a href="#" className="hover:text-white">Shop with Points</a></li>
              <li><a href="#" className="hover:text-white">Reload Your Balance</a></li>
              <li><a href="#" className="hover:text-white">Currency Converter</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Let Us Help You</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Your Account</a></li>
              <li><a href="#" className="hover:text-white">Your Orders</a></li>
              <li><a href="#" className="hover:text-white">Shipping Rates & Policies</a></li>
              <li><a href="#" className="hover:text-white">Returns & Replacements</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          <div className="mb-4">
            <span className="text-2xl font-bold text-amozone-orange">amozone</span>
          </div>
          <p>&copy; 2024 Amozone.com, Inc. or its affiliates</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
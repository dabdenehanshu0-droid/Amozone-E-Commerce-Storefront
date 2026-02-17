import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-amozone-dark text-white shadow-md">
      {/* Top bar */}
      <div className="border-b border-amozone-dark/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <h1 className="text-2xl font-bold text-amozone-orange">amozone</h1>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <span>Hello, Sign in</span>
              <span>Account & Lists</span>
              <span>Returns & Orders</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center space-x-4">
          {/* Mobile menu */}
          <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
            <Menu className="h-6 w-6" />
          </Button>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl">
            <div className="flex">
              <select className="bg-amozone-lightGray text-amozone-dark px-3 py-2 rounded-l-md border-r border-border text-sm">
                <option>All</option>
                <option>Electronics</option>
                <option>Books</option>
                <option>Fashion</option>
                <option>Home</option>
              </select>
              <div className="relative flex-1">
                <Input 
                  placeholder="Search Amozone" 
                  className="rounded-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0" 
                />
              </div>
              <Button className="bg-amozone-orange hover:bg-amozone-orange/90 text-white rounded-r-md rounded-l-none px-4">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <User className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-amozone-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-amozone-dark/90 border-t border-amozone-dark/20">
        <div className="container mx-auto px-4 py-2">
          <nav className="flex items-center space-x-6 text-sm">
            <Button variant="ghost" className="text-white hover:bg-white/10 px-3 py-1">
              Today's Deals
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10 px-3 py-1">
              Customer Service
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10 px-3 py-1">
              Registry
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10 px-3 py-1">
              Gift Cards
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10 px-3 py-1">
              Sell
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
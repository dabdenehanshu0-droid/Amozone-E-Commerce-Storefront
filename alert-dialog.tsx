import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-amozone-dark to-amozone-dark/80 text-white">
      <div className="absolute inset-0">
        <img 
          src={heroBanner} 
          alt="Featured products" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Great deals on <span className="text-amozone-orange">everything</span>
          </h2>
          <p className="text-xl mb-6 text-gray-200">
            Discover millions of products with fast, free delivery and incredible prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-amozone-orange hover:bg-amozone-orange/90 text-white font-semibold">
              Shop Today's Deals
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amozone-dark">
              Browse Categories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
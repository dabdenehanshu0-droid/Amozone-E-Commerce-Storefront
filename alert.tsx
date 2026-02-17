import { Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  discount?: string;
}

const ProductCard = ({ image, title, price, originalPrice, rating, reviews, discount }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm hover:shadow-xl">
      <CardContent className="p-4">
        <div className="aspect-square relative mb-4 overflow-hidden rounded-lg">
          {discount && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm font-semibold rounded">
              -{discount}
            </div>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <h3 className="font-medium text-sm mb-2 line-clamp-2 text-foreground group-hover:text-amozone-orange transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-amozone-orange text-amozone-orange' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground ml-2">({reviews})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-amozone-orange">${price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
            )}
          </div>
        </div>
        
        <Button className="w-full mt-3 bg-amozone-orange hover:bg-amozone-orange/90 text-white">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
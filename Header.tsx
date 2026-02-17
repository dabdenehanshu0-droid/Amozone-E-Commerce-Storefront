import { Smartphone, Laptop, Headphones, Home, Book, Shirt, Car, Gamepad2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { icon: Smartphone, name: "Electronics", color: "text-blue-500" },
  { icon: Laptop, name: "Computers", color: "text-purple-500" },
  { icon: Headphones, name: "Audio", color: "text-green-500" },
  { icon: Home, name: "Home & Garden", color: "text-orange-500" },
  { icon: Book, name: "Books", color: "text-red-500" },
  { icon: Shirt, name: "Fashion", color: "text-pink-500" },
  { icon: Car, name: "Automotive", color: "text-indigo-500" },
  { icon: Gamepad2, name: "Gaming", color: "text-yellow-500" },
];

const CategoriesSection = () => {
  return (
    <section className="py-12 bg-amozone-lightGray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-amozone-dark">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <IconComponent className={`h-8 w-8 mx-auto mb-3 ${category.color} group-hover:scale-110 transition-transform`} />
                  <h3 className="text-sm font-medium text-amozone-dark">{category.name}</h3>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
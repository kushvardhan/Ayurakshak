"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ShoppingCart, MessageCircle, Star, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Daily Pain Oil",
    price: "₹299",
    image: "/Product/DailyPainOil.jpeg",
    description: "Natural pain relief oil made from traditional Ayurvedic herbs. Perfect for daily use to relieve muscle and joint pain.",
    features: ["100% Natural", "Ayurvedic", "Pain Relief", "Daily Use"],
    rating: 4.8,
    whatsappMessage: "Hi! I'm interested in Daily Pain Oil (₹299). Can you provide more details?"
  },
  {
    id: 2,
    name: "Dry Hair Shampoo",
    price: "₹249",
    image: "/Product/DryHairShampoo.jpeg",
    description: "Herbal shampoo specially formulated for dry and damaged hair. Nourishes and strengthens hair naturally.",
    features: ["Herbal Formula", "Dry Hair Care", "Natural", "Strengthening"],
    rating: 4.7,
    whatsappMessage: "Hi! I'm interested in Dry Hair Shampoo (₹249). Can you provide more details?"
  },
  {
    id: 3,
    name: "Instant Pain Oil",
    price: "₹349",
    image: "/Product/InstantPainOil.jpeg",
    description: "Fast-acting pain relief oil for immediate relief from acute pain. Made with potent Ayurvedic ingredients.",
    features: ["Fast Acting", "Instant Relief", "Ayurvedic", "Potent Formula"],
    rating: 4.9,
    whatsappMessage: "Hi! I'm interested in Instant Pain Oil (₹349). Can you provide more details?"
  }
];

const whatsappNumber = "+919000000000"; // Replace with actual WhatsApp number

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="py-20 gradient-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Natural Products</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our range of authentic Ayurvedic products, crafted with traditional 
            wisdom and modern quality standards for your wellness journey.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="overflow-hidden border-2 border-transparent hover:border-green-200 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Leaf className="w-4 h-4" />
                    <span>100% Natural</span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{product.rating}</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price and Actions */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold gradient-text">{product.price}</div>
                    <div className="flex space-x-2">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleWhatsAppClick(product.whatsappMessage)}
                          className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                        >
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Chat
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          size="sm"
                          onClick={() => handleWhatsAppClick(product.whatsappMessage)}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <ShoppingCart className="w-4 h-4 mr-1" />
                          Buy
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Personalized Recommendations?
            </h3>
            <p className="text-gray-600 mb-6">
              Our Ayurvedic experts can help you choose the right products for your specific needs.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => handleWhatsAppClick("Hi! I need personalized product recommendations. Can you help me?")}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Consult Our Experts
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

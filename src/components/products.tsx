"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Leaf,
  MessageCircle,
  ShoppingCart,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const products = [
  {
    id: 1,
    name: "Daily Pain Oil",
    price: "₹299",
    image: "/Product/DailyPainOil.jpeg",
    description:
      "Natural pain relief oil made from traditional Ayurvedic herbs. Perfect for daily use to relieve muscle and joint pain.",
    features: ["100% Natural", "Ayurvedic", "Pain Relief", "Daily Use"],
    rating: 4.8,
    whatsappMessage:
      "Hi! I'm interested in Daily Pain Oil (₹299). Can you provide more details?",
  },
  {
    id: 2,
    name: "Dry Hair Shampoo",
    price: "₹249",
    image: "/Product/DryHairShampoo.jpeg",
    description:
      "Herbal shampoo specially formulated for dry and damaged hair. Nourishes and strengthens hair naturally.",
    features: ["Herbal Formula", "Dry Hair Care", "Natural", "Strengthening"],
    rating: 4.7,
    whatsappMessage:
      "Hi! I'm interested in Dry Hair Shampoo (₹249). Can you provide more details?",
  },
  {
    id: 3,
    name: "Instant Pain Oil",
    price: "₹349",
    image: "/Product/InstantPainOil.jpeg",
    description:
      "Fast-acting pain relief oil for immediate relief from acute pain. Made with potent Ayurvedic ingredients.",
    features: ["Fast Acting", "Instant Relief", "Ayurvedic", "Potent Formula"],
    rating: 4.9,
    whatsappMessage:
      "Hi! I'm interested in Instant Pain Oil (₹349). Can you provide more details?",
  },
];

const whatsappNumber = "+919259651812";

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedProducts, setExpandedProducts] = useState<Set<number>>(
    new Set()
  );

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(
      "+",
      ""
    )}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const toggleDescription = (productId: number) => {
    setExpandedProducts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  return (
    <section id="products" className="py-20 gradient-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Natural Products</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our range of authentic Ayurvedic products, crafted with
            traditional wisdom and modern quality standards for your wellness
            journey.
          </p>
        </motion.div>

        {/* Organic Products Grid */}
        <div className="organic-grid">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 10, rotate: 0 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              className="group"
            >
              <Card className="overflow-hidden artisan-card gentle-hover texture-overlay healing-energy">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={600}
                    className="w-full h-100 object-cover group-hover:scale-103 transition-transform duration-500"
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
                    <span className="text-sm font-semibold">
                      {product.rating}
                    </span>
                  </div>
                </div>

                <CardContent className="p-3">
                  {/* Header with Price */}
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {product.name}
                      </h3>
                      <div className="text-regular font-bold gradient-text">
                        {product.price}
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 bg-yellow-50 px-1 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-regular font-semibold text-yellow-700">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-green-100 text-green-800 text-md px-2 py-1 rounded-full font-medium mr-1"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Collapsible Description */}
                  <div className="mb-3">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {expandedProducts.has(product.id)
                        ? product.description
                        : `${product.description.substring(0, 80)}...`}
                    </p>
                    <button
                      onClick={() => toggleDescription(product.id)}
                      className="text-green-600 hover:text-green-700 text-sm font-medium mt-1 flex items-center transition-colors"
                    >
                      {expandedProducts.has(product.id) ? (
                        <>
                          Show Less <ChevronUp className="w-4 h-4 ml-1" />
                        </>
                      ) : (
                        <>
                          Read More <ChevronDown className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Organic Action Buttons */}
                  <div className="flex space-x-1 w-full">
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        rotate: 1,
                        y: -2,
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          handleWhatsAppClick(product.whatsappMessage)
                        }
                        className="w-full border-2 border-green-500 text-green-700 hover:bg-green-600 hover:text-white font-bold rounded-full transition-all duration-500 artisan-card"
                      >
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Chat
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        rotate: -1,
                        y: -2,
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        onClick={() =>
                          handleWhatsAppClick(product.whatsappMessage)
                        }
                        className="w-full text-white bg-green-500 hover:bg-green-600 font-bold rounded-full transition-all duration-500 organic-button"
                        style={{
                          background:
                            "linear-gradient(135deg, #22c55e, #10b981)",
                          boxShadow: "0 4px 15px rgba(34, 197, 94, 0.3)",
                        }}
                      >
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        Buy Now
                      </Button>
                    </motion.div>
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
              Our Ayurvedic experts can help you choose the right products for
              your specific needs.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() =>
                  handleWhatsAppClick(
                    "Hi! I need personalized product recommendations. Can you help me?"
                  )
                }
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

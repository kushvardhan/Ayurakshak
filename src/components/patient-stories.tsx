"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Star, Quote, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const patientStories = [
  {
    id: 1,
    name: "Rajesh Kumar",
    age: 45,
    condition: "Kidney Disease",
    location: "Delhi",
    story: "After 6 months of Ayurvedic treatment at Ayurakshak, my kidney function improved significantly. The doctors were very caring and the treatment was completely natural.",
    videoId: "dQw4w9WgXcQ", // Sample YouTube video ID
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    rating: 5,
    treatmentDuration: "6 months"
  },
  {
    id: 2,
    name: "Priya Sharma",
    age: 38,
    condition: "Diabetes",
    location: "Mumbai",
    story: "My blood sugar levels are now completely normal thanks to Ayurakshak's natural treatment. No more insulin injections needed!",
    videoId: "dQw4w9WgXcQ", // Sample YouTube video ID
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    rating: 5,
    treatmentDuration: "4 months"
  },
  {
    id: 3,
    name: "Amit Patel",
    age: 52,
    condition: "Heart Disease",
    location: "Ahmedabad",
    story: "The Panchakarma therapy and herbal medicines helped me avoid heart surgery. I feel healthier than ever before.",
    videoId: "dQw4w9WgXcQ", // Sample YouTube video ID
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    rating: 5,
    treatmentDuration: "8 months"
  },
  {
    id: 4,
    name: "Sunita Devi",
    age: 41,
    condition: "Liver Disease",
    location: "Jaipur",
    story: "Ayurakshak's treatment reversed my liver damage completely. The doctors explained everything clearly and gave me hope.",
    videoId: "dQw4w9WgXcQ", // Sample YouTube video ID
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    rating: 5,
    treatmentDuration: "5 months"
  }
];

export default function PatientStories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="patient-stories" className="py-20 warm-gradient-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-red-500 mr-3" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Hear from Our Patients
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories of healing and hope from patients who found their path to wellness 
            through our natural Ayurvedic treatments.
          </p>
        </motion.div>

        {/* Patient Stories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {patientStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full border-2 border-orange-200 hover:border-orange-300 transition-all duration-300 warm-shadow bg-white">
                <CardContent className="p-0">
                  {/* Video Thumbnail */}
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={story.thumbnail}
                      alt={`${story.name} testimonial`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => openVideo(story.videoId)}
                        className="bg-orange-600 hover:bg-orange-700 text-white rounded-full p-4 shadow-lg"
                      >
                        <Play className="w-8 h-8 ml-1" />
                      </motion.button>
                    </div>
                    
                    {/* Treatment Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-sm font-semibold text-orange-600">{story.condition}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">({story.rating}.0)</span>
                    </div>

                    {/* Quote */}
                    <div className="relative mb-4">
                      <Quote className="w-6 h-6 text-orange-300 absolute -top-2 -left-1" />
                      <p className="text-gray-700 italic pl-6 leading-relaxed">{story.story}</p>
                    </div>

                    {/* Patient Info */}
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="font-semibold text-gray-900 mb-1">{story.name}, {story.age}</h4>
                      <p className="text-sm text-gray-600 mb-2">{story.location}</p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-orange-600 font-medium">Treatment: {story.treatmentDuration}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => openVideo(story.videoId)}
                          className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                        >
                          Watch Story
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-orange-200 warm-shadow">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Healing Journey?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of patients who have experienced the power of natural healing. 
              Your success story could be next!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full"
                  onClick={() => window.open('tel:+919259651812', '_self')}
                >
                  Book Free Consultation
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-full"
                  onClick={() => window.open('https://wa.me/919259651812?text=Hi! I would like to know more about Ayurvedic treatment options.', '_blank')}
                >
                  WhatsApp Us
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Video Modal */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={closeVideo}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="Patient Story"
                className="w-full h-full rounded-lg"
                allowFullScreen
              />
              <button
                onClick={closeVideo}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

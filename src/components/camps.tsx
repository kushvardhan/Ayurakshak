"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, MapPin, Phone, User, Users } from "lucide-react";
import { useRef, useState } from "react";

const todaysEvents = [
  {
    id: 1,
    date: "17-09-2025",
    location:
      "H.No-157-D, Street No-4, Mehal Mubarak Colony, Sangrur, Punjab 148001",
    doctor: "Dr. Rajesh Kumar",
    phone: "+91 92596 51812",
    time: "10:00 AM - 6:00 PM",
  },
  {
    id: 2,
    date: "17-09-2025",
    location:
      "25A Nandan Road, Near Netaji Bhaban Metro Station, Kolkata, West Bengal 700025",
    doctor: "Dr. Priya Sharma",
    phone: "+91 92596 51812",
    time: "9:00 AM - 5:00 PM",
  },
];

const upcomingEvents = [
  {
    id: 1,
    date: "23-09-2025",
    location:
      "Shella Bypass To Sonipat Road, 1st Floor, Rohtak, Haryana 124001",
    doctor: "Dr. Amit Patel",
    phone: "+91 92596 51812",
    time: "10:00 AM - 6:00 PM",
  },
  {
    id: 2,
    date: "22-09-2025",
    location:
      "Shop No. 91, Near Shri Ram Healthcare, Dabwali Road, Sirsa, Haryana 125055",
    doctor: "Dr. Sunita Devi",
    phone: "+91 92596 51812",
    time: "9:00 AM - 5:00 PM",
  },
  {
    id: 3,
    date: "22-09-2025",
    location:
      "#18, Krishna Nagar Industrial Area, Near Christ College, Hosur Main Road, Koramangala, Bangalore, Karnataka 560029",
    doctor: "Dr. Vikram Singh",
    phone: "+91 92596 51812",
    time: "10:00 AM - 6:00 PM",
  },
  {
    id: 4,
    date: "20-09-2025",
    location:
      "B-13, Block-B Ranjeet Avenue Inside Lakme Saloon Street, Amritsar, Punjab 143001",
    doctor: "Dr. Meera Gupta",
    phone: "+91 92596 51812",
    time: "9:00 AM - 5:00 PM",
  },
  {
    id: 5,
    date: "19-09-2025",
    location: "36 A Model Town, Cool Road, Jalandhar, Punjab 144001",
    doctor: "Dr. Ravi Kumar",
    phone: "+91 92596 51812",
    time: "10:00 AM - 6:00 PM",
  },
  {
    id: 6,
    date: "18-09-2025",
    location: "Shop No 12-13, Opposite Bus Stand, Ludhiana, Punjab 141001",
    doctor: "Dr. Anjali Sharma",
    phone: "+91 92596 51812",
    time: "9:00 AM - 5:00 PM",
  },
];

const campTypes = [
  {
    name: "72 Hours Camp",
    description: "Intensive 3-day health camps for comprehensive treatment",
    available: true,
  },
  {
    name: "Fibro Camp",
    description: "Specialized camps for fibromyalgia and chronic pain",
    available: true,
  },
  {
    name: "Diabetes Camp",
    description: "Focused camps for diabetes management and reversal",
    available: false,
  },
];

export default function Camps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"today" | "upcoming">("today");

  return (
    <section id="camps" className="py-12 md:py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="flex items-center justify-center mb-3">
            <Calendar className="w-6 h-6 md:w-8 md:h-8 text-green-600 mr-2 md:mr-3" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Camps & Events
            </h2>
          </div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Stay informed about our upcoming health check-up events to enhance
            your well-being and community connection.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-100 rounded-full p-1 flex">
            <button
              onClick={() => setActiveTab("today")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "today"
                  ? "bg-orange-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-orange-600"
              }`}
            >
              Today's Events
            </button>
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "upcoming"
                  ? "bg-orange-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-orange-600"
              }`}
            >
              Upcoming Events
            </button>
          </div>
        </motion.div>

        {/* Events Content */}
        <div className="mb-16">
          {activeTab === "today" && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {todaysEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-2 border-orange-200 hover:border-orange-300 transition-all duration-300 warm-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="bg-orange-100 rounded-lg p-3">
                          <Calendar className="w-6 h-6 text-orange-600" />
                        </div>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          Today
                        </span>
                      </div>

                      <h3 className="font-bold text-gray-900 mb-2">
                        {event.date}
                      </h3>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                          <p className="text-gray-600 text-sm">
                            {event.location}
                          </p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <User className="w-4 h-4 text-gray-500" />
                          <p className="text-gray-600 text-sm">
                            {event.doctor}
                          </p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <p className="text-gray-600 text-sm">{event.time}</p>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <Button
                          size="sm"
                          className="flex-1 bg-orange-600 hover:bg-orange-700 text-white"
                          onClick={() =>
                            window.open(`tel:${event.phone}`, "_self")
                          }
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                        >
                          View Profile
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "upcoming" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-2 border-orange-200 hover:border-orange-300 transition-all duration-300 warm-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="bg-blue-100 rounded-lg p-3">
                          <Calendar className="w-6 h-6 text-blue-600" />
                        </div>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          Upcoming
                        </span>
                      </div>

                      <h3 className="font-bold text-gray-900 mb-2">
                        {event.date}
                      </h3>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                          <p className="text-gray-600 text-sm">
                            {event.location}
                          </p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <User className="w-4 h-4 text-gray-500" />
                          <p className="text-gray-600 text-sm">
                            {event.doctor}
                          </p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <p className="text-gray-600 text-sm">{event.time}</p>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <Button
                          size="sm"
                          className="flex-1 bg-orange-600 hover:bg-orange-700 text-white"
                          onClick={() =>
                            window.open(`tel:${event.phone}`, "_self")
                          }
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                        >
                          View Profile
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Camp Types */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Special Camp Programs
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {campTypes.map((camp, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                  camp.available
                    ? "border-orange-200 bg-white warm-shadow"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-gray-900">{camp.name}</h4>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      camp.available
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {camp.available ? "Available" : "Coming Soon"}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{camp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="warm-gradient-bg rounded-2xl p-8 md:p-12 border border-orange-200">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Want to Host a Camp in Your Area?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We organize health camps across India. Contact us to bring our
              expert Ayurvedic doctors and natural healing services to your
              community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full"
                  onClick={() => window.open("tel:+919259651812", "_self")}
                >
                  <Users className="w-5 h-5 mr-2" />
                  Organize a Camp
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 rounded-full"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get More Info
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

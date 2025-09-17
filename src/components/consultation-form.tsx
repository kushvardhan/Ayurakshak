"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Send, Loader2, User, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

interface ConsultationFormData {
  name: string;
  age: string;
  gender: string;
  location: string;
  email: string;
  mobile: string;
  enquiry: string;
}

const diseases = [
  "Kidney Disease",
  "Liver Problem",
  "Heart Disease", 
  "Cancer",
  "Piles",
  "Joint Pain",
  "Knee Pain",
  "Blood Pressure",
  "Diabetes",
  "Thyroid",
  "Migraine",
  "Vitiligo",
  "Infertility Male",
  "Infertility Female",
  "Others"
];

export default function ConsultationForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: "",
    age: "",
    gender: "",
    location: "",
    email: "",
    mobile: "",
    enquiry: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success("Thank you for your inquiry! Our representative will contact you soon to discuss your request.");
      setFormData({
        name: "",
        age: "",
        gender: "",
        location: "",
        email: "",
        mobile: "",
        enquiry: ""
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 warm-gradient-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Have Any Query Or Want To Ask Something?
          </h2>
          <p className="text-lg text-gray-600 mb-2">Fill Form Below</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-2 border-orange-200 warm-shadow bg-white">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium flex items-center mb-2">
                        <User className="w-4 h-4 mr-2" />
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-2 border-gray-200 focus:border-orange-500 transition-colors duration-300"
                        placeholder="Enter Name"
                      />
                    </div>

                    {/* Age */}
                    <div>
                      <Label htmlFor="age" className="text-gray-700 font-medium flex items-center mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        Age *
                      </Label>
                      <Input
                        id="age"
                        name="age"
                        type="number"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                        className="border-2 border-gray-200 focus:border-orange-500 transition-colors duration-300"
                        placeholder="Enter Age"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Gender */}
                    <div>
                      <Label htmlFor="gender" className="text-gray-700 font-medium mb-2 block">
                        Gender *
                      </Label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        required
                        className="w-full border-2 border-gray-200 focus:border-orange-500 transition-colors duration-300 rounded-md px-3 py-2 bg-white"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Location */}
                    <div>
                      <Label htmlFor="location" className="text-gray-700 font-medium flex items-center mb-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        Location *
                      </Label>
                      <Input
                        id="location"
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="border-2 border-gray-200 focus:border-orange-500 transition-colors duration-300"
                        placeholder="Select Location"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium flex items-center mb-2">
                        <Mail className="w-4 h-4 mr-2" />
                        Email ID *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-2 border-gray-200 focus:border-orange-500 transition-colors duration-300"
                        placeholder="Enter Email ID"
                      />
                    </div>

                    {/* Mobile */}
                    <div>
                      <Label htmlFor="mobile" className="text-gray-700 font-medium flex items-center mb-2">
                        <Phone className="w-4 h-4 mr-2" />
                        Mobile Number *
                      </Label>
                      <Input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                        className="border-2 border-gray-200 focus:border-orange-500 transition-colors duration-300"
                        placeholder="Enter Mobile Number"
                      />
                    </div>
                  </div>

                  {/* Enquiry */}
                  <div>
                    <Label htmlFor="enquiry" className="text-gray-700 font-medium mb-2 block">
                      Enquiry *
                    </Label>
                    <select
                      id="enquiry"
                      name="enquiry"
                      value={formData.enquiry}
                      onChange={handleInputChange}
                      required
                      className="w-full border-2 border-gray-200 focus:border-orange-500 transition-colors duration-300 rounded-md px-3 py-2 bg-white"
                    >
                      <option value="">Select Enquiry</option>
                      {diseases.map((disease) => (
                        <option key={disease} value={disease}>{disease}</option>
                      ))}
                    </select>
                  </div>

                  {/* Submit Button */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                    className="text-center pt-4"
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Request A Call Back
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-xl p-6 border border-orange-200 warm-shadow max-w-md mx-auto">
            <h3 className="font-bold text-gray-900 mb-4">Need Immediate Help?</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+91 92596 51812</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>ayurakshak2@gmail.com</span>
              </div>
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white mt-4"
                onClick={() => window.open('https://wa.me/919259651812?text=Hi! I need immediate consultation for my health condition.', '_blank')}
              >
                WhatsApp Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

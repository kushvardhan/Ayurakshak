"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitMessageForm } from "@/lib/actions/formActions";
import { motion, useInView } from "framer-motion";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "ayurakshak2@gmail.com",
    href: "mailto:ayurakshak2@gmail.com",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 92596 51812",
    href: "tel:+919259651812",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "NIRMALA A, RADHA VALLEY, MATHURA, UP, India",
    href: "https://maps.google.com/?q=H+no+-1202+NIRMALA+A,+RADHA+VALLEY,+MATHURA,+UP,+India",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Quick validation with immediate feedback
    const validationErrors = [];
    if (!formData.name.trim()) validationErrors.push("Name is required");
    if (!formData.email.trim()) validationErrors.push("Email is required");
    if (!formData.message.trim()) validationErrors.push("Message is required");

    if (validationErrors.length > 0) {
      toast.error(validationErrors[0]);
      return;
    }

    setIsSubmitting(true);

    // Show immediate optimistic feedback
    toast.loading("Sending your message...", { id: "contact-submit" });

    try {
      const result = await submitMessageForm(formData);

      if (result.success) {
        toast.success(
          "🎉 Message sent successfully! We will get back to you soon.",
          { id: "contact-submit", duration: 5000 }
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        if (result.errors) {
          // Show validation errors with better formatting
          const errorMessage = result.errors[0]?.message || "Validation failed";
          toast.error(errorMessage, { id: "contact-submit" });
        } else {
          toast.error(
            result.message || "Something went wrong. Please try again.",
            { id: "contact-submit" }
          );
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(
        "Network error. Please check your connection or call us directly at +91 92596 51812",
        { id: "contact-submit", duration: 6000 }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 gradient-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your healing journey? Contact us for consultations,
            partnerships, or any questions about our Ayurvedic treatments.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                We're here to help you on your wellness journey. Whether you
                need treatment guidance, want to partner with us, or have
                questions about our services, we'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="block"
                >
                  <Card className="border-2 border-transparent hover:border-green-200 transition-all duration-300">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 rounded-full ${info.bgColor} flex items-center justify-center`}
                      >
                        <info.icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {info.title}
                        </h4>
                        <p className="text-gray-600 whitespace-pre-line">
                          {info.content}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <h4 className="font-semibold text-gray-900 mb-3">
                Response Time
              </h4>
              <p className="text-gray-600 text-sm">
                We typically respond to all inquiries within 24 hours. For
                urgent medical consultations, please call us directly.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="shadow-2xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-2 border-gray-200 focus:border-green-500 transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-gray-700 font-medium"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-2 border-gray-200 focus:border-green-500 transition-colors duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-gray-700 font-medium"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="mt-2 border-2 border-gray-200 focus:border-green-500 transition-colors duration-300 resize-none"
                      placeholder="Tell us about your inquiry or how we can help you..."
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

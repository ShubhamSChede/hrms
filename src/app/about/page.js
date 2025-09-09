'use client';

import { 
  Users, 
  Target, 
  Eye, 
  Award,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  Globe,
  MapPin,
  Calendar,
  TrendingUp,
  Shield,
  Heart
} from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  };

  const team = [
    {
      name: "Rajesh Kumar",
      role: "CEO & Founder",
      image: "/api/placeholder/300/300",
      bio: "15+ years in HR technology, former VP at Infosys",
      linkedin: "#"
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      image: "/api/placeholder/300/300",
      bio: "Expert in cloud architecture and AI, ex-Google engineer",
      linkedin: "#"
    },
    {
      name: "Amit Patel",
      role: "Head of Product",
      image: "/api/placeholder/300/300",
      bio: "Product strategist with 12+ years in SaaS platforms",
      linkedin: "#"
    },
    {
      name: "Sneha Reddy",
      role: "Head of Customer Success",
      image: "/api/placeholder/300/300",
      bio: "Customer experience expert, former Zendesk leader",
      linkedin: "#"
    }
  ];

  const values = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Customer-Centric",
      description: "We put our customers at the heart of everything we do, ensuring their success is our success."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Security First",
      description: "Data security and privacy are non-negotiable. We maintain the highest standards of protection."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "Innovation",
      description: "We continuously innovate to stay ahead of HR technology trends and deliver cutting-edge solutions."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices in all our interactions."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to simplify HR management for Indian businesses"
    },
    {
      year: "2021",
      title: "First 100 Customers",
      description: "Reached our first milestone with 100 satisfied customers across India"
    },
    {
      year: "2022",
      title: "Series A Funding",
      description: "Raised $5M in Series A funding to accelerate product development"
    },
    {
      year: "2023",
      title: "1000+ Customers",
      description: "Crossed 1000+ customers and 50,000+ employees managed on our platform"
    },
    {
      year: "2024",
      title: "SOC2 Certification",
      description: "Achieved SOC2 Type II certification for enterprise-grade security"
    }
  ];

  const stats = [
    { number: "1000+", label: "Happy Customers" },
    { number: "50K+", label: "Employees Managed" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
    { number: "15+", label: "Countries Served" },
    { number: "4.9/5", label: "Customer Rating" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      {/* Navigation moved to global Navbar */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-poppins"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              About
              <span className="text-blue-600"> HRMS Pro</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
            >
              We&apos;re on a mission to revolutionize HR management for businesses across India, 
              making complex HR processes simple, efficient, and accessible to everyone.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-blue-50 p-6 sm:p-8 rounded-xl"
              variants={fadeInLeft}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="flex items-center mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Target className="w-12 h-12 text-blue-600 mr-4" />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-poppins">Our Mission</h2>
              </motion.div>
              <p className="text-base sm:text-lg text-gray-700 mb-6">
                To empower businesses of all sizes with comprehensive HR management solutions 
                that streamline operations, enhance employee experience, and drive organizational success.
              </p>
              <p className="text-gray-600">
                We believe that every business deserves access to world-class HR technology, 
                regardless of their size or budget. Our platform democratizes HR management, 
                making it accessible and affordable for everyone.
              </p>
            </motion.div>

            <motion.div 
              className="bg-green-50 p-6 sm:p-8 rounded-xl"
              variants={fadeInRight}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="flex items-center mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Eye className="w-12 h-12 text-green-600 mr-4" />
                </motion.div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-poppins">Our Vision</h2>
              </motion.div>
              <p className="text-base sm:text-lg text-gray-700 mb-6">
                To become India&apos;s leading HR technology platform, transforming how businesses 
                manage their most valuable asset - their people.
              </p>
              <p className="text-gray-600">
                We envision a future where HR management is seamless, intelligent, and data-driven, 
                enabling businesses to focus on growth while we handle the complexity of people management.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              The results speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind HRMS Pro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth story
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of the HR revolution. Let&apos;s transform your HR operations together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 flex items-center justify-center">
              <Phone className="mr-2 w-5 h-5" />
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">HRMS Pro</h3>
              <p className="text-gray-300 mb-4">
                Complete HR management solution for modern businesses. 
                Streamline your operations with our comprehensive platform.
              </p>
              <div className="flex space-x-4">
                <Globe className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Mail className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Phone className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/#features" className="text-gray-300 hover:text-white">Features</Link></li>
                <li><Link href="/pricing" className="text-gray-300 hover:text-white">Pricing</Link></li>
                <li><Link href="/integrations" className="text-gray-300 hover:text-white">Integrations</Link></li>
                <li><Link href="/api" className="text-gray-300 hover:text-white">API</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                <li><Link href="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link href="/help" className="text-gray-300 hover:text-white">Help Center</Link></li>
                <li><Link href="/docs" className="text-gray-300 hover:text-white">Documentation</Link></li>
                <li><Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 HRMS Pro. All rights reserved. | Made with ❤️ in India
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

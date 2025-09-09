'use client';

import { 
  Clock, 
  DollarSign, 
  Calendar, 
  TrendingUp, 
  UserCheck, 
  Shield, 
  Users,
  FileText,
  BarChart3,
  Smartphone,
  Globe,
  Lock,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail
} from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Features() {
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

  const mainFeatures = [
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "Smart Attendance Management",
      description: "Revolutionary attendance tracking with biometric integration, GPS location tracking, and automated timesheet management.",
      features: [
        "Biometric device integration (fingerprint, face recognition)",
        "GPS-based location tracking for remote workers",
        "Automated timesheet generation",
        "Real-time attendance monitoring",
        "Overtime calculation and alerts",
        "Shift scheduling and management"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-green-600" />,
      title: "Automated Payroll Processing",
      description: "Streamline your payroll operations with our intelligent system that handles complex calculations, tax compliance, and benefit management.",
      features: [
        "Automated salary calculations",
        "Tax computation and filing",
        "Benefits and deductions management",
        "Payslip generation and distribution",
        "Bank transfer integration",
        "Compliance reporting (PF, ESI, TDS)"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      icon: <Calendar className="w-12 h-12 text-purple-600" />,
      title: "Leave Management System",
      description: "Simplify leave requests, approvals, and tracking with our comprehensive leave management solution.",
      features: [
        "Self-service leave application",
        "Automated approval workflows",
        "Leave balance tracking",
        "Holiday calendar management",
        "Leave policy configuration",
        "Integration with attendance system"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-orange-600" />,
      title: "Performance Management",
      description: "Drive employee growth and organizational success with our comprehensive performance management tools.",
      features: [
        "Goal setting and tracking",
        "360-degree feedback system",
        "Performance reviews and ratings",
        "Career development planning",
        "Performance analytics and reports",
        "Recognition and rewards system"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      icon: <UserCheck className="w-12 h-12 text-red-600" />,
      title: "Recruitment & Onboarding",
      description: "Streamline your hiring process from job posting to employee onboarding with our integrated recruitment solution.",
      features: [
        "Job posting and management",
        "Candidate screening and tracking",
        "Interview scheduling",
        "Background verification",
        "Digital onboarding process",
        "Document management"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      icon: <Shield className="w-12 h-12 text-indigo-600" />,
      title: "Compliance & Security",
      description: "Ensure data security and regulatory compliance with our enterprise-grade security features.",
      features: [
        "GDPR and data privacy compliance",
        "SOC2 Type II certification",
        "Role-based access control",
        "Audit trails and logging",
        "Data encryption at rest and in transit",
        "Regular security updates"
      ],
      image: "/api/placeholder/600/400"
    }
  ];

  const additionalFeatures = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Employee Self-Service Portal",
      description: "Empower employees with self-service capabilities for personal information, leave requests, and more."
    },
    {
      icon: <FileText className="w-8 h-8 text-green-600" />,
      title: "Document Management",
      description: "Centralized document storage and management with version control and access permissions."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and analytics to make data-driven HR decisions."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-600" />,
      title: "Mobile App",
      description: "Native mobile applications for iOS and Android with full feature access."
    },
    {
      icon: <Globe className="w-8 h-8 text-red-600" />,
      title: "Multi-language Support",
      description: "Support for multiple languages to serve diverse workforces."
    },
    {
      icon: <Lock className="w-8 h-8 text-indigo-600" />,
      title: "Single Sign-On (SSO)",
      description: "Secure authentication with support for various SSO providers."
    }
  ];

  const integrations = [
    "SAP SuccessFactors", "Workday", "BambooHR", "Slack", "Microsoft Teams",
    "Google Workspace", "Office 365", "QuickBooks", "Tally", "Zoho",
    "Salesforce", "Jira", "Confluence", "Zoom", "Microsoft Teams"
  ];

  return (
    <div className="min-h-screen bg-white">
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
              Comprehensive HR Features
              <span className="text-blue-600"> for Modern Businesses</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
            >
              Discover the full range of HR management capabilities designed to streamline your operations, 
              improve employee experience, and drive organizational success.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {mainFeatures.map((feature, index) => (
              <motion.div 
                key={index} 
                className={`mb-20 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex items-center gap-8 lg:gap-12`}
                variants={fadeInUp}
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="lg:w-1/2"
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                >
                  <motion.div 
                    className="flex items-center mb-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 ml-4 font-poppins">{feature.title}</h2>
                  </motion.div>
                  <p className="text-base sm:text-lg text-gray-600 mb-8">{feature.description}</p>
                  <motion.ul 
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {feature.features.map((item, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  <motion.button 
                    className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.button>
                </motion.div>
                <motion.div 
                  className="lg:w-1/2"
                  variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl h-80 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <motion.div 
                        className="text-6xl mb-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <p>Feature Screenshot</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your HR operations with these powerful additional features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your existing tools and systems for a unified HR experience
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors">
                <div className="text-sm font-medium text-gray-700">{integration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            See how our comprehensive HR features can transform your organization. 
            Book a personalized demo today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 flex items-center justify-center">
              Schedule Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 flex items-center justify-center">
              <Phone className="mr-2 w-5 h-5" />
              Contact Sales
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

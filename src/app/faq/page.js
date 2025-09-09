'use client';

import { 
  ChevronDown, 
  ChevronUp,
  Search,
  HelpCircle,
  Shield,
  Clock,
  Users,
  Menu,
  X,
  Phone,
  Mail,
  Globe
} from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FAQ() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState(new Set());

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

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqCategories = [
    {
      title: "Getting Started",
      icon: <HelpCircle className="w-6 h-6 text-blue-600" />,
      faqs: [
        {
          question: "What makes HRMS Pro different from other HR software?",
          answer: "HRMS Pro combines powerful features with an intuitive interface, specifically designed for Indian businesses. We offer biometric integration, compliance with Indian labor laws, multi-language support, and 24/7 customer support. Our platform scales from 5 to 50,000+ employees seamlessly."
        },
        {
          question: "How quickly can I get started with HRMS Pro?",
          answer: "You can start using HRMS Pro within 24 hours! Our onboarding process includes data migration, team training, and custom configuration. Most businesses are fully operational within 1-2 weeks, with our dedicated success team guiding you every step of the way."
        },
        {
          question: "Do I need to install any software on my computer?",
          answer: "No installation required! HRMS Pro is a cloud-based platform accessible from any device with an internet connection. We also provide mobile apps for iOS and Android for on-the-go access. Your data is securely stored in our certified data centers."
        },
        {
          question: "Can I import my existing employee data?",
          answer: "Absolutely! We support data import from Excel files, CSV files, and most HR software platforms. Our team provides free data migration assistance, ensuring zero data loss and maintaining data integrity throughout the process."
        },
        {
          question: "What happens during the free trial?",
          answer: "Your 14-day free trial includes full access to all features, unlimited employees, and complete support. No credit card required, and you can cancel anytime. Our team will provide personalized onboarding and training to help you get the most out of your trial."
        }
      ]
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="w-6 h-6 text-green-600" />,
      faqs: [
        {
          question: "How secure is my employee data with HRMS Pro?",
          answer: "Your data security is our top priority. We use military-grade 256-bit SSL encryption, AES-256 encryption at rest, and multi-factor authentication. We're SOC2 Type II certified, GDPR compliant, and undergo regular third-party security audits. All data is stored in ISO 27001 certified data centers with 99.9% uptime."
        },
        {
          question: "Do you comply with Indian data protection laws?",
          answer: "Yes, we're fully compliant with the Digital Personal Data Protection Act (DPDPA) 2023 and other Indian data protection regulations. We also comply with state-specific labor laws, PF/ESI regulations, and maintain all required audit trails for government compliance."
        },
        {
          question: "Can I control who has access to sensitive employee information?",
          answer: "Absolutely! HRMS Pro offers granular role-based access control. You can set permissions at the field level, restrict access by department, location, or employee level. All access is logged and auditable, ensuring complete transparency and security."
        },
        {
          question: "What happens if there's a security breach?",
          answer: "We have a comprehensive incident response plan and will notify affected customers within 24 hours of any security incident. We maintain cyber insurance coverage and have 24/7 security monitoring. Our team includes certified security professionals who continuously monitor and improve our security posture."
        },
        {
          question: "Can I get a security audit report?",
          answer: "Yes, we provide SOC2 Type II reports, penetration testing results, and compliance certificates upon request. Enterprise customers receive detailed security documentation and can request custom security assessments for their specific requirements."
        }
      ]
    },
    {
      title: "Features & Functionality",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      faqs: [
        {
          question: "What advanced features does HRMS Pro offer for large enterprises?",
          answer: "Enterprise features include advanced analytics with AI insights, custom workflow automation, multi-location management, advanced reporting with custom dashboards, API access, white-labeling options, dedicated account manager, priority support, and custom integrations. We also offer advanced compliance features, audit trails, and enterprise-grade security."
        },
        {
          question: "How does the AI-powered analytics help with HR decisions?",
          answer: "Our AI analytics provide insights on employee performance trends, attendance patterns, turnover predictions, and productivity metrics. You get automated reports on workforce planning, identify high-performing employees, predict potential issues, and make data-driven decisions with predictive analytics and machine learning algorithms."
        },
        {
          question: "Can I create custom workflows for my company's approval processes?",
          answer: "Yes! HRMS Pro offers a powerful workflow builder where you can create custom approval chains for leave requests, expense claims, performance reviews, and more. You can set up multi-level approvals, conditional logic, automatic escalations, and integrate with your existing business processes."
        },
        {
          question: "How does the mobile app enhance employee experience?",
          answer: "Our mobile app provides 24/7 access to HR services. Employees can check-in/out with GPS tracking, apply for leave, view payslips, update personal information, access company directory, receive notifications, and even participate in performance reviews. The app works offline and syncs when connected."
        },
        {
          question: "What integrations are available with HRMS Pro?",
          answer: "We offer 50+ integrations including accounting software (QuickBooks, Tally), communication tools (Slack, Teams), biometric devices (ZKTeco, HID), ERP systems (SAP, Oracle), and more. We also provide custom API access and webhook support for seamless data flow between systems."
        }
      ]
    },
    {
      title: "Pricing & Billing",
      icon: <Clock className="w-6 h-6 text-orange-600" />,
      faqs: [
        {
          question: "What's included in each pricing tier and how do I choose?",
          answer: "Our Starter plan (₹29/employee/month) includes basic HR features for up to 25 employees. Professional plan (₹79/employee/month) adds advanced features, integrations, and supports up to 100 employees. Enterprise plan (₹199/employee/month) offers unlimited employees, custom features, and dedicated support. We recommend starting with Professional for most businesses and scaling as needed."
        },
        {
          question: "Do you offer volume discounts for large organizations?",
          answer: "Yes! We offer significant volume discounts for organizations with 500+ employees. Discounts start at 15% for 500+ employees and can go up to 40% for 5000+ employees. We also offer custom enterprise pricing with additional benefits like dedicated support, custom integrations, and SLA guarantees."
        },
        {
          question: "What happens if I exceed my employee limit?",
          answer: "We'll notify you when you're approaching your limit and help you upgrade seamlessly. You can add employees immediately or upgrade your plan. We offer flexible scaling options and won't interrupt your service during the transition."
        },
        {
          question: "Can I get a custom quote for my specific needs?",
          answer: "Absolutely! Contact our sales team for a personalized quote based on your specific requirements. We offer custom pricing for unique use cases, special integrations, or if you need features not available in standard plans. We're committed to finding the right solution for your business."
        },
        {
          question: "What's your refund policy?",
          answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied within the first 30 days, we'll provide a full refund. For annual plans, we offer prorated refunds based on unused months. Our goal is your success, and we stand behind our platform."
        }
      ]
    },
    {
      title: "Implementation & Onboarding",
      icon: <Users className="w-6 h-6 text-red-600" />,
      faqs: [
        {
          question: "What does the implementation process look like?",
          answer: "Our implementation follows a proven 4-phase approach: Discovery (understanding your needs), Configuration (setting up your system), Data Migration (transferring your existing data), and Go-Live (training and launch). Most implementations complete in 2-3 weeks with our dedicated project manager guiding you through each step."
        },
        {
          question: "What training and support do you provide during onboarding?",
          answer: "We provide comprehensive training including live webinars, one-on-one sessions, video tutorials, and detailed documentation. Your team gets access to our learning management system, 24/7 support during implementation, and a dedicated success manager who ensures your team is confident using the system."
        },
        {
          question: "Can you migrate data from our existing HR system?",
          answer: "Yes! We have experience migrating from 50+ HR systems including SAP, Workday, BambooHR, and custom solutions. Our data migration team handles everything from data mapping to validation, ensuring 100% data accuracy. We also provide a parallel run period to verify data integrity before going live."
        },
        {
          question: "What if we have unique business processes that don't fit standard workflows?",
          answer: "No problem! Our team specializes in custom configurations. We can create custom fields, approval workflows, reports, and even develop custom features if needed. We work closely with your team to understand your unique requirements and build solutions that fit your business perfectly."
        },
        {
          question: "How do you ensure a smooth transition for our employees?",
          answer: "We provide change management support including communication templates, training schedules, and adoption strategies. Our team conducts user acceptance testing with your employees, provides role-specific training, and offers ongoing support during the transition period to ensure everyone feels confident using the new system."
        }
      ]
    }
  ];

  const filteredFaqs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation moved to global Navbar */}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              Get Answers Fast
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-poppins"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
            >
              Frequently Asked
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Questions</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
            >
              Find answers to common questions about HRMS Pro. 
              Can&apos;t find what you&apos;re looking for? Contact our support team.
            </motion.p>
            
            {/* Search Bar */}
            <motion.div 
              className="max-w-2xl mx-auto relative"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.6 }}
            >
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <motion.input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-16 pr-6 py-5 border-2 border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent text-lg bg-white/10 backdrop-blur-sm text-white placeholder-blue-200"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length === 0 ? (
            <motion.div 
              className="text-center py-12"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600 mb-6">Try searching with different keywords or browse our categories below.</p>
              <motion.button
                onClick={() => setSearchTerm('')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear Search
              </motion.button>
            </motion.div>
          ) : (
            <motion.div 
              className="space-y-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {filteredFaqs.map((category, categoryIndex) => (
                <motion.div 
                  key={categoryIndex} 
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-6 sm:p-8 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
                    <motion.div 
                      className="flex items-center"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white"
                        whileHover={{ rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {category.icon}
                      </motion.div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 ml-4 font-poppins">{category.title}</h2>
                    </motion.div>
                  </div>
                  
                  <div className="divide-y divide-gray-100">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = `${categoryIndex}-${faqIndex}`;
                      const isOpen = openItems.has(globalIndex);
                      
                      return (
                        <motion.div 
                          key={faqIndex} 
                          className="p-6 sm:p-8 hover:bg-gray-50/50 transition-colors duration-200"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: faqIndex * 0.1 }}
                        >
                          <motion.button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full flex items-center justify-between text-left group"
                            whileHover={{ scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 pr-6 group-hover:text-blue-600 transition-colors leading-relaxed">
                              {faq.question}
                            </h3>
                            <motion.div 
                              className="flex-shrink-0"
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {isOpen ? (
                                <ChevronUp className="w-6 h-6 text-blue-600 transition-transform duration-200" />
                              ) : (
                                <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-all duration-200" />
                              )}
                            </motion.div>
                          </motion.button>
                          
                          <motion.div
                            initial={false}
                            animate={{ 
                              height: isOpen ? "auto" : 0,
                              opacity: isOpen ? 1 : 0
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="mt-6 text-gray-700 leading-relaxed text-base sm:text-lg">
                              {faq.answer}
                            </div>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our support team is here to help you get the most out of HRMS Pro
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak with our support team</p>
              <p className="text-blue-600 font-semibold">+91 98765 43210</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Mail className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Get detailed responses</p>
              <p className="text-green-600 font-semibold">support@hrmspro.com</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Globe className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Chat with us instantly</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust HRMS Pro for their HR management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50">
              Start Free Trial
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700">
              <Phone className="mr-2 w-5 h-5 inline" />
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
                <li><Link href="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
                <li><Link href="/help" className="text-gray-300 hover:text-white">Help Center</Link></li>
                <li><Link href="/docs" className="text-gray-300 hover:text-white">Documentation</Link></li>
                <li><Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
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

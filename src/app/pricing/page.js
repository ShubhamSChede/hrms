'use client';

import { 
  Check, 
  X, 
  Star,
  ArrowRight,
  Menu,
  X as CloseIcon,
  Phone,
  Mail,
  Globe,
  Zap,
  Users,
  Building
} from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Pricing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnnual, setIsAnnual] = useState(false);

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

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      price: { monthly: 29, annual: 290 },
      features: [
        "Up to 25 employees",
        "Basic attendance tracking",
        "Simple payroll processing",
        "Leave management",
        "Employee self-service portal",
        "Email support",
        "Mobile app access",
        "Basic reporting"
      ],
      limitations: [
        "No biometric integration",
        "Limited customization",
        "Basic compliance features"
      ],
      popular: false,
      cta: "Start Free Trial",
      color: "blue"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      price: { monthly: 79, annual: 790 },
      features: [
        "Up to 100 employees",
        "Advanced attendance tracking",
        "Automated payroll with tax compliance",
        "Comprehensive leave management",
        "Performance management",
        "Recruitment tools",
        "Advanced reporting & analytics",
        "Priority support",
        "API access",
        "Custom workflows",
        "Integration with 10+ tools"
      ],
      limitations: [],
      popular: true,
      cta: "Start Free Trial",
      color: "green"
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      price: { monthly: 199, annual: 1990 },
      features: [
        "Unlimited employees",
        "Biometric device integration",
        "Advanced payroll with full compliance",
        "Custom leave policies",
        "360-degree performance reviews",
        "Advanced recruitment suite",
        "Custom reporting & dashboards",
        "24/7 dedicated support",
        "Full API access",
        "Custom integrations",
        "White-label options",
        "Advanced security features",
        "Multi-location support",
        "Custom training sessions"
      ],
      limitations: [],
      popular: false,
      cta: "Contact Sales",
      color: "purple"
    }
  ];

  const addOns = [
    {
      name: "Biometric Integration",
      description: "Connect with fingerprint and face recognition devices",
      price: { monthly: 15, annual: 150 },
      per: "per device"
    },
    {
      name: "Advanced Analytics",
      description: "Custom dashboards and advanced reporting",
      price: { monthly: 25, annual: 250 },
      per: "per month"
    },
    {
      name: "Custom Integrations",
      description: "Connect with your existing tools and systems",
      price: { monthly: 50, annual: 500 },
      per: "per integration"
    },
    {
      name: "Priority Support",
      description: "24/7 phone and chat support with SLA",
      price: { monthly: 30, annual: 300 },
      per: "per month"
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for any of our plans. You only pay the monthly or annual subscription fee."
    },
    {
      question: "What happens if I exceed my employee limit?",
      answer: "We'll notify you when you're approaching your limit. You can upgrade your plan or add additional employees for a small per-employee fee."
    },
    {
      question: "Do you offer custom pricing for large organizations?",
      answer: "Yes, we offer custom enterprise pricing for organizations with 500+ employees. Contact our sales team for a personalized quote."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and UPI payments. Enterprise customers can also pay via invoice."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We're SOC2 Type II certified and GDPR compliant. Your data is encrypted and stored in secure, certified data centers."
    }
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
              Simple, Transparent
              <span className="text-blue-600"> Pricing</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
            >
              Choose the perfect plan for your organization. All plans include a 14-day free trial 
              with no credit card required.
            </motion.p>
            
            {/* Billing Toggle */}
            <motion.div 
              className="flex items-center justify-center mb-12"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
            >
              <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <motion.button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`mx-3 relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? 'bg-blue-600' : 'bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="inline-block h-4 w-4 rounded-full bg-white"
                  animate={{ x: isAnnual ? 24 : 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </motion.button>
              <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
                Annual
              </span>
              <motion.span 
                className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isAnnual ? 1 : 0, scale: isAnnual ? 1 : 0.8 }}
                transition={{ duration: 0.3 }}
              >
                Save 20%
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg ${
                  plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">
                        ₹{isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-gray-600">/{isAnnual ? 'year' : 'month'}</span>
                    </div>
                    {isAnnual && (
                      <p className="text-sm text-green-600 font-medium">
                        Save ₹{(plan.price.monthly * 12) - plan.price.annual}/year
                      </p>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation, idx) => (
                      <li key={idx} className="flex items-start">
                        <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-500">{limitation}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : plan.color === 'blue'
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Add-ons & Extensions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your HRMS experience with these powerful add-ons
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{addon.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{addon.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ₹{isAnnual ? addon.price.annual : addon.price.monthly}
                  </span>
                  <span className="text-gray-600 text-sm">/{isAnnual ? 'year' : 'month'}</span>
                  <span className="text-gray-500 text-sm ml-1">{addon.per}</span>
                </div>
                <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
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
            Start your free trial today and experience the power of HRMS Pro. 
            No credit card required, cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 flex items-center justify-center">
              Start Free Trial
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
                <li><a href="/#features" className="text-gray-300 hover:text-white">Features</a></li>
                <li><a href="/pricing" className="text-gray-300 hover:text-white">Pricing</a></li>
                <li><a href="/integrations" className="text-gray-300 hover:text-white">Integrations</a></li>
                <li><a href="/api" className="text-gray-300 hover:text-white">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="/careers" className="text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="/blog" className="text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="/help" className="text-gray-300 hover:text-white">Help Center</a></li>
                <li><a href="/docs" className="text-gray-300 hover:text-white">Documentation</a></li>
                <li><a href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-300 hover:text-white">Terms of Service</a></li>
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

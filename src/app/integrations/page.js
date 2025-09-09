'use client';

import { 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  Globe,
  Settings,
  Shield,
  Clock,
  Users,
  BarChart3,
  FileText,
  Smartphone,
  Database,
  Cloud
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Integrations() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const integrationCategories = [
    {
      title: "Accounting & Finance",
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      integrations: [
        { name: "QuickBooks", logo: "QB", status: "Available", description: "Sync payroll data with QuickBooks accounting" },
        { name: "Tally", logo: "T", status: "Available", description: "Indian accounting software integration" },
        { name: "Xero", logo: "X", status: "Available", description: "Cloud-based accounting platform" },
        { name: "SAP FICO", logo: "SAP", status: "Available", description: "Enterprise financial management" },
        { name: "Oracle Financials", logo: "O", status: "Available", description: "Comprehensive financial suite" }
      ]
    },
    {
      title: "Communication & Collaboration",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      integrations: [
        { name: "Slack", logo: "S", status: "Available", description: "Team communication and notifications" },
        { name: "Microsoft Teams", logo: "MS", status: "Available", description: "Video conferencing and chat" },
        { name: "Zoom", logo: "Z", status: "Available", description: "Video meetings and webinars" },
        { name: "Google Workspace", logo: "G", status: "Available", description: "Gmail, Calendar, and Drive integration" },
        { name: "Office 365", logo: "O365", status: "Available", description: "Microsoft productivity suite" }
      ]
    },
    {
      title: "Biometric & Hardware",
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      integrations: [
        { name: "ZKTeco", logo: "ZK", status: "Available", description: "Fingerprint and face recognition devices" },
        { name: "HID Global", logo: "HID", status: "Available", description: "Access control and time tracking" },
        { name: "Suprema", logo: "S", status: "Available", description: "Biometric authentication solutions" },
        { name: "Mantra", logo: "M", status: "Available", description: "Indian biometric device manufacturer" },
        { name: "Matrix", logo: "MX", status: "Available", description: "Security and access control systems" }
      ]
    },
    {
      title: "ERP & Business Systems",
      icon: <Database className="w-8 h-8 text-orange-600" />,
      integrations: [
        { name: "SAP SuccessFactors", logo: "SAP", status: "Available", description: "Enterprise HR management suite" },
        { name: "Workday", logo: "W", status: "Available", description: "Cloud-based HR and finance platform" },
        { name: "Oracle HCM", logo: "O", status: "Available", description: "Human capital management" },
        { name: "BambooHR", logo: "B", status: "Available", description: "Small business HR software" },
        { name: "Zoho People", logo: "Z", status: "Available", description: "Complete HR management solution" }
      ]
    },
    {
      title: "Project Management",
      icon: <Settings className="w-8 h-8 text-red-600" />,
      integrations: [
        { name: "Jira", logo: "J", status: "Available", description: "Issue tracking and project management" },
        { name: "Asana", logo: "A", status: "Available", description: "Team collaboration and task management" },
        { name: "Trello", logo: "T", status: "Available", description: "Visual project management" },
        { name: "Monday.com", logo: "M", status: "Available", description: "Work operating system" },
        { name: "Confluence", logo: "C", status: "Available", description: "Team collaboration and documentation" }
      ]
    },
    {
      title: "CRM & Sales",
      icon: <BarChart3 className="w-8 h-8 text-indigo-600" />,
      integrations: [
        { name: "Salesforce", logo: "SF", status: "Available", description: "Customer relationship management" },
        { name: "HubSpot", logo: "H", status: "Available", description: "Inbound marketing and sales platform" },
        { name: "Pipedrive", logo: "P", status: "Available", description: "Sales pipeline management" },
        { name: "Zoho CRM", logo: "Z", status: "Available", description: "Complete customer relationship suite" },
        { name: "Freshworks", logo: "F", status: "Available", description: "Customer engagement platform" }
      ]
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Seamless Data Flow",
      description: "Automatically sync data between systems without manual intervention"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Real-time Updates",
      description: "Get instant updates across all connected platforms"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Secure Integration",
      description: "Enterprise-grade security for all data transfers"
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-500" />,
      title: "Easy Setup",
      description: "One-click integration with guided setup process"
    }
  ];

  const apiFeatures = [
    "RESTful API with comprehensive documentation",
    "Webhook support for real-time notifications",
    "OAuth 2.0 authentication",
    "Rate limiting and throttling",
    "SDK support for popular programming languages",
    "Sandbox environment for testing",
    "24/7 API support and monitoring"
  ];

  const customIntegration = [
    "Custom API development",
    "Legacy system integration",
    "Data migration services",
    "Custom webhook development",
    "Third-party service integration",
    "Performance optimization",
    "Ongoing maintenance and support"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation moved to global Navbar */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful
              <span className="text-blue-600"> Integrations</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect HRMS Pro with 50+ popular business tools and platforms. 
              Seamlessly integrate with your existing workflow and maximize productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 flex items-center justify-center">
                View All Integrations
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 flex items-center justify-center">
                <Settings className="mr-2 w-5 h-5" />
                API Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Integrations?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for modern businesses that need seamless connectivity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Integration Categories
            </h2>
            <p className="text-xl text-gray-600">
              Connect with the tools you already use
            </p>
          </div>
          
          <div className="space-y-12">
            {integrationCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex items-center mb-8">
                  {category.icon}
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.integrations.map((integration, integrationIndex) => (
                    <div key={integrationIndex} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <span className="text-lg font-bold text-gray-700">{integration.logo}</span>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                          {integration.status}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{integration.name}</h4>
                      <p className="text-gray-600 text-sm">{integration.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Developer-Friendly API
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Build custom integrations with our comprehensive REST API. 
                Access all HRMS Pro features programmatically and create seamless workflows.
              </p>
              
              <ul className="space-y-4 mb-8">
                {apiFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 flex items-center justify-center">
                  <FileText className="mr-2 w-5 h-5" />
                  API Documentation
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 flex items-center justify-center">
                  <Cloud className="mr-2 w-5 h-5" />
                  Sandbox Access
                </button>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-8">
              <div className="text-green-400 text-sm font-mono mb-4">{/* Example API Call */}</div>
              <pre className="text-gray-300 text-sm overflow-x-auto">
{`curl -X POST https://api.hrmspro.com/v1/employees \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Doe",
    "email": "john@company.com",
    "department": "Engineering",
    "position": "Software Developer"
  }'`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need a Custom Integration?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integration experts can help you connect with any system or platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Custom Integration Services</h3>
              <ul className="space-y-4 mb-8">
                {customIntegration.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                Get Custom Quote
              </button>
            </div>
            
            <div className="bg-blue-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Integration Support</h3>
              <p className="text-blue-100 mb-6">
                Our dedicated integration team provides end-to-end support for all your connectivity needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3" />
                  <span>24/7 Technical Support</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-3" />
                  <span>Security & Compliance</span>
                </div>
                <div className="flex items-center">
                  <Settings className="w-5 h-5 mr-3" />
                  <span>Ongoing Maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Connect Your Systems?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start integrating HRMS Pro with your existing tools today. 
            Our team is here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 flex items-center justify-center">
              Start Integration
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 flex items-center justify-center">
              <Phone className="mr-2 w-5 h-5" />
              Contact Integration Team
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

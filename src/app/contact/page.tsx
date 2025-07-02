'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  HeartIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    newsletter: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        newsletter: false
      })
    }, 3000)
  }

  const contactMethods = [
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      title: "Call Us",
      description: "Speak with our fragrance experts",
      contact: "+91 98335-56611",
      action: "tel:+919833556611",
      actionText: "Call Now"
    },
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      title: "Email Us",
      description: "Get detailed responses to your queries",
      contact: "care@pranaara.com",
      action: "mailto:care@pranaara.com",
      actionText: "Send Email"
    },
    {
      icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />,
      title: "Live Chat",
      description: "Instant support for immediate assistance",
      contact: "Available 10 AM - 8 PM",
      action: "#",
      actionText: "Start Chat"
    },
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: "Visit Store",
      description: "Experience fragrances in person",
      contact: "Mumbai, Maharashtra",
      action: "#",
      actionText: "Get Directions"
    }
  ]

  const departments = [
    {
      icon: <ShoppingBagIcon className="h-6 w-6" />,
      title: 'Order Support',
      description: 'Help with orders, shipping, and delivery',
      email: 'orders@pranaara.com'
    },
    {
      icon: <HeartIcon className="h-6 w-6" />,
      title: 'Product Consultation',
      description: 'Get personalized fragrance recommendations',
      email: 'consultant@pranaara.com'
    },
    {
      icon: <QuestionMarkCircleIcon className="h-6 w-6" />,
      title: 'General Inquiries',
      description: 'For partnerships, press, and other questions',
      email: 'info@pranaara.com'
    }
  ]

  const businessHours = [
    { day: 'Monday - Friday', hours: '10:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ]

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 3-day return policy for sealed, unused products in original packaging. Items must be returned in the same condition they were received."
    },
    {
      question: "Do you offer fragrance consultations?",
      answer: "Yes! Our expert perfumers offer personalized fragrance consultations both in-store and virtually to help you find your perfect scent."
    },
    {
      question: "How long do your perfumes last?",
      answer: "Our Eau de Parfum concentrations typically last 6-8 hours, while our premium collections can last 8-12 hours depending on skin type and application."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we ship across India. International shipping is coming soon. Subscribe to our newsletter for updates on international availability."
    },
    {
      question: "Are your fragrances suitable for sensitive skin?",
      answer: "Our fragrances are crafted with high-quality ingredients. However, we recommend patch testing for those with sensitive skin. Contact us for ingredient lists."
    },
    {
      question: "Can I customize or create a personal fragrance?",
      answer: "Yes! We offer bespoke fragrance services for special occasions. Contact our perfumers to discuss your custom fragrance journey."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 gradient-luxury overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get in <span className="text-gradient-gold">Touch</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Have questions about our fragrances? Need personalized recommendations? 
            Our fragrance experts are here to help you find your perfect scent.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Preferred Way to Connect</h2>
            <p className="text-lg text-gray-600">Multiple ways to reach us for all your fragrance needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} luxury className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-luxury-gold">{method.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                  <p className="font-medium mb-4">{method.contact}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(method.action, '_blank')}
                  >
                    {method.actionText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card luxury>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-600 mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="product-inquiry">Product Inquiry</option>
                        <option value="fragrance-consultation">Fragrance Consultation</option>
                        <option value="order-support">Order Support</option>
                        <option value="custom-fragrance">Custom Fragrance</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="newsletter"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-luxury-gold focus:ring-luxury-gold border-gray-300 rounded"
                      />
                      <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                        Subscribe to our newsletter for fragrance tips and exclusive offers
                      </label>
                    </div>

                    <Button
                      type="submit"
                      variant="luxury"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Store Information & FAQ */}
          <div className="space-y-8">
            {/* Store Info */}
            <Card luxury>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Visit Our Store</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPinIcon className="h-6 w-6 text-luxury-gold mt-1" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-600">
                        Pranaara Perfumes<br />
                        123 Fragrance Street, Bandra West<br />
                        Mumbai, Maharashtra 400050<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <ClockIcon className="h-6 w-6 text-luxury-gold mt-1" />
                    <div>
                      <h3 className="font-semibold">Store Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 10:00 AM - 8:00 PM</p>
                        <p>Saturday: 10:00 AM - 6:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="font-semibold mb-3">Department Contacts</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Order Support:</span>
                        <span className="font-medium">orders@pranaara.com</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Product Consultation:</span>
                        <span className="font-medium">consult@pranaara.com</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">General Inquiries:</span>
                        <span className="font-medium">info@pranaara.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card luxury>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group">
                      <summary className="flex justify-between items-center cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="font-medium">{faq.question}</span>
                        <span className="text-luxury-gold group-open:rotate-180 transition-transform">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <div className="mt-2 p-4 text-gray-600 text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 
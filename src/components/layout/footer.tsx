import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  TruckIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export function Footer() {
  const footerSections = [
    {
      title: 'Customer Care',
      links: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'Track Your Order', href: '/track-order' },
        { name: 'Shipping Information', href: '/shipping' },
        { name: 'Returns & Exchanges', href: '/returns' },
        { name: 'Size Guide', href: '/size-guide' },
        { name: 'Care Instructions', href: '/care' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Customer Reviews', href: '/reviews' }
      ]
    },
    {
      title: 'About Pranaara',
      links: [
        { name: 'Our Story', href: '/about' },
        { name: 'Craftsmanship', href: '/craftsmanship' },
        { name: 'Sustainability', href: '/sustainability' },
        { name: 'Quality Promise', href: '/quality' },
        { name: 'Blog', href: '/blog' },
        { name: 'Press', href: '/press' },
        { name: 'Careers', href: '/careers' },
        { name: 'Store Locator', href: '/stores' }
      ]
    },
    {
      title: 'Shop Categories',
      links: [
        { name: 'Luxury Collection', href: '/shop/luxury' },
        { name: 'Traditional Attars', href: '/shop/attar' },
        { name: 'Oud Collection', href: '/shop/oud' },
        { name: 'Floral Fragrances', href: '/shop/floral' },
        { name: 'Woody & Earthy', href: '/shop/woody' },
        { name: 'Fresh & Aquatic', href: '/shop/fresh' },
        { name: 'Gift Sets', href: '/shop/gifts' },
        { name: 'Sale Items', href: '/shop/sale' }
      ]
    },
    {
      title: 'Legal & Policies',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Refund Policy', href: '/refund-policy' },
        { name: 'Wholesale Inquiry', href: '/wholesale' },
        { name: 'Affiliate Program', href: '/affiliate' },
        { name: 'Bulk Orders', href: '/bulk-orders' },
        { name: 'Corporate Gifts', href: '/corporate' }
      ]
    }
  ]

  const paymentMethods = [
    { name: 'Visa', src: '/payment/visa.svg' },
    { name: 'Mastercard', src: '/payment/mastercard.svg' },
    { name: 'American Express', src: '/payment/amex.svg' },
    { name: 'PayPal', src: '/payment/paypal.svg' },
    { name: 'UPI', src: '/payment/upi.svg' },
    { name: 'Razorpay', src: '/payment/razorpay.svg' }
  ]

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/pranaara', icon: '📷' },
    { name: 'Facebook', href: 'https://facebook.com/pranaara', icon: '📘' },
    { name: 'YouTube', href: 'https://youtube.com/pranaara', icon: '📺' },
    { name: 'Twitter', href: 'https://twitter.com/pranaara', icon: '🐦' },
    { name: 'Pinterest', href: 'https://pinterest.com/pranaara', icon: '📌' }
  ]

  const features = [
    {
      icon: <TruckIcon className="h-6 w-6" />,
      title: 'Free Shipping',
      description: 'On orders over ₹999'
    },
    {
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      title: 'Easy Returns',
      description: '3 days return policy'
    },
    {
      icon: <CreditCardIcon className="h-6 w-6" />,
      title: 'Secure Payment',
      description: '100% secure checkout'
    },
    {
      icon: <ClockIcon className="h-6 w-6" />,
      title: '24/7 Support',
      description: 'Dedicated customer care'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Features Section */}
      <div className="border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="text-luxury-gold">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">Stay Updated with Pranaara</h2>
              <p className="text-gray-400">
                Subscribe to our newsletter for exclusive offers, new arrivals, and fragrance tips.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button variant="luxury" className="whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="pranaara-brand text-xl text-white">
                PRANAARA
              </div>
            </Link>
            <p className="text-gray-400 mb-6 text-sm">
              Premium Indian perfumes crafted with the finest ingredients. 
              Experience luxury fragrances that tell your unique story.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-luxury-gold" />
                <div>
                  <p className="text-sm font-medium">Customer Care</p>
                  <p className="text-sm text-gray-400">+91 98335-56611</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="h-5 w-5 text-luxury-gold" />
                <div>
                  <p className="text-sm font-medium">Email Us</p>
                  <p className="text-sm text-gray-400">care@pranaara.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 text-luxury-gold mt-1" />
                <div>
                  <p className="text-sm font-medium">Address</p>
                  <p className="text-sm text-gray-400">
                    Mumbai, Maharashtra<br />
                    India - 400007
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Follow us:</span>
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-luxury-gold transition-colors"
                  title={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">We accept:</span>
              <div className="flex items-center gap-2">
                {paymentMethods.map((method) => (
                  <div
                    key={method.name}
                    className="w-10 h-6 bg-white rounded flex items-center justify-center"
                    title={method.name}
                  >
                    <span className="text-xs text-gray-600">{method.name.slice(0, 4)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-sm text-gray-400">
              <p>© 2024 Pranaara. All rights reserved.</p>
              <p className="mt-1">
                Made with ❤️ in India | 
                <Link href="/privacy" className="hover:text-white ml-1">Privacy Policy</Link> | 
                <Link href="/terms" className="hover:text-white ml-1">Terms of Service</Link>
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-400">
                <span>🇮🇳 India (₹INR)</span>
              </div>
              <div className="text-sm text-gray-400">
                <span>🌐 English</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <h4 className="text-sm font-semibold mb-2">Business Hours</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-400">
              <div>Monday - Saturday: 11:00 AM - 7:30 PM</div>
              <div>Sunday: 12:00 PM - 6:00 PM</div>
              <div>Customer Support: 24/7 (Email)</div>
              <div>Phone Support: Mon-Sat, 10 AM - 8 PM</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 
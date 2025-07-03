'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  ShoppingBagIcon, 
  UserIcon, 
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
  HeartIcon,
  ChevronDownIcon,
  PhoneIcon,
  EnvelopeIcon,
  TruckIcon,
  ShieldCheckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export function Header() {
  const { data: session } = useSession()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  // Enhanced navigation structure inspired by FridayCharm
  const navigation = [
    {
      name: 'Home',
      href: '/',
      type: 'simple'
    },
    {
      name: 'Designer Perfumes',
      href: '/shop/designer',
      type: 'mega',
      categories: [
        {
          title: 'Premium Brands',
          items: [
            { name: 'Luxury Collection', href: '/shop/luxury' },
            { name: 'Limited Edition', href: '/shop/limited' },
            { name: 'Signature Series', href: '/shop/signature' },
            { name: 'Celebrity Inspired', href: '/shop/celebrity' }
          ]
        },
        {
          title: 'By Occasion',
          items: [
            { name: 'Evening Wear', href: '/shop/evening' },
            { name: 'Daily Wear', href: '/shop/daily' },
            { name: 'Special Events', href: '/shop/events' },
            { name: 'Workplace', href: '/shop/workplace' }
          ]
        },
        {
          title: 'By Season',
          items: [
            { name: 'Summer Fresh', href: '/shop/summer' },
            { name: 'Winter Warm', href: '/shop/winter' },
            { name: 'Monsoon Special', href: '/shop/monsoon' },
            { name: 'All Season', href: '/shop/all-season' }
          ]
        }
      ]
    },
    {
      name: 'Traditional Attars',
      href: '/shop/attar',
      type: 'mega',
      categories: [
        {
          title: 'Pure Attars',
          items: [
            { name: 'Rose Attar', href: '/shop/attar/rose' },
            { name: 'Jasmine Attar', href: '/shop/attar/jasmine' },
            { name: 'Sandalwood Attar', href: '/shop/attar/sandalwood' },
            { name: 'Oud Attar', href: '/shop/attar/oud' }
          ]
        },
        {
          title: 'Blended Attars',
          items: [
            { name: 'Floral Blends', href: '/shop/attar/floral' },
            { name: 'Woody Blends', href: '/shop/attar/woody' },
            { name: 'Spicy Blends', href: '/shop/attar/spicy' },
            { name: 'Oriental Blends', href: '/shop/attar/oriental' }
          ]
        }
      ]
    },
    {
      name: 'Collections',
      href: '/collections',
      type: 'dropdown',
      items: [
        { name: 'Oud Collection', href: '/collections/oud' },
        { name: 'Floral Collection', href: '/collections/floral' },
        { name: 'Woody Collection', href: '/collections/woody' },
        { name: 'Fresh Collection', href: '/collections/fresh' }
      ]
    },
    {
      name: 'About',
      href: '/about',
      type: 'simple'
    },
    {
      name: 'Contact',
      href: '/contact',
      type: 'simple'
    }
  ]

  useEffect(() => {
    if (searchOpen && searchRef.current) {
      searchRef.current.focus()
    }
  }, [searchOpen])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log('Search submitted')
  }

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-luxury-gold text-white text-center py-2 text-sm">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-center gap-4">
          <span className="flex items-center gap-1">
            <TruckIcon className="h-4 w-4" />
            Free shipping on orders over ₹999
          </span>
          <span className="hidden sm:flex items-center gap-1">
            <ShieldCheckIcon className="h-4 w-4" />
            3 Days Easy Returns
          </span>
          <span className="hidden md:flex items-center gap-1">
            <SparklesIcon className="h-4 w-4" />
            Premium Quality Guaranteed
          </span>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 w-full border-b border-luxury-gold/20 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>

            {/* Logo */}
            <div className="flex flex-1 items-center justify-center lg:justify-start">
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative w-12 h-12 flex items-center justify-center logo-circular">
                  <Image
                    src="/WhatsApp Image 2025-04-05 at 13.35.00.jpeg"
                    alt="Pranaara Logo"
                    width={32}
                    height={32}
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="pranaara-brand text-2xl text-luxury-gold">
                  PRANAARA
                </div>
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex lg:gap-x-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.type !== 'simple' && setActiveMenu(item.name)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-luxury-gold transition-colors"
                  >
                    {item.name}
                    {(item.type === 'dropdown' || item.type === 'mega') && (
                      <ChevronDownIcon className="h-4 w-4" />
                    )}
                  </Link>

                  {/* Dropdown menu */}
                  {item.type === 'dropdown' && activeMenu === item.name && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-luxury-gold"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Mega menu */}
                  {item.type === 'mega' && activeMenu === item.name && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-screen max-w-4xl bg-white rounded-lg shadow-lg border border-gray-200 py-6 z-50">
                      <div className="grid grid-cols-3 gap-8 px-6">
                        {item.categories?.map((category) => (
                          <div key={category.title}>
                            <h3 className="text-sm font-semibold text-luxury-gold mb-3">
                              {category.title}
                            </h3>
                            <ul className="space-y-2">
                              {category.items.map((categoryItem) => (
                                <li key={categoryItem.name}>
                                  <Link
                                    href={categoryItem.href}
                                    className="text-sm text-gray-700 hover:text-luxury-gold block"
                                  >
                                    {categoryItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex flex-1 items-center justify-end space-x-4">
              {/* Search */}
              <div className="relative">
                <button 
                  className="p-2 text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={() => setSearchOpen(!searchOpen)}
                >
                  <MagnifyingGlassIcon className="h-6 w-6" />
                  <span className="sr-only">Search</span>
                </button>

                {/* Search dropdown */}
                {searchOpen && (
                  <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50">
                    <form onSubmit={handleSearchSubmit}>
                      <div className="relative">
                        <input
                          ref={searchRef}
                          type="text"
                          placeholder="Search perfumes..."
                          className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
                        />
                        <button
                          type="submit"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-luxury-gold"
                        >
                          <MagnifyingGlassIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </form>
                    <div className="mt-4">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Popular Searches
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {['Oud', 'Rose Attar', 'Sandalwood', 'Jasmine'].map((term) => (
                          <button
                            key={term}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-luxury-gold hover:text-white transition-colors"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Wishlist */}
              <Link 
                href="/wishlist"
                className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors"
              >
                <HeartIcon className="h-6 w-6" />
                <span className="sr-only">Wishlist</span>
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs font-medium text-white flex items-center justify-center">
                  0
                </span>
              </Link>

              {/* Shopping cart */}
              <div className="relative">
                <button 
                  className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors"
                  onClick={() => setCartOpen(!cartOpen)}
                >
                  <ShoppingBagIcon className="h-6 w-6" />
                  <span className="sr-only">Shopping cart</span>
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-luxury-gold text-xs font-medium text-white flex items-center justify-center">
                    0
                  </span>
                </button>

                {/* Mini cart dropdown */}
                {cartOpen && (
                  <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-4">Shopping Cart</h3>
                      <div className="text-center py-8 text-gray-500">
                        <ShoppingBagIcon className="h-12 w-12 mx-auto mb-2 text-gray-300" />
                        <p>Your cart is empty</p>
                        <Button variant="luxury" className="mt-4" asChild>
                          <Link href="/shop">Start Shopping</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* User menu */}
              {session ? (
                <div className="relative">
                  <button className="p-2 text-gray-700 hover:text-primary-600 transition-colors">
                    {session.user?.image ? (
                      <Image
                        src={session.user.image}
                        alt="User avatar"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    ) : (
                      <UserIcon className="h-6 w-6" />
                    )}
                  </button>
                </div>
              ) : (
                <Button
                  variant="luxury"
                  size="sm"
                  onClick={() => signIn()}
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>

          {/* Mobile navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-x-0 top-0 z-50 bg-white shadow-lg transform transition-transform duration-300 ease-in-out safe-area-top">
              <div className="px-4 pt-16 pb-6 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="nav-link block w-full text-left text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 touch-target"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.type === 'dropdown' && item.items && (
                      <div className="ml-4 space-y-1 mt-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block rounded-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600 touch-target"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                    {item.type === 'mega' && item.categories && (
                      <div className="ml-4 space-y-3 mt-2">
                        {item.categories.map((category) => (
                          <div key={category.title}>
                            <h4 className="text-xs font-semibold text-luxury-gold uppercase tracking-wide mb-2">
                              {category.title}
                            </h4>
                            <div className="space-y-1">
                              {category.items.map((categoryItem) => (
                                <Link
                                  key={categoryItem.name}
                                  href={categoryItem.href}
                                  className="block rounded-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600 touch-target"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {categoryItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile-only actions */}
                <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
                  <Link
                    href="/wishlist"
                    className="nav-link flex items-center w-full text-left text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 touch-target"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <HeartIcon className="h-5 w-5 mr-3" />
                    Wishlist
                  </Link>
                  <Link
                    href="/cart"
                    className="nav-link flex items-center w-full text-left text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 touch-target"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <ShoppingBagIcon className="h-5 w-5 mr-3" />
                    Shopping Cart
                  </Link>
                  {!session && (
                    <button
                      onClick={() => {
                        signIn()
                        setMobileMenuOpen(false)
                      }}
                      className="nav-link flex items-center w-full text-left text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600 touch-target"
                    >
                      <UserIcon className="h-5 w-5 mr-3" />
                      Sign In
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Click outside to close */}
        {(searchOpen || cartOpen) && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => {
              setSearchOpen(false)
              setCartOpen(false)
            }}
          />
        )}
      </header>
    </>
  )
} 
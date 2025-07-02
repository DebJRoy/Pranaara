'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  MagnifyingGlassIcon,
  XMarkIcon,
  ClockIcon,
  FireIcon,
  TagIcon,
  StarIcon
} from '@heroicons/react/24/outline'

interface SearchResult {
  id: string
  name: string
  type: 'product' | 'category' | 'brand'
  price?: number
  image?: string
  category?: string
  slug: string
  rating?: number
}

interface AdvancedSearchProps {
  isOpen: boolean
  onClose: () => void
  className?: string
}

export function AdvancedSearch({ isOpen, onClose, className = '' }: AdvancedSearchProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  // Popular search terms
  const popularSearches = [
    'Oud', 'Rose Attar', 'Sandalwood', 'Jasmine', 'Luxury Collection',
    'Traditional Attar', 'Floral', 'Woody', 'Fresh', 'Unisex'
  ]

  // Categories for quick access
  const quickCategories = [
    { name: 'Luxury Collection', href: '/shop/luxury', icon: '✨' },
    { name: 'Traditional Attars', href: '/shop/attar', icon: '🌸' },
    { name: 'Oud Collection', href: '/shop/oud', icon: '🪵' },
    { name: 'Floral Fragrances', href: '/shop/floral', icon: '🌺' },
    { name: 'Woody & Earthy', href: '/shop/woody', icon: '🌲' },
    { name: 'Fresh & Aquatic', href: '/shop/fresh', icon: '🌊' }
  ]

  // Mock search results (in real app, this would come from API)
  const mockResults: SearchResult[] = [
    {
      id: '1',
      name: 'Royal Oud Supreme',
      type: 'product',
      price: 4999,
      image: '/WhatsApp Image 2025-04-05 at 13.35.00.jpeg',
      category: 'Luxury Collection',
      slug: 'royal-oud-supreme',
      rating: 4.8
    },
    {
      id: '2',
      name: 'Mystic Rose Elixir',
      type: 'product',
      price: 3499,
      image: '/WhatsApp Image 2025-04-05 at 13.35.00.jpeg',
      category: 'Floral Fragrances',
      slug: 'mystic-rose-elixir',
      rating: 4.7
    },
    {
      id: '3',
      name: 'Sandalwood Majesty',
      type: 'product',
      price: 2999,
      image: '/WhatsApp Image 2025-04-05 at 13.35.00.jpeg',
      category: 'Traditional Attar',
      slug: 'sandalwood-majesty',
      rating: 4.9
    }
  ]

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem('pranaara-recent-searches')
    if (saved) {
      setRecentSearches(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    if (searchQuery.length > 2) {
      setIsLoading(true)
      // Simulate API delay
      const timeout = setTimeout(() => {
        const filtered = mockResults.filter(result =>
          result.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setSearchResults(filtered)
        setIsLoading(false)
        setShowSuggestions(true)
      }, 300)

      return () => clearTimeout(timeout)
    } else {
      setSearchResults([])
      setShowSuggestions(false)
    }
  }, [searchQuery])

  const handleSearch = (query: string) => {
    if (query.trim()) {
      // Add to recent searches
      const updatedRecent = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5)
      setRecentSearches(updatedRecent)
      localStorage.setItem('pranaara-recent-searches', JSON.stringify(updatedRecent))
      
      // Navigate to search results
      window.location.href = `/search?q=${encodeURIComponent(query)}`
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (selectedIndex >= 0 && searchResults[selectedIndex]) {
        window.location.href = `/products/${searchResults[selectedIndex].slug}`
      } else {
        handleSearch(searchQuery)
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => Math.min(prev + 1, searchResults.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => Math.max(prev - 1, -1))
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem('pranaara-recent-searches')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className={`bg-white shadow-xl ${className}`}>
        <div className="mx-auto max-w-4xl">
          {/* Search Header */}
          <div className="flex items-center gap-4 p-6 border-b border-gray-200">
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                ref={searchInputRef}
                type="text"
                placeholder="Search for perfumes, attars, brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="pl-10 pr-4 py-3 text-lg border-gray-300 focus:border-luxury-gold focus:ring-luxury-gold"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              )}
            </div>
            <Button variant="luxury" onClick={() => handleSearch(searchQuery)}>
              Search
            </Button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-full"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Search Content */}
          <div className="max-h-96 overflow-y-auto">
            {searchQuery.length > 2 ? (
              /* Search Results */
              <div className="p-6">
                {isLoading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-luxury-gold mx-auto"></div>
                    <p className="text-gray-500 mt-2">Searching...</p>
                  </div>
                ) : searchResults.length > 0 ? (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <MagnifyingGlassIcon className="h-5 w-5" />
                      Search Results ({searchResults.length})
                    </h3>
                    <div className="space-y-3" ref={resultsRef}>
                      {searchResults.map((result, index) => (
                        <Link
                          key={result.id}
                          href={`/products/${result.slug}`}
                          className={`flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors ${
                            selectedIndex === index ? 'bg-luxury-gold/10' : ''
                          }`}
                          onClick={onClose}
                        >
                          {result.image && (
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
                              <Image
                                src={result.image}
                                alt={result.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{result.name}</h4>
                            {result.category && (
                              <p className="text-sm text-gray-500">{result.category}</p>
                            )}
                            {result.price && (
                              <p className="text-sm font-semibold text-luxury-gold">
                                ₹{result.price.toLocaleString()}
                              </p>
                            )}
                          </div>
                          {result.rating && (
                            <div className="flex items-center gap-1">
                              <StarIcon className="h-4 w-4 text-yellow-400" />
                              <span className="text-sm text-gray-600">{result.rating}</span>
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <MagnifyingGlassIcon className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                    <p className="text-gray-500">No results found for "{searchQuery}"</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Try searching for different keywords or browse our categories
                    </p>
                  </div>
                )}
              </div>
            ) : (
              /* Default Search Content */
              <div className="p-6 space-y-6">
                {/* Quick Categories */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <TagIcon className="h-5 w-5" />
                    Quick Categories
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {quickCategories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-luxury-gold hover:bg-luxury-gold/5 transition-colors"
                        onClick={onClose}
                      >
                        <span className="text-xl">{category.icon}</span>
                        <span className="text-sm font-medium">{category.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Popular Searches */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <FireIcon className="h-5 w-5" />
                    Popular Searches
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((term) => (
                      <button
                        key={term}
                        onClick={() => {
                          setSearchQuery(term)
                          handleSearch(term)
                        }}
                        className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-luxury-gold hover:text-white transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <ClockIcon className="h-5 w-5" />
                        Recent Searches
                      </h3>
                      <button
                        onClick={clearRecentSearches}
                        className="text-sm text-gray-500 hover:text-gray-700"
                      >
                        Clear all
                      </button>
                    </div>
                    <div className="space-y-2">
                      {recentSearches.map((search) => (
                        <button
                          key={search}
                          onClick={() => {
                            setSearchQuery(search)
                            handleSearch(search)
                          }}
                          className="flex items-center gap-3 p-2 w-full text-left hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <ClockIcon className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">{search}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Search Tips */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Search Tips</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Try searching for specific notes like "rose", "oud", or "sandalwood"</li>
                    <li>• Use occasion-based terms like "evening", "office", or "wedding"</li>
                    <li>• Search by gender: "men", "women", or "unisex"</li>
                    <li>• Look for collections like "luxury", "traditional", or "seasonal"</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 
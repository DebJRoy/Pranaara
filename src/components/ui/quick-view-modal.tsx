'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  XMarkIcon, 
  StarIcon,
  HeartIcon,
  ShoppingBagIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EyeIcon,
  ShareIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'

interface Product {
  id: string
  name: string
  shortDescription?: string
  price: number
  compareAtPrice?: number
  images: { url: string }[]
  category: { name: string }
  gender: string
  weightValue: number
  weightUnit: string
  slug: string
  topNotes?: string[]
  middleNotes?: string[]
  baseNotes?: string[]
  sillage?: string
  longevity?: string
  occasion?: string[]
  season?: string[]
}

interface QuickViewModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState('30ml')
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !product) return null

  const price = Number(product.price)
  const compareAtPrice = product.compareAtPrice ? Number(product.compareAtPrice) : null
  const discount = compareAtPrice ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100) : 0
  const images = product.images.length > 0 ? product.images : [{ url: '/WhatsApp Image 2025-04-05 at 13.35.00.jpeg' }]

  const variants = ['10ml', '30ml', '50ml', '100ml']
  const variantPrices: { [key: string]: number } = {
    '10ml': price * 0.4,
    '30ml': price,
    '50ml': price * 1.5,
    '100ml': price * 2.5
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleAddToCart = () => {
    // Add to cart logic
    console.log('Added to cart:', { product: product.id, variant: selectedVariant, quantity })
  }

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.shortDescription,
        url: `/products/${product.slug}`
      })
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Product Images */}
          <div className="relative bg-gray-50">
            <div className="relative h-96 lg:h-full">
              <Image
                src={images[currentImageIndex].url}
                alt={product.name}
                fill
                className="object-cover"
              />
              
              {/* Discount badge */}
              {discount > 0 && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {discount}% OFF
                </div>
              )}

              {/* Image navigation */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                  >
                    <ChevronLeftIcon className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                  >
                    <ChevronRightIcon className="h-5 w-5" />
                  </button>
                </>
              )}

              {/* Image indicators */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="p-6 lg:p-8 overflow-y-auto">
            <div className="mb-4">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="h-4 w-4 text-yellow-400"
                  />
                ))}
                <span className="text-sm text-gray-500 ml-1">(4.8) • 124 reviews</span>
              </div>
              
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-luxury-gold/10 text-luxury-gold px-3 py-1 rounded-full text-sm font-medium">
                  {product.category.name}
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {product.gender}
                </span>
              </div>

              {product.shortDescription && (
                <p className="text-gray-600 mb-6">
                  {product.shortDescription}
                </p>
              )}
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl font-bold text-luxury-gold">
                  ₹{variantPrices[selectedVariant].toLocaleString()}
                </span>
                {compareAtPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ₹{(compareAtPrice * (variantPrices[selectedVariant] / price)).toLocaleString()}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500">Price inclusive of all taxes</p>
            </div>

            {/* Variant Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`p-3 border rounded-lg text-center transition-colors ${
                      selectedVariant === variant
                        ? 'border-luxury-gold bg-luxury-gold text-white'
                        : 'border-gray-300 hover:border-luxury-gold'
                    }`}
                  >
                    <div className="text-sm font-medium">{variant}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      ₹{variantPrices[variant].toLocaleString()}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Fragrance Notes */}
            {(product.topNotes || product.middleNotes || product.baseNotes) && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Fragrance Notes</h3>
                <div className="space-y-2">
                  {product.topNotes && (
                    <div>
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Top Notes:</span>
                      <p className="text-sm text-gray-700">{product.topNotes.join(', ')}</p>
                    </div>
                  )}
                  {product.middleNotes && (
                    <div>
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Heart Notes:</span>
                      <p className="text-sm text-gray-700">{product.middleNotes.join(', ')}</p>
                    </div>
                  )}
                  {product.baseNotes && (
                    <div>
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Base Notes:</span>
                      <p className="text-sm text-gray-700">{product.baseNotes.join(', ')}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Performance Details */}
            {(product.sillage || product.longevity) && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Performance</h3>
                <div className="grid grid-cols-2 gap-4">
                  {product.sillage && (
                    <div>
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Sillage:</span>
                      <p className="text-sm text-gray-700">{product.sillage}</p>
                    </div>
                  )}
                  {product.longevity && (
                    <div>
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Longevity:</span>
                      <p className="text-sm text-gray-700">{product.longevity}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Quantity Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center border border-gray-300 rounded-lg w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-50"
                >
                  −
                </button>
                <span className="flex-1 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleAddToCart}
                className="w-full"
                variant="luxury"
                size="lg"
              >
                <ShoppingBagIcon className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              
              <div className="flex gap-3">
                <Button
                  onClick={handleWishlistToggle}
                  variant="outline"
                  className="flex-1"
                >
                  {isWishlisted ? (
                    <HeartSolidIcon className="h-5 w-5 mr-2 text-red-500" />
                  ) : (
                    <HeartIcon className="h-5 w-5 mr-2" />
                  )}
                  {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                </Button>
                
                <Button
                  onClick={handleShare}
                  variant="outline"
                  size="lg"
                >
                  <ShareIcon className="h-5 w-5" />
                </Button>
                
                <Button
                  onClick={onClose}
                  variant="outline"
                  size="lg"
                  asChild
                >
                  <a href={`/products/${product.slug}`}>
                    <EyeIcon className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-gray-600">In Stock</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-600">Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-600">Authentic Product</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span className="text-gray-600">Easy Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
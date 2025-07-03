'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { QuickViewModal } from '@/components/ui/quick-view-modal'
import { 
  StarIcon,
  HeartIcon,
  ShoppingBagIcon,
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
  featured?: boolean
}

interface ProductCardProps {
  product: Product
  showQuickActions?: boolean
  className?: string
}

export function ProductCard({ product, showQuickActions = true, className = '' }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [quickViewOpen, setQuickViewOpen] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const primaryImage = product.images[0]?.url || '/WhatsApp Image 2025-04-05 at 13.35.00.jpeg'
  const secondaryImage = product.images[1]?.url || primaryImage
  const price = Number(product.price)
  const compareAtPrice = product.compareAtPrice ? Number(product.compareAtPrice) : null
  const discount = compareAtPrice ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100) : 0

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsWishlisted(!isWishlisted)
  }

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setQuickViewOpen(true)
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    // Add to cart logic
    console.log('Added to cart:', product.id)
  }

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.shortDescription,
        url: `/products/${product.slug}`
      })
    }
  }

  return (
    <>
      <Card 
        luxury 
        className={`group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={`/products/${product.slug}`}>
          <div className="relative aspect-product overflow-hidden">
            {/* Product Images with Hover Effect */}
            <div className="relative w-full h-full">
              <Image
                src={primaryImage}
                alt={product.name}
                fill
                className={`object-cover transition-all duration-500 ${
                  isHovered && secondaryImage !== primaryImage 
                    ? 'opacity-0 scale-110' 
                    : 'opacity-100 scale-100'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
              {secondaryImage !== primaryImage && (
                <Image
                  src={secondaryImage}
                  alt={`${product.name} alternate view`}
                  fill
                  className={`object-cover transition-all duration-500 ${
                    isHovered 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-110'
                  }`}
                />
              )}
            </div>

            {/* Badges */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
              {discount > 0 && (
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                  {discount}% OFF
                </div>
              )}
              {product.featured && (
                <div className="bg-luxury-gold text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                  Featured
                </div>
              )}
            </div>

            {/* Wishlist Button */}
            <button
              onClick={handleWishlistToggle}
              className={`absolute top-4 right-4 z-10 p-2 rounded-full shadow-md transition-all duration-300 ${
                isWishlisted 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white/90 text-gray-700 hover:bg-white hover:text-red-500'
              }`}
            >
              {isWishlisted ? (
                <HeartSolidIcon className="h-5 w-5" />
              ) : (
                <HeartIcon className="h-5 w-5" />
              )}
            </button>

            {/* Quick Actions Overlay */}
            {showQuickActions && (
              <div className={`absolute inset-x-2 sm:inset-x-4 bottom-2 sm:bottom-4 z-10 transition-all duration-300 ${
                isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 sm:p-3 shadow-lg">
                  <div className="flex gap-1 sm:gap-2">
                    <Button
                      size="sm"
                      variant="luxury"
                      className="flex-1 touch-target text-xs sm:text-sm"
                      onClick={handleAddToCart}
                    >
                      <ShoppingBagIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      <span className="hidden sm:inline">Add to Cart</span>
                      <span className="sm:hidden">Add</span>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="touch-target"
                      onClick={handleQuickView}
                    >
                      <EyeIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="touch-target"
                      onClick={handleShare}
                    >
                      <ShareIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Loading skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
          </div>

          <CardContent className="p-3 sm:p-4">
            {/* Rating */}
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400"
                />
              ))}
              <span className="text-xs sm:text-sm text-gray-500 ml-1">(4.8)</span>
            </div>

            {/* Product Name */}
            <h3 className="font-semibold text-base sm:text-lg mb-2 group-hover:text-luxury-gold transition-colors line-clamp-2">
              {product.name}
            </h3>

            {/* Short Description */}
            {product.shortDescription && (
              <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">
                {product.shortDescription}
              </p>
            )}

            {/* Price */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-base sm:text-lg font-bold text-luxury-gold">
                  ₹{price.toLocaleString()}
                </span>
                {compareAtPrice && (
                  <span className="text-xs sm:text-sm text-gray-500 line-through">
                    ₹{compareAtPrice.toLocaleString()}
                  </span>
                )}
              </div>
              <span className="text-xs text-gray-500">
                {product.weightValue}{product.weightUnit}
              </span>
            </div>

            {/* Category and Gender Tags */}
            <div className="flex items-center justify-between text-xs">
              <span className="bg-luxury-gold/10 text-luxury-gold px-2 py-1 rounded-full font-medium">
                {product.category.name}
              </span>
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                {product.gender}
              </span>
            </div>

            {/* Fragrance Notes Preview - Hidden on small screens */}
            {product.topNotes && Array.isArray(product.topNotes) && product.topNotes.length > 0 && (
              <div className="hidden sm:block mt-3 pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500">
                  <span className="font-medium">Top Notes:</span> {product.topNotes.slice(0, 3).join(', ')}
                  {product.topNotes.length > 3 && '...'}
                </p>
              </div>
            )}

            {/* Stock Status */}
            <div className="mt-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-xs text-gray-600">In Stock</span>
              <span className="text-xs text-gray-400 hidden sm:inline">•</span>
              <span className="text-xs text-gray-600 hidden sm:inline">Fast Delivery</span>
            </div>
          </CardContent>
        </Link>
      </Card>

      {/* Quick View Modal */}
      <QuickViewModal
        product={product}
        isOpen={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
      />
    </>
  )
} 
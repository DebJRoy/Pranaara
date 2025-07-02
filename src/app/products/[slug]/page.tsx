'use client'

import { useState, useEffect } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  StarIcon,
  HeartIcon,
  ShareIcon,
  TruckIcon,
  ShieldCheckIcon,
  CheckIcon,
  MinusIcon,
  PlusIcon,
  ChevronRightIcon,
  HomeIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon, StarIcon as StarSolidIcon } from '@heroicons/react/24/solid'

// Mock data - in real app, this would come from API/database
const getProductBySlug = async (slug: string) => {
  // Mock product data inspired by FridayCharm.com
  const mockProduct = {
    id: '1',
    name: 'Majestic Oud Royal',
    slug: 'majestic-oud-royal',
    description: 'An opulent masterpiece featuring authentic Cambodian oud aged for over 20 years. This royal fragrance opens with bergamot and saffron, revealing a heart of Bulgarian rose and pure oud, before settling into a magnificent base of amber, sandalwood, and white musk. A true testament to luxury perfumery.',
    shortDescription: 'Premium aged Cambodian oud with Bulgarian rose and saffron',
    price: 8999,
    compareAtPrice: 12999,
    images: [
      { url: '/WhatsApp Image 2025-04-05 at 13.35.00.jpeg', alt: 'Majestic Oud Royal - Front View' },
      { url: '/WhatsApp Image 2025-04-05 at 13.35.00.jpeg', alt: 'Majestic Oud Royal - Side View' },
      { url: '/WhatsApp Image 2025-04-05 at 13.35.00.jpeg', alt: 'Majestic Oud Royal - Back View' },
      { url: '/WhatsApp Image 2025-04-05 at 13.35.00.jpeg', alt: 'Majestic Oud Royal - Packaging' }
    ],
    category: { name: 'Luxury Collection', slug: 'luxury' },
    brand: 'Pranaara',
    sku: 'PRAN-MOR-100',
    topNotes: 'Bergamot, Saffron, Pink Pepper',
    heartNotes: 'Bulgarian Rose, Cambodian Oud, Jasmine',
    baseNotes: 'Amber, Sandalwood, White Musk, Vanilla',
    fragranceFamily: 'Oriental Woody',
    sillage: 'Very Strong',
    longevity: '12+ hours',
    season: 'Fall, Winter',
    occasion: 'Evening, Special Events, Formal',
    gender: 'Unisex',
    concentration: 'Eau de Parfum',
    variants: [
      { id: '1', size: '10ml', price: 2999, stock: 15 },
      { id: '2', size: '30ml', price: 5999, stock: 25 },
      { id: '3', size: '50ml', price: 8999, stock: 18 },
      { id: '4', size: '100ml', price: 12999, stock: 8 }
    ],
    stock: 46,
    rating: 4.8,
    reviewCount: 324,
    inStock: true,
    featured: true
  }
  
  return mockProduct
}

const relatedProducts = [
  {
    id: '2',
    name: 'Golden Saffron Elixir',
    slug: 'golden-saffron-elixir',
    price: 6999,
    compareAtPrice: 8999,
    image: '/WhatsApp Image 2025-04-05 at 13.35.00.jpeg',
    rating: 4.7,
    category: 'Luxury Collection'
  },
  {
    id: '3',
    name: 'Rose Symphony Absolute',
    slug: 'rose-symphony-absolute',
    price: 4999,
    compareAtPrice: 6499,
    image: '/WhatsApp Image 2025-04-05 at 13.35.00.jpeg',
    rating: 4.6,
    category: 'Floral Fragrances'
  },
  {
    id: '4',
    name: 'Black Oud Royale',
    slug: 'black-oud-royale',
    price: 7999,
    compareAtPrice: 9999,
    image: '/WhatsApp Image 2025-04-05 at 13.35.00.jpeg',
    rating: 4.9,
    category: 'Oud Collection'
  },
  {
    id: '5',
    name: 'Oriental Spice Bazaar',
    slug: 'oriental-spice-bazaar',
    price: 4299,
    compareAtPrice: 5499,
    image: '/WhatsApp Image 2025-04-05 at 13.35.00.jpeg',
    rating: 4.5,
    category: 'Oriental & Spicy'
  }
]

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<any>(null)
  const [selectedVariant, setSelectedVariant] = useState<any>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductBySlug(params.slug)
        if (!productData) {
          notFound()
        }
        setProduct(productData)
        setSelectedVariant(productData.variants[2]) // Default to 50ml
        setLoading(false)
      } catch (error) {
        console.error('Error fetching product:', error)
        notFound()
      }
    }

    fetchProduct()
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-luxury-gold mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product...</p>
        </div>
      </div>
    )
  }

  if (!product) {
    notFound()
  }

  const discount = product.compareAtPrice 
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100) 
    : 0

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= selectedVariant?.stock) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    console.log('Adding to cart:', {
      productId: product.id,
      variantId: selectedVariant?.id,
      quantity
    })
  }

  const handleBuyNow = () => {
    console.log('Buy now:', {
      productId: product.id,
      variantId: selectedVariant?.id,
      quantity
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-luxury-gold flex items-center">
              <HomeIcon className="h-4 w-4 mr-1" />
              Home
            </Link>
            <ChevronRightIcon className="h-4 w-4 text-gray-400" />
            <Link href="/shop" className="text-gray-500 hover:text-luxury-gold">
              Shop
            </Link>
            <ChevronRightIcon className="h-4 w-4 text-gray-400" />
            <Link href={`/collections/${product.category.slug}`} className="text-gray-500 hover:text-luxury-gold">
              {product.category.name}
            </Link>
            <ChevronRightIcon className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden border border-gray-200">
              <Image
                src={product.images[selectedImageIndex]?.url || '/WhatsApp Image 2025-04-05 at 13.35.00.jpeg'}
                alt={product.images[selectedImageIndex]?.alt || product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-square bg-white rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImageIndex === index ? 'border-luxury-gold' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-luxury-gold font-medium">{product.brand}</span>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-gray-600">{product.category.name}</span>
              </div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{product.shortDescription}</p>

              {/* Rating and Reviews */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarSolidIcon
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="text-sm font-medium ml-2">{product.rating}</span>
                </div>
                <span className="text-sm text-gray-500">({product.reviewCount} reviews)</span>
                <Link href="#reviews" className="text-sm text-luxury-gold hover:underline">
                  Write a review
                </Link>
              </div>
            </div>

            {/* Price */}
            <div className="border-t border-b border-gray-200 py-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-luxury-gold">
                  ₹{selectedVariant?.price.toLocaleString() || product.price.toLocaleString()}
                </span>
                {product.compareAtPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      ₹{product.compareAtPrice.toLocaleString()}
                    </span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      {discount}% OFF
                    </span>
                  </>
                )}
              </div>
              <p className="text-sm text-gray-600">Inclusive of all taxes • Free shipping on orders over ₹999</p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Size</h3>
              <div className="grid grid-cols-4 gap-3">
                {product.variants.map((variant: any) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`p-3 border-2 rounded-lg text-center transition-colors ${
                      selectedVariant?.id === variant.id
                        ? 'border-luxury-gold bg-luxury-gold/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium">{variant.size}</div>
                    <div className="text-sm text-gray-600">₹{variant.price.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">{variant.stock} left</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <MinusIcon className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= selectedVariant?.stock}
                    className="p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <PlusIcon className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-sm text-gray-600">
                  {selectedVariant?.stock} items available
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button
                  size="lg"
                  variant="luxury"
                  className="flex-1"
                  onClick={handleAddToCart}
                  disabled={!selectedVariant || selectedVariant.stock === 0}
                >
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  {isWishlisted ? (
                    <HeartSolidIcon className="h-5 w-5 text-red-500" />
                  ) : (
                    <HeartIcon className="h-5 w-5" />
                  )}
                </Button>
                <Button size="lg" variant="outline">
                  <ShareIcon className="h-5 w-5" />
                </Button>
              </div>
              <Button
                size="lg"
                className="w-full bg-black text-white hover:bg-gray-800"
                onClick={handleBuyNow}
                disabled={!selectedVariant || selectedVariant.stock === 0}
              >
                Buy Now
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border">
                <TruckIcon className="h-6 w-6 text-luxury-gold" />
                <div>
                  <div className="font-medium text-sm">Fast Delivery</div>
                  <div className="text-xs text-gray-600">3-5 working days</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border">
                <ShieldCheckIcon className="h-6 w-6 text-luxury-gold" />
                <div>
                  <div className="font-medium text-sm">100% Authentic</div>
                  <div className="text-xs text-gray-600">Genuine products</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border">
                <CheckIcon className="h-6 w-6 text-luxury-gold" />
                <div>
                  <div className="font-medium text-sm">3 Days Return</div>
                  <div className="text-xs text-gray-600">Easy returns</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="notes">Fragrance Notes</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-8">
              <Card luxury>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className="font-semibold mb-2">Product Details</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li><strong>Brand:</strong> {product.brand}</li>
                          <li><strong>Category:</strong> {product.category.name}</li>
                          <li><strong>Fragrance Family:</strong> {product.fragranceFamily}</li>
                          <li><strong>Concentration:</strong> {product.concentration}</li>
                          <li><strong>Gender:</strong> {product.gender}</li>
                          <li><strong>SKU:</strong> {product.sku}</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Performance</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li><strong>Sillage:</strong> {product.sillage}</li>
                          <li><strong>Longevity:</strong> {product.longevity}</li>
                          <li><strong>Best Season:</strong> {product.season}</li>
                          <li><strong>Occasion:</strong> {product.occasion}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notes" className="mt-8">
              <Card luxury>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Fragrance Pyramid</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-luxury-gold pl-4">
                      <h4 className="font-semibold text-luxury-gold mb-2">Top Notes</h4>
                      <p className="text-gray-700">{product.topNotes}</p>
                      <p className="text-sm text-gray-600 mt-1">First impression • Lasts 15-30 minutes</p>
                    </div>
                    <div className="border-l-4 border-luxury-gold/70 pl-4">
                      <h4 className="font-semibold text-luxury-gold/70 mb-2">Heart Notes</h4>
                      <p className="text-gray-700">{product.heartNotes}</p>
                      <p className="text-sm text-gray-600 mt-1">Main character • Lasts 2-4 hours</p>
                    </div>
                    <div className="border-l-4 border-luxury-gold/50 pl-4">
                      <h4 className="font-semibold text-luxury-gold/50 mb-2">Base Notes</h4>
                      <p className="text-gray-700">{product.baseNotes}</p>
                      <p className="text-sm text-gray-600 mt-1">Final impression • Lasts 4-8+ hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <Card luxury>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Customer Reviews</h3>
                  <div className="text-center py-8 text-gray-500">
                    <p>Reviews section coming soon...</p>
                    <Button variant="luxury" className="mt-4">
                      Be the first to review
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="shipping" className="mt-8">
              <Card luxury>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Shipping & Returns</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Shipping Information</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Free shipping on orders over ₹999</li>
                        <li>• Standard delivery: 3-5 working days</li>
                        <li>• Express delivery: 1-2 working days (additional charges apply)</li>
                        <li>• Cash on delivery available</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Return Policy</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• 3 days return policy on sealed products only</li>
                        <li>• Items must be in original condition and packaging</li>
                        <li>• Return shipping charges may apply</li>
                        <li>• Contact customer service for return requests</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/products/${relatedProduct.slug}`}>
                <Card luxury className="group cursor-pointer overflow-hidden">
                  <div className="relative aspect-square">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(relatedProduct.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="text-sm text-gray-500 ml-1">({relatedProduct.rating})</span>
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-luxury-gold transition-colors line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">{relatedProduct.category}</p>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-luxury-gold">
                        ₹{relatedProduct.price.toLocaleString()}
                      </span>
                      {relatedProduct.compareAtPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{relatedProduct.compareAtPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 
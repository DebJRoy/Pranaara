import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/ui/product-card'
import { ProductGridSkeleton, FilterSidebarSkeleton } from '@/components/ui/loading-skeletons'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import { db } from '@/lib/db'
import { Suspense } from 'react'

async function getProducts() {
  try {
    const products = await db.product.findMany({
      where: {
        status: 'ACTIVE'
      },
      include: {
        images: {
          take: 1
        },
        category: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

async function getCategories() {
  try {
    const categories = await db.category.findMany({
      orderBy: {
        name: 'asc'
      }
    })
    return categories
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export default async function ShopPage() {
  const products = await getProducts()
  const categories = await getCategories()
  
  const genderFilters = ['All', 'MALE', 'FEMALE', 'UNISEX']
  const priceRanges = ['All', '₹0 - ₹1000', '₹1000 - ₹2000', '₹2000+']

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-luxury-champagne to-luxury-pearl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-1 mb-6">
            Our Fragrance
            <span className="text-gradient-gold block">Collection</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover your perfect scent from our curated collection of premium Indian perfumes
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <Suspense fallback={<FilterSidebarSkeleton />}>
                <Card luxury className="p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <AdjustmentsHorizontalIcon className="h-5 w-5 text-luxury-gold" />
                    <h2 className="text-lg font-semibold">Filters</h2>
                  </div>

                  {/* Category Filter */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Category</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          className="rounded border-luxury-gold/30 text-luxury-gold focus:ring-luxury-gold" 
                          defaultChecked
                        />
                        <span className="ml-2 text-sm">All</span>
                      </label>
                      {categories.map((category: any) => (
                        <label key={category.id} className="flex items-center">
                          <input 
                            type="checkbox" 
                            className="rounded border-luxury-gold/30 text-luxury-gold focus:ring-luxury-gold" 
                          />
                          <span className="ml-2 text-sm">{category.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Gender Filter */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Gender</h3>
                    <div className="space-y-2">
                      {genderFilters.map((gender) => (
                        <label key={gender} className="flex items-center">
                          <input 
                            type="radio" 
                            name="gender"
                            className="border-luxury-gold/30 text-luxury-gold focus:ring-luxury-gold"
                            defaultChecked={gender === 'All'}
                          />
                          <span className="ml-2 text-sm">{gender === 'All' ? 'All' : gender.charAt(0) + gender.slice(1).toLowerCase()}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range Filter */}
                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Price Range</h3>
                    <div className="space-y-2">
                      {priceRanges.map((range) => (
                        <label key={range} className="flex items-center">
                          <input 
                            type="radio" 
                            name="price"
                            className="border-luxury-gold/30 text-luxury-gold focus:ring-luxury-gold"
                            defaultChecked={range === 'All'}
                          />
                          <span className="ml-2 text-sm">{range}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <Button variant="luxury" className="w-full">
                    Apply Filters
                  </Button>
                </Card>
              </Suspense>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Sort & Results Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">All Products</h2>
                  <p className="text-gray-600">Showing {products.length} results</p>
                </div>
                <div className="mt-4 sm:mt-0">
                  <select className="rounded-md border border-luxury-gold/30 bg-background px-3 py-2 text-sm focus:border-luxury-gold focus:ring-luxury-gold">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Customer Rating</option>
                    <option>Newest First</option>
                  </select>
                </div>
              </div>

              {/* Products Grid */}
              <Suspense fallback={<ProductGridSkeleton />}>
                <div className="product-grid">
                  {products.map((product: any) => (
                    <ProductCard 
                      key={product.id} 
                      product={{
                        id: product.id,
                        name: product.name,
                        shortDescription: product.shortDescription,
                        price: Number(product.price),
                        compareAtPrice: product.compareAtPrice ? Number(product.compareAtPrice) : undefined,
                        images: product.images,
                        category: product.category,
                        gender: product.gender,
                        weightValue: Number(product.weightValue),
                        weightUnit: product.weightUnit,
                        slug: product.slug,
                        featured: product.featured,
                        topNotes: product.topNotes ? product.topNotes.split(',').map((note: string) => note.trim()) : undefined,
                        middleNotes: product.middleNotes ? product.middleNotes.split(',').map((note: string) => note.trim()) : undefined,
                        baseNotes: product.baseNotes ? product.baseNotes.split(',').map((note: string) => note.trim()) : undefined,
                        sillage: product.sillage,
                        longevity: product.longevity,
                        occasion: product.occasion,
                        season: product.season
                      }}
                    />
                  ))}
                </div>
              </Suspense>
              
              {products.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-luxury-gold text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-2 mb-4">Stay Updated with New Arrivals</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be the first to know about our latest fragrances and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-gray-900 placeholder-gray-500"
            />
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-luxury-gold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 
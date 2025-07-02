import { Card, CardContent } from '@/components/ui/card'

export function ProductCardSkeleton({ className = '' }: { className?: string }) {
  return (
    <Card className={`overflow-hidden ${className}`}>
      <div className="relative aspect-product bg-gray-200 animate-pulse" />
      <CardContent className="p-4">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-4 w-4 bg-gray-200 animate-pulse rounded" />
          ))}
          <div className="h-4 w-12 bg-gray-200 animate-pulse rounded ml-1" />
        </div>
        <div className="h-6 bg-gray-200 animate-pulse rounded mb-2" />
        <div className="h-4 bg-gray-200 animate-pulse rounded mb-3 w-3/4" />
        <div className="flex items-center justify-between mb-3">
          <div className="h-6 w-20 bg-gray-200 animate-pulse rounded" />
          <div className="h-4 w-12 bg-gray-200 animate-pulse rounded" />
        </div>
        <div className="flex items-center justify-between">
          <div className="h-6 w-16 bg-gray-200 animate-pulse rounded-full" />
          <div className="h-6 w-12 bg-gray-200 animate-pulse rounded-full" />
        </div>
      </CardContent>
    </Card>
  )
}

export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="product-grid">
      {[...Array(count)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  )
}

export function HeaderSkeleton() {
  return (
    <div className="h-16 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="h-10 w-32 bg-gray-200 animate-pulse rounded" />
        <div className="hidden lg:flex gap-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-6 w-16 bg-gray-200 animate-pulse rounded" />
          ))}
        </div>
        <div className="flex items-center gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-6 w-6 bg-gray-200 animate-pulse rounded" />
          ))}
        </div>
      </div>
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="min-h-screen bg-gray-100 animate-pulse">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32">
        <div className="text-center">
          <div className="h-16 bg-gray-200 rounded mb-6 mx-auto max-w-2xl" />
          <div className="h-6 bg-gray-200 rounded mb-8 mx-auto max-w-xl" />
          <div className="flex gap-4 justify-center">
            <div className="h-12 w-32 bg-gray-200 rounded" />
            <div className="h-12 w-32 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function FilterSidebarSkeleton() {
  return (
    <Card className="p-6">
      <div className="h-6 w-20 bg-gray-200 animate-pulse rounded mb-6" />
      
      {[...Array(4)].map((_, sectionIndex) => (
        <div key={sectionIndex} className="mb-6">
          <div className="h-5 w-16 bg-gray-200 animate-pulse rounded mb-3" />
          <div className="space-y-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center">
                <div className="h-4 w-4 bg-gray-200 animate-pulse rounded mr-2" />
                <div className="h-4 w-20 bg-gray-200 animate-pulse rounded" />
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div className="h-10 w-full bg-gray-200 animate-pulse rounded" />
    </Card>
  )
}

export function ProductDetailSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Image Gallery Skeleton */}
      <div className="space-y-4">
        <div className="aspect-square bg-gray-200 animate-pulse rounded-lg" />
        <div className="grid grid-cols-4 gap-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="aspect-square bg-gray-200 animate-pulse rounded" />
          ))}
        </div>
      </div>
      
      {/* Product Info Skeleton */}
      <div className="space-y-6">
        <div>
          <div className="h-8 bg-gray-200 animate-pulse rounded mb-2" />
          <div className="h-6 bg-gray-200 animate-pulse rounded w-3/4 mb-4" />
          <div className="h-4 bg-gray-200 animate-pulse rounded mb-2" />
          <div className="h-4 bg-gray-200 animate-pulse rounded w-2/3" />
        </div>
        
        <div className="h-12 bg-gray-200 animate-pulse rounded" />
        
        <div>
          <div className="h-5 bg-gray-200 animate-pulse rounded w-16 mb-3" />
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-12 bg-gray-200 animate-pulse rounded" />
            ))}
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="h-12 bg-gray-200 animate-pulse rounded" />
          <div className="flex gap-3">
            <div className="h-12 flex-1 bg-gray-200 animate-pulse rounded" />
            <div className="h-12 w-12 bg-gray-200 animate-pulse rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialSkeleton() {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-5 w-5 bg-gray-200 animate-pulse rounded" />
        ))}
      </div>
      <div className="h-4 bg-gray-200 animate-pulse rounded mb-2" />
      <div className="h-4 bg-gray-200 animate-pulse rounded mb-2 w-3/4" />
      <div className="h-4 bg-gray-200 animate-pulse rounded mb-4 w-1/2" />
      <div className="border-t border-gray-200 pt-4">
        <div className="h-5 bg-gray-200 animate-pulse rounded mb-1" />
        <div className="h-4 bg-gray-200 animate-pulse rounded w-1/3" />
      </div>
    </Card>
  )
}

export function CategoryCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square bg-gray-200 animate-pulse" />
      <CardContent className="p-4">
        <div className="h-6 bg-gray-200 animate-pulse rounded mb-2" />
        <div className="h-4 bg-gray-200 animate-pulse rounded w-2/3" />
      </CardContent>
    </Card>
  )
}

export function SearchResultsSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-6 bg-gray-200 animate-pulse rounded w-1/4 mb-4" />
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex gap-4 p-4 border border-gray-200 rounded-lg">
          <div className="w-16 h-16 bg-gray-200 animate-pulse rounded" />
          <div className="flex-1 space-y-2">
            <div className="h-5 bg-gray-200 animate-pulse rounded" />
            <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4" />
            <div className="h-4 bg-gray-200 animate-pulse rounded w-1/2" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function MiniCartSkeleton() {
  return (
    <div className="p-4">
      <div className="h-6 bg-gray-200 animate-pulse rounded mb-4" />
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex gap-3 mb-4">
          <div className="w-12 h-12 bg-gray-200 animate-pulse rounded" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 animate-pulse rounded" />
            <div className="h-3 bg-gray-200 animate-pulse rounded w-2/3" />
          </div>
        </div>
      ))}
      <div className="border-t pt-4">
        <div className="h-6 bg-gray-200 animate-pulse rounded mb-4" />
        <div className="h-10 bg-gray-200 animate-pulse rounded" />
      </div>
    </div>
  )
} 
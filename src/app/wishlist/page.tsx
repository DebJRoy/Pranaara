import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { HeartIcon } from '@heroicons/react/24/outline'

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold">My Wishlist</h1>
        </div>
      </div>

      {/* Empty Wishlist */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <Card luxury className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <HeartIcon className="h-12 w-12 text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold mb-3">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-6">
              Save your favorite fragrances to your wishlist for easy access later.
            </p>
            <Button variant="luxury" size="lg" asChild>
              <Link href="/shop">Explore Fragrances</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="heading-2 mb-8">Shopping Cart</h1>
        <Card luxury className="p-8 text-center">
          <CardContent>
            <p className="text-lg text-gray-600 mb-4">Your cart is empty</p>
            <Link href="/shop">
              <Button variant="luxury">Continue Shopping</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

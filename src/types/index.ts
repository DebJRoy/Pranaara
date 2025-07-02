import { 
  Product, 
  User, 
  Order, 
  OrderItem,
  Review, 
  Category, 
  ProductImage, 
  ProductVariant,
  Address 
} from "@prisma/client"

export type ProductWithImages = Product & {
  images: ProductImage[]
  category: Category
  variants: ProductVariant[]
  reviews: Review[]
  _count: {
    reviews: number
  }
}

export type ProductWithCategory = Product & {
  category: Category
  images: ProductImage[]
}

export type OrderWithItems = Order & {
  items: (OrderItem & {
    product: Product
    variant?: ProductVariant
  })[]
  user: User
  shippingAddress?: Address
}

export type ReviewWithUser = Review & {
  user: User
}

export interface CartItem {
  id: string
  productId: string
  variantId?: string
  quantity: number
  product: ProductWithImages
  variant?: ProductVariant
}

export interface FilterOptions {
  categories?: string[]
  priceRange?: [number, number]
  gender?: string[]
  fragranceFamily?: string[]
  season?: string[]
  occasion?: string[]
  sortBy?: 'name' | 'price' | 'created' | 'popularity'
  sortOrder?: 'asc' | 'desc'
}

export interface SearchParams {
  q?: string
  category?: string
  page?: string
  limit?: string
  sort?: string
  filter?: string
}

export interface PaginationInfo {
  page: number
  limit: number
  total: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  pagination?: PaginationInfo
}

export interface FragranceNotes {
  top: string[]
  heart: string[]
  base: string[]
}

export interface ProductFormData {
  name: string
  description: string
  shortDescription?: string
  price: number
  compareAtPrice?: number
  categoryId: string
  sku?: string
  quantity: number
  weightValue?: number
  weightUnit?: string
  fragranceFamily?: string
  topNotes: string[]
  heartNotes: string[]
  baseNotes: string[]
  sillage?: string
  longevity?: string
  season: string[]
  occasion: string[]
  gender: 'MALE' | 'FEMALE' | 'UNISEX'
  images: string[]
  metaTitle?: string
  metaDescription?: string
  featured: boolean
  status: 'DRAFT' | 'ACTIVE' | 'ARCHIVED'
}

export interface CheckoutFormData {
  email: string
  firstName: string
  lastName: string
  company?: string
  address1: string
  address2?: string
  city: string
  state: string
  postalCode: string
  country: string
  phone?: string
  shippingMethod: string
  paymentMethod: string
}

export interface ShippingMethod {
  id: string
  name: string
  description: string
  price: number
  estimatedDays: string
}

export interface PaymentMethod {
  id: string
  name: string
  description: string
  icon: string
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export interface NewsletterData {
  email: string
  firstName?: string
}

export interface WishlistItem {
  id: string
  productId: string
  product: ProductWithImages
  createdAt: Date
} 
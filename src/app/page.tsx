import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon, StarIcon } from '@heroicons/react/24/solid'
import { SparklesIcon, ShieldCheckIcon, TruckIcon, HeartIcon } from '@heroicons/react/24/outline'
import { db } from '@/lib/db'

async function getFeaturedProducts() {
  try {
    const products = await db.product.findMany({
      where: {
        featured: true,
        status: 'ACTIVE'
      },
      include: {
        images: {
          take: 1
        },
        category: true
      },
      take: 4,
      orderBy: {
        createdAt: 'desc'
      }
    })
    
    return products.map((product: any) => ({
      ...product,
      price: product.price.toNumber(),
      compareAtPrice: product.compareAtPrice?.toNumber(),
      weightValue: product.weightValue.toNumber(),
      topNotes: typeof product.topNotes === 'string' ? product.topNotes.split(',') : product.topNotes
    }))
  } catch (error) {
    console.error('Error fetching featured products:', error)
    return []
  }
}

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts()

  const features = [
    {
      icon: <SparklesIcon className="h-8 w-8" />,
      title: "Premium Quality",
      description: "Crafted with the finest ingredients for long-lasting fragrances"
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      title: "Made in India",
      description: "Authentic Indian perfumes with traditional craftsmanship"
    },
    {
      icon: <TruckIcon className="h-8 w-8" />,
      title: "Free Shipping",
      description: "Free delivery on orders above ₹999 across India"
    },
    {
      icon: <HeartIcon className="h-8 w-8" />,
      title: "Customer Love",
      description: "Trusted by thousands of fragrance enthusiasts"
    }
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "Absolutely love the Royal Oud! The fragrance lasts all day and gets me so many compliments.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      text: "Best Indian perfume brand I've tried. Quality is outstanding and very affordable.",
      rating: 5
    },
    {
      name: "Anjali Gupta",
      location: "Bangalore",
      text: "The packaging is beautiful and the scents are unique. Highly recommended!",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Name Logo */}
        <div className="absolute inset-0">
          <Image
            src="/Name Logo.png"
            alt="PRANAARA"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Enhanced gradient overlay with shimmer */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 animate-gradient-slow"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-luxury-gold/5 to-transparent animate-shimmer-slow"></div>
        </div>

        {/* Premium floating fragrance molecules with sparkle effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/30 rounded-full animate-sparkle-float animation-delay-0">
            <div className="absolute inset-0 bg-luxury-gold/40 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-luxury-gold/40 rounded-full animate-sparkle-rotate animation-delay-1000">
            <div className="absolute -inset-1 bg-white/20 rounded-full animate-ping"></div>
          </div>
          <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-white/20 rounded-full animate-float-elegant animation-delay-2000"></div>
          <div className="absolute top-2/3 right-1/4 w-2.5 h-2.5 bg-luxury-gold/30 rounded-full animate-sparkle-float animation-delay-3000">
            <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold to-white rounded-full animate-spin-slow"></div>
          </div>
          <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-white/40 rounded-full animate-twinkle animation-delay-1500"></div>
          <div className="absolute bottom-1/4 right-1/6 w-3.5 h-3.5 bg-luxury-gold/25 rounded-full animate-float-elegant animation-delay-2500"></div>
        </div>

        {/* Content with sophisticated entrance animations */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-light mb-6 pranaara-heading animate-text-reveal animation-delay-500">
            <span className="inline-block animate-slide-up animation-delay-500">Discover the Art of</span>
            <span className="block mt-2 text-gradient-gold font-normal animate-slide-up animation-delay-800">
              <span className="inline-block animate-shimmer-text">Indian Perfumery</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light animate-fade-in-elegant animation-delay-1200">
            <span className="inline-block animate-slide-up animation-delay-1200">Where ancient traditions meet modern luxury</span>
            <span className="inline-block animate-slide-up animation-delay-1400"> in every precious drop</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-elegant animation-delay-1600">
            <Button asChild size="lg" className="bg-luxury-gold hover:bg-luxury-bronze text-black font-medium px-8 py-3 rounded-none animate-magnetic-hover group">
              <Link href="/shop" className="flex items-center gap-2">
                <span className="group-hover:animate-pulse">Explore Collection</span>
                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-none transition-all duration-500 animate-magnetic-hover hover:scale-105 hover:shadow-luxury">
              <Link href="/about">Our Heritage</Link>
            </Button>
          </div>
          
          {/* Trust indicators with staggered animations */}
          <div className="flex flex-wrap justify-center gap-6 text-sm animate-fade-in-elegant animation-delay-2000">
            <span className="flex items-center gap-2 animate-slide-up animation-delay-2000 hover:text-luxury-gold transition-colors duration-300">
              <ShieldCheckIcon className="h-4 w-4 animate-pulse-gentle" />
              Premium Quality
            </span>
            <span className="flex items-center gap-2 animate-slide-up animation-delay-2200 hover:text-luxury-gold transition-colors duration-300">
              <TruckIcon className="h-4 w-4 animate-pulse-gentle animation-delay-500" />
              Free Shipping
            </span>
            <span className="flex items-center gap-2 animate-slide-up animation-delay-2400 hover:text-luxury-gold transition-colors duration-300">
              <HeartIcon className="h-4 w-4 animate-pulse-gentle animation-delay-1000" />
              Handcrafted
            </span>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-elegant-bounce animation-delay-3000">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-luxury-gold/70 transition-colors duration-300">
            <div className="w-1 h-3 bg-gradient-to-b from-white to-luxury-gold rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
        </div>

        {/* Ambient sparkle effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 right-16 w-1 h-1 bg-white rounded-full animate-twinkle animation-delay-4000"></div>
          <div className="absolute bottom-32 left-20 w-1 h-1 bg-luxury-gold rounded-full animate-twinkle animation-delay-5000"></div>
          <div className="absolute top-32 left-32 w-0.5 h-0.5 bg-white rounded-full animate-twinkle animation-delay-6000"></div>
          <div className="absolute bottom-16 right-32 w-1 h-1 bg-luxury-gold rounded-full animate-twinkle animation-delay-7000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 pranaara-heading">Why Choose PRANAARA</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the pinnacle of luxury fragrances with our commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <SparklesIcon className="h-8 w-8 text-luxury-gold" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 pranaara-heading">Premium Ingredients</h3>
              <p className="text-gray-600">Sourced from the finest materials across the globe for an unparalleled olfactory experience</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold/20 transition-all duration-300 group-hover:-rotate-6">
                <ShieldCheckIcon className="h-8 w-8 text-luxury-gold" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 pranaara-heading">Authentic Excellence</h3>
              <p className="text-gray-600">Every bottle represents our unwavering commitment to quality and traditional craftsmanship</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-luxury-gold/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <HeartIcon className="h-8 w-8 text-luxury-gold" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 pranaara-heading">Passionate Craft</h3>
              <p className="text-gray-600">Each fragrance tells a story, crafted with passion and perfected through generations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Brand Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 pranaara-heading">
                Heritage & 
                <span className="text-gradient-gold block">Innovation</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                PRANAARA represents the perfect fusion of time-honored traditions and contemporary luxury. 
                Our master perfumers blend ancient Indian aromatherapy wisdom with modern sophistication.
              </p>
              <Button asChild className="bg-luxury-gold hover:bg-luxury-bronze text-black font-medium">
                <Link href="/about">Discover Our Story</Link>
              </Button>
            </div>
            
            <div className="relative group">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/images/branding/heritage-luxury-woman.png"
                  alt="Heritage and Luxury"
                  width={600}
                  height={400}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-luxury-gold/20 rounded-full animate-float-gentle"></div>
              <div className="absolute bottom-8 left-6 w-6 h-6 bg-white/30 rounded-full animate-float-luxury"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Artistic Campaign Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/branding/artistic-perfume-campaign.png"
                alt="Artistic Campaign"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 pranaara-heading">
                The Art of <span className="text-gradient-gold">Fragrance</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Every PRANAARA creation is a masterpiece, meticulously crafted to evoke emotions and create lasting memories.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-luxury-gold mb-2 animate-count-up">18</div>
                  <p className="text-sm text-gray-400">Signature Fragrances</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-luxury-gold mb-2 animate-count-up">7</div>
                  <p className="text-sm text-gray-400">Fragrance Categories</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-luxury-gold mb-2 animate-count-up">100%</div>
                  <p className="text-sm text-gray-400">Natural Ingredients</p>
                </div>
              </div>
              
              <Button asChild className="bg-luxury-gold hover:bg-luxury-bronze text-black font-medium">
                <Link href="/shop">Explore Artistry</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating ambient elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-luxury-gold/5 rounded-full blur-xl animate-pulse-gold"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg animate-float-gentle"></div>
      </section>

      {/* Luxury Lifestyle Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 pranaara-heading">
                Luxury <span className="text-gradient-gold">Lifestyle</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Embrace a lifestyle of sophistication with PRANAARA. Our fragrances are designed for those who appreciate the finer things in life.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-luxury-gold/20 rounded-full flex items-center justify-center">
                    <SparklesIcon className="h-4 w-4 text-luxury-gold animate-sparkle" />
                  </div>
                  <span className="text-gray-700">Exclusive Limited Collections</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-luxury-gold/20 rounded-full flex items-center justify-center">
                    <HeartIcon className="h-4 w-4 text-luxury-gold" />
                  </div>
                  <span className="text-gray-700">Personalized Fragrance Consultation</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-luxury-gold/20 rounded-full flex items-center justify-center">
                    <ShieldCheckIcon className="h-4 w-4 text-luxury-gold" />
                  </div>
                  <span className="text-gray-700">Premium Customer Experience</span>
                </div>
              </div>
              
              <Button asChild className="bg-luxury-gold hover:bg-luxury-bronze text-black font-medium">
                <Link href="/contact">Get Personal Consultation</Link>
              </Button>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <Image
                src="/images/branding/luxury-lifestyle-event.png"
                alt="Luxury Lifestyle"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-luxury-gold/30 rounded-full animate-pulse-gold"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-white rounded-full shadow-lg animate-float-gentle"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 pranaara-heading">Featured Fragrances</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most beloved creations, each one a testament to our commitment to luxury and quality
            </p>
          </div>
          
                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {featuredProducts.map((product: any, index: number) => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-gray-100">
                <div className="relative overflow-hidden">
                  {product.images[0] && (
                    <Image
                      src={product.images[0].url}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  )}
                  {product.featured && (
                    <div className="absolute top-3 left-3 bg-luxury-gold text-black px-2 py-1 text-xs font-medium rounded animate-sparkle">
                      FEATURED
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 pranaara-heading">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.shortDescription}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-luxury-gold">₹{product.price.toLocaleString()}</span>
                      {product.compareAtPrice && (
                        <span className="text-gray-400 line-through text-sm">₹{product.compareAtPrice.toLocaleString()}</span>
                      )}
                    </div>
                    <Button asChild size="sm" className="bg-luxury-gold hover:bg-luxury-bronze text-black">
                      <Link href={`/products/${product.slug}`}>View</Link>
                    </Button>
                  </div>
                  
                  {product.topNotes && Array.isArray(product.topNotes) && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-xs text-gray-500">
                        <span className="font-medium">Top Notes:</span> {product.topNotes.slice(0, 3).join(', ')}
                        {product.topNotes.length > 3 && '...'}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-luxury-gold hover:bg-luxury-bronze text-black font-medium">
              <Link href="/shop">View All Fragrances</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 pranaara-heading">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real experiences from fragrance enthusiasts who love PRANAARA</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-luxury-gold animate-sparkle" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "PRANAARA's Majestic Oud Royal is absolutely divine. The longevity and sillage are exceptional, 
                  and I constantly receive compliments when wearing it."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-luxury-gold">AR</span>
                  </div>
                  <div>
                    <p className="font-semibold">Aarav Sharma</p>
                    <p className="text-gray-500 text-sm">Mumbai</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-luxury-gold animate-sparkle" style={{ animationDelay: `${i * 0.1 + 0.5}s` }} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "The Rose Symphony Absolute is pure poetry in a bottle. It's become my signature scent, 
                  and the quality is unmatched."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-luxury-gold">PG</span>
                  </div>
                  <div>
                    <p className="font-semibold">Priya Gupta</p>
                    <p className="text-gray-500 text-sm">Delhi</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-luxury-gold animate-sparkle" style={{ animationDelay: `${i * 0.1 + 1}s` }} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "PRANAARA has redefined luxury for me. Each fragrance tells a story, and the craftsmanship 
                  is evident in every note."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-luxury-gold">VK</span>
                  </div>
                  <div>
                    <p className="font-semibold">Vikram Kumar</p>
                    <p className="text-gray-500 text-sm">Bangalore</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-luxury-gold to-luxury-bronze text-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float-gentle"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-black/10 rounded-full blur-xl animate-float-luxury"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full animate-sparkle"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-black rounded-full animate-pulse"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 pranaara-heading">
            Begin Your Fragrance Journey
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Discover your signature scent and join thousands of fragrance enthusiasts who trust PRANAARA for their luxury needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-3">
              <Link href="/shop">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white px-8 py-3">
              <Link href="/contact">Get Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  SparklesIcon, 
  HeartIcon, 
  GlobeAltIcon,
  ShieldCheckIcon,
  StarIcon,
  ClockIcon,
  CheckIcon
} from '@heroicons/react/24/outline'

export default function AboutPage() {
  const values = [
    {
      icon: <SparklesIcon className="h-8 w-8" />,
      title: 'Premium Quality',
      description: 'We source only the finest ingredients from around the world, ensuring each fragrance meets our exacting standards.'
    },
    {
      icon: <HeartIcon className="h-8 w-8" />,
      title: 'Passion for Perfume',
      description: 'Our master perfumers bring decades of experience and an unwavering passion for creating extraordinary scents.'
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8" />,
      title: 'Indian Heritage',
      description: 'Rooted in the rich tradition of Indian perfumery, we honor ancient techniques while embracing modern innovation.'
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      title: 'Authentic Excellence',
      description: 'Every bottle represents our commitment to authenticity, quality, and the art of fine fragrance making.'
    }
  ]

  const milestones = [
    {
      year: '2015',
      title: 'Foundation',
      description: 'Pranaara was founded with a vision to create luxury Indian perfumes that rival international brands.'
    },
    {
      year: '2017',
      title: 'First Collection',
      description: 'Launched our debut collection featuring traditional attars and modern interpretations of classic scents.'
    },
    {
      year: '2019',
      title: 'Oud Mastery',
      description: 'Established partnerships with premium oud suppliers, becoming renowned for authentic oud fragrances.'
    },
    {
      year: '2021',
      title: 'National Recognition',
      description: 'Received prestigious awards for excellence in Indian perfumery and sustainable practices.'
    },
    {
      year: '2023',
      title: 'Luxury Expansion',
      description: 'Expanded our luxury collection with rare and exclusive fragrances for discerning customers.'
    },
    {
      year: '2024',
      title: 'Digital Excellence',
      description: 'Launched our premium e-commerce platform, making luxury fragrances accessible nationwide.'
    }
  ]

  const team = [
    {
      name: 'Master Rajesh Sharma',
      role: 'Chief Perfumer',
      experience: '25+ years',
      specialty: 'Oud & Traditional Attars',
      description: 'A master craftsman who learned the art of attar making from his grandfather, bringing generational expertise to modern perfumery.'
    },
    {
      name: 'Dr. Priya Mehta',
      role: 'Fragrance Director',
      experience: '15+ years',
      specialty: 'Floral & Contemporary Blends',
      description: 'PhD in Chemistry with specialization in fragrance composition, bridging traditional methods with scientific innovation.'
    },
    {
      name: 'Arjun Krishnan',
      role: 'Quality Assurance Head',
      experience: '12+ years',
      specialty: 'Quality Control & Testing',
      description: 'Ensures every product meets our rigorous quality standards through comprehensive testing and quality protocols.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/branding/heritage-luxury-woman.png"
            alt="Pranaara Heritage - Traditional Luxury"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-gradient-gold">Story</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Born from a passion for authentic Indian fragrances, Pranaara represents the perfect harmony 
            between traditional perfumery and modern luxury. Our journey is one of dedication, craftsmanship, 
            and an unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Essence of Pranaara</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Pranaara was born from a simple yet profound vision: to create fragrances that tell stories, 
                  evoke emotions, and celebrate the rich heritage of Indian perfumery. Our name, derived from 
                  the Sanskrit words "Prana" (life force) and "Aara" (essence), reflects our belief that 
                  fragrance is the essence of life itself.
                </p>
                <p>
                  Founded in 2015 by master perfumer Rajesh Sharma, Pranaara began as a small atelier in the 
                  heart of Mumbai. With over 25 years of experience in traditional Indian perfumery, Rajesh 
                  had a vision to bridge the gap between ancient fragrance-making techniques and contemporary 
                  luxury standards.
                </p>
                <p>
                  Today, we continue to honor this legacy by sourcing the finest ingredients from across India 
                  and beyond, working with skilled artisans who have inherited centuries-old techniques, and 
                  maintaining the highest standards of quality in every bottle we create.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-luxury-gold/20 to-luxury-bronze/20 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/branding/luxury-lifestyle-event.png"
                  alt="Pranaara luxury lifestyle"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artistic Vision Section */}
      <section className="py-20 bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative lg:order-1">
              <Image
                src="/images/branding/artistic-perfume-campaign.png"
                alt="Pranaara Artistic Vision - The Art of Scent"
                width={600}
                height={800}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl" />
              
              {/* Floating brand overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-center">
                  <div className="pranaara-brand text-xl text-white mb-2 drop-shadow-lg">
                    PRANAARA
                  </div>
                  <div className="text-xs text-white/80 tracking-wider">
                    ARTISTRY IN EVERY DROP
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 lg:order-2">
              <div>
                <div className="text-luxury-gold text-sm font-semibold tracking-wide uppercase mb-4">
                  Our Artistic Vision
                </div>
                <h2 className="text-4xl font-bold mb-6">Beyond Ordinary Fragrance</h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  At Pranaara, we believe that perfume is not just a product—it's an art form. 
                  Each fragrance is a carefully orchestrated symphony of emotions, memories, and dreams, 
                  designed to transform moments into lasting impressions.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <SparklesIcon className="w-4 h-4 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-white">Creative Excellence</h4>
                    <p className="text-gray-400">Every composition is a masterpiece, blending tradition with innovation to create truly unique scents</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <HeartIcon className="w-4 h-4 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-white">Emotional Storytelling</h4>
                    <p className="text-gray-400">Each fragrance tells a story, capturing emotions and moments that resonate with your soul</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <StarIcon className="w-4 h-4 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-white">Luxury Redefined</h4>
                    <p className="text-gray-400">We redefine luxury through authentic craftsmanship and uncompromising quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from sourcing ingredients to crafting the final product.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card luxury className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckIcon className="h-8 w-8 text-luxury-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
                <p className="text-gray-600">
                  We source only the finest ingredients and maintain the highest standards in every aspect of production.
                </p>
              </CardContent>
            </Card>
            <Card luxury className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckIcon className="h-8 w-8 text-luxury-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Passion for Perfume</h3>
                <p className="text-gray-600">
                  Every fragrance is crafted with passion, creativity, and deep understanding of the art of perfumery.
                </p>
              </CardContent>
            </Card>
            <Card luxury className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckIcon className="h-8 w-8 text-luxury-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Indian Heritage</h3>
                <p className="text-gray-600">
                  We celebrate and preserve the rich tradition of Indian perfumery while embracing modern innovations.
                </p>
              </CardContent>
            </Card>
            <Card luxury className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckIcon className="h-8 w-8 text-luxury-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Authentic Excellence</h3>
                <p className="text-gray-600">
                  Authenticity is at our core - from genuine ingredients to honest business practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted name in luxury Indian perfumes.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/4">
                <div className="text-3xl font-bold text-luxury-gold">2015</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-2">Foundation</h3>
                <p className="text-gray-600">
                  Pranaara was founded by master perfumer Rajesh Sharma in Mumbai, with a vision to create 
                  authentic Indian fragrances that meet international luxury standards.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/4">
                <div className="text-3xl font-bold text-luxury-gold">2017</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-2">First Collection</h3>
                <p className="text-gray-600">
                  Launch of our first signature collection featuring 12 unique fragrances inspired by 
                  different regions of India, gaining recognition among fragrance enthusiasts.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/4">
                <div className="text-3xl font-bold text-luxury-gold">2019</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-2">Expansion</h3>
                <p className="text-gray-600">
                  Expanded our operations with a larger production facility and began serving customers 
                  across India through our online platform and select retail partners.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/4">
                <div className="text-3xl font-bold text-luxury-gold">2021</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-2">Award Recognition</h3>
                <p className="text-gray-600">
                  Received the "Best Indian Fragrance Brand" award and expanded our collection to include 
                  over 50 unique fragrances across various categories.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/4">
                <div className="text-3xl font-bold text-luxury-gold">2024</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-2">Digital Excellence</h3>
                <p className="text-gray-600">
                  Launched our enhanced digital platform with personalized fragrance recommendations, 
                  virtual consultations, and expanded delivery network across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind Pranaara who bring their expertise and dedication to every fragrance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card luxury className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-luxury-gold to-luxury-bronze rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">RS</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Master Rajesh Sharma</h3>
                <p className="text-luxury-gold font-medium mb-2">Chief Perfumer & Founder</p>
                <p className="text-gray-600 text-sm">
                  With over 25 years of experience in traditional Indian perfumery, Rajesh leads our 
                  fragrance creation with unmatched expertise and passion.
                </p>
              </CardContent>
            </Card>
            <Card luxury className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-luxury-gold to-luxury-bronze rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">PM</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Dr. Priya Mehta</h3>
                <p className="text-luxury-gold font-medium mb-2">Fragrance Director</p>
                <p className="text-gray-600 text-sm">
                  A renowned aromatherapist and fragrance expert with a PhD in Chemistry, Priya ensures 
                  every formula meets our exacting standards.
                </p>
              </CardContent>
            </Card>
            <Card luxury className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-luxury-gold to-luxury-bronze rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">AK</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Arjun Krishnan</h3>
                <p className="text-luxury-gold font-medium mb-2">Quality Assurance Head</p>
                <p className="text-gray-600 text-sm">
                  With a background in chemical engineering and luxury goods, Arjun oversees quality 
                  control to ensure every bottle meets our premium standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-luxury-gold to-luxury-bronze">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Experience the Pranaara Difference</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover our collection of premium Indian fragrances and find your perfect scent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-luxury-gold bg-white hover:bg-gray-50 transition-colors"
            >
              Explore Collection
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-luxury-gold transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 
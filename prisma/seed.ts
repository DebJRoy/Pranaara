import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'luxury' },
      update: {},
      create: {
        name: 'Luxury Collection',
        slug: 'luxury',
        description: 'Premium luxury fragrances with rare and precious ingredients',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'floral' },
      update: {},
      create: {
        name: 'Floral Fragrances',
        slug: 'floral',
        description: 'Beautiful floral fragrances inspired by nature\'s finest blooms',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'woody' },
      update: {},
      create: {
        name: 'Woody & Earthy',
        slug: 'woody',
        description: 'Rich woody and earthy fragrances with depth and character',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'oriental' },
      update: {},
      create: {
        name: 'Oriental & Spicy',
        slug: 'oriental',
        description: 'Exotic oriental fragrances with spices, incense and warm notes',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'fresh' },
      update: {},
      create: {
        name: 'Fresh & Aquatic',
        slug: 'fresh',
        description: 'Light and refreshing fragrances for everyday wear',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'oud' },
      update: {},
      create: {
        name: 'Oud Collection',
        slug: 'oud',
        description: 'Premium oud fragrances with authentic agarwood',
      },
    }),
    prisma.category.upsert({
      where: { slug: 'attar' },
      update: {},
      create: {
        name: 'Traditional Attar',
        slug: 'attar',
        description: 'Traditional Indian attars and concentrated oils',
      },
    }),
  ])

  console.log('✅ Categories created')

  // Comprehensive product catalog inspired by FridayCharm and luxury perfume brands
  const products = [
    // Luxury Collection - Premium High-End Fragrances
    {
      name: 'Majestic Oud Royal',
      slug: 'majestic-oud-royal',
      description: 'An opulent masterpiece featuring authentic Cambodian oud aged for over 20 years. This royal fragrance opens with bergamot and saffron, revealing a heart of Bulgarian rose and pure oud, before settling into a magnificent base of amber, sandalwood, and white musk. A true testament to luxury perfumery.',
      shortDescription: 'Premium aged Cambodian oud with Bulgarian rose and saffron',
      price: 8999.00,
      compareAtPrice: 12999.00,
      images: ['/images/products/golden-packaging-ornate.png', '/images/models/model-portrait-perfume.png'],
      categoryId: categories[0].id,
      quantity: 15,
      weightValue: 100,
      weightUnit: 'ml',
      fragranceFamily: 'Oriental Woody',
      topNotes: 'Bergamot, Saffron, Pink Pepper',
      heartNotes: 'Bulgarian Rose, Cambodian Oud, Jasmine',
      baseNotes: 'Amber, Sandalwood, White Musk, Vanilla',
      sillage: 'Very Strong',
      longevity: '12+ hours',
      season: 'Fall, Winter',
      occasion: 'Evening, Special Events, Formal',
      gender: 'UNISEX',
      featured: true,
      status: 'ACTIVE'
    },
    {
      name: 'Golden Saffron Elixir',
      slug: 'golden-saffron-elixir',
      description: 'A precious blend of the world\'s most expensive spice - saffron - with rare Turkish rose and Indian sandalwood. This luxurious fragrance captures the essence of ancient royal courts with its rich, warm, and intoxicating aroma.',
      shortDescription: 'Precious saffron with Turkish rose and sandalwood',
      price: 6999.00,
      compareAtPrice: 8999.00,
      images: ['/images/models/model-black-dress.png', '/images/products/golden-packaging-ornate.png'],
      categoryId: categories[0].id,
      quantity: 25,
      weightValue: 75,
      weightUnit: 'ml',
      fragranceFamily: 'Oriental Spicy',
      topNotes: 'Saffron, Cardamom, Orange Blossom',
      heartNotes: 'Turkish Rose, Iris, Cinnamon',
      baseNotes: 'Sandalwood, Amber, Musk',
      sillage: 'Strong',
      longevity: '10-12 hours',
      season: 'Fall, Winter, Spring',
      occasion: 'Evening, Special Events',
      gender: 'UNISEX',
      featured: true,
      status: 'ACTIVE'
    },

    // Floral Collection - Inspired by classic florals
    {
      name: 'Rose Symphony Absolute',
      slug: 'rose-symphony-absolute',
      description: 'A harmonious symphony of roses from around the world. This exquisite fragrance features Damask rose, Bulgarian rose, and French rose absolute, creating a multi-dimensional floral masterpiece that evolves beautifully on the skin.',
      shortDescription: 'Multi-rose composition with three types of precious roses',
      price: 4999.00,
      compareAtPrice: 6499.00,
      images: ['/images/models/model-portrait-perfume.png', '/images/products/golden-packaging-ornate.png'],
      categoryId: categories[1].id,
      quantity: 40,
      weightValue: 50,
      weightUnit: 'ml',
      fragranceFamily: 'Floral',
      topNotes: 'Bergamot, Lemon, Pink Pepper',
      heartNotes: 'Damask Rose, Bulgarian Rose, French Rose Absolute, Peony',
      baseNotes: 'White Musk, Sandalwood, Cedar',
      sillage: 'Moderate to Strong',
      longevity: '8-10 hours',
      season: 'Spring, Summer, Fall',
      occasion: 'Daytime, Romantic, Special Events',
      gender: 'FEMALE',
      featured: true,
      status: 'ACTIVE'
    },
    {
      name: 'Jasmine Nights Enchantment',
      slug: 'jasmine-nights-enchantment',
      description: 'A captivating evening fragrance featuring night-blooming jasmine sambac and grandiflorum. Enhanced with tuberose and orange blossom, this romantic scent is perfect for intimate moments and special occasions.',
      shortDescription: 'Enchanting night-blooming jasmine for romantic evenings',
      price: 3999.00,
      compareAtPrice: 5299.00,
      images: ['/images/models/model-black-dress.png', '/images/products/golden-packaging-ornate.png'],
      categoryId: categories[1].id,
      quantity: 50,
      weightValue: 50,
      weightUnit: 'ml',
      fragranceFamily: 'Floral Oriental',
      topNotes: 'Mandarin, Green Leaves, Ylang-Ylang',
      heartNotes: 'Jasmine Sambac, Jasmine Grandiflorum, Tuberose, Orange Blossom',
      baseNotes: 'Vanilla, Sandalwood, White Musk',
      sillage: 'Moderate',
      longevity: '6-8 hours',
      season: 'Spring, Summer, Fall',
      occasion: 'Evening, Date Night, Romantic',
      gender: 'FEMALE',
      featured: true,
      status: 'ACTIVE'
    },

    // Woody & Earthy Collection
    {
      name: 'Mysore Sandalwood Supreme',
      slug: 'mysore-sandalwood-supreme',
      description: 'Pure Mysore sandalwood at its finest. This masculine fragrance celebrates the sacred wood with complementary warm spices and precious resins. A sophisticated scent for the modern gentleman who appreciates timeless elegance.',
      shortDescription: 'Pure Mysore sandalwood with warm spices and resins',
      price: 5499.00,
      compareAtPrice: 7299.00,
      images: ['/images/models/model-portrait-perfume.png', '/images/products/golden-packaging-ornate.png'],
      categoryId: categories[2].id,
      quantity: 30,
      weightValue: 75,
      weightUnit: 'ml',
      fragranceFamily: 'Woody Oriental',
      topNotes: 'Cardamom, Nutmeg, Bergamot',
      heartNotes: 'Mysore Sandalwood, Clove, Cinnamon',
      baseNotes: 'Amber, Vanilla, Benzoin, Cedar',
      sillage: 'Strong',
      longevity: '10-12 hours',
      season: 'Fall, Winter',
      occasion: 'Office, Evening, Formal',
      gender: 'MALE',
      featured: true,
      status: 'ACTIVE'
    },
    {
      name: 'Cedarwood & Vetiver Elite',
      slug: 'cedarwood-vetiver-elite',
      description: 'A sophisticated blend of Himalayan cedarwood and Haitian vetiver. This refined fragrance offers a perfect balance of freshness and warmth, making it ideal for the discerning gentleman.',
      shortDescription: 'Sophisticated cedarwood and vetiver for the modern man',
      price: 3499.00,
      compareAtPrice: 4699.00,
      categoryId: categories[2].id,
      quantity: 60,
      weightValue: 50,
      weightUnit: 'ml',
      fragranceFamily: 'Woody Aromatic',
      topNotes: 'Grapefruit, Black Pepper, Elemi',
      heartNotes: 'Cedarwood, Vetiver, Geranium',
      baseNotes: 'Patchouli, Oakmoss, Ambergris',
      sillage: 'Moderate',
      longevity: '7-9 hours',
      season: 'Spring, Fall',
      occasion: 'Office, Casual, Daytime',
      gender: 'MALE',
      featured: false,
      status: 'ACTIVE'
    },

    // Oriental & Spicy Collection
    {
      name: 'Oriental Spice Bazaar',
      slug: 'oriental-spice-bazaar',
      description: 'Journey through the ancient spice markets with this exotic blend of cardamom, cinnamon, star anise, and precious amber. A warm and sensual fragrance that wraps you in golden warmth and mystery.',
      shortDescription: 'Exotic spice market blend with amber and warm spices',
      price: 4299.00,
      compareAtPrice: 5799.00,
      images: ['/images/models/model-black-dress.png', '/images/products/golden-packaging-ornate.png'],
      categoryId: categories[3].id,
      quantity: 45,
      weightValue: 60,
      weightUnit: 'ml',
      fragranceFamily: 'Oriental Spicy',
      topNotes: 'Cardamom, Coriander, Ginger, Orange',
      heartNotes: 'Cinnamon, Star Anise, Black Pepper, Rose',
      baseNotes: 'Amber, Labdanum, Sandalwood, Tonka Bean',
      sillage: 'Strong',
      longevity: '8-10 hours',
      season: 'Fall, Winter',
      occasion: 'Evening, Special Events',
      gender: 'UNISEX',
      featured: true,
      status: 'ACTIVE'
    },
    {
      name: 'Amber Mystique',
      slug: 'amber-mystique',
      description: 'A mesmerizing amber fragrance with mysterious depth. This warm and inviting scent combines rich amber with vanilla, benzoin, and a touch of exotic spices for an unforgettable olfactory experience.',
      shortDescription: 'Mesmerizing amber with vanilla and exotic spices',
      price: 3799.00,
      compareAtPrice: 4999.00,
      categoryId: categories[3].id,
      quantity: 55,
      weightValue: 50,
      weightUnit: 'ml',
      fragranceFamily: 'Oriental',
      topNotes: 'Orange, Cinnamon, Pink Pepper',
      heartNotes: 'Rose, Labdanum, Benzoin',
      baseNotes: 'Amber, Vanilla, Tonka Bean, White Musk',
      sillage: 'Strong',
      longevity: '8-10 hours',
      season: 'Fall, Winter',
      occasion: 'Evening, Special Events',
      gender: 'UNISEX',
      featured: false,
      status: 'ACTIVE'
    },

    // Fresh & Aquatic Collection
    {
      name: 'Ocean Breeze Serenity',
      slug: 'ocean-breeze-serenity',
      description: 'Fresh aquatic fragrance that captures the essence of ocean breeze on a summer morning. Light, airy and perfect for daily wear, this refreshing scent energizes and uplifts your spirit.',
      shortDescription: 'Fresh aquatic scent perfect for summer days',
      price: 2299.00,
      compareAtPrice: 2999.00,
      categoryId: categories[4].id,
      quantity: 80,
      weightValue: 50,
      weightUnit: 'ml',
      fragranceFamily: 'Aquatic Fresh',
      topNotes: 'Sea Salt, Bergamot, Lemon, Lime',
      heartNotes: 'Marine Notes, Jasmine, Cyclamen',
      baseNotes: 'White Musk, Cedar, Light Amber',
      sillage: 'Light to Moderate',
      longevity: '4-6 hours',
      season: 'Spring, Summer',
      occasion: 'Daytime, Casual, Sport, Office',
      gender: 'UNISEX',
      featured: false,
      status: 'ACTIVE'
    },
    {
      name: 'Citrus Burst Energy',
      slug: 'citrus-burst-energy',
      description: 'An energizing burst of fresh citrus fruits. This invigorating fragrance combines orange, lemon, grapefruit, and lime with mint and green tea for the perfect pick-me-up scent.',
      shortDescription: 'Energizing citrus burst for daily vitality',
      price: 1799.00,
      compareAtPrice: 2299.00,
      categoryId: categories[4].id,
      quantity: 100,
      weightValue: 30,
      weightUnit: 'ml',
      fragranceFamily: 'Citrus Fresh',
      topNotes: 'Orange, Lemon, Grapefruit, Lime',
      heartNotes: 'Mint, Green Tea, Petitgrain',
      baseNotes: 'White Musk, Light Woods',
      sillage: 'Light',
      longevity: '3-5 hours',
      season: 'Spring, Summer',
      occasion: 'Daytime, Casual, Office, Sport',
      gender: 'UNISEX',
      featured: false,
      status: 'ACTIVE'
    },

    // Oud Collection - Premium Oud Fragrances
    {
      name: 'Black Oud Royale',
      slug: 'black-oud-royale',
      description: 'Deep, dark and intensely mysterious oud fragrance. For those who dare to stand out with bold sophistication. This powerful oud is balanced with rose and warm spices for an unforgettable presence.',
      shortDescription: 'Intense and mysterious black oud for bold sophistication',
      price: 7999.00,
      compareAtPrice: 10999.00,
      categoryId: categories[5].id,
      quantity: 20,
      weightValue: 50,
      weightUnit: 'ml',
      fragranceFamily: 'Oriental Woody',
      topNotes: 'Black Pepper, Saffron, Nutmeg',
      heartNotes: 'Oud Wood, Rose, Patchouli',
      baseNotes: 'Amber, Musk, Vanilla, Sandalwood',
      sillage: 'Very Strong',
      longevity: '12+ hours',
      season: 'Fall, Winter',
      occasion: 'Evening, Special Events, Formal',
      gender: 'UNISEX',
      featured: true,
      status: 'ACTIVE'
    },
    {
      name: 'White Oud Elegance',
      slug: 'white-oud-elegance',
      description: 'A lighter, more approachable interpretation of oud with white flowers and clean musks. This elegant fragrance offers the luxury of oud in a refined, wearable composition.',
      shortDescription: 'Elegant white oud with florals and clean musks',
      price: 5999.00,
      compareAtPrice: 7999.00,
      categoryId: categories[5].id,
      quantity: 35,
      weightValue: 50,
      weightUnit: 'ml',
      fragranceFamily: 'Floral Woody',
      topNotes: 'Bergamot, Pink Pepper, Cardamom',
      heartNotes: 'White Oud, Jasmine, Lily, Rose',
      baseNotes: 'White Musk, Sandalwood, Vanilla',
      sillage: 'Strong',
      longevity: '8-10 hours',
      season: 'Spring, Fall',
      occasion: 'Daytime, Office, Evening',
      gender: 'UNISEX',
      featured: false,
      status: 'ACTIVE'
    },

    // Traditional Attar Collection
    {
      name: 'Pure Rose Attar',
      slug: 'pure-rose-attar',
      description: 'Traditional Indian rose attar made from pure rose petals distilled over sandalwood. This concentrated oil fragrance offers intense longevity and beautiful floral richness in the authentic attar tradition.',
      shortDescription: 'Traditional pure rose attar in sandalwood base',
      price: 2999.00,
      compareAtPrice: 3999.00,
      categoryId: categories[6].id,
      quantity: 50,
      weightValue: 10,
      weightUnit: 'ml',
      fragranceFamily: 'Floral',
      topNotes: 'Rose Petals',
      heartNotes: 'Damask Rose, Rose Absolute',
      baseNotes: 'Sandalwood Base',
      sillage: 'Moderate',
      longevity: '8-12 hours',
      season: 'All Seasons',
      occasion: 'All Occasions, Traditional Events',
      gender: 'UNISEX',
      featured: false,
      status: 'ACTIVE'
    },
    {
      name: 'Mogra Attar Supreme',
      slug: 'mogra-attar-supreme',
      description: 'Traditional mogra (jasmine) attar with intense floral concentration. A classic Indian fragrance that captures the intoxicating beauty of fresh mogra flowers in authentic attar form.',
      shortDescription: 'Traditional mogra jasmine attar with intense floral concentration',
      price: 2499.00,
      compareAtPrice: 3299.00,
      categoryId: categories[6].id,
      quantity: 60,
      weightValue: 10,
      weightUnit: 'ml',
      fragranceFamily: 'Floral',
      topNotes: 'Mogra Flowers',
      heartNotes: 'Jasmine Grandiflorum, Jasmine Sambac',
      baseNotes: 'Sandalwood Base',
      sillage: 'Strong',
      longevity: '10-14 hours',
      season: 'All Seasons',
      occasion: 'Evening, Traditional Events, Special Occasions',
      gender: 'UNISEX',
      featured: false,
      status: 'ACTIVE'
    },

    // Additional Popular Fragrances
    {
      name: 'Vanilla Dreams Gourmand',
      slug: 'vanilla-dreams-gourmand',
      description: 'Sweet and comforting vanilla fragrance with warm spices and gourmand notes. Perfect for cozy evenings and casual wear, this delicious scent is both comforting and alluring.',
      shortDescription: 'Sweet vanilla gourmand with warm spices',
      price: 2799.00,
      compareAtPrice: 3599.00,
      categoryId: categories[3].id,
      quantity: 70,
      weightValue: 50,
      weightUnit: 'ml',
      fragranceFamily: 'Oriental Gourmand',
      topNotes: 'Cinnamon, Orange, Apple',
      heartNotes: 'Vanilla, Caramel, Honey',
      baseNotes: 'Sandalwood, Musk, Amber',
      sillage: 'Moderate',
      longevity: '6-8 hours',
      season: 'Fall, Winter',
      occasion: 'Casual, Evening, Date Night',
      gender: 'FEMALE',
      featured: false,
      status: 'ACTIVE'
    },
    {
      name: 'Leather & Tobacco Noir',
      slug: 'leather-tobacco-noir',
      description: 'Rich and masculine blend of premium leather and tobacco leaves. For the sophisticated gentleman who appreciates bold, distinctive fragrances with character and depth.',
      shortDescription: 'Masculine leather and tobacco for the sophisticated gentleman',
      price: 4799.00,
      compareAtPrice: 6299.00,
      categoryId: categories[2].id,
      quantity: 35,
      weightValue: 75,
      weightUnit: 'ml',
      fragranceFamily: 'Woody Oriental',
      topNotes: 'Bergamot, Black Pepper, Cardamom',
      heartNotes: 'Leather, Tobacco Leaves, Violet',
      baseNotes: 'Sandalwood, Amber, Patchouli',
      sillage: 'Strong',
      longevity: '8-10 hours',
      season: 'Fall, Winter',
      occasion: 'Evening, Special Events, Formal',
      gender: 'MALE',
      featured: false,
      status: 'ACTIVE'
    },
    {
      name: 'Green Tea Zen Garden',
      slug: 'green-tea-zen-garden',
      description: 'Calming green tea fragrance with clean and fresh appeal. Perfect for meditation, relaxation, and daily wear. This peaceful scent brings tranquility and balance to your day.',
      shortDescription: 'Calming green tea fragrance for peace and tranquility',
      price: 1999.00,
      compareAtPrice: 2599.00,
      categoryId: categories[4].id,
      quantity: 90,
      weightValue: 30,
      weightUnit: 'ml',
      fragranceFamily: 'Green Fresh',
      topNotes: 'Green Tea, Lemon, Mint',
      heartNotes: 'Jasmine, White Tea, Ginger',
      baseNotes: 'White Musk, Cedar, Mate',
      sillage: 'Light',
      longevity: '4-6 hours',
      season: 'Spring, Summer',
      occasion: 'Daytime, Office, Casual, Meditation',
      gender: 'UNISEX',
      featured: false,
      status: 'ACTIVE'
    },
    {
      name: 'Lavender Fields Forever',
      slug: 'lavender-fields-forever',
      description: 'Peaceful lavender fragrance that promotes relaxation and calm. Perfect for bedtime routine and stress relief. This soothing scent captures the essence of French lavender fields.',
      shortDescription: 'Peaceful lavender for relaxation and calm',
      price: 2199.00,
      compareAtPrice: 2899.00,
      categoryId: categories[1].id,
      quantity: 75,
      weightValue: 40,
      weightUnit: 'ml',
      fragranceFamily: 'Aromatic Floral',
      topNotes: 'Lavender, Bergamot, Lemon',
      heartNotes: 'Lavender Absolute, Geranium, Rosemary',
      baseNotes: 'White Musk, Sandalwood, Vanilla',
      sillage: 'Light to Moderate',
      longevity: '5-7 hours',
      season: 'All Seasons',
      occasion: 'Relaxation, Bedtime, Spa, Casual',
      gender: 'UNISEX',
      featured: false,
      status: 'ACTIVE'
    }
  ]

  console.log('🔄 Creating products...')

  for (const productData of products) {
    const product = await prisma.product.create({
      data: {
        ...productData,
        images: {
          create: (productData.images || ['/WhatsApp Image 2025-04-05 at 13.35.00.jpeg']).map((imageUrl, index) => ({
            url: imageUrl,
            altText: `${productData.name} - Image ${index + 1}`,
            isPrimary: index === 0
          }))
        }
      }
    })
    console.log(`✅ Created product: ${product.name}`)
  }

  console.log('🎉 Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 
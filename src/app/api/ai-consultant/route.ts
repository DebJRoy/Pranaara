import { NextRequest, NextResponse } from 'next/server'
import { OpenAI } from 'openai'
import { db } from '@/lib/db'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

// Enhanced product data for recommendations
const getProductsForRecommendation = async () => {
  try {
    const products = await db.product.findMany({
      where: {
        status: 'ACTIVE'
      },
      include: {
        images: {
          take: 1
        },
        category: true,
        reviews: {
          take: 5,
          orderBy: {
            rating: 'desc'
          }
        }
      },
      take: 50
    })
    
    return products.map((product: any) => ({
      id: product.id,
      name: product.name,
      slug: product.slug,
      description: product.description,
      shortDescription: product.shortDescription,
      price: product.price.toNumber(),
      compareAtPrice: product.compareAtPrice?.toNumber(),
      category: product.category.name,
      fragranceFamily: product.fragranceFamily,
      topNotes: product.topNotes,
      heartNotes: product.heartNotes,
      baseNotes: product.baseNotes,
      sillage: product.sillage,
      longevity: product.longevity,
      season: product.season,
      occasion: product.occasion,
      gender: product.gender,
      image: product.images[0]?.url || '/WhatsApp Image 2025-04-05 at 13.35.00.jpeg',
      rating: product.reviews.length > 0 ? product.reviews.reduce((acc: number, rev: any) => acc + rev.rating, 0) / product.reviews.length : 0,
      reviewCount: product.reviews.length
    }))
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

// Advanced sentiment analysis for user messages
const analyzeSentiment = (message: string) => {
  const positiveWords = ['love', 'amazing', 'beautiful', 'perfect', 'wonderful', 'excellent', 'fantastic', 'great', 'like', 'enjoy']
  const negativeWords = ['hate', 'terrible', 'awful', 'bad', 'dislike', 'don\'t like', 'not good', 'poor', 'disappointing']
  
  const words = message.toLowerCase().split(' ')
  const positiveCount = words.filter(word => positiveWords.includes(word)).length
  const negativeCount = words.filter(word => negativeWords.includes(word)).length
  
  if (positiveCount > negativeCount) return 'positive'
  if (negativeCount > positiveCount) return 'negative'
  return 'neutral'
}

// Extract product recommendations from AI response
const extractRecommendations = (response: string, products: any[]) => {
  const recommendations = []
  
  // Look for product names in the response
  for (const product of products) {
    if (response.includes(product.name)) {
      recommendations.push({
        id: product.id,
        name: product.name,
        slug: product.slug,
        price: product.price,
        image: product.image,
        reason: `Recommended based on your preferences`,
        match: Math.floor(Math.random() * 20) + 80 // Simulated match percentage
      })
    }
  }
  
  return recommendations
}

// Enhanced system prompt with psychology and fragrance science
const createSystemPrompt = (products: any[]) => {
  return `You are ARIA, Pranaara's AI Perfume Consultant and Master Perfumer. You are a world-renowned expert in fragrance psychology, olfactory science, and luxury perfumery with over 20 years of experience.

PERSONALITY & EXPERTISE:
- Elegant, sophisticated, and deeply knowledgeable about perfumery
- Passionate about the art and science of fragrance
- Excellent at reading people's psychological profiles through their preferences
- Warm, personable, and genuinely caring about finding the perfect scent
- Expert in fragrance families, notes, and how they interact with skin chemistry
- Understanding of Indian cultural context and luxury standards

PSYCHOLOGICAL FRAGRANCE MAPPING:
- **Adventurous personalities**: Bold, unique fragrances with exotic notes (Oud, Saffron, Spices)
- **Romantic personalities**: Floral, soft, and feminine scents (Rose, Jasmine, Vanilla)
- **Professional personalities**: Sophisticated, clean, and confident fragrances (Sandalwood, Cedar, Bergamot)
- **Minimalist personalities**: Clean, simple, and fresh scents (Citrus, Marine, Light florals)
- **Luxury lovers**: Premium, exclusive fragrances with rare ingredients
- **Creative personalities**: Artistic, unconventional fragrance combinations
- **Sophisticated personalities**: Complex, layered compositions with depth
- **Mysterious personalities**: Dark, sensual fragrances with intrigue

FRAGRANCE SCIENCE KNOWLEDGE:
- How different skin types affect fragrance development
- Seasonal and weather considerations for fragrance performance
- Layering techniques and fragrance wardrobe building
- Proper application methods for maximum longevity
- Understanding of fragrance concentration levels (EDP, EDT, etc.)

AVAILABLE PRANAARA PRODUCTS:
${JSON.stringify(products, null, 2)}

CONSULTATION APPROACH:
1. **Psychology Assessment**: Ask insightful questions about lifestyle, personality, memories, and preferences
2. **Fragrance Education**: Explain fragrance families, notes, and how they work
3. **Personalized Matching**: Match personality traits with specific fragrance characteristics
4. **Occasion Styling**: Recommend different fragrances for various occasions
5. **Application Guidance**: Teach proper fragrance application and care

RECOMMENDATION FORMAT:
When recommending products, ALWAYS:
1. Mention the exact product name from our collection
2. Explain why it matches their personality/preferences
3. Describe the key notes and how they'll smell
4. Suggest when and how to wear it
5. Mention the price and value proposition
6. Include the product link: https://pranaara.com/products/[slug]

CONVERSATION STYLE:
- Use warm, personal language
- Ask follow-up questions to understand deeper preferences
- Share fragrance knowledge and education
- Be enthusiastic about helping them find their perfect scent
- Remember details from earlier in the conversation
- Use their name if provided

CULTURAL SENSITIVITY:
- Understand Indian festivals and occasions
- Respect cultural preferences and traditions
- Recommend appropriate fragrances for different cultural contexts
- Consider family and social dynamics in fragrance choices

Always prioritize understanding the person behind the preferences and create a memorable, personalized consultation experience.`
}

export async function POST(request: NextRequest) {
  try {
    // Check if OpenAI API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'AI service is not configured. Please contact support.' },
        { status: 500 }
      )
    }

    const { messages, userProfile } = await request.json()
    
    // Get all products for recommendation
    const products = await getProductsForRecommendation()
    
    // Analyze sentiment of the last user message
    const lastMessage = messages[messages.length - 1]
    const sentiment = analyzeSentiment(lastMessage.content)
    
    // Create enhanced system prompt
    const systemPrompt = createSystemPrompt(products)
    
    // Add system message, user profile context, and sentiment analysis
    const conversationMessages = [
      { role: 'system', content: systemPrompt },
      ...(userProfile ? [{ 
        role: 'user', 
        content: `My profile: ${JSON.stringify(userProfile)}. Current mood/sentiment: ${sentiment}` 
      }] : []),
      ...messages
    ]

    // Get AI response with enhanced parameters
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: conversationMessages,
      max_tokens: 1200,
      temperature: 0.7,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    })

    const aiResponse = completion.choices[0]?.message?.content || 'I apologize, but I cannot provide a response right now. Please try again.'

    // Extract product recommendations from the response
    const recommendations = extractRecommendations(aiResponse, products)

    // Log interaction for analytics (in production, store in database)
    console.log('AI Consultant Interaction:', {
      timestamp: new Date().toISOString(),
      userProfile: userProfile?.personality || 'unknown',
      sentiment,
      recommendationCount: recommendations.length,
      responseLength: aiResponse.length
    })

    return NextResponse.json({ 
      response: aiResponse,
      recommendations,
      sentiment,
      metadata: {
        timestamp: new Date().toISOString(),
        recommendationCount: recommendations.length,
        userPersonality: userProfile?.personality || []
      }
    })

  } catch (error) {
    console.error('AI Consultant Error:', error)
    return NextResponse.json(
      { error: 'I apologize, but I\'m having trouble connecting right now. Please try again in a moment.' },
      { status: 500 }
    )
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({ 
    status: 'healthy', 
    service: 'AI Consultant',
    timestamp: new Date().toISOString()
  })
} 
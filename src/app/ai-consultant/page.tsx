'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface UserProfile {
  personality: string[]
  preferences: string[]
  lifestyle: string[]
  completed: boolean
}

interface ProductRecommendation {
  id: string
  name: string
  slug: string
  price: number
  image: string
  reason: string
  match: number
}

interface AIResponse {
  response: string
  recommendations: ProductRecommendation[]
  sentiment: string
  metadata: {
    timestamp: string
    recommendationCount: number
    userPersonality: string[]
  }
}

const personalityQuestions = [
  {
    question: "What best describes your personality?",
    options: ["Adventurous", "Romantic", "Professional", "Minimalist", "Creative", "Sophisticated", "Mysterious"]
  },
  {
    question: "What are your fragrance preferences?",
    options: ["Floral", "Woody", "Fresh", "Oriental", "Spicy", "Citrus", "Aquatic", "Gourmand"]
  },
  {
    question: "What describes your lifestyle?",
    options: ["Active", "Luxury-focused", "Career-oriented", "Family-centered", "Social", "Artistic", "Minimalist"]
  }
]

export default function AIConsultantPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [userProfile, setUserProfile] = useState<UserProfile>({
    personality: [],
    preferences: [],
    lifestyle: [],
    completed: false
  })
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [recommendations, setRecommendations] = useState<ProductRecommendation[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Welcome message
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        role: 'assistant',
        content: "Hello! I'm ARIA, your personal AI perfume consultant. I'm here to help you discover your perfect fragrance based on your personality, preferences, and lifestyle. Let's start with a quick personality assessment to understand you better!",
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }, [])

  const handlePersonalityAnswer = (answer: string) => {
    const newProfile = { ...userProfile }
    
    if (currentQuestion === 0) {
      newProfile.personality = [...newProfile.personality, answer]
    } else if (currentQuestion === 1) {
      newProfile.preferences = [...newProfile.preferences, answer]
    } else if (currentQuestion === 2) {
      newProfile.lifestyle = [...newProfile.lifestyle, answer]
    }

    setUserProfile(newProfile)

    if (currentQuestion < personalityQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Complete assessment
      newProfile.completed = true
      setUserProfile(newProfile)
      
      const completionMessage: Message = {
        role: 'assistant',
        content: `Perfect! Based on your assessment, I can see you're ${newProfile.personality.join(', ')} with preferences for ${newProfile.preferences.join(', ')} fragrances, and you have a ${newProfile.lifestyle.join(', ')} lifestyle. Now I can provide personalized recommendations! Feel free to ask me about specific fragrances, occasions, or let me know what you're looking for.`,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, completionMessage])
    }
  }

  const sendMessage = async () => {
    if (!inputMessage.trim()) return
    
    const userMessage: Message = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/ai-consultant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(msg => ({
            role: msg.role,
            content: msg.content
          })),
          userProfile: userProfile.completed ? userProfile : null
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data: AIResponse = await response.json()
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, assistantMessage])
      
      if (data.recommendations && data.recommendations.length > 0) {
        setRecommendations(data.recommendations)
      }
    } catch (error) {
      console.error('Error:', error)
      const errorMessage: Message = {
        role: 'assistant',
        content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-amber-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Perfume Consultant
          </h1>
          <p className="text-xl text-gray-600">
            Discover your perfect fragrance with personalized AI recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col">
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-lg ${
                        message.role === 'user'
                          ? 'bg-rose-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                      <p className="text-xs mt-2 opacity-70">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
                
                {/* Personality Questions */}
                {!userProfile.completed && currentQuestion < personalityQuestions.length && (
                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <h3 className="font-semibold mb-3">
                      {personalityQuestions[currentQuestion].question}
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {personalityQuestions[currentQuestion].options.map((option, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="text-sm"
                          onClick={() => handlePersonalityAnswer(option)}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-gray-600">ARIA is thinking...</p>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about fragrances, occasions, or let me know what you're looking for..."
                    className="flex-1"
                    disabled={isLoading}
                  />
                  <Button onClick={sendMessage} disabled={isLoading || !inputMessage.trim()}>
                    Send
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Recommendations Panel */}
          <div className="space-y-6">
            {/* User Profile */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Your Profile</h3>
              {userProfile.completed ? (
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Personality</p>
                    <p className="text-sm">{userProfile.personality.join(', ')}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Preferences</p>
                    <p className="text-sm">{userProfile.preferences.join(', ')}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Lifestyle</p>
                    <p className="text-sm">{userProfile.lifestyle.join(', ')}</p>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-gray-600">Complete the personality assessment to see your profile</p>
              )}
            </Card>

            {/* Recommendations */}
            {recommendations.length > 0 && (
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Recommended For You</h3>
                <div className="space-y-4">
                  {recommendations.map((rec) => (
                    <div key={rec.id} className="border rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <img
                          src={rec.image}
                          alt={rec.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{rec.name}</h4>
                          <p className="text-xs text-gray-600 mt-1">{rec.reason}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-sm font-semibold">₹{rec.price}</span>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                              {rec.match}% match
                            </span>
                          </div>
                          <Button
                            size="sm"
                            className="mt-2 w-full"
                            onClick={() => window.open(`/products/${rec.slug}`, '_blank')}
                          >
                            View Product
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 
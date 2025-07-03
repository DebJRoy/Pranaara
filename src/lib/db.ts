import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const db = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db

// Helper function to check if database is connected
export async function checkDatabaseConnection() {
  try {
    await db.$connect()
    return true
  } catch (error) {
    console.error('Database connection failed:', error)
    return false
  }
} 
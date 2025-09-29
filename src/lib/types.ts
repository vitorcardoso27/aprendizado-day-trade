export interface NewsItem {
  title: string
  description: string
  url: string
  publishedAt: string
  source: string
  impact: 'high' | 'medium' | 'low'
}

export interface Lesson {
  id: string
  title: string
  duration: string
  completed: boolean
  type: 'video' | 'text' | 'quiz' | 'practice'
}

export interface Module {
  id: string
  title: string
  description: string
  level: 'básico' | 'intermediário' | 'avançado'
  duration: string
  completed: boolean
  lessons: Lesson[]
  icon: any
}

export interface UserProgress {
  completedLessons: string[]
  totalProgress: number
  currentLevel: 'Iniciante' | 'Intermediário' | 'Avançado'
  timeInvested: number
}

export interface MarketData {
  symbol: string
  price: number
  change: number
  changePercent: number
  trend: 'up' | 'down'
}

export interface TradingOpportunity {
  pair: string
  type: 'call' | 'put'
  probability: number
  timeframe: string
  reasoning: string
}
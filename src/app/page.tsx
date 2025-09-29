"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { 
  BookOpen, 
  TrendingUp, 
  BarChart3, 
  Target, 
  Shield, 
  Brain,
  Clock,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  PlayCircle,
  Star,
  Globe,
  Calendar,
  ExternalLink
} from 'lucide-react'

interface NewsItem {
  title: string
  description: string
  url: string
  publishedAt: string
  source: string
  impact: 'high' | 'medium' | 'low'
}

interface Module {
  id: string
  title: string
  description: string
  level: 'básico' | 'intermediário' | 'avançado'
  duration: string
  completed: boolean
  lessons: Lesson[]
  icon: any
}

interface Lesson {
  id: string
  title: string
  duration: string
  completed: boolean
  type: 'video' | 'text' | 'quiz' | 'practice'
}

export default function TradingLearningSystem() {
  const [activeModule, setActiveModule] = useState<string>('intro')
  const [news, setNews] = useState<NewsItem[]>([])
  const [userProgress, setUserProgress] = useState(15)
  const [completedLessons, setCompletedLessons] = useState<string[]>([])

  // Simulação de notícias do mercado financeiro
  useEffect(() => {
    const mockNews: NewsItem[] = [
      {
        title: "Fed mantém taxa de juros em 5,25% - 5,50%",
        description: "Decisão do Federal Reserve impacta mercados globais e volatilidade das opções",
        url: "#",
        publishedAt: "2024-01-15T14:30:00Z",
        source: "Reuters",
        impact: "high"
      },
      {
        title: "Petróleo Brent sobe 2,3% após tensões no Oriente Médio",
        description: "Commodities energéticas apresentam alta volatilidade, criando oportunidades de trading",
        url: "#",
        publishedAt: "2024-01-15T13:15:00Z",
        source: "Bloomberg",
        impact: "medium"
      },
      {
        title: "Índice S&P 500 atinge novo recorde histórico",
        description: "Mercado americano em alta beneficia estratégias de call em opções binárias",
        url: "#",
        publishedAt: "2024-01-15T12:45:00Z",
        source: "MarketWatch",
        impact: "high"
      },
      {
        title: "Bitcoin oscila próximo aos $43.000",
        description: "Criptomoedas mantêm volatilidade elevada, ideal para day trading",
        url: "#",
        publishedAt: "2024-01-15T11:20:00Z",
        source: "CoinDesk",
        impact: "medium"
      },
      {
        title: "Dados de inflação europeia abaixo do esperado",
        description: "EUR/USD pode apresentar movimento significativo nas próximas horas",
        url: "#",
        publishedAt: "2024-01-15T10:30:00Z",
        source: "Financial Times",
        impact: "high"
      }
    ]
    setNews(mockNews)
  }, [])

  const modules: Module[] = [
    {
      id: 'intro',
      title: 'Introdução às Opções Binárias',
      description: 'Conceitos fundamentais e primeiros passos no mundo do trading',
      level: 'básico',
      duration: '2h 30min',
      completed: false,
      icon: BookOpen,
      lessons: [
        { id: 'intro-1', title: 'O que são Opções Binárias?', duration: '15min', completed: false, type: 'video' },
        { id: 'intro-2', title: 'Tipos de Opções: Call e Put', duration: '20min', completed: false, type: 'video' },
        { id: 'intro-3', title: 'Plataformas de Trading', duration: '25min', completed: false, type: 'text' },
        { id: 'intro-4', title: 'Quiz: Conceitos Básicos', duration: '10min', completed: false, type: 'quiz' }
      ]
    },
    {
      id: 'analysis',
      title: 'Análise Técnica Fundamental',
      description: 'Aprenda a ler gráficos e identificar padrões de mercado',
      level: 'básico',
      duration: '4h 15min',
      completed: false,
      icon: BarChart3,
      lessons: [
        { id: 'analysis-1', title: 'Tipos de Gráficos', duration: '30min', completed: false, type: 'video' },
        { id: 'analysis-2', title: 'Suporte e Resistência', duration: '45min', completed: false, type: 'video' },
        { id: 'analysis-3', title: 'Médias Móveis', duration: '35min', completed: false, type: 'video' },
        { id: 'analysis-4', title: 'Indicadores Técnicos', duration: '50min', completed: false, type: 'video' },
        { id: 'analysis-5', title: 'Prática: Análise de Gráficos', duration: '45min', completed: false, type: 'practice' }
      ]
    },
    {
      id: 'strategies',
      title: 'Estratégias de Day Trading',
      description: 'Estratégias comprovadas para maximizar lucros e minimizar riscos',
      level: 'intermediário',
      duration: '5h 45min',
      completed: false,
      icon: Target,
      lessons: [
        { id: 'strategies-1', title: 'Estratégia de Reversão', duration: '40min', completed: false, type: 'video' },
        { id: 'strategies-2', title: 'Estratégia de Tendência', duration: '45min', completed: false, type: 'video' },
        { id: 'strategies-3', title: 'Estratégia de Breakout', duration: '50min', completed: false, type: 'video' },
        { id: 'strategies-4', title: 'Martingale e Anti-Martingale', duration: '35min', completed: false, type: 'video' },
        { id: 'strategies-5', title: 'Simulador de Estratégias', duration: '60min', completed: false, type: 'practice' }
      ]
    },
    {
      id: 'risk',
      title: 'Gestão de Risco',
      description: 'Proteja seu capital com técnicas avançadas de gestão de risco',
      level: 'intermediário',
      duration: '3h 20min',
      completed: false,
      icon: Shield,
      lessons: [
        { id: 'risk-1', title: 'Money Management', duration: '30min', completed: false, type: 'video' },
        { id: 'risk-2', title: 'Regra dos 2%', duration: '25min', completed: false, type: 'video' },
        { id: 'risk-3', title: 'Stop Loss em Opções Binárias', duration: '35min', completed: false, type: 'video' },
        { id: 'risk-4', title: 'Diversificação de Ativos', duration: '30min', completed: false, type: 'video' },
        { id: 'risk-5', title: 'Calculadora de Risco', duration: '40min', completed: false, type: 'practice' }
      ]
    },
    {
      id: 'psychology',
      title: 'Psicologia do Trading',
      description: 'Domine suas emoções e desenvolva a mentalidade vencedora',
      level: 'avançado',
      duration: '4h 10min',
      completed: false,
      icon: Brain,
      lessons: [
        { id: 'psychology-1', title: 'Controle Emocional', duration: '35min', completed: false, type: 'video' },
        { id: 'psychology-2', title: 'Medo e Ganância', duration: '40min', completed: false, type: 'video' },
        { id: 'psychology-3', title: 'Disciplina e Consistência', duration: '45min', completed: false, type: 'video' },
        { id: 'psychology-4', title: 'Diário de Trading', duration: '30min', completed: false, type: 'text' },
        { id: 'psychology-5', title: 'Teste de Perfil Psicológico', duration: '20min', completed: false, type: 'quiz' }
      ]
    },
    {
      id: 'advanced',
      title: 'Técnicas Avançadas',
      description: 'Estratégias profissionais para traders experientes',
      level: 'avançado',
      duration: '6h 30min',
      completed: false,
      icon: TrendingUp,
      lessons: [
        { id: 'advanced-1', title: 'Análise de Volume', duration: '50min', completed: false, type: 'video' },
        { id: 'advanced-2', title: 'Padrões Harmônicos', duration: '60min', completed: false, type: 'video' },
        { id: 'advanced-3', title: 'Correlação entre Ativos', duration: '45min', completed: false, type: 'video' },
        { id: 'advanced-4', title: 'Algoritmos de Trading', duration: '75min', completed: false, type: 'video' },
        { id: 'advanced-5', title: 'Backtesting de Estratégias', duration: '80min', completed: false, type: 'practice' }
      ]
    }
  ]

  const completeLesson = (lessonId: string) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId])
      setUserProgress(prev => Math.min(prev + 2, 100))
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'básico': return 'bg-green-500'
      case 'intermediário': return 'bg-yellow-500'
      case 'avançado': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-red-500'
      case 'medium': return 'bg-yellow-500'
      case 'low': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
    
    if (diffInMinutes < 60) return `${diffInMinutes}min atrás`
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h atrás`
    return `${Math.floor(diffInMinutes / 1440)}d atrás`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 dark:text-white">Trading Academy</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">Opções Binárias & Day Trading</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-slate-900 dark:text-white">Progresso Geral</p>
                <div className="flex items-center space-x-2">
                  <Progress value={userProgress} className="w-24" />
                  <span className="text-sm text-slate-600 dark:text-slate-300">{userProgress}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="learning" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:grid-cols-2">
            <TabsTrigger value="learning" className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4" />
              <span>Aprendizagem</span>
            </TabsTrigger>
            <TabsTrigger value="news" className="flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>Notícias do Mercado</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="learning" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Módulos de Aprendizagem */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Módulos de Aprendizagem</h2>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    {modules.length} módulos disponíveis
                  </Badge>
                </div>

                <div className="grid gap-4">
                  {modules.map((module) => {
                    const Icon = module.icon
                    const completedLessonsCount = module.lessons.filter(lesson => 
                      completedLessons.includes(lesson.id)
                    ).length
                    const progressPercent = (completedLessonsCount / module.lessons.length) * 100

                    return (
                      <Card key={module.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                                <Icon className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <CardTitle className="text-lg">{module.title}</CardTitle>
                                <CardDescription className="mt-1">{module.description}</CardDescription>
                              </div>
                            </div>
                            <div className="flex flex-col items-end space-y-2">
                              <Badge className={`${getLevelColor(module.level)} text-white text-xs`}>
                                {module.level}
                              </Badge>
                              <div className="flex items-center space-x-1 text-sm text-slate-500">
                                <Clock className="h-3 w-3" />
                                <span>{module.duration}</span>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-slate-600 dark:text-slate-300">
                                {completedLessonsCount} de {module.lessons.length} aulas concluídas
                              </span>
                              <span className="font-medium text-slate-900 dark:text-white">
                                {Math.round(progressPercent)}%
                              </span>
                            </div>
                            <Progress value={progressPercent} className="h-2" />
                            
                            <div className="space-y-2">
                              {module.lessons.slice(0, 3).map((lesson) => (
                                <div key={lesson.id} className="flex items-center justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                  <div className="flex items-center space-x-2">
                                    {completedLessons.includes(lesson.id) ? (
                                      <CheckCircle className="h-4 w-4 text-green-500" />
                                    ) : (
                                      <PlayCircle className="h-4 w-4 text-slate-400" />
                                    )}
                                    <span className="text-sm font-medium">{lesson.title}</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <span className="text-xs text-slate-500">{lesson.duration}</span>
                                    <Button
                                      size="sm"
                                      variant={completedLessons.includes(lesson.id) ? "secondary" : "default"}
                                      onClick={() => completeLesson(lesson.id)}
                                      className="h-6 px-2 text-xs"
                                    >
                                      {completedLessons.includes(lesson.id) ? "Concluída" : "Iniciar"}
                                    </Button>
                                  </div>
                                </div>
                              ))}
                              {module.lessons.length > 3 && (
                                <p className="text-xs text-slate-500 text-center">
                                  +{module.lessons.length - 3} aulas adicionais
                                </p>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>

              {/* Painel Lateral - Estatísticas */}
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Star className="h-5 w-5 text-yellow-500" />
                      <span>Seu Progresso</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">{userProgress}%</div>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Concluído</p>
                    </div>
                    <Separator />
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Aulas concluídas</span>
                        <span className="text-sm font-medium">{completedLessons.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Tempo investido</span>
                        <span className="text-sm font-medium">{Math.floor(completedLessons.length * 1.5)}h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Nível atual</span>
                        <Badge variant="outline" className="text-xs">
                          {userProgress < 30 ? 'Iniciante' : userProgress < 70 ? 'Intermediário' : 'Avançado'}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-orange-500" />
                      <span>Dica do Dia</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      "Nunca invista mais do que você pode perder. A gestão de risco é fundamental para o sucesso no trading de opções binárias."
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <DollarSign className="h-5 w-5 text-green-500" />
                      <span>Mercados Ativos</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">EUR/USD</span>
                      <span className="text-sm font-medium text-green-600">↑ 1.0842</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">GBP/USD</span>
                      <span className="text-sm font-medium text-red-600">↓ 1.2654</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">USD/JPY</span>
                      <span className="text-sm font-medium text-green-600">↑ 149.23</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Bitcoin</span>
                      <span className="text-sm font-medium text-green-600">↑ $43,250</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="news" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Feed de Notícias */}
              <div className="lg:col-span-3">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Notícias do Mercado Financeiro</h2>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    Ao vivo
                  </Badge>
                </div>

                <ScrollArea className="h-[600px]">
                  <div className="space-y-4">
                    {news.map((item, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center space-x-2">
                              <Badge className={`${getImpactColor(item.impact)} text-white text-xs`}>
                                {item.impact === 'high' ? 'Alto Impacto' : 
                                 item.impact === 'medium' ? 'Médio Impacto' : 'Baixo Impacto'}
                              </Badge>
                              <span className="text-xs text-slate-500">{item.source}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-xs text-slate-500">
                              <Calendar className="h-3 w-3" />
                              <span>{formatTimeAgo(item.publishedAt)}</span>
                            </div>
                          </div>
                          
                          <h3 className="font-semibold text-slate-900 dark:text-white mb-2 leading-tight">
                            {item.title}
                          </h3>
                          
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
                            {item.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <Button variant="outline" size="sm" className="text-xs">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Ler mais
                            </Button>
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm" className="text-xs text-blue-600 hover:text-blue-700">
                                Analisar impacto
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              {/* Painel Lateral - Análise de Mercado */}
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5 text-blue-500" />
                      <span>Análise Rápida</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">Bullish</div>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Sentimento do mercado</p>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Volatilidade</span>
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700">Média</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Volume</span>
                        <Badge variant="outline" className="bg-green-50 text-green-700">Alto</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Tendência</span>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700">Ascendente</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-purple-500" />
                      <span>Próximos Eventos</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="border-l-2 border-red-500 pl-3">
                      <p className="text-sm font-medium">15:30 - Dados de Emprego EUA</p>
                      <p className="text-xs text-slate-500">Alto impacto no USD</p>
                    </div>
                    <div className="border-l-2 border-yellow-500 pl-3">
                      <p className="text-sm font-medium">17:00 - Decisão BCE</p>
                      <p className="text-xs text-slate-500">Impacto no EUR</p>
                    </div>
                    <div className="border-l-2 border-green-500 pl-3">
                      <p className="text-sm font-medium">20:00 - Inventários Petróleo</p>
                      <p className="text-xs text-slate-500">Commodities energéticas</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-5 w-5 text-orange-500" />
                      <span>Oportunidades</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <p className="text-sm font-medium text-green-800 dark:text-green-200">EUR/USD Call</p>
                      <p className="text-xs text-green-600 dark:text-green-300">Probabilidade: 78%</p>
                    </div>
                    <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <p className="text-sm font-medium text-red-800 dark:text-red-200">GBP/JPY Put</p>
                      <p className="text-xs text-red-600 dark:text-red-300">Probabilidade: 65%</p>
                    </div>
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <p className="text-sm font-medium text-blue-800 dark:text-blue-200">Gold Call</p>
                      <p className="text-xs text-blue-600 dark:text-blue-300">Probabilidade: 72%</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
import { Rocket, Brain, Headphones, LucideIcon } from 'lucide-react'

export interface PocArticle {
  title: Record<string, string>
  content: Record<string, string>
  date: string
}

export interface PocDiagram {
  title: Record<string, string>
  imageUrl: string
  alt: Record<string, string>
}

export interface PocVideo {
  title: Record<string, string>
  url: string
  platform: 'youtube' | 'loom' | 'vimeo'
}

export interface Poc {
  id: string
  slug: string
  icon: LucideIcon
  title: Record<string, string>
  description: Record<string, string>
  tagline: Record<string, string>
  status: 'coming-soon' | 'available'
  saasUrl: string | null
  articles: PocArticle[]
  diagrams: PocDiagram[]
  videos: PocVideo[]
}

export const pocs: Poc[] = [
  {
    id: 'landing-page-generator',
    slug: 'landing-page-generator',
    icon: Rocket,
    title: {
      fr: 'Landing Page Generator',
      en: 'Landing Page Generator',
      zh: 'Landing Page Generator',
      es: 'Landing Page Generator'
    },
    description: {
      fr: 'Générateur de landing pages ultra-rapide et simple pour indépendants',
      en: 'Ultra-fast and simple landing page generator for freelancers',
      zh: '为自由职业者提供超快速简单的落地页生成器',
      es: 'Generador de páginas de destino ultra-rápido y simple para autónomos'
    },
    tagline: {
      fr: 'Créez une landing page professionnelle en quelques clics',
      en: 'Create a professional landing page in a few clicks',
      zh: '几次点击即可创建专业着陆页',
      es: 'Crea una página de destino profesional en unos pocos clics'
    },
    status: 'coming-soon',
    saasUrl: null,
    articles: [],
    diagrams: [],
    videos: []
  },
  {
    id: 'ai-meeting-digest',
    slug: 'ai-meeting-digest',
    icon: Brain,
    title: {
      fr: 'AI Meeting Digest',
      en: 'AI Meeting Digest',
      zh: 'AI Meeting Digest',
      es: 'AI Meeting Digest'
    },
    description: {
      fr: 'Assistant de productivité pour résumer vos réunions',
      en: 'Productivity assistant to summarize your meetings',
      zh: '总结会议的生产力助手',
      es: 'Asistente de productividad para resumir tus reuniones'
    },
    tagline: {
      fr: 'Transformez vos réunions en actions concrètes',
      en: 'Transform your meetings into concrete actions',
      zh: '将您的会议转化为具体行动',
      es: 'Transforma tus reuniones en acciones concretas'
    },
    status: 'coming-soon',
    saasUrl: null,
    articles: [],
    diagrams: [],
    videos: []
  },
  {
    id: 'customer-support-helper',
    slug: 'customer-support-helper',
    icon: Headphones,
    title: {
      fr: 'Customer Support Helper',
      en: 'Customer Support Helper',
      zh: 'Customer Support Helper',
      es: 'Customer Support Helper'
    },
    description: {
      fr: "Chatbot intelligent d'aide à la commande",
      en: 'Intelligent chatbot for order assistance',
      zh: '智能订单协助聊天机器人',
      es: 'Chatbot inteligente de ayuda a pedidos'
    },
    tagline: {
      fr: 'Support client automatisé et performant',
      en: 'Automated and efficient customer support',
      zh: '自动化高效的客户支持',
      es: 'Soporte al cliente automatizado y eficiente'
    },
    status: 'coming-soon',
    saasUrl: null,
    articles: [],
    diagrams: [],
    videos: []
  }
]

export function getPocBySlug(slug: string): Poc | undefined {
  return pocs.find(poc => poc.slug === slug)
}

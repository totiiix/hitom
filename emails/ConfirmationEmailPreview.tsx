import ConfirmationEmail from './ConfirmationEmail'

// Preview avec données de test en français
export default function ConfirmationEmailPreview() {
  return (
    <ConfirmationEmail
      firstName="Thomas"
      need="poc"
      customNeed=""
      siteUrl="https://hitom.fr"
      translations={{
        preview: {
          poc: "Votre demande de POC IA a bien été reçue - Hitom",
          ux: "Votre demande d'audit UX a bien été reçue - Hitom",
          ai: "Votre demande de solution IA a bien été reçue - Hitom",
          automation: "Votre demande d'automatisation a bien été reçue - Hitom",
          other: "Votre demande a bien été reçue - Hitom"
        },
        greeting: "Bonjour",
        brand: "Hitom",
        tagline: "Intelligence Artificielle & Innovation",
        title: {
          poc: "Merci pour votre intérêt pour nos POC !",
          ux: "Merci pour votre intérêt pour nos audits UX !",
          ai: "Merci pour votre intérêt pour nos solutions IA !",
          automation: "Merci pour votre intérêt pour nos solutions d'automatisation !",
          other: "Merci pour votre message !"
        },
        description: {
          poc: "Nous avons bien reçu votre demande et notre équipe l'examine attentivement. Les POC sont une excellente manière de tester rapidement une idée et d'évaluer la faisabilité technique avant un déploiement à grande échelle.",
          ux: "Nous avons bien reçu votre demande et nous sommes impatients de découvrir votre projet. Un bon audit UX peut transformer l'expérience utilisateur et booster significativement vos conversions.",
          ai: "Nous avons bien reçu votre demande. L'IA peut transformer profondément votre activité, et nous sommes là pour vous accompagner dans cette transition.",
          automation: "Nous avons bien reçu votre demande. L'automatisation de vos processus peut vous faire gagner un temps précieux et réduire considérablement les erreurs.",
          other: "Nous avons bien reçu votre demande et notre équipe l'examine attentivement."
        },
        customNeed: "Votre demande :",
        nextSteps: "Prochaines étapes",
        steps: {
          step1: "Notre équipe vous contactera sous 24h-48h",
          step2: "Nous discuterons de votre projet en détail",
          step3: "Nous vous proposerons une solution adaptée"
        },
        cta: {
          poc: "Découvrez nos exemples de POC",
          ux: "En savoir plus sur nos services",
          ai: "Découvrez nos solutions IA",
          automation: "En savoir plus sur l'automatisation",
          other: "Visitez notre site"
        },
        footer: {
          signature: "À très bientôt,",
          team: "L'équipe Hitom",
          website: "Site web",
          contact: "Nous contacter",
          copyright: "Tous droits réservés."
        }
      }}
    />
  )
}

// Version anglaise
export function ConfirmationEmailEnglish() {
  return (
    <ConfirmationEmail
      firstName="John"
      need="ux"
      customNeed=""
      siteUrl="https://hitom.fr"
      translations={{
        preview: {
          poc: "Your AI POC request has been received - Hitom",
          ux: "Your UX audit request has been received - Hitom",
          ai: "Your AI solution request has been received - Hitom",
          automation: "Your automation request has been received - Hitom",
          other: "Your request has been received - Hitom"
        },
        greeting: "Hello",
        brand: "Hitom",
        tagline: "Artificial Intelligence & Innovation",
        title: {
          poc: "Thank you for your interest in our POCs!",
          ux: "Thank you for your interest in our UX audits!",
          ai: "Thank you for your interest in our AI solutions!",
          automation: "Thank you for your interest in our automation solutions!",
          other: "Thank you for your message!"
        },
        description: {
          poc: "We have received your request and our team is carefully reviewing it. POCs are an excellent way to quickly test an idea and evaluate technical feasibility before large-scale deployment.",
          ux: "We have received your request and we are eager to discover your project. A good UX audit can transform the user experience and significantly boost your conversions.",
          ai: "We have received your request. AI can deeply transform your business, and we are here to support you through this transition.",
          automation: "We have received your request. Automating your processes can save you precious time and significantly reduce errors.",
          other: "We have received your request and our team is carefully reviewing it."
        },
        customNeed: "Your request:",
        nextSteps: "Next steps",
        steps: {
          step1: "Our team will contact you within 24-48h",
          step2: "We will discuss your project in detail",
          step3: "We will propose a tailored solution"
        },
        cta: {
          poc: "Discover our POC examples",
          ux: "Learn more about our services",
          ai: "Discover our AI solutions",
          automation: "Learn more about automation",
          other: "Visit our website"
        },
        footer: {
          signature: "See you soon,",
          team: "The Hitom team",
          website: "Website",
          contact: "Contact us",
          copyright: "All rights reserved."
        }
      }}
    />
  )
}

// Version espagnole
export function ConfirmationEmailSpanish() {
  return (
    <ConfirmationEmail
      firstName="María"
      need="ai"
      customNeed=""
      siteUrl="https://hitom.fr"
      translations={{
        preview: {
          poc: "Su solicitud de POC IA ha sido recibida - Hitom",
          ux: "Su solicitud de auditoría UX ha sido recibida - Hitom",
          ai: "Su solicitud de solución IA ha sido recibida - Hitom",
          automation: "Su solicitud de automatización ha sido recibida - Hitom",
          other: "Su solicitud ha sido recibida - Hitom"
        },
        greeting: "Hola",
        brand: "Hitom",
        tagline: "Inteligencia Artificial e Innovación",
        title: {
          poc: "¡Gracias por su interés en nuestros POC!",
          ux: "¡Gracias por su interés en nuestras auditorías UX!",
          ai: "¡Gracias por su interés en nuestras soluciones de IA!",
          automation: "¡Gracias por su interés en nuestras soluciones de automatización!",
          other: "¡Gracias por su mensaje!"
        },
        description: {
          poc: "Hemos recibido su solicitud y nuestro equipo la está examinando atentamente. Los POC son una excelente manera de probar rápidamente una idea y evaluar la viabilidad técnica antes de un despliegue a gran escala.",
          ux: "Hemos recibido su solicitud y estamos ansiosos por descubrir su proyecto. Una buena auditoría UX puede transformar la experiencia del usuario y aumentar significativamente sus conversiones.",
          ai: "Hemos recibido su solicitud. La IA puede transformar profundamente su actividad, y estamos aquí para acompañarle en esta transición.",
          automation: "Hemos recibido su solicitud. La automatización de sus procesos puede ahorrarle un tiempo valioso y reducir significativamente los errores.",
          other: "Hemos recibido su solicitud y nuestro equipo la está examinando atentamente."
        },
        customNeed: "Su solicitud:",
        nextSteps: "Próximos pasos",
        steps: {
          step1: "Nuestro equipo se pondrá en contacto con usted en 24-48h",
          step2: "Discutiremos su proyecto en detalle",
          step3: "Le propondremos una solución adaptada"
        },
        cta: {
          poc: "Descubra nuestros ejemplos de POC",
          ux: "Más información sobre nuestros servicios",
          ai: "Descubra nuestras soluciones de IA",
          automation: "Más información sobre la automatización",
          other: "Visite nuestro sitio web"
        },
        footer: {
          signature: "Hasta pronto,",
          team: "El equipo Hitom",
          website: "Sitio web",
          contact: "Contáctenos",
          copyright: "Todos los derechos reservados."
        }
      }}
    />
  )
}

// Version chinoise
export function ConfirmationEmailChinese() {
  return (
    <ConfirmationEmail
      firstName="李明"
      need="automation"
      customNeed=""
      siteUrl="https://hitom.fr"
      translations={{
        preview: {
          poc: "您的AI概念验证请求已收到 - Hitom",
          ux: "您的用户体验审计请求已收到 - Hitom",
          ai: "您的AI解决方案请求已收到 - Hitom",
          automation: "您的自动化请求已收到 - Hitom",
          other: "您的请求已收到 - Hitom"
        },
        greeting: "您好",
        brand: "Hitom",
        tagline: "人工智能与创新",
        title: {
          poc: "感谢您对我们的概念验证感兴趣！",
          ux: "感谢您对我们的用户体验审计感兴趣！",
          ai: "感谢您对我们的AI解决方案感兴趣！",
          automation: "感谢您对我们的自动化解决方案感兴趣！",
          other: "感谢您的留言！"
        },
        description: {
          poc: "我们已收到您的请求，我们的团队正在仔细审查。概念验证是快速测试想法并在大规模部署之前评估技术可行性的绝佳方式。",
          ux: "我们已收到您的请求，并期待了解您的项目。良好的用户体验审计可以改变用户体验并显著提高您的转化率。",
          ai: "我们已收到您的请求。人工智能可以深刻改变您的业务，我们在这里支持您完成这一转变。",
          automation: "我们已收到您的请求。自动化您的流程可以为您节省宝贵的时间并显著减少错误。",
          other: "我们已收到您的请求，我们的团队正在仔细审查。"
        },
        customNeed: "您的请求：",
        nextSteps: "后续步骤",
        steps: {
          step1: "我们的团队将在24-48小时内与您联系",
          step2: "我们将详细讨论您的项目",
          step3: "我们将为您提供定制解决方案"
        },
        cta: {
          poc: "探索我们的概念验证示例",
          ux: "了解更多关于我们的服务",
          ai: "探索我们的AI解决方案",
          automation: "了解更多关于自动化",
          other: "访问我们的网站"
        },
        footer: {
          signature: "期待与您联系，",
          team: "Hitom团队",
          website: "网站",
          contact: "联系我们",
          copyright: "版权所有。"
        }
      }}
    />
  )
}

// GTM dataLayer events as per analytics_events.md
export const track = (name: string, params?: Record<string, any>) => {
  if (typeof window === 'undefined') return
  const dataLayer = (window as any).dataLayer
  if (dataLayer) {
    const enrichedParams = {
      event: name,
      ...params,
      locale: params?.locale || document.documentElement.lang,
      path: params?.path || window.location.pathname
    }
    dataLayer.push(enrichedParams)
  }
}

// Predefined event helpers
export const trackOpenChatbot = (source?: string) => {
  track('open_chatbot', { source })
}

export const trackLeadSubmit = (source?: string, formType?: string) => {
  track('lead_submit', { source, form_type: formType })
}

export const trackBookCall = (source?: string) => {
  track('book_call', { source })
}

export const trackDownloadResource = (resourceName: string, source?: string) => {
  track('download_resource', { resource_name: resourceName, source })
}

export const trackPageView = (pageName: string) => {
  track('page_view', { page: pageName })
}

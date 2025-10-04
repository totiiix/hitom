import './globals.css'
import type { Metadata } from 'next'
import { defaultMetadata } from '@/lib/seo'

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return children
}

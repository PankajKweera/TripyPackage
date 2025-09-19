import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import { getFeaturedPackage, getRegularPackages } from '@/lib/sanity'
import { headers } from 'next/headers'

// Fetch fresh data on every request
export const dynamic = 'force-dynamic'

export default async function Home() {
  // Fetch packages at build time
  let featuredPackage = null
  let regularPackages = []

  try {
    const [featured, regular] = await Promise.all([
      getFeaturedPackage(),
      getRegularPackages()
    ])
    featuredPackage = featured
    regularPackages = regular
  } catch (error) {
    console.error('Error fetching packages at build time:', error)
    // Continue with empty packages - Hero component will handle fallback
  }

  return (
    <main className="min-h-screen">
      <Header />
      <Hero 
        initialFeaturedPackage={featuredPackage}
        initialRegularPackages={regularPackages}
      />
    </main>
  )
}

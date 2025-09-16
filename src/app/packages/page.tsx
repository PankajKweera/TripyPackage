import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { MapPin, Calendar, Users, Star, ArrowRight } from 'lucide-react'

export default function Packages() {
  const packages = [
    {
      id: 1,
      title: 'European Adventure',
      description: 'Explore the best of Europe with our comprehensive 14-day tour covering 8 countries.',
      price: '$2,499',
      duration: '14 Days',
      groupSize: 'Max 20',
      rating: 4.8,
      image: '/api/placeholder/400/300',
      destinations: ['Paris', 'Rome', 'Barcelona', 'Amsterdam'],
      features: ['Accommodation', 'Meals', 'Transport', 'Guide', 'Insurance'],
    },
    {
      id: 2,
      title: 'Asian Discovery',
      description: 'Discover the rich culture and stunning landscapes of Southeast Asia.',
      price: '$1,899',
      duration: '10 Days',
      groupSize: 'Max 15',
      rating: 4.9,
      image: '/api/placeholder/400/300',
      destinations: ['Bangkok', 'Singapore', 'Bali', 'Tokyo'],
      features: ['Accommodation', 'Meals', 'Transport', 'Guide', 'Insurance'],
    },
    {
      id: 3,
      title: 'African Safari',
      description: 'Experience the wild beauty of Africa with our premium safari package.',
      price: '$3,299',
      duration: '12 Days',
      groupSize: 'Max 12',
      rating: 4.7,
      image: '/api/placeholder/400/300',
      destinations: ['Nairobi', 'Serengeti', 'Victoria Falls', 'Cape Town'],
      features: ['Accommodation', 'Meals', 'Transport', 'Guide', 'Insurance'],
    },
    {
      id: 4,
      title: 'American Road Trip',
      description: 'Hit the open road and explore the diverse landscapes of North America.',
      price: '$2,199',
      duration: '16 Days',
      groupSize: 'Max 18',
      rating: 4.6,
      image: '/api/placeholder/400/300',
      destinations: ['New York', 'Las Vegas', 'San Francisco', 'Miami'],
      features: ['Accommodation', 'Meals', 'Transport', 'Guide', 'Insurance'],
    },
    {
      id: 5,
      title: 'Oceanic Paradise',
      description: 'Relax and unwind in the beautiful islands of the Pacific Ocean.',
      price: '$1,599',
      duration: '8 Days',
      groupSize: 'Max 25',
      rating: 4.9,
      image: '/api/placeholder/400/300',
      destinations: ['Fiji', 'Tahiti', 'Bora Bora', 'Hawaii'],
      features: ['Accommodation', 'Meals', 'Transport', 'Guide', 'Insurance'],
    },
    {
      id: 6,
      title: 'Arctic Expedition',
      description: 'Witness the Northern Lights and explore the Arctic wilderness.',
      price: '$4,499',
      duration: '10 Days',
      groupSize: 'Max 8',
      rating: 4.8,
      image: '/api/placeholder/400/300',
      destinations: ['Iceland', 'Greenland', 'Norway', 'Alaska'],
      features: ['Accommodation', 'Meals', 'Transport', 'Guide', 'Insurance'],
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding-lg">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-1 mb-6">
              Travel
              <span className="text-primary-600 block">
                Packages
              </span>
            </h1>
            <p className="body-large text-gray-600 mb-8">
              Discover amazing destinations around the world with our carefully curated travel packages. 
              From adventure tours to luxury getaways, we have something for every traveler.
            </p>
          </div>
        </Container>
      </section>

      {/* Packages Grid */}
      <section className="section-padding-lg bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} hover className="overflow-hidden">
                <div className="aspect-video bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <MapPin className="h-16 w-16 text-primary-600" />
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{pkg.title}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{pkg.groupSize}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Destinations:</h4>
                    <div className="flex flex-wrap gap-1">
                      {pkg.destinations.map((dest, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                        >
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
                    <div className="flex flex-wrap gap-1">
                      {pkg.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-2xl font-bold text-primary-600">{pkg.price}</span>
                      <span className="text-gray-600 text-sm ml-1">per person</span>
                    </div>
                    <Button>
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white section-padding-lg">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6 text-white">
              Can't Find What You're Looking For?
            </h2>
            <p className="body-large text-primary-100 mb-8">
              We can create a custom travel package tailored to your specific needs and preferences.
            </p>
            <Button variant="secondary" size="lg">
              Create Custom Package
            </Button>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { MapPin, Clock, Users, Star, ArrowRight, Search } from 'lucide-react'

export default function Destination() {
  const destinations = [
    {
      id: 1,
      name: 'Paris, France',
      description: 'The City of Light, known for its art, fashion, and iconic landmarks.',
      image: '/api/placeholder/400/300',
      rating: 4.9,
      bestTime: 'Apr - Oct',
      duration: '3-5 days',
      price: 'From $1,200',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame', 'Champs-Élysées'],
      climate: 'Temperate',
      language: 'French',
    },
    {
      id: 2,
      name: 'Tokyo, Japan',
      description: 'A vibrant metropolis blending traditional culture with modern innovation.',
      image: '/api/placeholder/400/300',
      rating: 4.8,
      bestTime: 'Mar - May, Sep - Nov',
      duration: '5-7 days',
      price: 'From $1,500',
      highlights: ['Senso-ji Temple', 'Tokyo Skytree', 'Shibuya Crossing', 'Tsukiji Market'],
      climate: 'Temperate',
      language: 'Japanese',
    },
    {
      id: 3,
      name: 'New York, USA',
      description: 'The city that never sleeps, offering endless entertainment and culture.',
      image: '/api/placeholder/400/300',
      rating: 4.7,
      bestTime: 'Apr - Jun, Sep - Nov',
      duration: '4-6 days',
      price: 'From $1,800',
      highlights: ['Statue of Liberty', 'Central Park', 'Times Square', 'Broadway'],
      climate: 'Continental',
      language: 'English',
    },
    {
      id: 4,
      name: 'Sydney, Australia',
      description: 'A stunning harbor city with beautiful beaches and iconic architecture.',
      image: '/api/placeholder/400/300',
      rating: 4.8,
      bestTime: 'Sep - Nov, Mar - May',
      duration: '4-6 days',
      price: 'From $1,300',
      highlights: ['Sydney Opera House', 'Harbour Bridge', 'Bondi Beach', 'Royal Botanic Gardens'],
      climate: 'Temperate',
      language: 'English',
    },
    {
      id: 5,
      name: 'Dubai, UAE',
      description: 'A modern marvel in the desert, known for luxury and innovation.',
      image: '/api/placeholder/400/300',
      rating: 4.6,
      bestTime: 'Nov - Mar',
      duration: '3-4 days',
      price: 'From $1,100',
      highlights: ['Burj Khalifa', 'Palm Jumeirah', 'Dubai Mall', 'Desert Safari'],
      climate: 'Desert',
      language: 'Arabic',
    },
    {
      id: 6,
      name: 'Barcelona, Spain',
      description: 'A city of art and architecture, home to Gaudí\'s masterpieces.',
      image: '/api/placeholder/400/300',
      rating: 4.9,
      bestTime: 'May - Sep',
      duration: '3-5 days',
      price: 'From $900',
      highlights: ['Sagrada Familia', 'Park Güell', 'Las Ramblas', 'Gothic Quarter'],
      climate: 'Mediterranean',
      language: 'Spanish',
    },
  ]

  const categories = [
    'All Destinations',
    'Europe',
    'Asia',
    'North America',
    'South America',
    'Africa',
    'Oceania',
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding-lg">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="heading-1 mb-6">
              Discover
              <span className="text-primary-600 block">
                Destinations
              </span>
            </h1>
            <p className="body-large text-gray-600 mb-8">
              Explore the world's most amazing destinations. From bustling cities to serene landscapes, 
              find your next adventure with our comprehensive destination guide.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Filter Categories */}
      <section className="bg-white border-b border-gray-200">
        <Container>
          <div className="flex flex-wrap gap-2 py-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  index === 0
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Destinations Grid */}
      <section className="section-padding-lg bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Card key={destination.id} hover className="overflow-hidden">
                <div className="aspect-video bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <MapPin className="h-16 w-16 text-primary-600" />
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{destination.name}</CardTitle>
                  <CardDescription>{destination.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{destination.bestTime}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{destination.duration}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Climate:</span>
                      <span className="font-medium">{destination.climate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Language:</span>
                      <span className="font-medium">{destination.language}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-medium text-primary-600">{destination.price}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    Explore Destination
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 section-padding-lg">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="body-large text-gray-600 mb-8">
              Browse our travel packages and find the perfect destination for your next adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                View All Packages
              </Button>
              <Button variant="secondary" size="lg">
                Get Travel Tips
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}

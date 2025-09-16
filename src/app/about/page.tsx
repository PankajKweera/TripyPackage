import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Users, Target, Award, Heart } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To create exceptional digital experiences that solve real-world problems and drive meaningful impact.',
    },
    {
      icon: Users,
      title: 'Team',
      description: 'A diverse group of passionate developers, designers, and strategists working together.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering high-quality solutions that exceed expectations.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do and it shows in every project we deliver.',
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
              About
              <span className="text-primary-600 block">
                TripyPackage
              </span>
            </h1>
            <p className="body-large text-gray-600 mb-8">
              We are a team of passionate developers and designers dedicated to creating 
              exceptional digital experiences. Our mission is to build responsive, 
              performant, and user-friendly applications that make a difference.
            </p>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="section-padding-lg bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Our Values</h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our approach to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} hover className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 section-padding-lg">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}

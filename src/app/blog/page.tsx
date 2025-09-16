import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Container from '@/components/ui/Container'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { Calendar, User, Clock, ArrowRight, Search, Tag } from 'lucide-react'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: '10 Must-Visit Destinations in Europe',
      excerpt: 'Discover the most beautiful and culturally rich destinations across Europe that every traveler should experience.',
      content: 'Europe offers an incredible diversity of cultures, landscapes, and experiences...',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Destinations',
      tags: ['Europe', 'Travel Tips', 'Culture'],
      image: '/api/placeholder/400/250',
      featured: true,
    },
    {
      id: 2,
      title: 'Budget Travel: How to See the World for Less',
      excerpt: 'Learn practical tips and strategies for traveling on a budget without compromising on experiences.',
      content: 'Traveling doesn\'t have to break the bank. With the right planning and strategies...',
      author: 'Mike Chen',
      date: '2024-01-12',
      readTime: '7 min read',
      category: 'Budget Travel',
      tags: ['Budget', 'Tips', 'Planning'],
      image: '/api/placeholder/400/250',
      featured: false,
    },
    {
      id: 3,
      title: 'Solo Travel: A Guide to Safe and Memorable Adventures',
      excerpt: 'Everything you need to know about traveling solo, from safety tips to making the most of your journey.',
      content: 'Solo travel can be one of the most rewarding experiences of your life...',
      author: 'Emma Davis',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Solo Travel',
      tags: ['Solo Travel', 'Safety', 'Adventure'],
      image: '/api/placeholder/400/250',
      featured: false,
    },
    {
      id: 4,
      title: 'The Ultimate Packing List for Every Type of Trip',
      excerpt: 'Never forget an essential item again with our comprehensive packing guides for different types of travel.',
      content: 'Packing can make or break your travel experience. Here\'s everything you need...',
      author: 'David Wilson',
      date: '2024-01-08',
      readTime: '4 min read',
      category: 'Packing',
      tags: ['Packing', 'Essentials', 'Organization'],
      image: '/api/placeholder/400/250',
      featured: false,
    },
    {
      id: 5,
      title: 'Photography Tips for Travelers',
      excerpt: 'Capture your travel memories like a pro with these essential photography tips and techniques.',
      content: 'Great travel photography is about more than just having a good camera...',
      author: 'Lisa Rodriguez',
      date: '2024-01-05',
      readTime: '8 min read',
      category: 'Photography',
      tags: ['Photography', 'Tips', 'Memories'],
      image: '/api/placeholder/400/250',
      featured: false,
    },
    {
      id: 6,
      title: 'Sustainable Travel: How to Be a Responsible Tourist',
      excerpt: 'Learn how to travel sustainably and make a positive impact on the places you visit.',
      content: 'Sustainable travel is about making conscious choices that benefit both...',
      author: 'Alex Green',
      date: '2024-01-03',
      readTime: '6 min read',
      category: 'Sustainability',
      tags: ['Sustainability', 'Responsible Travel', 'Environment'],
      image: '/api/placeholder/400/250',
      featured: false,
    },
  ]

  const categories = [
    'All Posts',
    'Destinations',
    'Budget Travel',
    'Solo Travel',
    'Packing',
    'Photography',
    'Sustainability',
  ]

  const featuredPost = blogPosts.find(post => post.featured)

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
                Blog
              </span>
            </h1>
            <p className="body-large text-gray-600 mb-8">
              Get inspired, learn tips, and discover amazing destinations through our travel blog. 
              From budget travel to luxury experiences, we cover it all.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search blog posts..."
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

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-padding bg-gray-50">
          <Container>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Post</h2>
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-square bg-gray-200 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                      <Tag className="h-16 w-16 text-primary-600" />
                    </div>
                    <div className="absolute top-4 left-4 bg-primary-600 text-white px-2 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{featuredPost.title}</h3>
                    <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </Container>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="section-padding-lg bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} hover className="overflow-hidden">
                <div className="aspect-video bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <Tag className="h-12 w-12 text-primary-600" />
                  </div>
                  <div className="absolute top-4 left-4 bg-white text-gray-900 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button className="w-full">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-primary-600 text-white section-padding-lg">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6 text-white">
              Stay Updated
            </h2>
            <p className="body-large text-primary-100 mb-8">
              Subscribe to our newsletter and get the latest travel tips, destination guides, and exclusive offers.
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}

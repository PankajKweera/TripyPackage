import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '7r6jmo50',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true, // Use CDN for faster loading
  apiVersion: '2023-05-03', // Use current date
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN || undefined, // Use token if available
})

// Image URL builder for optimized images
const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source: any) => builder.image(source)

// Query for toast messages
export const getToastMessage = async () => {
  try {
    const query = `*[_type == "toastMessage"][0] {
      message,
      isActive
    }`
    
    const result = await sanityClient.fetch(query)
    
    // If no content exists, return default message
    if (!result) {
      return {
        message: 'Thank you for subscribing to our newsletter!',
        isActive: true
      }
    }
    
    return result
  } catch (error) {
    console.error('Error fetching toast message:', error)
    // Fallback message if Sanity is unavailable
    return {
      message: 'Thank you for subscribing to our newsletter!',
      isActive: true
    }
  }
}

// Query for all content
export const getContent = async () => {
  try {
    const query = `*[_type in ["toastMessage", "buttonText", "pageContent"]] {
      _type,
      message,
      text,
      title,
      isActive
    }`
    
    const result = await sanityClient.fetch(query)
    return result
  } catch (error) {
    console.error('Error fetching content:', error)
    return []
  }
}

// About Us Queries
export const getAboutUs = async () => {
  try {
    const query = `*[_type == "aboutUs" && isActive == true][0] {
      _id,
      title,
      heroSection {
        headline,
        subheadline,
        heroImage,
        ctaButton {
          text,
          link
        }
      },
      companyStory {
        title,
        content,
        storyImage
      },
      missionVision {
        mission {
          title,
          content,
          icon
        },
        vision {
          title,
          content,
          icon
        }
      },
      teamSection {
        title,
        subtitle,
        teamMembers[] {
          name,
          position,
          bio,
          photo,
          socialLinks {
            linkedin,
            twitter,
            email
          }
        }
      },
      values {
        title,
        valuesList[] {
          title,
          description,
          icon
        }
      },
      stats {
        title,
        statistics[] {
          number,
          label,
          description
        }
      },
      contactInfo {
        title,
        address {
          street,
          city,
          state,
          zipCode,
          country
        },
        contactDetails {
          phone,
          email,
          website
        }
      },
      seo {
        metaTitle,
        metaDescription,
        keywords
      }
    }`
    
    const result = await sanityClient.fetch(query)
    return result
  } catch (error) {
    console.error('Error fetching about us:', error)
    return null
  }
}

// Get About Us Hero Section Only
export const getAboutUsHero = async () => {
  try {
    const query = `*[_type == "aboutUs" && isActive == true][0] {
      heroSection {
        headline,
        subheadline,
        heroImage,
        ctaButton {
          text,
          link
        }
      }
    }`
    
    const result = await sanityClient.fetch(query)
    return result?.heroSection || null
  } catch (error) {
    console.error('Error fetching about us hero:', error)
    return null
  }
}

// Get Simple About Us Section
export const getAboutUsSimple = async () => {
  try {
    const query = `*[_type == "aboutUsSimple" && isActive == true][0] {
      _id,
      headline,
      description,
      isActive
    }`
    
    const result = await sanityClient.fetch(query)
    

    if (!result) {
      return {
        _id: 'default',
        headline: 'We Are The Best Travel Market',
        description: 'Discover amazing travel packages and experiences with our expert team.',
        isActive: true
      }
    }
    
    return result
  } catch (error) {
    console.error('Error fetching about us simple:', error)
    // Return fallback content instead of null
    return {
      _id: 'fallback',
      headline: 'We Are The Best Travel Market',
      description: 'Discover amazing travel packages and experiences with our expert team.',
      isActive: true
    }
  }
}

// Get Travel Packages
export const getPackages = async () => {
  try {
    const query = `*[_type == "packages" && isActive == true] | order(isFeatured desc, _createdAt desc) {
      _id,
      title,
      description,
      dates,
      duration,
      image,
      isFeatured,
      isActive
    }`
    
    const result = await sanityClient.fetch(query)
    return result || []
  } catch (error) {
    console.error('Error fetching packages:', error)
    return []
  }
}

// Get Featured Package (for left side)
export const getFeaturedPackage = async () => {
  try {
    const query = `*[_type == "packages" && isActive == true && isFeatured == true][0] {
      _id,
      title,
      description,
      dates,
      duration,
      image,
      isFeatured,
      isActive
    }`
    
    const result = await sanityClient.fetch(query)
    return result || null
  } catch (error) {
    console.error('Error fetching featured package:', error)
    return null
  }
}

// Get Regular Packages (for right side list)
export const getRegularPackages = async () => {
  try {
    const query = `*[_type == "packages" && isActive == true && isFeatured != true] | order(_createdAt desc) {
      _id,
      title,
      description,
      dates,
      duration,
      image,
      isFeatured,
      isActive
    }`
    
    const result = await sanityClient.fetch(query)
    return result || []
  } catch (error) {
    console.error('Error fetching regular packages:', error)
    return []
  }
}

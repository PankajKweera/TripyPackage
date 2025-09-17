import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'your-project-id', // You'll get this from Sanity
  dataset: 'production',
  useCdn: true, // Use CDN for faster loading
  apiVersion: '2023-05-03', // Use current date
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // Optional for public content
})

// Query for toast messages
export const getToastMessage = async () => {
  try {
    const query = `*[_type == "toastMessage"][0] {
      message,
      isActive
    }`
    
    const result = await sanityClient.fetch(query)
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

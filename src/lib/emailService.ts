import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

export const subscribeEmail = async (email: string): Promise<{ success: boolean; message: string }> => {
  try {
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, message: 'Please enter a valid email address' };
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Add to Firestore
    const docRef = await addDoc(collection(db, 'emailSubscriptions'), {
      email: normalizedEmail,
      subscribedAt: serverTimestamp(),
      source: 'website',
      createdAt: new Date().toISOString()
    });

    return { success: true, message: 'Successfully subscribed! Thank you for joining us.' };
  } catch (error) {
    return { success: false, message: 'Something went wrong. Please try again.' };
  }
};

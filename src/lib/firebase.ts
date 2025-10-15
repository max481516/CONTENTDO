import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Next.js envs must be prefixed with NEXT_PUBLIC_ to be exposed to the client
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

// Avoid re-initializing in Fast Refresh
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const auth = getAuth(app);

// Analytics only on the client; returns null on server or if unsupported
export async function getAnalyticsClient() {
  if (typeof window === "undefined") return null;
  try {
    const { isSupported, getAnalytics } = await import("firebase/analytics");
    return (await isSupported()) ? getAnalytics(app) : null;
  } catch {
    return null;
  }
}

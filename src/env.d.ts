// Type-safe environment variables
// Add your environment variable types here for better autocomplete and type checking

declare namespace NodeJS {
  interface ProcessEnv {
    // Firebase
    NEXT_PUBLIC_FIREBASE_API_KEY: string;
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string;
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: string;
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: string;
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
    NEXT_PUBLIC_FIREBASE_APP_ID: string;
    
    // Add other env variables as needed
    NODE_ENV: 'development' | 'production' | 'test';
  }
}

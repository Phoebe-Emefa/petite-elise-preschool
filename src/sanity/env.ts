// ./src/sanity/env.ts

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!

// Values you may additionally want to configure globally
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-07-11'



// FIREBASE

export const firebaseAPIKey = process.env.NEXT_PUBLIC_API_KEY!
export const firebaseAuthDomain = process.env.NEXT_PUBLIC_AUTH_DOMAIN!
export const firebaseProjectID = process.env.NEXT_PUBLIC_PROJECT_ID!
export const firebaseStorageBucket = process.env.NEXT_PUBLIC_STORAGE_BUCKET!
export const firebaseMessagingSenderID = process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID!
export const firebaseAppID = process.env.NEXT_PUBLIC_APP_ID!
export const firebaseMeasurementID = process.env.NEXT_PUBLIC_MEASUREMENT_ID!


// APP
export const appURL = process.env.NEXT_PUBLIC_API_KEY!

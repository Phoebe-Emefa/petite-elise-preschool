// ./src/sanity/env.ts

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!

// Values you may additionally want to configure globally
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-07-11'



// FIREBASE

export const appWriteDatabaseID = process.env.NEXT_PUBLIC_DATABASE_ID!
export const appwriteCollectionID = process.env.NEXT_PUBLIC_COLLECTION_ID!
export const appwriteBucketID = process.env.NEXT_PUBLIC_BUCKET_ID!



// APP
export const appURL = process.env.NEXT_PUBLIC_API_KEY!

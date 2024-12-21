import { appWriteProjectID } from "@/sanity/env";
import { Client, Databases, Storage } from "appwrite";

const client = new Client();
const storage = new Storage(client);
const database = new Databases(client);


client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite endpoint
  .setProject(appWriteProjectID); // Your Appwrite project ID

export { client, storage, database };

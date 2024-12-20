import { Client, Databases, Storage } from "appwrite";

const client = new Client();
const storage = new Storage(client);
const database = new Databases(client);


client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite endpoint
  .setProject("676494b8002f6b3d445d"); // Your Appwrite project ID

export { client, storage, database };

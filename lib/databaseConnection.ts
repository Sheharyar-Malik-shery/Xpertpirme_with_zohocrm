
// lib/mongooseConnection.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI || '';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI in .env.local');
}

// Global is used to persist the connection across hot reloads in dev
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}





// // lib/mongodb.ts
// import { MongoClient } from 'mongodb';

// declare global {
//   var _mongoClientPromise: Promise<MongoClient> | undefined;
// }

// const uri = process.env.NEXT_PUBLIC_MONGODB_URI as string;
// const options = {};

// let client: MongoClient;
// let clientPromise: Promise<MongoClient>;

// if (!process.env.NEXT_PUBLIC_MONGODB_URI) {
//   throw new Error('Please add MONGODB_URI to your .env.local');
// }

// console.log("Environment is", process.env.NODE_ENV);

// if (process.env.NODE_ENV === 'development') {
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect()
//       .then(async(connectedClient) => {
//         const serverInfo = await connectedClient.db().admin().serverStatus();
//         console.log('MongoDB connected successfully (development)', serverInfo.host);
//         return connectedClient;
//       })
//       .catch((error) => {
//         console.error('MongoDB connection failed (development)', error.message);
//         throw error;
//       });
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect()
//     .then((connectedClient) => {
//       console.log(`MongoDB connected successfully (production)`);
//       return connectedClient;
//     })
//     .catch((error) => {
//       console.error(' MongoDB connection failed (production)', error);
//       throw error;
//     });
// }

// export default clientPromise;

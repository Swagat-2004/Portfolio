import mongoose from "mongoose";

// Serverless functions can be invoked many times per second, each in a fresh
// (or reused) execution context. We cache the connection on the global object
// so a warm function invocation reuses it instead of opening a new one.
let cached = global._mongooseConn;

if (!cached) {
  cached = global._mongooseConn = { conn: null, promise: null };
}

export default async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error("MONGO_URI environment variable is not set");
    }
    cached.promise = mongoose.connect(uri).then((m) => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

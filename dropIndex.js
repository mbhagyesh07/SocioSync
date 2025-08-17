import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://mbhagyesh07:jZyejhLRusbuyQb5@cluster1.kuhcszm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"; 
// 🔴 replace "test" with your DB name or use your MongoDB Atlas URI

async function dropUserIndexes() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");

    const result = await mongoose.connection.db.collection("users").dropIndexes();
    console.log("✅ Indexes dropped:", result);
  } catch (err) {
    console.error("❌ Error:", err.message);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
}

dropUserIndexes();

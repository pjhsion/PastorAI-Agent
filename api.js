// api.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

// 미들웨어
app.use(cors());
app.use(express.json());

// ✅ MongoDB 연결
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error("❌ MONGO_URI is not defined in environment variables");
} else {
  mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));
}

// ✅ 간단한 모델 (설교 예시)
const SermonSchema = new mongoose.Schema({
  title: String,
  preacher: String,
  date: Date,
});

const Sermon = mongoose.model("Sermon", SermonSchema);

// ✅ 라우터
// 서버 기본 확인용
app.get("/", (req, res) => {
  res.send("✅ Pastor AI Agent Backend is running!");
});

// 설교 목록 가져오기
app.get("/api/sermons", async (req, res) => {
  try {
    const sermons = await Sermon.find();
    res.json(sermons);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch sermons" });
  }
});

// 설교 추가하기
app.post("/api/sermons", async (req, res) => {
  try {
    const newSermon = new Sermon(req.body);
    await newSermon.save();
    res.json(newSermon);
  } catch (err) {
    res.status(500).json({ error: "Failed to add sermon" });
  }
});

// ✅ 서버 실행
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

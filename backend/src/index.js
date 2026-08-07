const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    data: { status: 'ONLINE', timestamp: new Date().toISOString() },
    message: 'Portfolio Dev Hub REST API is running smoothly.',
  });
});

// Portfolio Projects Endpoint
app.get('/api/projects', (req, res) => {
  res.status(200).json({
    success: true,
    data: [
      {
        id: 'smart-waste',
        title: 'Smart Waste Management System',
        category: 'AI / Fullstack Deep Learning App',
        description: 'Sistem klasifikasi sampah otomatis berbasis CNN MobileNetV2.',
        tags: ['React.js', 'Node.js', 'Express.js', 'Python', 'MobileNetV2'],
      },
    ],
    message: 'Portfolio projects retrieved successfully.',
  });
});

// Contact Endpoint (POST /api/contact)
app.post('/api/contact', (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // Input Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        data: null,
        message: 'Semua bidang form (nama, email, subjek, pesan) wajib diisi.',
      });
    }

    // Process Message
    console.log(`[API CONTACT RECEIVED] From: ${name} (${email}) | Subject: ${subject}`);

    return res.status(201).json({
      success: true,
      data: { name, email, subject, sentAt: new Date().toISOString() },
      message: 'Pesan Anda berhasil diterima oleh server backend Express. Terima kasih!',
    });
  } catch (error) {
    next(error);
  }
});

// Centralized Error-Handling Middleware
app.use((err, req, res, next) => {
  console.error('[SERVER ERROR]', err);
  res.status(500).json({
    success: false,
    data: null,
    message: 'Terjadi kesalahan internal pada server backend.',
  });
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`[EXPRESS SERVER] Running on port ${PORT}`);
});

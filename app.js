import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import connectToMongoDB from './src/config/service-config.js';
import authRoutes from './src/routes/authRoutes.js';
import projectRoutes from './src/routes/projectRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true })); // ✅ Optional but useful
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

app.use('/api/auth', authRoutes); // ✅ mount route
app.use('/api/projects', projectRoutes);

app.get('/', (req, res) => res.send('API is running'));

const PORT = process.env.PORT || 5000;
connectToMongoDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});

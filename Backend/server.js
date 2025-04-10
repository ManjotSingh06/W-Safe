import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

import communityRoutes from './routes/community.js';
import sosRoutes from './routes/sos.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

app.set('io', io); // Make it accessible to routes

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/community', communityRoutes);
app.use('/api/sos', sosRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('✅ Connected to MongoDB');
  server.listen(process.env.PORT || 5000, () => {
    console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
  });
}).catch(err => console.error('❌ MongoDB connection error:', err));



io.on('connection', (socket) => {
  console.log('🟢 New client connected');
});

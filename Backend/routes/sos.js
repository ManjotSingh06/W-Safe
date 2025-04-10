import express from 'express';
import SOS from '../models/SOS.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { location, timestamp } = req.body;
    const sos = new SOS({ location, timestamp });
    await sos.save();
    res.status(201).json(sos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save SOS signal' });
  }
});

export default router;

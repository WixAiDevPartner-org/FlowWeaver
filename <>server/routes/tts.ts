import express from 'express';
import { TTSService } from '../services/tts';

const router = express.Router();
const ttsService = new TTSService();

router.post('/synthesize', async (req, res) => {
  try {
    const { text } = req.body;
    const audioContent = await ttsService.generateSpeech(text);
    
    res.set('Content-Type', 'audio/mp3');
    res.send(audioContent);
  } catch (error) {
    res.status(500).send({ error: 'Failed to generate speech' });
  }
});

export default router;

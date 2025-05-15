import textToSpeech from '@google-cloud/text-to-speech';
import { SpeechRequest } from '../types';
import util from 'util';
import fs from 'fs';

const client = new textToSpeech.TextToSpeechClient();

export class TTSService {
  async generateSpeech(text: string): Promise<Buffer> {
    const request = {
      input: { text },
      voice: {
        languageCode: 'en-US',
        ssmlGender: 'NEUTRAL'
      },
      audioConfig: {
        audioEncoding: 'MP3'
      }
    };

    try {
      const [response] = await client.synthesizeSpeech(request);
      return response.audioContent as Buffer;
    } catch (error) {
      console.error('Error generating speech:', error);
      throw error;
    }
  }
}

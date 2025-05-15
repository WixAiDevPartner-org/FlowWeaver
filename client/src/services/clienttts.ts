export class ClientTTSService {
  private synthesis: SpeechSynthesis;
  
  constructor() {
    this.synthesis = window.speechSynthesis;
  }

  speak(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    // Default settings
    utterance.rate = 1.0;  // Speaking rate
    utterance.pitch = 1.0; // Voice pitch
    utterance.volume = 1.0; // Volume
    utterance.lang = 'en-US'; // Language
    
    this.synthesis.speak(utterance);
  }

  stop() {
    this.synthesis.cancel();
  }
}

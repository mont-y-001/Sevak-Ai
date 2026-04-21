export const callScript = [
  { step: 'p1', speaker: 'ai',  hi: 'नमस्ते! मैं SevakAI हूँ। क्या आप Priya Sharma बोल रही हैं? कृपया अपना 4-अंकीय PIN बताएं।', en: "Hello! I'm SevakAI. Are you Priya Sharma? Please say your 4-digit PIN." },
  { step: 'p1', speaker: 'ngo', hi: 'हाँ, मैं Priya Sharma बोल रही हूँ। PIN — एक, दो, तीन, चार।', en: 'Yes, I am Priya Sharma. PIN — 1, 2, 3, 4.' },
  { step: 'p2', speaker: 'ai',  hi: 'PIN सत्यापित। इस सप्ताह आपको कितने volunteers चाहिए?', en: 'PIN verified. How many volunteers do you need this week?' },
  { step: 'p2', speaker: 'ngo', hi: 'हमें बीस volunteers चाहिए।', en: 'We need twenty volunteers.' },
  { step: 'p3', speaker: 'ai',  hi: 'ठीक है — बीस volunteers। किस इलाके का pincode है?', en: 'Understood — 20 volunteers. What is the area pincode?' },
  { step: 'p3', speaker: 'ngo', hi: 'दिल्ली — एक-एक-शून्य-शून्य-एक।', en: 'Delhi — 1-1-0-0-0-1.' },
  { step: 'p4', speaker: 'ai',  hi: '110001, दिल्ली। काम का प्रकार — खाना, स्वास्थ्य, या शिक्षा?', en: '110001 Delhi. Type of work — food, health, or education?' },
  { step: 'p4', speaker: 'ngo', hi: 'खाना बाँटना — food distribution।', en: 'Food distribution.' },
  { step: 'p5', speaker: 'ai',  hi: '1 से 5 में urgency कितनी है?', en: 'On a scale of 1–5, what is the urgency?' },
  { step: 'p5', speaker: 'ngo', hi: 'तीन।', en: 'Three.' },
  { step: 'p6', speaker: 'ai',  hi: 'पुष्टि करें: 20 volunteers, 110001 दिल्ली, Food Distribution, Urgency 3 — सही है?', en: 'Confirming: 20 volunteers, 110001 Delhi, Food Distribution, Urgency 3 — correct?' },
  { step: 'p6', speaker: 'ngo', hi: 'हाँ, सब सही है।', en: 'Yes, everything is correct.' },
  { step: 'p6', speaker: 'ai',  hi: 'धन्यवाद! जानकारी सत्यापित। Volunteers को अभी notify किया जा रहा है।', en: 'Thank you! Data validated and saved. Volunteers are being notified now via WhatsApp.' },
];

export const simSteps = [
  { id: 'p1', label: 'PIN Verify' },
  { id: 'p2', label: 'Volunteers' },
  { id: 'p3', label: 'Pincode' },
  { id: 'p4', label: 'Task Type' },
  { id: 'p5', label: 'Urgency' },
  { id: 'p6', label: 'Dispatch' },
];

export const extractedData = {
  volunteers: { label: 'Volunteers Requested', value: '20',         confidence: '97%'  },
  pincode:    { label: 'Area / Pincode',        value: '110001',     confidence: '99%'  },
  taskType:   { label: 'Task Type',             value: 'Food Dist.', confidence: '95%'  },
  urgency:    { label: 'Urgency Level',         value: '3 / 5',      confidence: '100%' },
};
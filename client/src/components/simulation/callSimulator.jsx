import { useState, useRef, useEffect } from 'react';

const script = [
  {p:'p1',s:'ai', hi:'नमस्ते! मैं SevakAI हूँ। क्या आप Priya Sharma बोल रही हैं? कृपया अपना 4-अंकीय PIN बताएं।',en:"Hello! I'm SevakAI. Are you Priya Sharma? Please say your 4-digit PIN."},
  {p:'p1',s:'ngo',hi:'हाँ, मैं Priya Sharma बोल रही हूँ। PIN — एक, दो, तीन, चार।',en:'Yes, I am Priya Sharma. PIN — 1, 2, 3, 4.'},
  {p:'p2',s:'ai', hi:'PIN सत्यापित। इस सप्ताह आपको कितने volunteers चाहिए?',en:'PIN verified. How many volunteers do you need this week?'},
  {p:'p2',s:'ngo',hi:'हमें बीस volunteers चाहिए।',en:'We need twenty volunteers.'},
  {p:'p3',s:'ai', hi:'ठीक है — बीस volunteers। किस इलाके का pincode है?',en:'Understood — 20 volunteers. What is the area pincode?'},
  {p:'p3',s:'ngo',hi:'दिल्ली — एक-एक-शून्य-शून्य-एक।',en:'Delhi — 1-1-0-0-0-1.'},
  {p:'p4',s:'ai', hi:'110001, दिल्ली। काम का प्रकार — खाना, स्वास्थ्य, या शिक्षा?',en:'110001 Delhi. Type of work — food, health, or education?'},
  {p:'p4',s:'ngo',hi:'खाना बाँटना — food distribution।',en:'Food distribution.'},
  {p:'p5',s:'ai', hi:'1 से 5 में urgency कितनी है?',en:'On a scale of 1–5, what is the urgency?'},
  {p:'p5',s:'ngo',hi:'तीन।',en:'Three.'},
  {p:'p6',s:'ai', hi:'पुष्टि करें: 20 volunteers, 110001 दिल्ली, Food Distribution, Urgency 3 — सही है?',en:'Confirming: 20 volunteers, 110001 Delhi, Food Distribution, Urgency 3 — correct?'},
  {p:'p6',s:'ngo',hi:'हाँ, सब सही है।',en:'Yes, everything is correct.'},
  {p:'p6',s:'ai', hi:'धन्यवाद! जानकारी सत्यापित। Volunteers को अभी notify किया जा रहा है।',en:'Thank you! Data validated and saved. Volunteers are being notified now via WhatsApp.'},
];

const steps = [
  { id: 'p1', num: '1', label: 'PIN Verify' },
  { id: 'p2', num: '2', label: 'Volunteers' },
  { id: 'p3', num: '3', label: 'Pincode' },
  { id: 'p4', num: '4', label: 'Task Type' },
  { id: 'p5', num: '5', label: 'Urgency' },
  { id: 'p6', num: '6', label: 'Dispatch' },
];

export default function CallSimulator({ large }) {
  const [busy, setBusy] = useState(false);
  const [transcript, setTranscript] = useState([]);
  const [curStep, setCurStep] = useState(null);
  const [doneSteps, setDoneSteps] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const tboxRef = useRef(null);

  useEffect(() => {
    if (tboxRef.current) tboxRef.current.scrollTop = tboxRef.current.scrollHeight;
  }, [transcript]);

  const runSim = () => {
    if (busy) return;
    setBusy(true);
    setTranscript([]);
    setCurStep(null);
    setDoneSteps([]);
    setIsDone(false);

    let d = 0;
    script.forEach((l, i) => {
      setTimeout(() => {
        setCurStep(l.p);
        if (i > 0 && script[i - 1].p !== l.p) {
          setDoneSteps(prev => [...prev, script[i - 1].p]);
        }
        setTranscript(prev => [...prev, l]);
        if (i === script.length - 1) {
          setDoneSteps(prev => [...prev, l.p]);
          setCurStep(null);
          setIsDone(true);
          setBusy(false);
        }
      }, d);
      d += 1300;
    });
  };

  const tboxStyle = large
    ? { minHeight: '280px', maxHeight: '340px' }
    : {};

  return (
    <div className="sim-wrap">
      <div className="sim-top">
        <div className={`cdot ${busy ? 'on' : ''}`}></div>
        <div>
          <div className="sim-org">Aasha Foundation, Delhi NCR</div>
          <div className="sim-meta">Darpan ID: DL/2019/0234567 | Hindi | Food Distribution</div>
        </div>
        <button className="simbtn" disabled={busy} onClick={runSim}>
          {busy ? '⏳ Call in progress...' : (isDone ? '▶ Replay' : '▶ Start Simulation')}
        </button>
      </div>
      <div className="tbox" ref={tboxRef} style={tboxStyle}>
        {transcript.length === 0 && !busy ? (
          <div style={{color:'#bbb',textAlign:'center',padding: large ? '80px 0' : '40px 0',fontSize:11}}>
            Press "Start Simulation" to watch {large ? 'the full AI call in Hindi with English translation' : 'a live AI call transcript in Hindi'}
          </div>
        ) : (
          transcript.map((l, i) => (
            <div key={i} className="tline">
              <span className={`tsp ${l.s}`}>{l.s === 'ai' ? 'SevakAI:' : 'NGO (Priya):'}</span>
              <span>
                <span className="thi">{l.hi}</span>
                <span className="ten">{l.en}</span>
              </span>
            </div>
          ))
        )}
      </div>
      <div className="vgrid" style={{ display: isDone ? 'grid' : 'none' }}>
        <div className="vcell"><div className="vlbl">Volunteers Requested</div><div className="vval">20</div><div className="vconf">✓ Confidence: 97%</div></div>
        <div className="vcell"><div className="vlbl">Area / Pincode</div><div className="vval">110001</div><div className="vconf">✓ Confidence: 99%</div></div>
        <div className="vcell"><div className="vlbl">Task Type</div><div className="vval">Food Dist.</div><div className="vconf">✓ Confidence: 95%</div></div>
        <div className="vcell"><div className="vlbl">Urgency Level</div><div className="vval">3 / 5</div><div className="vconf">✓ Confidence: 100%</div></div>
      </div>
      <div className="prog-row">
        {steps.map(step => {
          const isCur = curStep === step.id;
          const isCompleted = doneSteps.includes(step.id);
          return (
            <div key={step.id} className={`ps ${isCur ? 'cur' : ''} ${isCompleted ? 'done' : ''}`}>
              <div className="pn">{isCompleted ? '✓' : step.num}</div>
              {step.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
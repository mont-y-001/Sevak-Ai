import { useState, useRef, useCallback } from 'react';
import { callScript, extractedData } from '../data/callScript.js'; // ✅ correct file

export function useSimulation() {
  const [lines, setLines]           = useState([]);
  const [stepStates, setStepStates] = useState({});
  const [extracted, setExtracted]   = useState(null);
  const [running, setRunning]       = useState(false);
  const timers = useRef([]);

  const reset = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setLines([]);
    setStepStates({});
    setExtracted(null);
    setRunning(false);
  }, []);

  const start = useCallback(() => {
    if (running) return;
    reset();
    setRunning(true);

    callScript.forEach((line, i) => {
      const t = setTimeout(() => {
        setLines(prev => [...prev, line]);

        setStepStates(prev => {
          const next = { ...prev };
          if (i > 0 && callScript[i - 1].step !== line.step) {
            next[callScript[i - 1].step] = 'done';
          }
          next[line.step] = 'cur';
          return next;
        });

        if (i === callScript.length - 1) {
          setTimeout(() => {
            setStepStates(prev => ({ ...prev, [line.step]: 'done' }));
            setExtracted(extractedData);
            setRunning(false);
          }, 600);
        }
      }, i * 1300);

      timers.current.push(t);
    });
  }, [running, reset]);

  return { lines, stepStates, extracted, running, start, reset };
}
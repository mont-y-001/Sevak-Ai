
export default function UrgencyPill({ level, showLabel = false }) {
  const cls = level >= 4 ? 'pill-high' : level === 3 ? 'pill-med' : 'pill-low';
  return (
    <span className={`pill ${cls}`}>
      {showLabel ? `Urgency ${level}` : level}
    </span>
  );
}


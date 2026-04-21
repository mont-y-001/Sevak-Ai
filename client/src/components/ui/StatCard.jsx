
import { useCounter } from '../../hooks/useCounter';
import './StatCard.css';

export default function StatCard({ icon, target, label, colorClass }) {
  const count = useCounter(target);
  return (
    <div className="sbox">
      <div className={`sico ${colorClass}`}>{icon}</div>
      <div>
        <div className="snum">{count.toLocaleString('en-IN')}</div>
        <div className="slbl">{label}</div>
      </div>
    </div>
  );
}
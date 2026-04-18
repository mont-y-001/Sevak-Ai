
import { needs } from '../../data/needs.js';
import './NeedsMap.css';

const urgencyClass = u => u >= 4 ? 'hi' : u === 3 ? 'mi' : 'lo';

export default function NeedsMap() {
  return (
    <div className="map-area">
      <svg className="map-svg" viewBox="0 0 500 560" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="560" fill="#dce8f0" />
        <path fill="#c5d8e8" stroke="#a0b8cc" strokeWidth="1.2"
          d="M248,36 C228,39 202,53 183,73 C163,95 146,123 136,153 C125,184 121,215 126,245 C131,275 139,295 149,317 C161,341 169,359 177,385 C185,411 189,439 193,461 C197,481 203,498 213,513 C223,527 238,537 251,541 C264,537 279,527 289,513 C299,498 305,481 309,461 C313,439 317,411 325,385 C333,359 341,341 353,317 C363,295 371,275 376,245 C381,215 377,184 366,153 C356,123 339,95 319,73 C300,53 276,39 256,36 Z"
        />
        {['Delhi','Mumbai','Kolkata','Hyderabad','Bengaluru','Jaipur'].map((city, i) => {
          const positions = [[251,168],[195,360],[308,280],[300,400],[244,448],[192,254]];
          return <text key={city} x={positions[i][0]} y={positions[i][1]} textAnchor="middle" fontSize="9" fill="#556" fontFamily="sans-serif">{city}</text>;
        })}
      </svg>

      {needs.map(n => (
        <div key={n.id} className={`mpin ${urgencyClass(n.urgency)}`} style={n.mapPos}>
          <div className="mtip">
            <strong>{n.org} — {n.city}</strong>
            {n.volunteers} volunteers · {n.task} · Urgency {n.urgency}
          </div>
          <div className="mpin-tri" />
        </div>
      ))}

      <div className="mleg">
        <div className="mleg-r"><div className="mleg-d" style={{ background: 'var(--danger)' }} /><span>High (4–5)</span></div>
        <div className="mleg-r"><div className="mleg-d" style={{ background: 'var(--warn)' }} /><span>Medium (3)</span></div>
        <div className="mleg-r"><div className="mleg-d" style={{ background: 'var(--ok)' }} /><span>Low (1–2)</span></div>
      </div>
    </div>
  );
}
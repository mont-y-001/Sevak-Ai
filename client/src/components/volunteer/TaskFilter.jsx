

import './TaskCard.css';

const FILTERS = [
  { id: 'all',    label: 'All' },
  { id: 'food',   label: '🍱 Food' },
  { id: 'health', label: '🏥 Health' },
  { id: 'edu',    label: '📚 Education' },
];

export default function TaskFilter({ active, onChange }) {
  return (
    <div className="filter-row">
      {FILTERS.map(f => (
        <button
          key={f.id}
          className={`fbtn${active === f.id ? ' on' : ''}`}
          onClick={() => onChange(f.id)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
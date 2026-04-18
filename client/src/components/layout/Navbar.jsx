
import './Navbar.css';

const NAV_ITEMS = [
  { id: 'home',      label: '🏠 Home' },
  { id: 'needs',     label: '📋 Active Needs' },
  { id: 'sim',       label: '📞 AI Call Demo' },
  { id: 'volunteer', label: '🙋 Volunteer Portal' },
  { id: 'impact',    label: '📊 Impact Report' },
  { id: 'team',      label: '👥 Our Team' },
];

export default function Navbar({ activePage, onNavigate, onRegisterClick }) {
  return (
    <nav className="nav">
      <div className="nav-in">
        {NAV_ITEMS.map(item => (
          <button
            key={item.id}
            className={`nbtn${activePage === item.id ? ' active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
        <button className="nbtn" onClick={onRegisterClick}>✏️ Register NGO</button>
      </div>
    </nav>
  );
}

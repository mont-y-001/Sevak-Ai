export default function Navbar({ activePage, onNavigate, onRegisterClick }) {
  const navItems = [
    { id: 'home', icon: '🏠', label: 'Home' },
    { id: 'needs', icon: '📋', label: 'Active Needs' },
    { id: 'sim', icon: '📞', label: 'AI Call Demo' },
    { id: 'volunteer', icon: '🙋', label: 'Volunteer Portal' },
    { id: 'impact', icon: '📊', label: 'Impact Report' },
    { id: 'team', icon: '👥', label: 'Our Team' },
  ];

  return (
    <nav className="nav">
      <div className="nav-in">
        {navItems.map(item => (
          <button
            key={item.id}
            className={`nbtn ${activePage === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            {item.icon} {item.label}
          </button>
        ))}
        <button className="nbtn" onClick={onRegisterClick}>✏️ Register NGO</button>
      </div>
    </nav>
  );
}

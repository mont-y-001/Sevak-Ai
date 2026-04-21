export default function Breadcrumb({ page }) {
  const pageNames = {
    home: 'Dashboard',
    needs: 'Active Needs',
    sim: 'AI Call Demo',
    volunteer: 'Volunteer Portal',
    impact: 'Impact Report',
    team: 'Our Team',
  };

  return (
    <div className="bc">
      <div className="bc-in">
        <a href="#">Home</a>
        <span style={{color:'#aaa'}}>›</span>
        <a href="#">SevakAI Portal</a>
        <span style={{color:'#aaa'}}>›</span>
        <span>{pageNames[page] || 'Dashboard'}</span>
      </div>
    </div>
  );
}
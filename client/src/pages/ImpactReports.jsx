export default function ImpactReport() {
  return (
    <div className="impact-page">
      <div className="card" style={{marginBottom:18}}>
        <div className="card-hd">📊 Impact Dashboard — Q1 2026</div>
        <div className="impact-grid" style={{padding:14}}>
          <div className="icard"><div className="iico">🏢</div><div className="inum">47</div><div className="ilbl">Active NGOs</div></div>
          <div className="icard"><div className="iico">✅</div><div className="inum">1,840</div><div className="ilbl">Volunteers Dispatched</div></div>
          <div className="icard"><div className="iico">⏱️</div><div className="inum">12,450</div><div className="ilbl">Hours Served</div></div>
          <div className="icard"><div className="iico">🎯</div><div className="inum">94%</div><div className="ilbl">Match Rate</div></div>
          <div className="icard"><div className="iico">📞</div><div className="inum">188</div><div className="ilbl">AI Calls Made</div></div>
          <div className="icard"><div className="iico">🌍</div><div className="inum">5</div><div className="ilbl">Cities Covered</div></div>
        </div>
      </div>
      <div className="card">
        <div className="card-hd">🗺️ Project Roadmap</div>
        <div style={{overflowX:'auto',padding:0}}>
          <table className="phase-tbl">
            <thead><tr><th>Phase</th><th>Timeline</th><th>Target</th><th>Key Features</th></tr></thead>
            <tbody>
              <tr><td><b>Phase 1 — Pilot</b></td><td>Now</td><td>50 NGOs, Delhi NCR</td><td>Core AI call + Hindi + volunteer matching</td></tr>
              <tr><td><b>Phase 2 — Scale</b></td><td>Months 3–6</td><td>500+ NGOs, 5 cities</td><td>8 regional languages, CSR partnerships</td></tr>
              <tr><td><b>Disaster Mode</b></td><td>Months 4–8</td><td>Emergency dispatch</td><td>NDMA API integration, real-time alerts</td></tr>
              <tr><td><b>Predictive AI</b></td><td>Months 6–12</td><td>Demand forecasting</td><td>Vertex AI trained on historical need data</td></tr>
              <tr><td><b>CSR Integration</b></td><td>Year 2</td><td>Corporate tie-ups</td><td>Blockchain volunteer certificates</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

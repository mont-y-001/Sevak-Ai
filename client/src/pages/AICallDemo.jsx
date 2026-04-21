import CallSimulator from '../components/simulation/CallSimulator';

export default function AICallDemo() {
  return (
    <div style={{maxWidth:1200,margin:'0 auto',padding:'14px 16px'}}>
      <div className="card">
        <div className="card-hd">📞 AI Weekly Call Simulation — Full Demo</div>
        <CallSimulator large />
      </div>
      
      <div className="card">
        <div className="card-hd">🔐 3-Layer Validation System</div>
        <div style={{padding:'14px',overflowX:'auto'}}>
          <table className="dtbl">
            <thead>
              <tr>
                <th>Layer</th>
                <th>Check</th>
                <th>Rule</th>
                <th>Failure Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>1</b></td>
                <td>Range Check</td>
                <td>Volunteers: 1–500 | Urgency: 1–5 | Valid India pincode</td>
                <td>Re-ask the question</td>
              </tr>
              <tr>
                <td><b>2</b></td>
                <td>Anomaly Detection</td>
                <td>Request &gt; 3× 4-week historical average</td>
                <td>Hold + send confirmation SMS before posting</td>
              </tr>
              <tr>
                <td><b>3</b></td>
                <td>Confidence Threshold</td>
                <td>Any field below 70% confidence score</td>
                <td>Send to human admin review queue</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

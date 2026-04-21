export default function ActiveNeeds() {
  return (
    <>
      <div className="stats-wrap">
        <div className="stats-row" style={{marginTop:14}}>
          <div className="sbox"><div className="sico i1">🏢</div><div><div className="snum">47</div><div className="slbl">Active NGOs</div></div></div>
          <div className="sbox"><div className="sico i2">📋</div><div><div className="snum">312</div><div className="slbl">Open Needs</div></div></div>
          <div className="sbox"><div className="sico i3">⚡</div><div><div className="snum">3</div><div className="slbl">Urgent (4–5)</div></div></div>
          <div className="sbox"><div className="sico i4">🕐</div><div><div className="snum">94%</div><div className="slbl">Match Rate</div></div></div>
        </div>
      </div>
      <div style={{maxWidth:1200,margin:'0 auto',padding:'14px 16px'}}>
        <div className="card">
          <div className="card-hd">📋 All Active Volunteer Needs <a href="#">Download CSV ↓</a></div>
          <div style={{overflowX:'auto'}}>
            <table className="dtbl">
              <thead><tr><th>Ref No.</th><th>Organisation</th><th>Darpan ID</th><th>City / Pincode</th><th>Task</th><th>Volunteers</th><th>Urgency</th><th>Trust</th><th>Status</th><th>Action</th></tr></thead>
              <tbody>
                <tr>
                  <td style={{fontSize:10,color:'var(--light)'}}>NE-2026-0412</td><td><b>Sneha Trust</b></td><td style={{fontSize:10}}>MH/2018/0119823</td><td>Mumbai 400001</td><td>Healthcare Camp</td>
                  <td style={{fontWeight:700,color:'var(--navy)'}}>75</td><td><span className="pill ph">5</span></td>
                  <td><div className="tbar-w"><div className="tbar"><div className="tfill" style={{width:'92%'}}></div></div>92</div></td>
                  <td><span style={{color:'var(--ok)',fontSize:10}}>● Dispatching</span></td><td><a href="#" className="alink">View</a></td>
                </tr>
                <tr>
                  <td style={{fontSize:10,color:'var(--light)'}}>NE-2026-0411</td><td><b>Mamata NGO</b></td><td style={{fontSize:10}}>WB/2015/0087341</td><td>Kolkata 700001</td><td>Medical Aid</td>
                  <td style={{fontWeight:700,color:'var(--navy)'}}>50</td><td><span className="pill ph">4</span></td>
                  <td><div className="tbar-w"><div className="tbar"><div className="tfill" style={{width:'85%'}}></div></div>85</div></td>
                  <td><span style={{color:'var(--warn)',fontSize:10}}>● Matching</span></td><td><a href="#" className="alink">View</a></td>
                </tr>
                <tr>
                  <td style={{fontSize:10,color:'var(--light)'}}>NE-2026-0410</td><td><b>Udaan Society</b></td><td style={{fontSize:10}}>RJ/2017/0056218</td><td>Jaipur 302001</td><td>Education Drive</td>
                  <td style={{fontWeight:700,color:'var(--navy)'}}>25</td><td><span className="pill pm">3</span></td>
                  <td><div className="tbar-w"><div className="tbar"><div className="tfill" style={{width:'78%'}}></div></div>78</div></td>
                  <td><span style={{color:'var(--blue)',fontSize:10}}>● Open</span></td><td><a href="#" className="alink">View</a></td>
                </tr>
                <tr>
                  <td style={{fontSize:10,color:'var(--light)'}}>NE-2026-0409</td><td><b>Vidya Kiran</b></td><td style={{fontSize:10}}>TS/2016/0098423</td><td>Hyderabad 500001</td><td>Teaching Support</td>
                  <td style={{fontWeight:700,color:'var(--navy)'}}>30</td><td><span className="pill pm">3</span></td>
                  <td><div className="tbar-w"><div className="tbar"><div className="tfill" style={{width:'91%'}}></div></div>91</div></td>
                  <td><span style={{color:'var(--blue)',fontSize:10}}>● Open</span></td><td><a href="#" className="alink">View</a></td>
                </tr>
                <tr>
                  <td style={{fontSize:10,color:'var(--light)'}}>NE-2026-0408</td><td><b>Aasha Foundation</b></td><td style={{fontSize:10}}>DL/2019/0234567</td><td>Delhi 110001</td><td>Food Distribution</td>
                  <td style={{fontWeight:700,color:'var(--navy)'}}>20</td><td><span className="pill pl">2</span></td>
                  <td><div className="tbar-w"><div className="tbar"><div className="tfill" style={{width:'96%'}}></div></div>96</div></td>
                  <td><span style={{color:'var(--ok)',fontSize:10}}>● Confirmed</span></td><td><a href="#" className="alink">View</a></td>
                </tr>
                <tr>
                  <td style={{fontSize:10,color:'var(--light)'}}>NE-2026-0407</td><td><b>Green Hearts</b></td><td style={{fontSize:10}}>KA/2020/0041122</td><td>Bengaluru 560001</td><td>Community Kitchen</td>
                  <td style={{fontWeight:700,color:'var(--navy)'}}>15</td><td><span className="pill pl">1</span></td>
                  <td><div className="tbar-w"><div className="tbar"><div className="tfill" style={{width:'88%'}}></div></div>88</div></td>
                  <td><span style={{color:'var(--ok)',fontSize:10}}>● Confirmed</span></td><td><a href="#" className="alink">View</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

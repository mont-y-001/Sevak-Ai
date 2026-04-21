import { useEffect, useRef } from 'react';
import CallSimulator from '../components/simulation/CallSimulator.jsx';
import NeedsMap from '../components/map/NeedsMap.jsx';

function animateCount(el, target) {
  let v = 0;
  const step = target / 50;
  const i = setInterval(() => {
    v = Math.min(v + step, target);
    el.textContent = Math.floor(v).toLocaleString('en-IN');
    if (v >= target) clearInterval(i);
  }, 28);
}

export default function Home({ onRegisterClick }) {
  const c1 = useRef(null);
  const c2 = useRef(null);
  const c3 = useRef(null);
  const c4 = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => {
      if (c1.current) animateCount(c1.current, 47);
      if (c2.current) animateCount(c2.current, 312);
      if (c3.current) animateCount(c3.current, 1840);
      if (c4.current) animateCount(c4.current, 12450);
    }, 400);
    return () => clearTimeout(t);
  }, []);

  const submitSide = () => {
    const n = document.getElementById('fn')?.value;
    const d = document.getElementById('fd')?.value;
    const p = document.getElementById('fp')?.value;
    if (!n || !d || !p) { alert('Please fill all mandatory fields (*)'); return; }
    alert('✅ Registration submitted!\nRef No: REG-2026-' + Math.floor(Math.random() * 9000 + 1000) + '\n\nAdmin will verify your Darpan ID within 24 hours.');
    if (document.getElementById('fn')) document.getElementById('fn').value = '';
    if (document.getElementById('fd')) document.getElementById('fd').value = '';
    if (document.getElementById('fp')) document.getElementById('fp').value = '';
  };

  return (
    <>
      <div className="stats-wrap">
        <div className="stats-row" style={{ marginTop: 14 }}>
          <div className="sbox"><div className="sico i1">🏢</div><div><div className="snum" ref={c1}>0</div><div className="slbl">Active NGOs Registered</div></div></div>
          <div className="sbox"><div className="sico i2">📋</div><div><div className="snum" ref={c2}>0</div><div className="slbl">Open Volunteer Needs</div></div></div>
          <div className="sbox"><div className="sico i3">✅</div><div><div className="snum" ref={c3}>0</div><div className="slbl">Volunteers Dispatched</div></div></div>
          <div className="sbox"><div className="sico i4">⏱️</div><div><div className="snum" ref={c4}>0</div><div className="slbl">Service Hours Logged</div></div></div>
        </div>
      </div>

      <div className="body-wrap">
        <main>
          {/* CALL SIM CARD */}
          <div className="card">
            <div className="card-hd">📞 AI Weekly Call Simulation — Live Demo <a href="#">View all call logs →</a></div>
            <CallSimulator />
          </div>

          {/* NEEDS TABLE */}
          <div className="card">
            <div className="card-hd">📋 Active Volunteer Needs — This Week <a href="#">Download CSV ↓</a></div>
            <div style={{ overflowX: 'auto' }}>
              <table className="dtbl">
                <thead><tr><th>Ref No.</th><th>Organisation</th><th>City</th><th>Task</th><th>Vol.</th><th>Urgency</th><th>Trust</th><th>Status</th><th>Action</th></tr></thead>
                <tbody>
                  <tr>
                    <td style={{ fontSize: 10, color: 'var(--light)' }}>NE-2026-0412</td>
                    <td><b>Sneha Trust</b><br /><span style={{ fontSize: 9, color: '#888' }}>MH/2018/0119823</span></td>
                    <td>Mumbai<br /><span style={{ fontSize: 9 }}>400001</span></td>
                    <td>Healthcare Camp</td>
                    <td style={{ fontWeight: 700, color: 'var(--navy)' }}>75</td>
                    <td><span className="pill ph">Urgency 5</span></td>
                    <td><div className="tbar-w"><div className="tbar"><div className="tfill" style={{ width: '92%' }}></div></div><span style={{ fontSize: 10, color: 'var(--light)' }}>92</span></div></td>
                    <td><span style={{ color: 'var(--ok)', fontSize: 10, fontWeight: 600 }}>● Dispatching</span></td>
                    <td><a href="#" className="alink">View</a></td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: 10, color: 'var(--light)' }}>NE-2026-0411</td>
                    <td><b>Mamata NGO</b><br /><span style={{ fontSize: 9, color: '#888' }}>WB/2015/0087341</span></td>
                    <td>Kolkata<br /><span style={{ fontSize: 9 }}>700001</span></td>
                    <td>Medical Aid</td>
                    <td style={{ fontWeight: 700, color: 'var(--navy)' }}>50</td>
                    <td><span className="pill ph">Urgency 4</span></td>
                    <td><div className="tbar-w"><div className="tbar"><div className="tfill" style={{ width: '85%' }}></div></div><span style={{ fontSize: 10, color: 'var(--light)' }}>85</span></div></td>
                    <td><span style={{ color: 'var(--warn)', fontSize: 10, fontWeight: 600 }}>● Matching</span></td>
                    <td><a href="#" className="alink">View</a></td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: 10, color: 'var(--light)' }}>NE-2026-0410</td>
                    <td><b>Udaan Society</b><br /><span style={{ fontSize: 9, color: '#888' }}>RJ/2017/0056218</span></td>
                    <td>Jaipur<br /><span style={{ fontSize: 9 }}>302001</span></td>
                    <td>Education Drive</td>
                    <td style={{ fontWeight: 700, color: 'var(--navy)' }}>25</td>
                    <td><span className="pill pm">Urgency 3</span></td>
                    <td><div className="tbar-w"><div className="tbar"><div className="tfill" style={{ width: '78%' }}></div></div><span style={{ fontSize: 10, color: 'var(--light)' }}>78</span></div></td>
                    <td><span style={{ color: 'var(--blue)', fontSize: 10, fontWeight: 600 }}>● Open</span></td>
                    <td><a href="#" className="alink">View</a></td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: 10, color: 'var(--light)' }}>NE-2026-0409</td>
                    <td><b>Vidya Kiran</b><br /><span style={{ fontSize: 9, color: '#888' }}>TS/2016/0098423</span></td>
                    <td>Hyderabad<br /><span style={{ fontSize: 9 }}>500001</span></td>
                    <td>Teaching Support</td>
                    <td style={{ fontWeight: 700, color: 'var(--navy)' }}>30</td>
                    <td><span className="pill pm">Urgency 3</span></td>
                    <td><div className="tbar-w"><div className="tbar"><div className="tfill" style={{ width: '91%' }}></div></div><span style={{ fontSize: 10, color: 'var(--light)' }}>91</span></div></td>
                    <td><span style={{ color: 'var(--blue)', fontSize: 10, fontWeight: 600 }}>● Open</span></td>
                    <td><a href="#" className="alink">View</a></td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: 10, color: 'var(--light)' }}>NE-2026-0408</td>
                    <td><b>Aasha Foundation</b><br /><span style={{ fontSize: 9, color: '#888' }}>DL/2019/0234567</span></td>
                    <td>Delhi<br /><span style={{ fontSize: 9 }}>110001</span></td>
                    <td>Food Distribution</td>
                    <td style={{ fontWeight: 700, color: 'var(--navy)' }}>20</td>
                    <td><span className="pill pl">Urgency 2</span></td>
                    <td><div className="tbar-w"><div className="tbar"><div className="tfill" style={{ width: '96%' }}></div></div><span style={{ fontSize: 10, color: 'var(--light)' }}>96</span></div></td>
                    <td><span style={{ color: 'var(--ok)', fontSize: 10, fontWeight: 600 }}>● Confirmed</span></td>
                    <td><a href="#" className="alink">View</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* MAP */}
          <div className="card">
            <div className="card-hd">🗺️ Geographic Distribution of Active Needs <a href="#">View full map →</a></div>
            <NeedsMap />
          </div>
        </main>

        {/* SIDEBAR */}
        <aside>
          <div className="scard">
            <div className="shd">✏️ Quick NGO Registration</div>
            <div className="sbody">
              <div className="fg"><label>Organisation Name <span className="req">*</span></label><input type="text" className="fi" placeholder="e.g. Aasha Foundation" id="fn" /></div>
              <div className="fg"><label>Darpan NGO ID <span className="req">*</span></label><input type="text" className="fi" placeholder="DL/2019/0234567" id="fd" /></div>
              <div className="fg"><label>Coordinator Mobile <span className="req">*</span></label><input type="tel" className="fi" placeholder="+91 XXXXX XXXXX" id="fp" /></div>
              <div className="fg"><label>Preferred Language</label><select className="fsel"><option>Hindi</option><option>Bengali</option><option>Tamil</option><option>Telugu</option><option>Marathi</option><option>English</option></select></div>
              <div className="fg"><label>Primary Domain</label><select className="fsel"><option>Food Distribution</option><option>Healthcare</option><option>Education</option><option>Disaster Relief</option></select></div>
              <button className="sbtn2" onClick={submitSide}>Submit for Admin Approval</button>
              <div className="fnote">* Mandatory. Darpan ID verified via NITI Aayog NGO-DARPAN. Approval within 24 hrs. No fee.</div>
            </div>
          </div>

          <div className="scard">
            <div className="shd">🔗 Quick Links</div>
            <div className="sbody">
              <ul className="qlinks">
                <li><a href="#">Volunteer Registration Form</a></li>
                <li><a href="#">NGO Onboarding Guide (PDF)</a></li>
                <li><a href="#">How SevakAI Calls Work</a></li>
                <li><a href="#">Darpan ID Verification Status</a></li>
                <li><a href="#">Trust Score Policy</a></li>
                <li><a href="#">Grievance Redressal Portal</a></li>
                <li><a href="#">Impact Report Q1 2026</a></li>
              </ul>
            </div>
          </div>

          <div className="scard">
            <div className="shd">📢 Notice Board</div>
            <div className="sbody">
              <div className="notitem"><div className="ndate">14 Apr 2026 <span className="nbadge">NEW</span></div><div className="ntxt">Weekly AI call batch scheduled. 47 NGOs contacted 10:00–12:00 IST.</div></div>
              <div className="notitem"><div className="ndate">10 Apr 2026</div><div className="ntxt">Telugu language support added for Andhra Pradesh &amp; Telangana NGOs.</div></div>
              <div className="notitem"><div className="ndate">07 Apr 2026</div><div className="ntxt">Trust score recalibration Q1 2026 complete. 3 NGOs suspended pending review.</div></div>
              <div className="notitem"><div className="ndate">01 Apr 2026</div><div className="ntxt">Pilot Phase 1 complete — 1,840 volunteer dispatches logged.</div></div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
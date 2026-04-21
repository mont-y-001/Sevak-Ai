import { useState } from 'react';

const tasks = [
  { cat:'health', org:'Sneha Trust', loc:'Mumbai, Maharashtra', pill:'ph', urg:'Urgency 5', ico:'🏥', desc:'Healthcare Camp — assist doctors, patient registration, first aid support', addr:'Dharavi, Mumbai 400001', date:'15 April 2026, 8:00 AM – 5:00 PM', vol:75, left:42, leftColor:'var(--danger)', trust:92 },
  { cat:'health', org:'Mamata NGO', loc:'Kolkata, West Bengal', pill:'ph', urg:'Urgency 4', ico:'💊', desc:'Medical Aid Camp — medicine distribution, patient guidance', addr:'Salt Lake, Kolkata 700001', date:'16 April 2026, 9:00 AM – 3:00 PM', vol:50, left:28, leftColor:'var(--warn)', trust:85 },
  { cat:'edu', org:'Udaan Society', loc:'Jaipur, Rajasthan', pill:'pm', urg:'Urgency 3', ico:'📚', desc:'Education Drive — teach basic literacy to underprivileged children', addr:'Old City, Jaipur 302001', date:'19 April 2026, 10:00 AM – 2:00 PM', vol:25, left:18, leftColor:'var(--ok)', trust:78 },
  { cat:'edu', org:'Vidya Kiran', loc:'Hyderabad, Telangana', pill:'pm', urg:'Urgency 3', ico:'🏫', desc:'Teaching Support — assist teachers in government school classrooms', addr:'Secunderabad, Hyderabad 500001', date:'23 April 2026, 9:00 AM – 1:00 PM', vol:30, left:22, leftColor:'var(--ok)', trust:91 },
  { cat:'food', org:'Aasha Foundation', loc:'Delhi NCR', pill:'pl', urg:'Urgency 2', ico:'🍱', desc:'Food Distribution — pack and distribute meals to daily wage workers', addr:'Connaught Place, Delhi 110001', date:'25 April 2026, 7:00 AM – 11:00 AM', vol:20, left:14, leftColor:'var(--ok)', trust:96 },
  { cat:'food', org:'Green Hearts', loc:'Bengaluru, Karnataka', pill:'pl', urg:'Urgency 1', ico:'🌿', desc:'Community Kitchen — help prepare and serve meals at community centre', addr:'Indiranagar, Bengaluru 560001', date:'26 April 2026, 8:00 AM – 12:00 PM', vol:15, left:11, leftColor:'var(--ok)', trust:88 },
];

const howSteps = [
  { n:1, t:'Register Once', d:'Sign up with your mobile number, skills (food/health/education), home pincode, and availability. OTP verified.' },
  { n:2, t:'AI Matches You', d:'Gemini AI ranks you based on skill match, pincode proximity, and availability every time an NGO submits a need.' },
  { n:3, t:'Get WhatsApp Alert', d:"You receive a WhatsApp message with task details — org name, location, date, what's needed. No app install required." },
  { n:4, t:'Accept in One Tap', d:'Reply YES to confirm. Reply NO to pass — the next volunteer is auto-notified. Urgency-5 tasks alert multiple volunteers at once.' },
  { n:5, t:'Complete & Log', d:'After the task, submit a 2-tap SMS feedback. Your hours and impact are logged to your volunteer profile automatically.' },
  { n:6, t:'Earn Certificate', d:'Accumulate hours to earn a verified digital certificate — usable for college applications and corporate CSR records.' },
];

export default function VolunteerPortal({ onRegisterClick }) {
  const [filter, setFilter] = useState('all');
  const [cardState, setCardState] = useState({});

  const acceptTask = (idx, name) => {
    setCardState(prev => ({...prev, [idx]: 'accepted'}));
    alert('✅ Task Accepted!\n\nTask: ' + name + '\n\nYou will receive a WhatsApp confirmation shortly with full task details and the NGO coordinator\'s contact.');
  };
  const declineTask = (idx) => {
    setCardState(prev => ({...prev, [idx]: 'declined'}));
  };
  const filterTasks = (cat) => { setFilter(cat); };
  const filtered = filter === 'all' ? tasks : tasks.filter(t => t.cat === filter);

  return (
    <>
      <div className="vol-hero">
        <h2>🙋 Volunteer Portal</h2>
        <p>Browse open volunteer opportunities near you, register your skills, and accept tasks — all in one place. Get notified via WhatsApp when NGOs need you.</p>
        <div className="vol-hero-btns">
          <button className="vbtn-p" onClick={onRegisterClick}>Register as Volunteer</button>
          <button className="vbtn-s" onClick={() => document.getElementById('open-tasks')?.scrollIntoView({behavior:'smooth'})}>Browse Open Tasks ↓</button>
        </div>
      </div>
      <div className="vol-how">
        <h3>How Volunteers Get Notified</h3>
        <p className="sub">You never have to check the portal daily — SevakAI comes to you.</p>
        <div className="whatsapp-note">
          <div className="wa-ico">💬</div>
          <div className="wa-text">
            <strong>WhatsApp Notification System</strong>
            <p>When an NGO submits a need and your skills + pincode match, SevakAI sends you a WhatsApp message instantly. You reply <b>YES</b> to accept or <b>NO</b> to decline — no app needed. If you decline, the next matched volunteer is automatically notified.</p>
          </div>
        </div>
        <div className="steps-grid">
          {howSteps.map(s => (
            <div className="step-card" key={s.n}><div className="snum2">{s.n}</div><h4>{s.t}</h4><p>{s.d}</p></div>
          ))}
        </div>
      </div>
      <div className="vol-tasks-wrap" id="open-tasks">
        <div className="vol-task-hd">
          <h3>Open Volunteer Tasks This Week</h3>
          <div className="filter-row">
            {[['all','All'],['food','🍱 Food'],['health','🏥 Health'],['edu','📚 Education']].map(([c,l]) => (
              <button key={c} className={`fbtn ${filter===c?'on':''}`} onClick={() => filterTasks(c)}>{l}</button>
            ))}
          </div>
        </div>
        <div className="task-cards">
          {filtered.map((t, idx) => {
            const state = cardState[tasks.indexOf(t)];
            return (
              <div className="tcard" key={idx} style={state==='declined' ? {opacity:0.4,pointerEvents:'none'} : {}}>
                <div className="tcard-top"><div><div className="tcard-org">{t.org}</div><div className="tcard-meta">{t.loc}</div></div><span className={`pill ${t.pill}`}>{t.urg}</span></div>
                <div className="tcard-body">
                  <div className="tcard-detail"><span>{t.ico}</span><span>{t.desc}</span></div>
                  <div className="tcard-detail"><span>📍</span><span>{t.addr}</span></div>
                  <div className="tcard-detail"><span>📅</span><span>{t.date}</span></div>
                  <div className="tcard-detail"><span>👥</span><span>{t.vol} volunteers needed · <b style={{color:t.leftColor}}>{t.left} spots left</b></span></div>
                  <div className="tcard-detail"><span>⭐</span><span>Trust Score: {t.trust}/100 — Verified NGO</span></div>
                </div>
                {state==='declined' ? (
                  <div style={{textAlign:'center',padding:10,fontSize:11,color:'var(--warn)',fontWeight:600}}>Task passed — next volunteer being notified</div>
                ) : (
                  <div className="tcard-footer">
                    <button className="accept-btn" disabled={state==='accepted'} onClick={() => acceptTask(tasks.indexOf(t), t.org+' '+t.desc.split('—')[0])} style={state==='accepted' ? {background:'#0f6b06'} : {}}>
                      {state==='accepted' ? '✓ Accepted!' : '✓ Accept Task'}
                    </button>
                    <button className="decline-btn" disabled={state==='accepted'} onClick={() => declineTask(tasks.indexOf(t))}>✕ Decline</button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

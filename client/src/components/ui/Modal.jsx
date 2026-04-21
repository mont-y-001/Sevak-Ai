import { useState } from 'react';

export default function Modal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [refNo, setRefNo] = useState('');

  if (!open) return null;

  const handleSubmit = () => {
    setRefNo(Math.floor(Math.random() * 9000 + 1000));
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-bg open" onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}>
      <div className="mbox">
        <div className="mhd">
          Register — SevakAI Portal
          <button onClick={handleClose}>×</button>
        </div>
        <div className="mbd">
          {!submitted ? (
            <div>
              <div className="fg"><label>Organisation Name <span className="req">*</span></label><input type="text" className="fi" placeholder="Full registered name" /></div>
              <div className="fg"><label>Darpan NGO ID <span className="req">*</span></label><input type="text" className="fi" placeholder="e.g. DL/2019/0234567" /></div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
                <div className="fg"><label>Primary Phone <span className="req">*</span></label><input type="tel" className="fi" placeholder="+91" /></div>
                <div className="fg"><label>Backup Phone</label><input type="tel" className="fi" placeholder="+91" /></div>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
                <div className="fg"><label>Language</label><select className="fsel"><option>Hindi</option><option>Bengali</option><option>Tamil</option><option>Telugu</option><option>Marathi</option><option>English</option></select></div>
                <div className="fg"><label>Domain</label><select className="fsel"><option>Food Distribution</option><option>Healthcare</option><option>Education</option><option>Disaster Relief</option></select></div>
              </div>
              <div className="fg"><label>Service Area Pincode(s) <span className="req">*</span></label><input type="text" className="fi" placeholder="e.g. 110001, 110002" /></div>
              <button className="sbtn2" onClick={handleSubmit}>Submit Registration →</button>
              <div className="fnote" style={{marginTop:8}}>By submitting you agree to SevakAI Terms of Use. Admin approval within 24 working hours.</div>
            </div>
          ) : (
            <div className="sucmsg" style={{display:'block'}}>
              <div className="tick">✅</div>
              <strong>Registration Submitted Successfully</strong>
              <p>Admin will verify your Darpan ID and SMS you within 24 hours.</p>
              <p style={{marginTop:6}}><b>Ref No:</b> REG-2026-{refNo}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

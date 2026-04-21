import { useState } from 'react';
import UrgencyPill from '../ui/UrgencyPill';
import './TaskCard.css';

export default function TaskCard({ need }) {
  const [status, setStatus] = useState('idle'); // idle | accepted | declined

  if (status === 'declined') {
    return (
      <div className="tcard tcard--declined">
        <p>Task passed — next volunteer being notified</p>
      </div>
    );
  }

  return (
    <div className="tcard">
      <div className="tcard-top">
        <div>
          <div className="tcard-org">{need.org}</div>
          <div className="tcard-meta">{need.city}</div>
        </div>
        <UrgencyPill level={need.urgency} showLabel />
      </div>
      <div className="tcard-body">
        <div className="tcard-detail"><span>📍</span><span>{need.area}</span></div>
        <div className="tcard-detail"><span>📅</span><span>{need.date}</span></div>
        <div className="tcard-detail"><span>👥</span><span>{need.volunteers} needed · <b>{need.spotsLeft} spots left</b></span></div>
        <div className="tcard-detail"><span>⭐</span><span>Trust Score: {need.trust}/100 — Verified NGO</span></div>
      </div>
      {status === 'accepted' ? (
        <div className="tcard-footer tcard-footer--accepted">✓ Accepted! WhatsApp confirmation sent.</div>
      ) : (
        <div className="tcard-footer">
          <button className="accept-btn" onClick={() => setStatus('accepted')}>✓ Accept Task</button>
          <button className="decline-btn" onClick={() => setStatus('declined')}>✕ Decline</button>
        </div>
      )}
    </div>
  );
}
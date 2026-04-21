export default function NoticeBar() {
  return (
    <div className="notbar">
      <div className="notbar-in">
        <span className="ntag">NOTICE</span>
        <span style={{color:'#555',fontSize:11}}>
          <b style={{color:'var(--saffron)'}}>3 High-Urgency Needs</b> require immediate dispatch in Mumbai, Kolkata &amp; Delhi NCR. &nbsp;|&nbsp; AI calls scheduled: <b>Mon 14 Apr 2026, 10:00–12:00 IST</b>. &nbsp;|&nbsp; NGO registration window open.
        </span>
      </div>
    </div>
  );
}
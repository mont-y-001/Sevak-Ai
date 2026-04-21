export default function Footer({ onRegisterClick }) {
  return (
    <footer className="footer">
      <div className="foot-in">
        <div>
          <h4>About SevakAI</h4>
          <p>AI-powered volunteer coordination portal for the Google Solution Challenge 2026. Enables NGO field coordinators to submit weekly volunteer needs via automated AI phone calls in Hindi and regional languages — no smartphone, app, or internet required.</p>
          <p style={{marginTop:6,fontSize:9,color:'#7a8fa6'}}>Powered by Gemini 1.5 Flash · Google Cloud Speech-to-Text · Firebase · Flutter · Exotel</p>
        </div>
        <div>
          <h4>Portal</h4>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Active Needs</a></li>
            <li><a href="#">Volunteer Portal</a></li>
            <li><a href="#">Needs Map</a></li>
            <li><a href="#">Impact Report</a></li>
          </ul>
        </div>
        <div>
          <h4>Register</h4>
          <ul>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onRegisterClick(); }}>Register NGO</a></li>
            <li><a href="#">Volunteer Sign Up</a></li>
            <li><a href="#">Darpan ID Check</a></li>
            <li><a href="#">OTP Verification</a></li>
          </ul>
        </div>
        <div>
          <h4>Help &amp; Policy</h4>
          <ul>
            <li><a href="#">User Manual</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Grievance Portal</a></li>
            <li><a href="#">Contact Support</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-team">
        Built with ❤️ by <b style={{color:'#fff'}}>Team The Null Pointers</b> — Radwa Fakhruddin · Pranay Maheshwari · Khushi Mogha · Mohit Yadav &nbsp;|&nbsp; Google Solution Challenge 2026
      </div>
      <div className="foot-btm">
        <span>© 2026 SevakAI · Google Solution Challenge Submission · Team The Null Pointers</span>
        <span>Last Updated: 13 April 2026 &nbsp;|&nbsp; Visitors: 4,821</span>
      </div>
    </footer>
  );
}
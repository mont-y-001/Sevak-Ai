const members = [
  { avatar:'👩‍💻', name:'Radwa Fakhruddin', role:'Team Lead & AI Engineer', detail:'Responsible for AI pipeline design, Gemini integration, speech processing, and system architecture.' },
  { avatar:'👨‍💻', name:'Pranay Maheshwari', role:'Backend Developer', detail:'Cloud Functions, Firebase database design, validation pipeline, and volunteer matching engine.' },
  { avatar:'👩‍🎨', name:'Khushi Mogha', role:'Frontend & Design', detail:'Flutter app development, coordinator dashboard, volunteer portal UI and user experience design.' },
  { avatar:'👨‍🔬', name:'Mohit Yadav', role:'Research & Testing', detail:'Problem research, NGO fieldwork analysis, solution validation, demo video and documentation.' },
];

const techStack = [
  { ico:'🤖', name:'Gemini 1.5 Flash', role:'Conversation AI, JSON extraction, volunteer ranking' },
  { ico:'🎙️', name:'Cloud Speech-to-Text', role:'Hindi + 7 regional language transcription' },
  { ico:'🔥', name:'Firebase Suite', role:'Firestore, Realtime DB, Auth, FCM' },
  { ico:'⚡', name:'Cloud Functions', role:'Serverless validation + matching backend' },
  { ico:'🗺️', name:'Google Maps', role:'Pincode-level need map' },
  { ico:'📱', name:'Flutter', role:'Android + Web cross-platform app' },
  { ico:'📞', name:'Exotel', role:'Indian telephony for outbound AI calls' },
  { ico:'💬', name:'WhatsApp API', role:'Volunteer notifications + fallback SMS' },
  { ico:'🗓️', name:'Cloud Scheduler', role:'Weekly call batch trigger' },
];

export default function TeamPage() {
  return (
    <div className="team-page">
      <div className="team-banner">
        <h2>👥 Team <span>The Null Pointers</span></h2>
        <p>Google Solution Challenge 2026 — Problem Statement #5: Smart Resource Allocation</p>
        <div className="challenge">SevakAI — AI-Powered Volunteer Coordination for NGOs</div>
      </div>

      <div className="members-grid">
        {members.map((m, i) => (
          <div className="member-card" key={i}>
            <div className="member-avatar">{m.avatar}</div>
            <div className="member-info">
              <div className="member-name">{m.name}</div>
              <div className="member-role">{m.role}</div>
              <div className="member-detail">{m.detail}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="about-project">
        <h3>Technology Stack</h3>
        <div className="tech-grid">
          {techStack.map((t, i) => (
            <div className="tech-item" key={i}>
              <div className="tname">{t.ico} {t.name}</div>
              <div className="trole">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

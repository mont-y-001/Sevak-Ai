export default function NeedsMap() {
  return (
    <div className="map-area">
      <svg className="map-svg" viewBox="0 0 500 560" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="560" fill="#dce8f0"/>
        <path fill="#c5d8e8" stroke="#a0b8cc" strokeWidth="1.2"
          d="M248,36 C228,39 202,53 183,73 C163,95 146,123 136,153 C125,184 121,215 126,245 C131,275 139,295 149,317 C161,341 169,359 177,385 C185,411 189,439 193,461 C197,481 203,498 213,513 C223,527 238,537 251,541 C264,537 279,527 289,513 C299,498 305,481 309,461 C313,439 317,411 325,385 C333,359 341,341 353,317 C363,295 371,275 376,245 C381,215 377,184 366,153 C356,123 339,95 319,73 C300,53 276,39 256,36 Z"/>
        <text x="251" y="168" textAnchor="middle" fontSize="9" fill="#556" fontFamily="sans-serif">Delhi</text>
        <text x="195" y="360" textAnchor="middle" fontSize="9" fill="#556" fontFamily="sans-serif">Mumbai</text>
        <text x="308" y="280" textAnchor="middle" fontSize="9" fill="#556" fontFamily="sans-serif">Kolkata</text>
        <text x="300" y="400" textAnchor="middle" fontSize="9" fill="#556" fontFamily="sans-serif">Hyderabad</text>
        <text x="244" y="448" textAnchor="middle" fontSize="9" fill="#556" fontFamily="sans-serif">Bengaluru</text>
        <text x="192" y="254" textAnchor="middle" fontSize="9" fill="#556" fontFamily="sans-serif">Jaipur</text>
      </svg>
      <div className="mpin hi" style={{left:'50%',top:'29%'}}><div className="mtip"><strong>Sneha Trust — Mumbai</strong>75 volunteers · Healthcare · Urgency 5</div><div className="mpin-tri"></div></div>
      <div className="mpin hi" style={{left:'62%',top:'48%'}}><div className="mtip"><strong>Mamata NGO — Kolkata</strong>50 volunteers · Medical · Urgency 4</div><div className="mpin-tri"></div></div>
      <div className="mpin mi" style={{left:'38%',top:'43%'}}><div className="mtip"><strong>Udaan Society — Jaipur</strong>25 volunteers · Education · Urgency 3</div><div className="mpin-tri"></div></div>
      <div className="mpin mi" style={{left:'60%',top:'69%'}}><div className="mtip"><strong>Vidya Kiran — Hyderabad</strong>30 volunteers · Teaching · Urgency 3</div><div className="mpin-tri"></div></div>
      <div className="mpin lo" style={{left:'49%',top:'26%'}}><div className="mtip"><strong>Aasha Foundation — Delhi</strong>20 volunteers · Food · Urgency 2</div><div className="mpin-tri"></div></div>
      <div className="mpin lo" style={{left:'48%',top:'78%'}}><div className="mtip"><strong>Green Hearts — Bengaluru</strong>15 volunteers · Food · Urgency 1</div><div className="mpin-tri"></div></div>
      <div className="mleg">
        <div className="mleg-r"><div className="mleg-d" style={{background:'var(--danger)'}}></div><span>High (4–5)</span></div>
        <div className="mleg-r"><div className="mleg-d" style={{background:'var(--warn)'}}></div><span>Medium (3)</span></div>
        <div className="mleg-r"><div className="mleg-d" style={{background:'var(--ok)'}}></div><span>Low (1–2)</span></div>
      </div>
    </div>
  );
}
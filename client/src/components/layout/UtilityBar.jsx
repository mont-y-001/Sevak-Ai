
import './UtilityBar.css';

export default function UtilityBar() {
  return (
    <div className="util">
      <div className="util-in">
        <div className="util-left">
          <span>🇮🇳 India Social Sector Initiative</span>
          <a href="#">Skip to Main Content</a>
          <a href="#">Screen Reader</a>
        </div>
        <div className="util-right">
          <button className="hibtn" onClick={() => alert('हिंदी संस्करण शीघ्र आ रहा है')}>हिंदी</button>
          <a href="#">A-</a>
          <a href="#" style={{ fontWeight: 700 }}>A</a>
          <a href="#">A+</a>
        </div>
      </div>
    </div>
  );
}

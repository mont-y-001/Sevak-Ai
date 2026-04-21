
export default function TrustBar({ score }) {
  return (
    <div className="tbar-w">
      <div className="tbar">
        <div className="tfill" style={{ width: `${score}%` }} />
      </div>
      <span style={{ fontSize: 10, color: 'var(--light)' }}>{score}</span>
    </div>
  );
}

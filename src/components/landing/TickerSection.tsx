// src/components/landing/TickerSection.tsx
export default function TickerSection() {
  const items = [
    '⚡ Yango Pro intégré', '📊 Profit en temps réel',
    '📱 Android & iOS', '💳 Wave · Orange Money · YAS',
    '📄 Export PDF pro', '🌿 Interface Wolof',
    '☁️ Mode hors-ligne', '🔒 Données sécurisées',
  ];
  const doubled = [...items, ...items];
  return (
    <div style={{
      background:'#13161E', borderTop:'1px solid rgba(0,230,118,.1)',
      borderBottom:'1px solid rgba(0,230,118,.1)', padding:'14px 0', overflow:'hidden',
    }}>
      <div className="animate-marquee" style={{ display:'flex', whiteSpace:'nowrap' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ fontSize:13, color:'rgba(255,255,255,.5)', fontWeight:600, padding:'0 28px' }}>
            {item}
            <span style={{ marginLeft:28, color:'rgba(0,230,118,.35)' }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

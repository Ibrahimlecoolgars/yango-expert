import Link from 'next/link';
const FPill=({label,value,color}:{label:string,value:string,color:string})=>(
  <div style={{padding:'14px 22px',borderRadius:14,fontFamily:"'Syne',sans-serif",fontWeight:800,textAlign:'center',minWidth:130,background:color+'18',border:'1px solid '+color+'35',color}}>
    <div style={{fontSize:10,fontWeight:600,opacity:.6,marginBottom:4}}>{label}</div>
    <span style={{fontSize:22,fontWeight:900}}>{value}</span>
  </div>
);
export default function FormulaSection(){return(
  <section style={{background:'#0B0D11',padding:'96px 6vw',textAlign:'center'}}>
    <div style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:11,fontWeight:700,letterSpacing:'1.2px',textTransform:'uppercase',padding:'6px 14px',borderRadius:50,marginBottom:20,background:'rgba(56,158,116,.08)',color:'#389e74',border:'1px solid rgba(56,158,116,.2)'}}>La formule</div>
    <h2 style={{fontSize:'clamp(28px,3.5vw,48px)',fontWeight:900,letterSpacing:-1.5,color:'#EEF0F6',marginBottom:10,fontFamily:"'Syne',sans-serif"}}>Ce que vous gardez vraiment.</h2>
    <p style={{fontSize:16,color:'rgba(255,255,255,.45)',marginBottom:48}}>Calculé automatiquement à chaque course</p>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:12,flexWrap:'wrap',marginBottom:56}}>
      <FPill label="BRUT" value="2 500 F" color="#3B82F6"/>
      <span style={{fontSize:28,fontWeight:900,color:'rgba(255,255,255,.2)',fontFamily:"'Syne',sans-serif"}}>−</span>
      <FPill label="COMMISSION" value="500 F" color="#FF8A80"/>
      <span style={{fontSize:28,fontWeight:900,color:'rgba(255,255,255,.2)',fontFamily:"'Syne',sans-serif"}}>−</span>
      <FPill label="CARBURANT" value="550 F" color="#FF8A80"/>
      <span style={{fontSize:28,fontWeight:900,color:'rgba(255,255,255,.2)',fontFamily:"'Syne',sans-serif"}}>−</span>
      <FPill label="VERSAGE" value="475 F" color="#FF8A80"/>
      <span style={{fontSize:28,fontWeight:900,color:'#389e74',fontFamily:"'Syne',sans-serif"}}>=</span>
      <FPill label="VRAI NET" value="975 F" color="#389e74"/>
    </div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16,maxWidth:860,margin:'0 auto'}}>
      {[{n:'500+',l:'Chauffeurs actifs',c:'#389e74'},{n:'15M+',l:'FCFA suivis / mois',c:'#82B1FF'},{n:'4.8★',l:'Note Play Store',c:'#FFD740'},{n:'+22%',l:'Profit gagné en plus',c:'#FF8A80'}].map(s=>(
        <div key={s.n} style={{background:'#13161E',border:'1px solid rgba(255,255,255,.07)',borderRadius:20,padding:24,textAlign:'center'}}>
          <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:36,fontWeight:600,color:s.c,display:'block',marginBottom:6}}>{s.n}</span>
          <span style={{fontSize:12,color:'rgba(255,255,255,.4)'}}>{s.l}</span>
        </div>
      ))}
    </div>
  </section>
);}

const Card=({icon,title,body,type}:{icon:string,title:string,body:string,type:'issue'|'fix'})=>{
  const isIssue=type==='issue';
  return(<div style={{display:'flex',gap:14,padding:16,borderRadius:16,background:isIssue?'rgba(255,68,68,.04)':'rgba(56,158,116,.04)',border:'1px solid '+(isIssue?'rgba(255,68,68,.12)':'rgba(56,158,116,.12)')}}>
    <div style={{width:32,height:32,borderRadius:10,flexShrink:0,background:isIssue?'rgba(255,68,68,.1)':'rgba(56,158,116,.1)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:16}}>{icon}</div>
    <div>
      <h4 style={{fontSize:14,fontWeight:700,marginBottom:4,color:isIssue?'#FCA5A5':'#6EE7B7',fontFamily:"'Syne',sans-serif"}}>{title}</h4>
      <p style={{fontSize:12,color:'rgba(255,255,255,.5)',lineHeight:1.6}}>{body}</p>
    </div>
  </div>);
};
export default function ProblemSolution(){return(
  <section style={{background:'#0B0D11',padding:'96px 6vw'}}>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,alignItems:'start',maxWidth:1100,margin:'0 auto'}}>
      <div>
        <div style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:11,fontWeight:700,letterSpacing:'1.2px',textTransform:'uppercase',padding:'6px 14px',borderRadius:50,marginBottom:20,background:'rgba(255,68,68,.08)',color:'#FCA5A5',border:'1px solid rgba(255,68,68,.2)'}}>❌ Le problème</div>
        <h2 style={{fontSize:'clamp(28px,4vw,44px)',fontWeight:900,letterSpacing:-1.5,lineHeight:1.05,marginBottom:14,fontFamily:"'Syne',sans-serif"}}>Vous perdez de l&apos;argent<br/>sans le savoir.</h2>
        <p style={{fontSize:16,color:'rgba(255,255,255,.45)',lineHeight:1.65,maxWidth:480,marginBottom:32}}>Chaque course cache des coûts que la plupart des chauffeurs n&apos;ont jamais calculés.</p>
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          <Card type="issue" icon="💸" title="Commission Yango non comptée" body="2 500 FCFA affichés → 2 000 FCFA réels. 500 FCFA disparaissent à chaque course."/>
          <Card type="issue" icon="⛽" title="Carburant jamais calculé par course" body="8 km = 556 FCFA d'essence. Multiplié par 20 courses par jour."/>
          <Card type="issue" icon="🤝" title="Versage propriétaire flou" body="Combien devez-vous vraiment ? Disputes, malentendus, tensions inutiles."/>
        </div>
      </div>
      <div>
        <div style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:11,fontWeight:700,letterSpacing:'1.2px',textTransform:'uppercase',padding:'6px 14px',borderRadius:50,marginBottom:20,background:'rgba(56,158,116,.08)',color:'#389e74',border:'1px solid rgba(56,158,116,.2)'}}>✅ La solution</div>
        <h2 style={{fontSize:'clamp(28px,4vw,44px)',fontWeight:900,letterSpacing:-1.5,lineHeight:1.05,marginBottom:14,fontFamily:"'Syne',sans-serif"}}>Votre comptabilité<br/>en 3 secondes.</h2>
        <p style={{fontSize:16,color:'rgba(255,255,255,.45)',lineHeight:1.65,maxWidth:480,marginBottom:32}}>Yango Expert automatise tout. Chaque centime est tracé, chaque course analysée.</p>
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          <Card type="fix" icon="⚡" title="Détection automatique Yango" body="Chaque notification Yango Pro capturée. Montant et distance enregistrés sans rien faire."/>
          <Card type="fix" icon="🧮" title="Formule du Vrai Net" body="Brut − Commission − Carburant − Versage = ce que vous gardez vraiment."/>
          <Card type="fix" icon="🎯" title="Indicateur GAGNANT / PERDANT" body="Un regard sur l'écran. Vert = journée rentable. Rouge = il faut agir maintenant."/>
        </div>
      </div>
    </div>
  </section>
);}

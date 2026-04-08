const T=[
  {i:'M',c:'#00C853',n:'Moussa D.',r:'Chauffeur Yango Pro, Almadies',txt:'"Avec Yango Expert j\'ai réalisé que je perdais 35 000 FCFA par mois en carburant non calculé."'},
  {i:'F',c:'#FF6B35',n:'Fatou N.',r:'Propriétaire de flotte, Dakar',txt:'"Je gère 3 véhicules. Les rapports PDF ont mis fin aux disputes avec mes chauffeurs."'},
  {i:'I',c:'#3B82F6',n:'Ibrahima S.',r:'Chauffeur Heetch & Yango',txt:'"L\'app marche même sans internet ! Sur la route de Thiès toutes mes courses ont été enregistrées."'},
];
export default function TestimonialsSection(){return(
  <section style={{background:'#0B0D11',padding:'96px 6vw'}}>
    <div style={{textAlign:'center',marginBottom:56}}>
      <div style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:11,fontWeight:700,letterSpacing:'1.2px',textTransform:'uppercase',padding:'6px 14px',borderRadius:50,marginBottom:20,background:'rgba(56,158,116,.08)',color:'#389e74',border:'1px solid rgba(56,158,116,.2)'}}>Témoignages</div>
      <h2 style={{fontSize:'clamp(28px,3.5vw,44px)',fontWeight:900,letterSpacing:-1.5,fontFamily:"'Syne',sans-serif"}}>Ce que disent les chauffeurs.</h2>
    </div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20,maxWidth:1000,margin:'0 auto'}}>
      {T.map(t=>(
        <div key={t.n} style={{background:'#13161E',border:'1px solid rgba(255,255,255,.07)',borderRadius:20,padding:24}}>
          <div style={{color:'#FFB800',fontSize:14,letterSpacing:2,marginBottom:14}}>★★★★★</div>
          <p style={{fontSize:14,color:'rgba(255,255,255,.6)',lineHeight:1.7,fontStyle:'italic',marginBottom:18}}>{t.txt}</p>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <div style={{width:38,height:38,borderRadius:12,flexShrink:0,background:t.c+'22',color:t.c,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:15}}>{t.i}</div>
            <div>
              <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:13,color:'#EEF0F6'}}>{t.n}</div>
              <div style={{fontSize:11,color:'rgba(255,255,255,.35)'}}>{t.r}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);}

const FEATURES=[
  {icon:'⚡',title:'Live Sync Android',body:"Chaque notification Yango Pro capturée automatiquement. Zéro saisie — la course apparaît en 1 seconde.",badge:'AUTOMATIQUE',wide:false,color:'#00C853'},
  {icon:'📸',title:'Scan OCR iOS',body:"Photographiez l\'écran Yango. GPT-4o extrait montant + distance en 2 secondes.",badge:'iOS',wide:false,color:'#3B82F6'},
  {icon:'📊',title:'Analytics avancés',body:'Profits par heure, jour, semaine. Identifiez vos meilleures plages horaires.',badge:'PREMIUM',wide:false,color:'#FF6B35'},
  {icon:'📄',title:'Rapport PDF pour le propriétaire',body:"Générez en 1 clic : toutes les courses, versage calculé, signatures. Envoyez par WhatsApp. Fini les disputes de fin de mois.",badge:'PREMIUM',wide:true,color:'#00C853'},
  {icon:'☁️',title:'Mode hors-ligne',body:'Données sauvegardées localement, synchronisées au retour de la connexion.',badge:'TOUJOURS',wide:false,color:'#AB47BC'},
  {icon:'🌿',title:'Interface en Wolof',body:'Première app fintech traduite en Wolof. Basculez en 1 tap.',badge:'DAKAR 🇸🇳',wide:false,color:'#3B82F6'},
  {icon:'🤝',title:'Gestion versage',body:'Calcul automatique du montant dû selon votre taux de versage.',badge:'PREMIUM',wide:false,color:'#FF6B35'},
];
export default function FeaturesSection(){return(
  <section id="features" style={{background:'#0F1117',padding:'96px 6vw'}}>
    <div style={{textAlign:'center',maxWidth:620,margin:'0 auto 64px'}}>
      <div style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:11,fontWeight:700,letterSpacing:'1.2px',textTransform:'uppercase',padding:'6px 14px',borderRadius:50,marginBottom:20,background:'rgba(59,130,246,.08)',color:'#60A5FA',border:'1px solid rgba(59,130,246,.2)'}}>Fonctionnalités</div>
      <h2 style={{fontSize:'clamp(28px,4vw,48px)',fontWeight:900,letterSpacing:-1.5,marginBottom:16,fontFamily:"'Syne',sans-serif"}}>Tout pour un chauffeur professionnel.</h2>
      <p style={{fontSize:17,color:'rgba(255,255,255,.45)',lineHeight:1.65}}>Chaque feature résout un problème réel vécu par les chauffeurs de Dakar.</p>
    </div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,maxWidth:1100,margin:'0 auto'}}>
      {FEATURES.map(f=>(
        <div key={f.title} style={{background:'#13161E',border:'1px solid rgba(255,255,255,.07)',borderRadius:20,padding:28,gridColumn:f.wide?'span 2':'span 1'}}>
          <div style={{width:46,height:46,borderRadius:14,background:f.color+'12',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:18,fontSize:20}}>{f.icon}</div>
          <h3 style={{fontFamily:"'Syne',sans-serif",fontSize:16,fontWeight:800,marginBottom:8}}>{f.title}</h3>
          <p style={{fontSize:13,color:'rgba(255,255,255,.45)',lineHeight:1.65}}>{f.body}</p>
          <span style={{display:'inline-block',marginTop:14,fontSize:10,fontWeight:700,padding:'4px 10px',borderRadius:20,letterSpacing:.5,background:f.color+'12',color:f.color}}>{f.badge}</span>
        </div>
      ))}
    </div>
  </section>
);}

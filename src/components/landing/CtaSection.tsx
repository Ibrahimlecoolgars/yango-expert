import Link from 'next/link';
export default function CtaSection(){return(
  <section id="download" style={{background:'#13161E',padding:'96px 6vw'}}>
    <div style={{maxWidth:800,margin:'0 auto',textAlign:'center',background:'linear-gradient(135deg,rgba(56,158,116,.06),rgba(0,191,165,.03))',border:'1px solid rgba(56,158,116,.12)',borderRadius:28,padding:'64px 40px',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:600,height:400,borderRadius:'50%',background:'radial-gradient(ellipse,rgba(56,158,116,.06) 0%,transparent 70%)',pointerEvents:'none'}}/>
      <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:'clamp(28px,4vw,52px)',fontWeight:900,letterSpacing:-2,color:'#EEF0F6',marginBottom:16,position:'relative'}}>Commencez à piloter<br/>votre rentabilité.</h2>
      <p style={{fontSize:17,color:'rgba(255,255,255,.5)',marginBottom:40,position:'relative'}}>Gratuit. Sans engagement. Android & iOS. 500+ chauffeurs à Dakar.</p>
      <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap',position:'relative'}}>
        <Link href="https://play.google.com" style={{display:'flex',alignItems:'center',gap:12,padding:'14px 26px',borderRadius:16,background:'#389e74',textDecoration:'none'}}>
          <div style={{fontSize:10,color:'#fff',fontWeight:500}}>Télécharger sur<br/><span style={{fontFamily:"'Syne',sans-serif",fontSize:15,fontWeight:800}}>Google Play</span></div>
        </Link>
        <Link href="https://apps.apple.com" style={{display:'flex',alignItems:'center',gap:12,padding:'14px 26px',borderRadius:16,background:'rgba(255,255,255,.07)',border:'1px solid rgba(255,255,255,.12)',textDecoration:'none'}}>
          <div style={{fontSize:10,color:'rgba(255,255,255,.6)',fontWeight:500}}>Disponible sur<br/><span style={{fontFamily:"'Syne',sans-serif",fontSize:15,fontWeight:800,color:'#EEF0F6'}}>App Store</span></div>
        </Link>
      </div>
    </div>
  </section>
);}

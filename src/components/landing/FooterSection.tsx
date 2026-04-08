import Link from 'next/link';
import Image from 'next/image';
export default function FooterSection(){return(
  <footer style={{background:'#13161E',borderTop:'1px solid rgba(255,255,255,.07)',padding:'32px 6vw'}}>
    <div style={{maxWidth:1200,margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:16}}>
      <Link href="/" style={{textDecoration:'none'}}>
        <Image src="/logo.svg" alt="Yango Expert" width={160} height={58} style={{height:40,width:'auto'}}/>
      </Link>
      <div style={{display:'flex',gap:20}}>
        {[{href:'mailto:contact@yangoexpert.store',label:'contact@yangoexpert.store'},{href:'#',label:'Confidentialité'},{href:'#',label:'CGU'}].map(({href,label})=>(
          <Link key={label} href={href} style={{fontSize:12,color:'rgba(255,255,255,.3)',textDecoration:'none'}}>{label}</Link>
        ))}
      </div>
      <div style={{fontSize:12,color:'rgba(255,255,255,.2)'}}>© 2026 Yango Expert — Dakar 🇸🇳</div>
    </div>
  </footer>
);}

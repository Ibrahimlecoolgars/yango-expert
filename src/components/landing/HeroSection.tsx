import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section style={{
      background:'#0B0D11', minHeight:'100vh',
      display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
      padding:'100px 6vw 80px', position:'relative', overflow:'hidden', textAlign:'center',
    }}>
      <div style={{ position:'absolute', top:'20%', left:'50%', transform:'translateX(-50%)',
        width:600, height:400,
        background:'radial-gradient(ellipse,rgba(56,158,116,.1) 0%,transparent 70%)',
        pointerEvents:'none' }}/>
      <div style={{ position:'absolute', inset:0,
        backgroundImage:'linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)',
        backgroundSize:'60px 60px', pointerEvents:'none' }}/>
      <div style={{ display:'inline-flex', alignItems:'center', gap:8,
        background:'rgba(56,158,116,.1)', border:'1px solid rgba(56,158,116,.25)',
        borderRadius:50, padding:'6px 16px', marginBottom:32,
        color:'#389e74', fontSize:12, fontWeight:600 }}>
        <span className="animate-blink" style={{ width:6,height:6,borderRadius:'50%',background:'#389e74',display:'inline-block' }}/>
        Conçu à Dakar, pour les chauffeurs VTC 🇸🇳
      </div>
      <Image src="/logo.svg" alt="Yango Expert" width={320} height={116}
        style={{ marginBottom:32, height:72, width:'auto' }} priority />
      <p style={{ fontSize:'clamp(16px,2vw,19px)', color:'rgba(255,255,255,.55)',
        maxWidth:540, lineHeight:1.7, margin:'0 auto 48px' }}>
        La première app qui calcule automatiquement ce que vous gardez après commission Yango,
        carburant et versage. Pas d&apos;estimation. Des chiffres précis.
      </p>
      <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap', marginBottom:56 }}>
        <Link href="https://play.google.com" style={{
          display:'inline-flex', alignItems:'center', gap:10,
          background:'#389e74', color:'#fff',
          fontWeight:800, fontSize:15, padding:'16px 32px', borderRadius:50, textDecoration:'none' }}>
          Google Play — Gratuit
        </Link>
        <Link href="https://apps.apple.com" style={{
          display:'inline-flex', alignItems:'center', gap:10,
          background:'rgba(255,255,255,.07)', border:'1px solid rgba(255,255,255,.12)',
          color:'#EEF0F6', fontWeight:700, fontSize:15, padding:'16px 32px', borderRadius:50, textDecoration:'none' }}>
          App Store
        </Link>
      </div>
      <div style={{ display:'flex', alignItems:'center', gap:24, justifyContent:'center' }}>
        {['⭐⭐⭐⭐⭐ 4.8/5','500+ chauffeurs actifs','Gratuit pour commencer'].map((t,i) => (
          <span key={i} style={{ fontSize:13, color:'rgba(255,255,255,.4)', fontWeight:500 }}>
            {i>0&&<span style={{ marginRight:24, color:'rgba(255,255,255,.15)' }}>·</span>}{t}
          </span>
        ))}
      </div>
    </section>
  );
}

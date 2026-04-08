import Link from 'next/link';
import { PRICING_PLANS, fmt } from '@/data/mock';

export const metadata = { title: 'Tarifs', description: 'Gratuit, Premium et Annuel — Payez via Wave, Orange Money ou YAS.' };

export default function PricingPage() {
  return (
    <main style={{ background:'#0B0D11', minHeight:'100vh', padding:'100px 6vw 80px' }}>
      <div style={{ textAlign:'center', maxWidth:620, margin:'0 auto 64px' }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:11, fontWeight:700, letterSpacing:'1.2px', textTransform:'uppercase', padding:'6px 14px', borderRadius:50, marginBottom:20, background:'rgba(56,158,116,.08)', color:'#389e74', border:'1px solid rgba(56,158,116,.2)' }}>Tarifs</div>
        <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:'clamp(32px,5vw,56px)', fontWeight:900, letterSpacing:-2, marginBottom:16 }}>Simple et transparent.</h1>
        <p style={{ fontSize:17, color:'rgba(255,255,255,.45)', lineHeight:1.65 }}>Commencez gratuitement. Passez Premium quand vous êtes prêt. Payez via Wave, Orange Money ou YAS.</p>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20, maxWidth:1050, margin:'0 auto 64px' }}>
        {PRICING_PLANS.map(plan => (
          <div key={plan.id} style={{
            background: plan.isPopular ? 'linear-gradient(135deg,rgba(56,158,116,.08),rgba(0,191,165,.04))' : '#13161E',
            border: plan.isPopular ? '1px solid rgba(56,158,116,.3)' : '1px solid rgba(255,255,255,.07)',
            borderRadius:24, padding:'32px 28px', position:'relative', display:'flex', flexDirection:'column',
          }}>
            {plan.badge && (
              <div style={{ position:'absolute', top:-12, left:'50%', transform:'translateX(-50%)', whiteSpace:'nowrap', background:'#389e74', color:'#fff', fontSize:10, fontWeight:800, padding:'5px 14px', borderRadius:20, letterSpacing:.5 }}>{plan.badge}</div>
            )}
            <div style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,.4)', textTransform:'uppercase', letterSpacing:'1px', marginBottom:8 }}>{plan.name}</div>
            <div style={{ display:'flex', alignItems:'baseline', gap:6, marginBottom:6 }}>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:44, fontWeight:600, color:'#EEF0F6' }}>{plan.price === 0 ? '0' : fmt(plan.price).replace(' F','')}</span>
              <span style={{ fontSize:13, color:'rgba(255,255,255,.35)' }}>FCFA / {plan.period}</span>
            </div>
            {plan.savings && <div style={{ fontSize:12, fontWeight:700, color:'#389e74', marginBottom:4 }}>Économie {plan.savings} vs mensuel</div>}
            <p style={{ fontSize:13, color:'rgba(255,255,255,.4)', marginBottom:24 }}>{plan.description}</p>
            <ul style={{ listStyle:'none', flex:1, marginBottom:28 }}>
              {plan.features.map(f => (
                <li key={f} style={{ display:'flex', gap:10, alignItems:'flex-start', fontSize:13, color:'rgba(255,255,255,.65)', marginBottom:10 }}>
                  <span style={{ color:'#389e74', flexShrink:0 }}>✓</span>{f}
                </li>
              ))}
            </ul>
            <Link href="#download" style={{
              display:'block', textAlign:'center', padding:'14px',
              borderRadius:14, textDecoration:'none', fontWeight:800, fontSize:14,
              background: plan.isPopular ? '#389e74' : 'rgba(255,255,255,.06)',
              color: plan.isPopular ? '#fff' : 'rgba(255,255,255,.7)',
              border: plan.isPopular ? 'none' : '1px solid rgba(255,255,255,.1)',
            }}>{plan.cta}</Link>
          </div>
        ))}
      </div>

      <div style={{ textAlign:'center', maxWidth:560, margin:'0 auto', padding:32, background:'#13161E', borderRadius:20, border:'1px solid rgba(255,255,255,.07)' }}>
        <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:18, marginBottom:8 }}>Paiement Mobile Money uniquement 🇸🇳</h3>
        <p style={{ fontSize:14, color:'rgba(255,255,255,.45)', marginBottom:20 }}>Pas de carte bancaire requise. Payez avec votre téléphone.</p>
        <div style={{ display:'flex', gap:12, justifyContent:'center' }}>
          {['Wave 🌊','Orange Money 🟠','YAS 💛'].map(m => (
            <div key={m} style={{ padding:'8px 18px', borderRadius:50, background:'rgba(255,255,255,.05)', border:'1px solid rgba(255,255,255,.08)', fontSize:13, fontWeight:600 }}>{m}</div>
          ))}
        </div>
      </div>
    </main>
  );
}

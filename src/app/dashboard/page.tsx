'use client';
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { DRIVERS, TRIPS, VERSAGES, WEEKLY, FLEET_KPIs, fmt } from '@/data/mock';

const statusColor: Record<string,string> = { onTrip:'#00C853', active:'#3B82F6', offline:'#55607A' };
const statusLabel: Record<string,string> = { onTrip:'En course', active:'Disponible', offline:'Hors ligne' };
const healthColor: Record<string,string> = { gagnant:'#00E676', equilibre:'#FFB800', perdant:'#FF4444' };
const versageColor: Record<string,string> = { paid:'#00C853', partial:'#FFB800', due:'#FF4444' };
const versageLabel: Record<string,string> = { paid:'Payé', partial:'Partiel', due:'En attente' };

export default function DashboardPage() {
  const [tab, setTab] = useState<'overview'|'drivers'|'trips'|'versage'>('overview');

  const kpis = [
    { label:'Revenu total', value: fmt(FLEET_KPIs.totalRevenue), sub:'Ce mois', color:'#3B82F6' },
    { label:'Profit net fleet', value: fmt(FLEET_KPIs.totalNet), sub:`Marge ${FLEET_KPIs.avgMargin}%`, color:'#00C853' },
    { label:'Versage dû', value: fmt(FLEET_KPIs.versageDue - FLEET_KPIs.versagePaid), sub:'Non encaissé', color:'#FFB800' },
    { label:'Courses totales', value: FLEET_KPIs.totalTrips.toString(), sub:`${FLEET_KPIs.activeDrivers} chauffeurs`, color:'#AB47BC' },
  ];

  return (
    <div style={{ background:'#0B0D11', minHeight:'100vh', padding:'24px', fontFamily:"'DM Sans',sans-serif" }}>
      {/* Header */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:28 }}>
        <div>
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:22, fontWeight:900, color:'#EEF0F6' }}>Dashboard Flotte</h1>
          <p style={{ fontSize:13, color:'rgba(255,255,255,.4)', marginTop:2 }}>Yango Expert · Dakar</p>
        </div>
        <div style={{ display:'flex', gap:8 }}>
          {(['overview','drivers','trips','versage'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding:'8px 16px', borderRadius:10, border:'none', cursor:'pointer', fontSize:12, fontWeight:600,
              background: tab===t ? '#389e74' : 'rgba(255,255,255,.06)',
              color: tab===t ? '#fff' : 'rgba(255,255,255,.5)',
            }}>{t.charAt(0).toUpperCase()+t.slice(1)}</button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14, marginBottom:24 }}>
        {kpis.map(k => (
          <div key={k.label} style={{ background:'#13161E', border:'1px solid rgba(255,255,255,.07)', borderRadius:16, padding:'20px 18px' }}>
            <div style={{ fontSize:11, color:'rgba(255,255,255,.4)', fontWeight:600, textTransform:'uppercase', letterSpacing:.5, marginBottom:8 }}>{k.label}</div>
            <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:26, fontWeight:600, color:k.color, marginBottom:4 }}>{k.value}</div>
            <div style={{ fontSize:12, color:'rgba(255,255,255,.35)' }}>{k.sub}</div>
          </div>
        ))}
      </div>

      {tab === 'overview' && (
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr', gap:16 }}>
          <div style={{ background:'#13161E', border:'1px solid rgba(255,255,255,.07)', borderRadius:16, padding:24 }}>
            <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:14, marginBottom:20 }}>Revenus semaine</h3>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={WEEKLY} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.04)" vertical={false}/>
                <XAxis dataKey="day" tick={{ fontSize:11, fill:'rgba(255,255,255,.35)' }} axisLine={false} tickLine={false}/>
                <YAxis tickFormatter={v=>fmt(v).replace(' F','')+' F'} tick={{ fontSize:10, fill:'rgba(255,255,255,.35)' }} axisLine={false} tickLine={false} width={72}/>
                <Tooltip formatter={(v:number,n:string)=>[fmt(v), n==='revenue'?'Brut':'Net']} contentStyle={{ background:'#1A1E28', border:'1px solid rgba(255,255,255,.1)', borderRadius:10, fontSize:12 }}/>
                <Bar dataKey="revenue" fill="#3B82F6" radius={[6,6,0,0]} opacity={.7}/>
                <Bar dataKey="net" fill="#389e74" radius={[6,6,0,0]}/>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div style={{ background:'#13161E', border:'1px solid rgba(255,255,255,.07)', borderRadius:16, padding:24 }}>
            <h3 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:14, marginBottom:16 }}>Courses récentes</h3>
            {TRIPS.slice(0,4).map(t => (
              <div key={t.id} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 0', borderBottom:'1px solid rgba(255,255,255,.04)' }}>
                <div>
                  <div style={{ fontSize:12, fontWeight:600, color:'#EEF0F6' }}>{t.driverName}</div>
                  <div style={{ fontSize:11, color:'rgba(255,255,255,.35)', marginTop:2 }}>{t.distanceKm} km · {t.time}</div>
                </div>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:13, fontWeight:600, color:'#00C853' }}>{fmt(t.amount)}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'drivers' && (
        <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
          {DRIVERS.map(d => (
            <div key={d.id} style={{ background:'#13161E', border:'1px solid rgba(255,255,255,.07)', borderRadius:16, padding:20, display:'grid', gridTemplateColumns:'auto 1fr auto auto auto', gap:20, alignItems:'center' }}>
              <div style={{ width:44, height:44, borderRadius:14, background:d.color+'22', color:d.color, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:15 }}>{d.initials}</div>
              <div>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:14, color:'#EEF0F6' }}>{d.name}</div>
                <div style={{ fontSize:12, color:'rgba(255,255,255,.4)', marginTop:2 }}>{d.vehicle} · {d.plate}</div>
              </div>
              <div style={{ textAlign:'center' }}>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:18, fontWeight:600, color:healthColor[d.health] }}>{fmt(d.today.netProfit)}</div>
                <div style={{ fontSize:11, color:'rgba(255,255,255,.35)', marginTop:2 }}>Net auj.</div>
              </div>
              <div style={{ textAlign:'center' }}>
                <div style={{ fontSize:13, fontWeight:600, color:healthColor[d.health] }}>{d.health.toUpperCase()}</div>
                <div style={{ fontSize:11, color:'rgba(255,255,255,.35)', marginTop:2 }}>{d.today.margin}% marge</div>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                <span style={{ width:8, height:8, borderRadius:'50%', background:statusColor[d.status], display:'inline-block' }}/>
                <span style={{ fontSize:12, color:'rgba(255,255,255,.5)' }}>{statusLabel[d.status]}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'trips' && (
        <div style={{ background:'#13161E', border:'1px solid rgba(255,255,255,.07)', borderRadius:16, overflow:'hidden' }}>
          <table style={{ width:'100%', borderCollapse:'collapse' }}>
            <thead>
              <tr style={{ borderBottom:'1px solid rgba(255,255,255,.07)' }}>
                {['Chauffeur','Montant','Distance','Heure','Source'].map(h => (
                  <th key={h} style={{ padding:'14px 16px', textAlign:'left', fontSize:11, color:'rgba(255,255,255,.35)', fontWeight:700, textTransform:'uppercase', letterSpacing:.5 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TRIPS.map(t => (
                <tr key={t.id} style={{ borderBottom:'1px solid rgba(255,255,255,.04)' }}>
                  <td style={{ padding:'12px 16px', fontSize:13, fontWeight:600, color:'#EEF0F6' }}>{t.driverName}</td>
                  <td style={{ padding:'12px 16px', fontFamily:"'JetBrains Mono',monospace", fontSize:13, color:'#00C853' }}>{fmt(t.amount)}</td>
                  <td style={{ padding:'12px 16px', fontSize:13, color:'rgba(255,255,255,.5)' }}>{t.distanceKm} km</td>
                  <td style={{ padding:'12px 16px', fontSize:13, color:'rgba(255,255,255,.5)' }}>{t.time}</td>
                  <td style={{ padding:'12px 16px' }}><span style={{ fontSize:10, fontWeight:700, padding:'3px 8px', borderRadius:6, background: t.source==='auto'?'rgba(0,200,83,.12)':'rgba(59,130,246,.12)', color: t.source==='auto'?'#00C853':'#3B82F6' }}>{t.source.toUpperCase()}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'versage' && (
        <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
          {VERSAGES.map(v => (
            <div key={v.id} style={{ background:'#13161E', border:'1px solid rgba(255,255,255,.07)', borderRadius:16, padding:20, display:'grid', gridTemplateColumns:'auto 1fr auto auto', gap:20, alignItems:'center' }}>
              <div style={{ width:40, height:40, borderRadius:12, background:v.driverColor+'22', color:v.driverColor, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:14 }}>{v.driverInitials}</div>
              <div>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:14, color:'#EEF0F6' }}>{v.driverName}</div>
                <div style={{ fontSize:12, color:'rgba(255,255,255,.4)', marginTop:2 }}>{v.period} · Dû le {v.dueDate}</div>
              </div>
              <div style={{ textAlign:'right' }}>
                <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:20, fontWeight:600, color:'#EEF0F6' }}>{fmt(v.amount)}</div>
                {v.partialAmount && <div style={{ fontSize:12, color:'#FFB800', marginTop:2 }}>{fmt(v.partialAmount)} encaissé</div>}
              </div>
              <div style={{ padding:'6px 14px', borderRadius:20, background:versageColor[v.status]+'18', color:versageColor[v.status], fontSize:11, fontWeight:700, textAlign:'center' }}>{versageLabel[v.status]}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

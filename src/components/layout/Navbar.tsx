'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isDashboard = pathname.startsWith('/dashboard');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (isDashboard) return null;

  return (
    <nav style={{
      position:'fixed', top:0, left:0, right:0, zIndex:50,
      padding:'0 6vw', height:64,
      display:'flex', alignItems:'center', justifyContent:'space-between',
      transition:'all .3s',
      background: scrolled ? 'rgba(11,13,17,.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,.07)' : 'none',
    }}>
      <Link href="/" style={{ display:'flex', alignItems:'center', textDecoration:'none' }}>
        <Image src="/logo.svg" alt="Yango Expert" width={180} height={65} priority style={{ height:44, width:'auto' }}/>
      </Link>
      <div style={{ display:'flex', gap:28 }}>
        {[
          { href:'/#features', label:'Fonctionnalités' },
          { href:'/pricing',   label:'Tarifs' },
          { href:'/dashboard', label:'Dashboard' },
        ].map(({ href, label }) => (
          <Link key={href} href={href} style={{
            color:'rgba(255,255,255,.6)', textDecoration:'none',
            fontSize:14, fontWeight:500,
          }}>{label}</Link>
        ))}
      </div>
      <Link href="#download" style={{
        background:'#389e74', color:'#fff',
        fontWeight:700, fontSize:13,
        padding:'10px 22px', borderRadius:50,
        textDecoration:'none',
      }}>Télécharger</Link>
    </nav>
  );
}

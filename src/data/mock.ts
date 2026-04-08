// src/data/mock.ts
import type { Driver, TripEvent, VersageRecord, WeeklyData, PricingPlan } from '@/types';

export const fmt = (n: number) => new Intl.NumberFormat('fr-SN').format(Math.round(n)) + ' F';

export const DRIVERS: Driver[] = [
  { id:'d1', name:'Moussa Diallo', phone:'+221 77 123 45 67', plate:'DK-4521-A', vehicle:'Toyota Corolla 2019',
    initials:'MD', color:'#00C853', status:'onTrip', joinedAt:'2024-01-15', health:'gagnant',
    today:{ grossRevenue:42500, netProfit:18900, commission:8500, fuel:9200, versage:5900, tripCount:18, distanceKm:142, margin:44 },
    month:{ grossRevenue:892000, netProfit:387000, versageDue:148000, versagePaid:148000, tripCount:312 } },
  { id:'d2', name:'Fatou Ndiaye', phone:'+221 78 234 56 78', plate:'DK-7823-B', vehicle:'Hyundai Accent 2020',
    initials:'FN', color:'#FF6B35', status:'active', joinedAt:'2024-03-20', health:'equilibre',
    today:{ grossRevenue:28000, netProfit:9800, commission:5600, fuel:7200, versage:5400, tripCount:12, distanceKm:89, margin:35 },
    month:{ grossRevenue:645000, netProfit:198000, versageDue:127000, versagePaid:85000, tripCount:218 } },
  { id:'d3', name:'Ibrahima Sarr', phone:'+221 76 345 67 89', plate:'DK-2156-C', vehicle:'Kia Rio 2021',
    initials:'IS', color:'#3B82F6', status:'offline', joinedAt:'2024-06-10', health:'perdant',
    today:{ grossRevenue:15000, netProfit:2100, commission:3000, fuel:5800, versage:4100, tripCount:7, distanceKm:54, margin:14 },
    month:{ grossRevenue:412000, netProfit:87000, versageDue:98000, versagePaid:40000, tripCount:145 } },
];

export const TRIPS: TripEvent[] = [
  { id:'t1', driverId:'d1', driverName:'Moussa D.', amount:2800, distanceKm:9.2, time:'14:32', source:'auto' },
  { id:'t2', driverId:'d2', driverName:'Fatou N.',  amount:1900, distanceKm:5.8, time:'14:18', source:'auto' },
  { id:'t3', driverId:'d1', driverName:'Moussa D.', amount:3500, distanceKm:12.1,time:'13:55', source:'auto' },
  { id:'t4', driverId:'d3', driverName:'Ibrahima S.',amount:2200,distanceKm:7.4, time:'13:40', source:'ocr'  },
  { id:'t5', driverId:'d2', driverName:'Fatou N.',  amount:2600, distanceKm:8.9, time:'13:22', source:'auto' },
];

export const VERSAGES: VersageRecord[] = [
  { id:'v1', driverId:'d1', driverName:'Moussa Diallo',  driverInitials:'MD', driverColor:'#00C853', period:'Décembre 2025', amount:148000, status:'paid',    dueDate:'2026-01-05', paidDate:'2026-01-04' },
  { id:'v2', driverId:'d2', driverName:'Fatou Ndiaye',   driverInitials:'FN', driverColor:'#FF6B35', period:'Décembre 2025', amount:127000, status:'partial',  dueDate:'2026-01-05', partialAmount:85000 },
  { id:'v3', driverId:'d3', driverName:'Ibrahima Sarr',  driverInitials:'IS', driverColor:'#3B82F6', period:'Décembre 2025', amount:98000,  status:'due',      dueDate:'2026-01-05' },
];

export const WEEKLY: WeeklyData[] = [
  { day:'Lun', revenue:145000, net:62000 },
  { day:'Mar', revenue:178000, net:78000 },
  { day:'Mer', revenue:132000, net:54000 },
  { day:'Jeu', revenue:198000, net:89000 },
  { day:'Ven', revenue:221000, net:97000 },
  { day:'Sam', revenue:189000, net:83000 },
  { day:'Dim', revenue:156000, net:68000 },
];

export const FLEET_KPIs = {
  totalRevenue: 1219000,
  totalNet: 531000,
  versageDue: 373000,
  versagePaid: 273000,
  activeDrivers: 3,
  totalTrips: 675,
  avgMargin: 43,
};

export const PRICING_PLANS: PricingPlan[] = [
  { id:'free',    name:'Gratuit',  description:'Pour démarrer',  price:0,     currency:'FCFA', period:'mois', variant:'free',
    features:['Dashboard basique','Saisie manuelle des courses','5 courses/jour','Calcul profit net'], cta:'Commencer gratuit' },
  { id:'premium', name:'Premium', description:'Pour les pros',   price:2990,  currency:'FCFA', period:'mois', variant:'premium', isPopular:true, badge:'LE PLUS POPULAIRE',
    features:['Live Sync Android illimité','OCR iOS (scan photo)','Export PDF propriétaire','Historique illimité','Gestion versage','Support WhatsApp'], cta:'Commencer 7j gratuit' },
  { id:'annual',  name:'Annuel',  description:'Meilleur tarif',  price:24900, currency:'FCFA', period:'an',   variant:'annual',  savings:'-30%',
    features:['Tout Premium inclus','Gestion multi-véhicules','Dashboard flotte complet','Statistiques avancées','Accès bêta nouvelles fonctions'], cta:'Économiser 30%' },
];

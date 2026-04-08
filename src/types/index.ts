// src/types/index.ts

export type HealthStatus = 'gagnant' | 'equilibre' | 'perdant';
export type DriverStatus = 'onTrip' | 'active' | 'offline';
export type VersageStatus = 'paid' | 'partial' | 'due';
export type TripSource = 'auto' | 'ocr' | 'manual';

export interface Driver {
  id: string;
  name: string;
  phone: string;
  plate: string;
  vehicle: string;
  initials: string;
  color: string;
  status: DriverStatus;
  joinedAt: string;
  health: HealthStatus;
  today: DaySummary;
  month: MonthSummary;
}

export interface DaySummary {
  grossRevenue: number;
  netProfit: number;
  commission: number;
  fuel: number;
  versage: number;
  tripCount: number;
  distanceKm: number;
  margin: number;
}

export interface MonthSummary {
  grossRevenue: number;
  netProfit: number;
  versageDue: number;
  versagePaid: number;
  tripCount: number;
}

export interface TripEvent {
  id: string;
  driverId: string;
  driverName: string;
  amount: number;
  distanceKm: number;
  time: string;
  source: TripSource;
}

export interface VersageRecord {
  id: string;
  driverId: string;
  driverName: string;
  driverInitials: string;
  driverColor: string;
  period: string;
  amount: number;
  status: VersageStatus;
  dueDate: string;
  paidDate?: string;
  partialAmount?: number;
}

export interface WeeklyData {
  day: string;
  revenue: number;
  net: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  period: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
  badge?: string;
  savings?: string;
  variant: 'free' | 'premium' | 'annual';
}

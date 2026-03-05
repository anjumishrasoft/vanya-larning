
export enum AppView {
  DASHBOARD = 'DASHBOARD',
  DIAGNOSTICS = 'DIAGNOSTICS',
  CONSULTATION = 'CONSULTATION',
  TRACKER = 'TRACKER',
  CARE_PLAN = 'CARE_PLAN',
  APPOINTMENTS = 'APPOINTMENTS',
  RECORDS = 'RECORDS',
  BILLING = 'BILLING',
  DOCTORS = 'DOCTORS',
  ANALYTICS = 'ANALYTICS',
  EDUCATION = 'EDUCATION'
}

export interface DiagnosisResult {
  condition: string;
  severity: 'low' | 'medium' | 'high';
  recommendations: string[];
  confidence: number;
}

export interface CarePlan {
  dailyRoutine: string[];
  dietaryAdvice: string[];
  followUp: string;
}

export interface Appointment {
  id: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  type: 'Regular' | 'Surgery' | 'Consultation';
  status: 'Upcoming' | 'Completed' | 'Cancelled';
}

export interface Invoice {
  id: string;
  date: string;
  service: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Insurance Claimed';
}

export type Language = 'en' | 'hi' | 'mr';

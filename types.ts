
export interface CustomerRecord {
  id: string;
  fullName: string;
  dateOfPurchase: string;
  age: number;
  state: string;
  device: string;
  gender: string;
  satisfactionRate: number;
  satisfactionLabel: string;
  review: string;
  tenureMonths: number;
  subscriptionPlan: string;
  unitPrice: number;
  purchaseCount: number;
  totalRevenue: number;
  dataUsage: number;
  churnStatus: 'Yes' | 'No';
  reasonForChurn: string;
}

export interface ChurnPredictionResponse {
  churnProbability: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  keyRiskFactors: string[];
  recommendation: string;
  analysis: string;
}

export enum AppView {
  DASHBOARD = 'DASHBOARD',
  PREDICTOR = 'PREDICTOR',
  DATA_EXPLORER = 'DATA_EXPLORER'
}

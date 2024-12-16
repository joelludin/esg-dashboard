export interface CompanyData {
  'Company-Category': string;
  Company: string;
  Company_ID: string;
  'Number of Board Meetings': string;
  'Average Attendance at Board Meetings (%) ': string;
  'ESG Oversight at Board or Executive Level ': string;
  'Responsibility and/or Sustainability Goals and/or Targets in Place or in Development1': string;
  'Public ESG Disclosure2': string;
  'Total Recordable Incident Rate ': string;
  'Lost-Time Incident Rate ': string;
  'Health & Safety Efforts3 ': string;
  'Health & Safety Function4 ': string;
  'AntiHarassment5 ': string;
  'Code of Conduct/ Business Ethics5 C': string;
  'Cybersecurity5 ': string;
  'Data Privacy5 ': string;
  'Health&Safety': string;
  [key: string]: string;
}

export interface ProcessedESGData {
  companyId: string;
  company: string;
  category: string;
  energyIntensity: number;
  waterIntensity: number;
  ghgScope1: number;
  ghgScope2: number;
  boardMeetings: number;
  boardAttendance: number;
  voluntaryTurnover: number;
  incidentRate: number;
} 
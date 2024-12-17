export interface CompanyData {
  'Company-Category': string;
  'Company': string;
  'Company_ID': string;
  'Energy Intensity (kWh/$M Revenue)': string;
  'Non-Hazardous Waste Intensity (MT/$M Revenue)': string;
  'Percent Non-Hazardous Waste Recycled (%)': string;
  'Water Intensity (m³/$M Revenue)': string;
  'Climate-Related Risk Management Process': string | null;
  'GHG Emissions Reduction Targets and Goals': string | null;
  'Sustainability Function': string | null;
  'Enviornmental Efforts -Energy Reduction': string;
  'Environment Efforts - Renewable Energy': string;
  'Environmental Efforts - Water': string;
  'Environmental Efforts - Waste': string;
  'GHG Scope 1 Reduction Efforts': string;
  'GHG Scope 2 Reduction Efforts': string;
  'GHG Scope 3 Reduction Efforts': string;
  'Number of Board Meetings': string;
  'Average Attendance at Board Meetings (%) ': string;
  'ESG Oversight at Board or Executive Level ': string | null;
  'Responsibility and/or Sustainability Goals and/or Targets in Place or in Development1': string | null;
  'Public ESG Disclosure2': string | null;
  'Total Recordable Incident Rate ': string;
  'Lost-Time Incident Rate ': string;
  'Health & Safety Efforts3 ': string | null;
  'Health & Safety Function4 ': string | null;
  'AntiHarassment5 ': string | null;
  'Code of Conduct/ Business Ethics5 C': string | null;
  'Cybersecurity5 ': string | null;
  'Data Privacy5 ': string | null;
  'Health&Safety': string | null;
  'Employee Engagement Efforts': string;
  'Inclusion & Diversity Efforts': string;
  'DEI Function': string;
  'Philanthropic or Volunteer Efforts': string;
  'Citizenship & Philanthropy Function': string;
  'Total Voluntary Turnover Rate': string;
  'Anti-Discrimination': string | null;
  'DEI': string | null;
  'Supplier Code of Conduct': string | null;
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
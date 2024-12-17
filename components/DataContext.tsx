'use client';

import React, { createContext, useContext, useState } from 'react';
import { CompanyData } from '../types';

interface DataContextType {
  filteredData: CompanyData[];
  industry: string;
  companyId: string;
  setIndustry: (industry: string) => void;
  setCompanyId: (companyId: string) => void;
}

const data: CompanyData[] = [
  {
    "Company-Category": "Communication Services",
    "Company": "COMPANY A",
    "Company_ID": "Communication Services-COMPANY A",
    "Energy Intensity (kWh/$M Revenue)": "72,606",
    "Non-Hazardous Waste Intensity (MT/$M Revenue)": "0.56",
    "Percent Non-Hazardous Waste Recycled (%)": "33%",
    "Water Intensity (m³/$M Revenue)": "69.3",
    "Climate-Related Risk Management Process": "Yes",
    "GHG Emissions Reduction Targets and Goals": "No",
    "Sustainability Function": "No",
    "Enviornmental Efforts -Energy Reduction": "1",
    "Environment Efforts - Renewable Energy": "1",
    "Environmental Efforts - Water": "0",
    "Environmental Efforts - Waste": "0",
    "GHG Scope 1 Reduction Efforts": "1",
    "GHG Scope 2 Reduction Efforts": "1",
    "GHG Scope 3 Reduction Efforts": "0",
    "Number of Board Meetings": "4",
    "Average Attendance at Board Meetings (%) ": "96%",
    "ESG Oversight at Board or Executive Level ": "Yes",
    "Responsibility and/or Sustainability Goals and/or Targets in Place or in Development1": "Yes",
    "Public ESG Disclosure2": "Yes",
    "Total Recordable Incident Rate ": "0",
    "Lost-Time Incident Rate ": "0",
    "Health & Safety Efforts3 ": "Yes",
    "Health & Safety Function4 ": "Yes",
    "AntiHarassment5 ": "Policy and Training",
    "Code of Conduct/ Business Ethics5 C": "Policy",
    "Cybersecurity5 ": "Policy and Training",
    "Data Privacy5 ": "Policy and Training",
    "Health&Safety": "Policy",
    "Employee Engagement Efforts": "Yes",
    "Inclusion & Diversity Efforts": "Yes",
    "DEI Function": "Yes",
    "Philanthropic or Volunteer Efforts": "Yes",
    "Citizenship & Philanthropy Function": "Yes",
    "Total Voluntary Turnover Rate": "15%",
    "Anti-Discrimination": "Policy and Training",
    "DEI": "Policy and Training",
    "Supplier Code of Conduct": "Policy"
  },
  {
    "Company-Category": "Communication Services",
    "Company": "COMPANY B",
    "Company_ID": "Communication Services-COMPANY B",
    "Energy Intensity (kWh/$M Revenue)": "282,998",
    "Non-Hazardous Waste Intensity (MT/$M Revenue)": "0.12",
    "Percent Non-Hazardous Waste Recycled (%)": "0%",
    "Water Intensity (m³/$M Revenue)": "315.69",
    "Climate-Related Risk Management Process": "No",
    "GHG Emissions Reduction Targets and Goals": "No",
    "Sustainability Function": "Yes",
    "Enviornmental Efforts -Energy Reduction": "1",
    "Environment Efforts - Renewable Energy": "0",
    "Environmental Efforts - Water": "0",
    "Environmental Efforts - Waste": "1",
    "GHG Scope 1 Reduction Efforts": "0",
    "GHG Scope 2 Reduction Efforts": "1",
    "GHG Scope 3 Reduction Efforts": "0",
    "Number of Board Meetings": "28",
    "Average Attendance at Board Meetings (%) ": "73%",
    "ESG Oversight at Board or Executive Level ": "Yes",
    "Responsibility and/or Sustainability Goals and/or Targets in Place or in Development1": "No",
    "Public ESG Disclosure2": "No",
    "Total Recordable Incident Rate ": "0",
    "Lost-Time Incident Rate ": "0",
    "Health & Safety Efforts3 ": "Yes",
    "Health & Safety Function4 ": "Yes",
    "AntiHarassment5 ": "Policy and Training",
    "Code of Conduct/ Business Ethics5 C": "Policy and Training",
    "Cybersecurity5 ": "Policy and Training",
    "Data Privacy5 ": "Policy and Training",
    "Health&Safety": "Policy and Training",
    "Employee Engagement Efforts": "Yes",
    "Inclusion & Diversity Efforts": "No",
    "DEI Function": "No",
    "Philanthropic or Volunteer Efforts": "No",
    "Citizenship & Philanthropy Function": "Yes",
    "Total Voluntary Turnover Rate": "18%",
    "Anti-Discrimination": "Policy and Training",
    "DEI": "None",
    "Supplier Code of Conduct": "None"
  },
  {
    "Company-Category": "Communication Services",
    "Company": "COMPANY C",
    "Company_ID": "Communication Services-COMPANY C",
    "Energy Intensity (kWh/$M Revenue)": "4,469",
    "Non-Hazardous Waste Intensity (MT/$M Revenue)": "0.05",
    "Percent Non-Hazardous Waste Recycled (%)": "0%",
    "Water Intensity (m³/$M Revenue)": "6.05",
    "Climate-Related Risk Management Process": "Yes",
    "GHG Emissions Reduction Targets and Goals": "No",
    "Sustainability Function": "Yes",
    "Enviornmental Efforts -Energy Reduction": "1",
    "Environment Efforts - Renewable Energy": "0",
    "Environmental Efforts - Water": "1",
    "Environmental Efforts - Waste": "0",
    "GHG Scope 1 Reduction Efforts": "0",
    "GHG Scope 2 Reduction Efforts": "1",
    "GHG Scope 3 Reduction Efforts": "0",
    "Number of Board Meetings": "0",
    "Average Attendance at Board Meetings (%) ": "N/A",
    "ESG Oversight at Board or Executive Level ": "Yes",
    "Responsibility and/or Sustainability Goals and/or Targets in Place or in Development1": "Yes",
    "Public ESG Disclosure2": "No",
    "Total Recordable Incident Rate ": "0",
    "Lost-Time Incident Rate ": "0",
    "Health & Safety Efforts3 ": "Yes",
    "Health & Safety Function4 ": "Yes",
    "AntiHarassment5 ": "Policy and Training",
    "Code of Conduct/ Business Ethics5 C": "Policy and Training",
    "Cybersecurity5 ": "Policy and Training",
    "Data Privacy5 ": "Policy and Training",
    "Health&Safety": "Policy and Training",
    "Employee Engagement Efforts": "Yes",
    "Inclusion & Diversity Efforts": "Yes",
    "DEI Function": "Yes",
    "Philanthropic or Volunteer Efforts": "Yes",
    "Citizenship & Philanthropy Function": "Yes",
    "Total Voluntary Turnover Rate": "8%",
    "Anti-Discrimination": "Policy and Training",
    "DEI": "Policy and Training",
    "Supplier Code of Conduct": "Policy and Training"
  },
  {
    "Company-Category": "Communication Services",
    "Company": "COMPANY D",
    "Company_ID": "Communication Services-COMPANY D",
    "Energy Intensity (kWh/$M Revenue)": "113,865",
    "Non-Hazardous Waste Intensity (MT/$M Revenue)": "0.05",
    "Percent Non-Hazardous Waste Recycled (%)": "82%",
    "Water Intensity (m³/$M Revenue)": "43.03",
    "Climate-Related Risk Management Process": "No",
    "GHG Emissions Reduction Targets and Goals": "No",
    "Sustainability Function": "Yes",
    "Enviornmental Efforts -Energy Reduction": "1",
    "Environment Efforts - Renewable Energy": "1",
    "Environmental Efforts - Water": "1",
    "Environmental Efforts - Waste": "0",
    "GHG Scope 1 Reduction Efforts": "0",
    "GHG Scope 2 Reduction Efforts": "1",
    "GHG Scope 3 Reduction Efforts": "1",
    "Number of Board Meetings": "4",
    "Average Attendance at Board Meetings (%) ": "83%",
    "ESG Oversight at Board or Executive Level ": "Yes",
    "Responsibility and/or Sustainability Goals and/or Targets in Place or in Development1": "Yes",
    "Public ESG Disclosure2": "Yes",
    "Total Recordable Incident Rate ": "0.03",
    "Lost-Time Incident Rate ": "0.01",
    "Health & Safety Efforts3 ": "Yes",
    "Health & Safety Function4 ": "Yes",
    "AntiHarassment5 ": "Policy and Training",
    "Code of Conduct/ Business Ethics5 C": "Policy and Training",
    "Cybersecurity5 ": "Policy and Training",
    "Data Privacy5 ": "Policy and Training",
    "Health&Safety": "Policy and Training",
    "Employee Engagement Efforts": "Yes",
    "Inclusion & Diversity Efforts": "Yes",
    "DEI Function": "Yes",
    "Philanthropic or Volunteer Efforts": "Yes",
    "Citizenship & Philanthropy Function": "Yes",
    "Total Voluntary Turnover Rate": "5%",
    "Anti-Discrimination": "Policy and Training",
    "DEI": "Policy and Training",
    "Supplier Code of Conduct": "Policy and Training"
  },
  {
    "Company-Category": "Communication Services",
    "Company": "COMPANY E",
    "Company_ID": "Communication Services-COMPANY E",
    "Energy Intensity (kWh/$M Revenue)": "229,911",
    "Non-Hazardous Waste Intensity (MT/$M Revenue)": "1.16",
    "Percent Non-Hazardous Waste Recycled (%)": "0%",
    "Water Intensity (m³/$M Revenue)": "245.56",
    "Climate-Related Risk Management Process": "No",
    "GHG Emissions Reduction Targets and Goals": "No",
    "Sustainability Function": "Yes",
    "Enviornmental Efforts -Energy Reduction": "1",
    "Environment Efforts - Renewable Energy": "0",
    "Environmental Efforts - Water": "1",
    "Environmental Efforts - Waste": "1",
    "GHG Scope 1 Reduction Efforts": "1",
    "GHG Scope 2 Reduction Efforts": "1",
    "GHG Scope 3 Reduction Efforts": "1",
    "Number of Board Meetings": "4",
    "Average Attendance at Board Meetings (%) ": "98%",
    "ESG Oversight at Board or Executive Level ": "Yes",
    "Responsibility and/or Sustainability Goals and/or Targets in Place or in Development1": "Yes",
    "Public ESG Disclosure2": "No",
    "Total Recordable Incident Rate ": "1.89",
    "Lost-Time Incident Rate ": "1.15",
    "Health & Safety Efforts3 ": "Yes",
    "Health & Safety Function4 ": "Yes",
    "AntiHarassment5 ": "Policy and Training",
    "Code of Conduct/ Business Ethics5 C": "Policy and Training",
    "Cybersecurity5 ": "Policy and Training",
    "Data Privacy5 ": "Policy and Training",
    "Health&Safety": "Policy and Training",
    "Employee Engagement Efforts": "Yes",
    "Inclusion & Diversity Efforts": "Yes",
    "DEI Function": "Yes",
    "Philanthropic or Volunteer Efforts": "Yes",
    "Citizenship & Philanthropy Function": "Yes",
    "Total Voluntary Turnover Rate": "9%",
    "Anti-Discrimination": "Policy and Training",
    "DEI": "Policy and Training",
    "Supplier Code of Conduct": "Policy and Training"
  }
];

const DataContext = createContext<DataContextType | null>(null);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [industry, setIndustry] = useState('All');
  const [companyId, setCompanyId] = useState('All');

  const filteredData = data.filter(d => {
    if (industry === 'All' && companyId === 'All') return true;
    if (industry !== 'All' && d['Company-Category'] !== industry) return false;
    if (companyId !== 'All' && d.Company_ID !== companyId) return false;
    return true;
  });

  return (
    <DataContext.Provider value={{ filteredData, industry, companyId, setIndustry, setCompanyId }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within DataProvider');
  return context;
} 
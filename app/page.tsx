'use client';

import React, { useState } from 'react';
import SustainabilitySection from '@/components/SustainabilitySection';
import DiversitySection from '@/components/DiversitySection';
import StewardshipSection from '@/components/StewardshipSection';

export default function Home() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [selectedCompany, setSelectedCompany] = useState<string>('');

  // Hardcoded options based on data.csv
  const industryOptions = ['Communication Services'];
  const companyOptions = ['COMPANY A', 'COMPANY B', 'COMPANY C', 'COMPANY D', 'COMPANY E'];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Mock ESG Dashboard (v0)</h1>
          <p className="text-gray-600 mt-2">
            This is a demonstration dashboard using mock ESG data. The data presented here is for 
            illustrative purposes only and does not represent real companies or actual ESG performance metrics.
          </p>
          
          {/* Filters */}
          <div className="mt-4 flex gap-4">
            <div className="w-64">
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                Industry
              </label>
              <select
                id="industry"
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">All Industries</option>
                {industryOptions.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-64">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <select
                id="company"
                value={selectedCompany}
                onChange={(e) => setSelectedCompany(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="">All Companies</option>
                {companyOptions.map((company) => (
                  <option key={company} value={company}>
                    {company}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        <SustainabilitySection 
          selectedIndustry={selectedIndustry}
          selectedCompany={selectedCompany}
        />
        <DiversitySection 
          selectedIndustry={selectedIndustry}
          selectedCompany={selectedCompany}
        />
        <StewardshipSection 
          selectedIndustry={selectedIndustry}
          selectedCompany={selectedCompany}
        />
      </main>
    </div>
  );
}

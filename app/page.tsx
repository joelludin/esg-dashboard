'use client';

import { useState } from 'react';
import SustainabilitySection from '@/components/SustainabilitySection';
import DiversitySection from '@/components/DiversitySection';
import StewardshipSection from '@/components/StewardshipSection';

export default function Home() {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">ESG Dashboard</h1>
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
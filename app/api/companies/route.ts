import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import Papa from 'papaparse';
import { CompanyData } from '@/types';

export const dynamic = 'force-dynamic';

export async function GET(): Promise<NextResponse> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data.csv');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    
    // Convert Papa.parse to use async/await
    const data = await new Promise<CompanyData[]>((resolve, reject) => {
      Papa.parse<CompanyData>(fileContent, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          if (results.errors.length > 0) {
            reject(results.errors);
            return;
          }
          resolve(results.data);
        },
        error: reject
      });
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to load data' }, { status: 500 });
  }
} 
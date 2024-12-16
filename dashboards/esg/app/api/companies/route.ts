import { NextResponse } from 'next/server';
import { parseCSVData } from '../../../lib/csvParser';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  console.log('API Route: Starting GET request');
  try {
    const data = await parseCSVData();
    console.log('API Data:', data);
    return NextResponse.json(data);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { message: 'Error loading company data' },
      { status: 500 }
    );
  }
} 
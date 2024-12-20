import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.json({ success: true });
  response.cookies.set('fromApp', 'true', { path: '/', httpOnly: false });
  return response;
}

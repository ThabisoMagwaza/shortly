import { NextResponse } from 'next/server';

const url = 'https://cleanuri.com/api/v1/shorten';

export async function POST(request) {
  const body = await request.json();

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    return NextResponse.json({ error: 'Downstream error' }, { status: 400 });
  }

  const data = await response.json();

  return NextResponse.json(data, { status: 200 });
}

import client from '@/lib/directus';
import { registerUser } from '@directus/sdk';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const formData = await request.formData();

    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    try {
        await client.request(registerUser(email, password));
        const url = request.nextUrl.clone();
        url.pathname = "/dashboard"
        return NextResponse.redirect(url);
    } catch {
        return NextResponse.json({ error: "Registration failed" }, { status: 500 });
    }
}

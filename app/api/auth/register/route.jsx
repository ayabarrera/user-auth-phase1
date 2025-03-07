import client from '@/lib/directus';
import { registerUser } from '@directus/sdk';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const formData = await request.formData();

    const email = formData.get("email");
    const password = formData.get("password");
    const firstName = formData.get("first_name");
    const lastName = formData.get("last_name");

    if (!email || !password || !firstName || !lastName) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    try {
        await client.request(registerUser(email, password, {
            first_name: firstName,
            last_name: lastName,
        }));
        const url = request.nextUrl.clone();
        url.pathname = "/dashboard"
        return NextResponse.redirect(url);
    } catch (error) {
        console.error("Directus Registration Error: ", error);
        return NextResponse.json({ error: "Registration failed" }, { status: 500 });
    }
}
import client from '@/lib/directus';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request) {
    const formData = await request.formData();

    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    try {
        const response = await client.login(email, password);
        console.log(response);
        if (response.access_token) {
          (await cookies()).set('directus_session_token', response.access_token, { sameSite: 'strict', path: '/', secure: true })
        }
        const url = request.nextUrl.clone();
        url.pathname = "/dashboard"
        return NextResponse.redirect(url);
    } catch (error) {
      console.log(error);
        return NextResponse.json({ error: "Registration failed" }, { status: 500 });
    }
}


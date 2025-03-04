'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  
  const pathname = usePathname(); 

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/login">Log in</Link>
          <Link href="/register">Register</Link>
          <Link href="/logout">Log out</Link>
        </nav>

        <div>
          {pathname !== '/dashboard' && <h1>Site landing</h1>} 
          {children}
        </div>
      </body>
    </html>
  );
}
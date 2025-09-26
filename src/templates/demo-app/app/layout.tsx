import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { ReactNode } from 'react';


export const metadata = { title: 'App', description: 'Next + DaisyUI + Clerk + Stripe' };


export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en" data-theme="light">
                <body className="min-h-screen">
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
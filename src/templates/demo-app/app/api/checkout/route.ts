import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { auth, currentUser, clerkClient } from '@clerk/nextjs';


export const runtime = 'nodejs';


export async function POST(req: Request) {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: 'Not signed in' }, { status: 401 });
    const body = await req.json();
    const priceId = body.priceId as string;


    const user = await currentUser();
    const email = user?.primaryEmailAddress?.emailAddress;


    // You may persist mapping of clerk userId -> stripeCustomerId in your DB.
    // For simplicity we let Stripe create/dedupe by email.
    const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        customer_email: email ?? undefined,
        line_items: [{ price: priceId, quantity: 1 }],
        success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=1`,
        cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?canceled=1`,
        subscription_data: {
            trial_period_days: 14
        },
        metadata: { clerkUserId: userId }
    });


    return NextResponse.json({ url: session.url });
}
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';


export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';


export async function POST(req: Request) {
    const sig = (await headers()).get('stripe-signature');
    const text = await req.text();


    let event;
    try {
        event = stripe.webhooks.constructEvent(text, sig!, process.env.STRIPE_WEBHOOK_SECRET!);
    } catch (err: any) {
        return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
    }


    switch (event.type) {
        case 'checkout.session.completed': {
            // TODO: mark user/org active, store stripe customer/sub ids
            break;
        }
        case 'customer.subscription.deleted': {
            // TODO: mark canceled
            break;
        }
    }


    return NextResponse.json({ received: true });
}
import CheckoutButton from '@/components/billing/CheckoutButton';


const PLANS = [
    { name: 'Starter', price: '$9/mo', priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_STARTER_ID },
    { name: 'Pro', price: '$29/mo', priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO_ID }
];


export default function Pricing() {
    return (
        <main className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6">Pricing</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {PLANS.map((p) => (
                    <div key={p.name} className="card bg-base-200">
                        <div className="card-body">
                            <h3 className="card-title">{p.name}</h3>
                            <p className="opacity-70">{p.price}</p>
                            {p.priceId && <CheckoutButton priceId={p.priceId} />}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
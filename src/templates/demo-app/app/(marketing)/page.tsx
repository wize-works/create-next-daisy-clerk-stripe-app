import Link from 'next/link';


export default function Home() {
    return (
        <main className="container mx-auto p-6">
            <div className="hero bg-base-200 rounded-2xl p-12">
                <div className="hero-content text-center">
                    <div className="max-w-xl">
                        <h1 className="text-4xl font-bold">Next + DaisyUI + Clerk + Stripe</h1>
                        <p className="py-6">Auth, billing, and UI — prewired for shipping SaaS faster.</p>
                        <div className="flex gap-3 justify-center">
                            <Link className="btn btn-primary" href="/sign-in">Sign in</Link>
                            <Link className="btn" href="/pricing">Pricing</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
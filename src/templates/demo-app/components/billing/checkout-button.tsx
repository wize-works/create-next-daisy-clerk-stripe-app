'use client';
import { useState } from 'react';


export default function CheckoutButton({ priceId }: { priceId: string }) {
    const [loading, setLoading] = useState(false);
    return (
        <button
            className="btn btn-primary"
            disabled={loading}
            onClick={async () => {
                setLoading(true);
                const res = await fetch('/api/checkout', { method: 'POST', body: JSON.stringify({ priceId }) });
                const { url } = await res.json();
                window.location.href = url;
            }}
        >
            {loading ? 'Redirecting…' : 'Start trial'}
        </button>
    );
}
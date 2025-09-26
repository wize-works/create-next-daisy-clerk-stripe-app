import { auth } from '@clerk/nextjs';
export async function requireAuth() {
    const a = await auth();
    if (!a.userId) throw new Error('Not authenticated');
    return a;
}
'use client';

import { UserButton } from '@clerk/nextjs';

interface HeaderProps {
    setSidebarOpen: (open: boolean) => void;
}

export function Header({ setSidebarOpen }: HeaderProps) {
    return (
        <header className="bg-base-100 border-b border-base-300 h-16">
            <div className="flex items-center justify-between h-full px-4">
                {/* Mobile menu button */}
                <button
                    className="lg:hidden btn btn-ghost btn-sm"
                    onClick={() => setSidebarOpen(true)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Desktop title */}
                <div className="hidden lg:block">
                    <h1 className="text-xl font-semibold text-base-content">Dashboard</h1>
                </div>

                {/* User menu */}
                <div className="flex items-center space-x-4">
                    {/* Notifications */}
                    <button className="btn btn-ghost btn-sm">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5V17z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7H4l5-5v5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7h5v10h-5V7z" />
                        </svg>
                    </button>

                    {/* User button from Clerk */}
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>
        </header>
    );
}
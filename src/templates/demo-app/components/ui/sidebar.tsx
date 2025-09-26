'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: '🏠' },
    { name: 'Profile', href: '/dashboard/profile', icon: '👤' },
    { name: 'Billing', href: '/dashboard/billing', icon: '💳' },
    { name: 'Analytics', href: '/dashboard/analytics', icon: '📊' },
    { name: 'Settings', href: '/dashboard/settings', icon: '⚙️' },
];

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

export function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
    const pathname = usePathname();

    return (
        <>
            {/* Mobile sidebar backdrop */}
            <div
                className={`fixed inset-0 z-40 lg:hidden ${sidebarOpen ? 'block' : 'hidden'
                    }`}
            >
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
            </div>

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-base-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="flex items-center justify-between h-16 px-4 border-b border-base-300">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-primary-content font-bold text-lg">A</span>
                            </div>
                            <span className="ml-3 text-lg font-semibold">__APP_NAME__</span>
                        </div>
                        <button
                            className="lg:hidden btn btn-ghost btn-sm"
                            onClick={() => setSidebarOpen(false)}
                        >
                            ✕
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-6 space-y-2">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive
                                            ? 'bg-primary text-primary-content'
                                            : 'text-base-content hover:bg-base-300'
                                        }`}
                                >
                                    <span className="mr-3 text-lg">{item.icon}</span>
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* User info footer */}
                    <div className="p-4 border-t border-base-300">
                        <div className="flex items-center">
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-8">
                                    <span className="text-xs">👤</span>
                                </div>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-base-content">Dashboard User</p>
                                <p className="text-xs text-base-content/70">Signed in</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
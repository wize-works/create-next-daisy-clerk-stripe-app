'use client';

import { useState } from 'react';
import { Sidebar } from '../../components/ui/sidebar';
import { Header } from '../../components/ui/header';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-base-100">
            {/* Sidebar */}
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Main content area */}
            <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
                {/* Header */}
                <Header setSidebarOpen={setSidebarOpen} />

                {/* Main content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-base-50">
                    <div className="container mx-auto px-6 py-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
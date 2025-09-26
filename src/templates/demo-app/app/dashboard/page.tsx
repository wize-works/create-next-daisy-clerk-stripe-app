import { auth, currentUser } from '@clerk/nextjs';


export default async function Dashboard() {
    const { userId } = await auth();
    const user = await currentUser();

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-base-content">Welcome back!</h1>
                <p className="mt-2 text-base-content/70">
                    Signed in as {user?.primaryEmailAddress?.emailAddress}
                </p>
            </div>

            {/* Dashboard Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="card bg-base-200 shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title text-lg">Total Users</h2>
                        <p className="text-3xl font-bold text-primary">1,234</p>
                        <p className="text-sm text-base-content/70">+12% from last month</p>
                    </div>
                </div>

                <div className="card bg-base-200 shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title text-lg">Revenue</h2>
                        <p className="text-3xl font-bold text-success">$12,345</p>
                        <p className="text-sm text-base-content/70">+8% from last month</p>
                    </div>
                </div>

                <div className="card bg-base-200 shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title text-lg">Active Subscriptions</h2>
                        <p className="text-3xl font-bold text-info">456</p>
                        <p className="text-sm text-base-content/70">+3% from last month</p>
                    </div>
                </div>

                <div className="card bg-base-200 shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title text-lg">Conversion Rate</h2>
                        <p className="text-3xl font-bold text-warning">12.5%</p>
                        <p className="text-sm text-base-content/70">+2% from last month</p>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title mb-4">Recent Activity</h2>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <div className="avatar placeholder">
                                <div className="bg-primary text-primary-content rounded-full w-10">
                                    <span className="text-sm">U</span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="font-medium">New user registered</p>
                                <p className="text-sm text-base-content/70">john@example.com joined 2 minutes ago</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="avatar placeholder">
                                <div className="bg-success text-success-content rounded-full w-10">
                                    <span className="text-sm">$</span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="font-medium">Payment received</p>
                                <p className="text-sm text-base-content/70">$29.99 from jane@example.com</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="avatar placeholder">
                                <div className="bg-info text-info-content rounded-full w-10">
                                    <span className="text-sm">!</span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="font-medium">Subscription upgraded</p>
                                <p className="text-sm text-base-content/70">mike@example.com upgraded to Pro plan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
import React, { useState } from 'react';

const UseState8 = () => {
    const [activeTab, setActiveTab] = useState('home');

    return (
        <div className="min-h-screen bg-gray-100 p-6 font-sans">
            <div className="flex space-x-4 mb-6">
                {['home', 'reports', 'users'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded capitalize ${activeTab === tab
                            ? 'bg-blue-600 text-white'
                            : 'bg-white text-gray-800 border'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="bg-white p-6 rounded shadow-md">
                {activeTab === 'home' && (
                    <div>
                        <h2 className="text-xl font-bold mb-4">🏠 Dashboard Overview</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-blue-100 p-4 rounded shadow">📈 Total Sales: $5,000</div>
                            <div className="bg-green-100 p-4 rounded shadow">🧑 New Users: 123</div>
                            <div className="bg-yellow-100 p-4 rounded shadow">💬 Messages: 45</div>
                            <div className="bg-pink-100 p-4 rounded shadow">📦 Orders: 89</div>
                        </div>
                    </div>
                )}

                {activeTab === 'reports' && (
                    <div>
                        <h2 className="text-xl font-bold mb-4">📊 Reports Section</h2>
                        <p className="mb-2">Here you can see monthly performance reports.</p>
                        <ul className="list-disc pl-5 text-gray-700">
                            <li>January: $2000</li>
                            <li>February: $2500</li>
                            <li>March: $3000</li>
                        </ul>
                    </div>
                )}

                {activeTab === 'users' && (
                    <div>
                        <h2 className="text-xl font-bold mb-4">👥 Users Management</h2>
                        <table className="w-full border">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="p-2 text-left">Name</th>
                                    <th className="p-2 text-left">Role</th>
                                    <th className="p-2 text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="p-2">Ali Hassan</td>
                                    <td className="p-2">Admin</td>
                                    <td className="p-2 text-green-600">Active</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-2">Amina Ahmed</td>
                                    <td className="p-2">Editor</td>
                                    <td className="p-2 text-yellow-600">Pending</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="p-2">Yusuf Omar</td>
                                    <td className="p-2">Viewer</td>
                                    <td className="p-2 text-red-600">Blocked</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UseState8;

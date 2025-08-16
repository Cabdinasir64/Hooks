import React, { useState, useEffect, useMemo } from "react";

export default function UseMemo5() {
    const [transactions, setTransactions] = useState([]);
    const [type, setType] = useState("all");
    const [minAmount, setMinAmount] = useState("");
    const [maxAmount, setMaxAmount] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(() => {
        const fakeData = [
            { id: 1, date: "2025-08-01", type: "deposit", amount: 200 },
            { id: 2, date: "2025-08-03", type: "withdrawal", amount: 50 },
            { id: 3, date: "2025-08-04", type: "deposit", amount: 500 },
            { id: 4, date: "2025-08-05", type: "withdrawal", amount: 100 },
            { id: 5, date: "2025-08-06", type: "deposit", amount: 300 },
        ];
        setTransactions(fakeData);
    }, []);

    const filteredTransactions = useMemo(() => {
        return transactions.filter((t) => {
            const amountOk =
                (!minAmount || t.amount >= parseFloat(minAmount)) &&
                (!maxAmount || t.amount <= parseFloat(maxAmount));

            const typeOk = type === "all" || t.type === type;

            const dateOk =
                (!startDate || new Date(t.date) >= new Date(startDate)) &&
                (!endDate || new Date(t.date) <= new Date(endDate));

            return amountOk && typeOk && dateOk;
        });
    }, [transactions, type, minAmount, maxAmount, startDate, endDate]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-10 flex flex-col items-center">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-8">
                💳 Transaction Filtering
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 w-full max-w-5xl">
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="border rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
                >
                    <option value="all">All Types</option>
                    <option value="deposit">Deposit</option>
                    <option value="withdrawal">Withdrawal</option>
                </select>

                <input
                    type="number"
                    placeholder="Min Amount"
                    value={minAmount}
                    onChange={(e) => setMinAmount(e.target.value)}
                    className="border rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
                />

                <input
                    type="number"
                    placeholder="Max Amount"
                    value={maxAmount}
                    onChange={(e) => setMaxAmount(e.target.value)}
                    className="border rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
                />

                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="border rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
                />

                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="border rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
                />
            </div>

            <div className="w-full max-w-5xl bg-white rounded-2xl shadow p-6">
                {filteredTransactions.length > 0 ? (
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b">
                                <th className="p-3">Date</th>
                                <th className="p-3">Type</th>
                                <th className="p-3">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTransactions.map((t) => (
                                <tr key={t.id} className="border-b hover:bg-gray-50">
                                    <td className="p-3">{t.date}</td>
                                    <td className="p-3 capitalize">{t.type}</td>
                                    <td className="p-3 font-semibold">${t.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-gray-500 text-center">No transactions found</p>
                )}
            </div>
        </div>
    );
}

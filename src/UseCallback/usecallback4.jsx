import React, { useState, useCallback } from 'react';

const initialUsers = [
    { id: 1, name: 'Abdinasir' },
    { id: 2, name: 'Ahmed' },
    { id: 3, name: 'Fatima' },
    { id: 4, name: 'Hassan' },
    { id: 5, name: 'Layla' },
];

export default function UserFilter() {
    const [users, setUsers] = useState(initialUsers);
    const [query, setQuery] = useState('');

  
    const handleFilter = useCallback(() => {
        if (!query.trim()) return setUsers(initialUsers);
        const filtered = initialUsers.filter(user =>
            user.name.toLowerCase().includes(query.toLowerCase())
        );
        setUsers(filtered);
    }, [query]);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">User Filter Example</h1>

            <div className="flex space-x-2 mb-4">
                <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search user..."
                    className="px-4 py-2 border rounded"
                />
                <button
                    onClick={handleFilter}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Filter
                </button>
            </div>

            <ul className="space-y-2">
                {users.map(user => (
                    <li key={user.id} className="border-b pb-1">
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

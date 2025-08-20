import React from "react";
import { FixedSizeList as List } from "react-window";
import { motion } from "framer-motion";


const users = Array.from({ length: 1000 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
}));

const UserRow = ({ index, style }) => {
    const user = users[index];

    return (
        <motion.div
            style={style}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.01 }}
            className="flex justify-between px-6 py-4 border-b items-center bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-blue-50 transition-all"
        >
            <div>
                <p className="font-bold text-blue-700 text-lg">{user.name}</p>
                <p className="text-gray-500">{user.email}</p>
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
                Message
            </button>
        </motion.div>
    );
};

export default function Virtualized1() {
    return (
        <div className="h-screen w-full bg-gray-100">
            <h1 className="text-3xl font-bold p-6 text-gray-800">Virtualized Users List</h1>

            <List
                height={600} 
                itemCount={users.length}
                itemSize={90}
                width={"100%"}
            >
                {UserRow}
            </List>
        </div>
    );
}

import React, { useState } from "react";

const users = [
    "Amina Maxamed",
    "Khadar Cabdi",
    "Fartuun Xasan",
    "Yusuf Ali",
    "Nimco Barre",
    "Sahra Jama",
    "Abdi Nuur",
    "Hodan Ali",
    "Mohamed Saleban",
    "Farah Warsame",
    "Ismail Xasan",
    "Hassan Guled",
];

const UseState21 = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(3);

    const totalPages = Math.ceil(users.length / perPage);

    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const currentUsers = users.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handlePerPageChange = (e) => {
        setPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-center">Users List</h2>

            {/* Per page selector */}
            <div className="mb-4 flex items-center justify-center gap-3">
                <label htmlFor="perPage" className="font-medium">
                    Users per page:
                </label>
                <select
                    id="perPage"
                    value={perPage}
                    onChange={handlePerPageChange}
                    className="border border-gray-300 rounded px-2 py-1"
                >
                    {[1, 3, 6, 9].map((num) => (
                        <option key={num} value={num}>
                            {num}
                        </option>
                    ))}
                </select>
            </div>

            {/* Users list */}
            <ul className="mb-6 space-y-2">
                {currentUsers.map((user, index) => (
                    <li
                        key={index}
                        className="p-3 bg-blue-100 rounded text-center font-medium"
                    >
                        {user}
                    </li>
                ))}
            </ul>

            {/* Pagination buttons */}
            <div className="flex justify-center items-center gap-2">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded ${currentPage === 1
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                >
                    Previous
                </button>

                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        className={`px-3 py-1 rounded text-sm font-medium ${currentPage === i + 1
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 hover:bg-gray-300"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded ${currentPage === totalPages
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default UseState21;

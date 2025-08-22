import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const feedbacks = [
    { name: 'Amina', feedback: 'Aad baan ugu qanacsanahay.', image: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { name: 'Khadar', feedback: 'Wanaagsan!', image: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { name: 'Fartuun', feedback: 'Degdeg & wanaagsan!', image: 'https://randomuser.me/api/portraits/women/3.jpg' },
    { name: 'Yusuf', feedback: 'Waad mahadsan tihiin.', image: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { name: 'Nimco', feedback: 'Si sahlan u fahmay.', image: 'https://randomuser.me/api/portraits/women/5.jpg' },
    { name: 'Abdi', feedback: 'Xiriirkoodu waa wanaagsan yahay.', image: 'https://randomuser.me/api/portraits/men/6.jpg' },
    { name: 'Sahra', feedback: 'Aad baan ugu faraxsanahay.', image: 'https://randomuser.me/api/portraits/women/7.jpg' },
    { name: 'Mohamed', feedback: '5 stars!', image: 'https://randomuser.me/api/portraits/men/8.jpg' },
    { name: 'Hodan', feedback: 'Si qurux badan.', image: 'https://randomuser.me/api/portraits/women/9.jpg' },
];

const ITEMS_PER_PAGE = 3;

const UseState20 = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(feedbacks.length / ITEMS_PER_PAGE);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentFeedbacks = feedbacks.slice(startIndex, endIndex);

    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Fikradaha Macaamiisha</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                {currentFeedbacks.map((user, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                        <img
                            src={user.image}
                            alt={user.name}
                            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-200"
                        />
                        <h3 className="font-semibold text-lg text-gray-800">{user.name}</h3>
                        <p className="text-gray-600 text-sm mt-2">{user.feedback}</p>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-2">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                >
                    <FaArrowLeft />
                </button>

                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${currentPage === i + 1
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default UseState20;

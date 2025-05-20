import React, { useState, useEffect, useRef } from "react";

// Su'aalaha
const allQuestions = [
    {
        question: "Waa maxay caasimadda Soomaaliya?",
        options: ["Kismaayo", "Hargeisa", "Mogadishu", "Garoowe"],
        answer: "Mogadishu",
    },
    {
        question: "Xagee buu ka baxay webiga Nile?",
        options: ["Ethiopia", "Sudan", "Egypt", "Uganda"],
        answer: "Uganda",
    },
    {
        question: "Waa tee xiddigta ugu dhalaalka badan cirka?",
        options: ["Venus", "Sun", "Sirius", "Moon"],
        answer: "Sirius",
    },
    {
        question: "Dhulka waxa uu ku wareegaa qoraxda muddo intee le'eg?",
        options: ["30 Maalmood", "1 Sano", "6 Bilood", "12 Maalmood"],
        answer: "1 Sano",
    },
];

// Random array helper
function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

const UseState26 = () => {
    const [questions, setQuestions] = useState([]);
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [selected, setSelected] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const [timeLeft, setTimeLeft] = useState(20);
    const [shuffledOptions, setShuffledOptions] = useState([]);

    const timerRef = useRef(null);

    // Initialize quiz
    useEffect(() => {
        const shuffled = shuffleArray(allQuestions);
        setQuestions(shuffled);
    }, []);

    // Load new question options when current changes
    useEffect(() => {
        if (questions.length > 0) {
            const currentQ = questions[current];
            setShuffledOptions(shuffleArray(currentQ.options));
            setTimeLeft(20);
            setSelected(null);
            setIsCorrect(false);

            clearInterval(timerRef.current);
            timerRef.current = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(timerRef.current);
    }, [current, questions]);

    // Time up handler
    useEffect(() => {
        if (timeLeft === 0 && !selected && questions.length > 0) {
            setSelected("timeout");
            setIsCorrect(false);
            // Go to next after 2 sec
            setTimeout(() => {
                goToNextQuestion();
            }, 2000);
        }
    }, [timeLeft, selected]);

    const handleAnswer = (option) => {
        if (selected) return;
        clearInterval(timerRef.current);

        const correct = questions[current].answer;
        const correctAnswer = option === correct;

        setSelected(option);
        setIsCorrect(correctAnswer);
        if (correctAnswer) setScore((prev) => prev + 1);
    };

    const goToNextQuestion = () => {
        const next = current + 1;
        if (next < questions.length) {
            setCurrent(next);
        } else {
            setIsFinished(true);
        }
    };

    const resetQuiz = () => {
        setQuestions(shuffleArray(allQuestions));
        setCurrent(0);
        setScore(0);
        setSelected(null);
        setIsCorrect(false);
        setIsFinished(false);
        setTimeLeft(10);
    };

    const getButtonStyle = (option) => {
        const correct = questions[current].answer;

        if (!selected) return "bg-blue-500 hover:bg-blue-600 text-white";
        if (option === correct) return "bg-green-500 text-white";
        if (option === selected) return "bg-red-500 text-white";
        return "bg-gray-200 text-gray-700";
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded shadow-md mt-10 text-center space-y-6">
            <h2 className="text-2xl font-bold">🧠 Su'aalaha Quiz Game</h2>

            {!isFinished && questions.length > 0 ? (
                <div>
                    <h3 className="text-lg font-medium mb-4">
                        {questions[current].question}
                    </h3>

                    <p className="text-sm text-gray-600 mb-3">⏰ Waqtiga: {timeLeft}s</p>

                    <div className="grid grid-cols-1 gap-3 mb-4">
                        {shuffledOptions.map((option, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleAnswer(option)}
                                className={`px-4 py-2 rounded transition font-medium ${getButtonStyle(
                                    option
                                )} ${selected ? "cursor-not-allowed" : ""}`}
                                disabled={!!selected}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    {selected && (
                        <>
                            {selected === "timeout" && (
                                <p className="text-sm text-red-600">
                                    ❌ Waqtigii wuu dhamaaday! Jawaabta saxda ah:{" "}
                                    <strong>{questions[current].answer}</strong>
                                </p>
                            )}
                            {selected !== "timeout" && !isCorrect && (
                                <p className="text-sm text-gray-500 mb-2">
                                    ❌ Jawaabta saxda ah waa:{" "}
                                    <strong>{questions[current].answer}</strong>
                                </p>
                            )}
                            <button
                                onClick={goToNextQuestion}
                                className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                            >
                                ➡️ Next Su'aal
                            </button>
                        </>
                    )}

                    <p className="mt-4 text-gray-500">
                        Su'aal {current + 1} / {questions.length}
                    </p>
                </div>
            ) : (
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-green-600">✔️ Quiz Dhamaaday!</h3>
                    <p className="text-lg">
                        Waxaad heshay{" "}
                        <span className="font-bold text-blue-600">
                            {score} / {questions.length}
                        </span>
                    </p>
                    <button
                        onClick={resetQuiz}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
                    >
                        Dib u bilaaw Quiz-ka
                    </button>
                </div>
            )}
        </div>
    );
};

export default UseState26;

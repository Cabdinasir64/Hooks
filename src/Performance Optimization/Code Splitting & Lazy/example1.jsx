import React, { Suspense } from "react";

const About = React.lazy(() => import('./example2'));

function Skeleton() {
    return (
        <div className="mt-6 p-4 border rounded bg-gray-200 animate-pulse">
            <h2 className="text-2xl font-bold bg-gray-300 h-6 w-1/3 mb-2"></h2>
            <p className="bg-gray-300 h-4 w-full"></p>
            <p className="bg-gray-300 h-4 w-5/6 mt-1"></p>
        </div>
    );
}

export default function Example1() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">React Lazy + Code Splitting</h1>

            <Suspense fallback={<Skeleton />}>
                <About />
            </Suspense>
        </div>
    );
}

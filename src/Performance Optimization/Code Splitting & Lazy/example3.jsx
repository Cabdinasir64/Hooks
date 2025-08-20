import React, { Suspense } from "react";

const Navbar = React.lazy(() => import("./example4"));
const HeroSection = React.lazy(() => import("./example5"));
const Feature = React.lazy(() => import("./example6"));
const Service = React.lazy(() => import("./example7"));
const Testimonial = React.lazy(() => import("./example8"));
const Footer = React.lazy(() => import("./example9"));

const NavbarSkeleton = () => (
    <div className="animate-pulse bg-gray-300 h-16 w-full flex items-center px-8"></div>
);

const SkeletonHero = () => (
    <div className="bg-purple-200 animate-pulse py-32 flex flex-col items-center text-center">
        <div className="h-12 w-3/4 mb-4 bg-purple-300 rounded"></div>
        <div className="h-6 w-2/3 mb-8 bg-purple-300 rounded"></div>
        <div className="h-12 w-40 bg-purple-400 rounded"></div>
    </div>
);


const FeatureSkeleton = () => (
    <div className="animate-pulse grid md:grid-cols-3 gap-6 px-8 py-12">
        {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-300 h-48 rounded-xl"></div>
        ))}
    </div>
);

const ServiceSkeleton = () => (
    <div className="animate-pulse grid md:grid-cols-3 gap-6 px-8 py-12 bg-purple-50">
        {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-300 h-48 rounded-xl"></div>
        ))}
    </div>
);

const TestimonialSkeleton = () => (
    <div className="animate-pulse grid md:grid-cols-3 gap-6 px-8 py-12">
        {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-300 h-40 rounded-xl"></div>
        ))}
    </div>
);

const FooterSkeleton = () => (
    <div className="animate-pulse bg-gray-300 h-24 w-full flex items-center justify-center px-8"></div>
);

export default function Home() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Suspense fallback={<NavbarSkeleton />}>
                <Navbar />
            </Suspense>

            <Suspense fallback={<SkeletonHero />}>
                <HeroSection />
            </Suspense>

            <Suspense fallback={<FeatureSkeleton />}>
                <Feature />
            </Suspense>

            <Suspense fallback={<ServiceSkeleton />}>
                <Service />
            </Suspense>

            <Suspense fallback={<TestimonialSkeleton />}>
                <Testimonial />
            </Suspense>

            <Suspense fallback={<FooterSkeleton />}>
                <Footer />
            </Suspense>
        </div>
    );
}

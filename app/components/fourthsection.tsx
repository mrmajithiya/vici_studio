import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const CapturingStories: React.FC = () => {
    return (
        <section className="bg-black text-white py-10 px-4 sm:px-6 md:px-16">
            {/* Top Quote */}
            <hr className="w-full md:w-1/2 border-gray-500 mb-4 md:mb-0" />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-8 md:mb-16">
                <p className="text-xs tracking-wider text-gray-400 uppercase mt-5">
                    Vici PHOTO STUDIO -
                </p>
                <p className="text-right text-gray-400 md:w-1/2 mt-4 md:mt-0 leading-relaxed text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    <span className="text-white font-medium">"Vici Studio</span> believes every frame tells a story. We blend,{" "}
                    <span className="text-white font-medium">artistry, emotion, and precision{" "}</span>to capture lasting moments.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5 items-start">
                {/* Left Side - Title + Images */}
                <div>
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold leading-tight mb-8 md:mb-10 tracking-widest" style={{ marginTop: "-30px" }}>
                        CAPTURING <br /> STORIES
                    </h2>
                </div>

                {/* Right Side - Text Content */}
                <div className="space-y-12 md:space-y-16 md:pl-60 pt-8 md:pt-20" >
                    <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2 mb-2">
                            ONE FRAME AT A TIME
                        </h3>
                        <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
                            From candid expressions to cinematic compositions, let's create something unforgettable—one frame at a time.
                        </p>
                    </div>
                </div>
            </div>
            {/* Large bottom boxes */}
            {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-25/15 bg-white rounded-xl"></div>
                <div className="aspect-25/15 bg-white rounded-xl"></div>
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-8 md:mt-0">

                {/* Card 01 */}
                <div className="flex flex-col gap-3 group cursor-pointer">
                    <div className="bg-neutral-800 rounded-xl aspect-4/5 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                        <img
                            src="/pexels-somyadinkar.jpg"
                            alt="Studio 9"
                            className="w-full h-full object-cover rounded-xl border border-gray-700"
                        />
                    </div>
                    <div>
                        <p className="text-lg sm:text-xl text-gray-400 mb-1">01</p>
                        <h4 className="text-sm sm:text-base md:text-2xl font-medium">
                            EDITORIAL FASHION
                        </h4>
                    </div>
                </div>

                {/* Card 02 */}
                <div className="flex flex-col gap-3 group cursor-pointer">
                    <div className="bg-neutral-800 rounded-xl aspect-4/5 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                        <img
                            src="/Municipal_Corporation.jpg"
                            alt="Studio 9"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                    <div>
                        <p className="text-lg sm:text-xl text-gray-400 mb-1">02</p>
                        <h4 className="text-sm sm:text-base md:text-2xl font-medium">
                            EDITORIAL FASHION
                        </h4>
                    </div>
                </div>

                <div className="relative flex flex-col gap-3">
                    {/* Card Box */}
                    <div className="relative bg-transparent rounded-xl aspect-4/5 p-4 sm:p-6 ">
                        {/* Top Left Text */}
                        <div className="absolute top-4 left-4">
                            <p className="text-base sm:text-xl font-light text-gray-300">vici.studio</p>
                            <p className="text-lg sm:text-2xl font-semibold text-white leading-tight">
                                OUR LATEST PROJECTS
                            </p>
                        </div>

                        {/* Top Right Arrow */}
                        <div className="absolute bottom-0 right-1">
                            <ArrowDownRight className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
                        </div>
                    </div>
                </div>

                {/* Card 03 */}
                <div className="flex flex-col gap-3 group cursor-pointer">
                    <div className="bg-neutral-800 rounded-xl aspect-4/5 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                        <img
                            src="/artstudio.jpg"
                            alt="Studio 9"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                    <div>
                        <p className="text-lg sm:text-xl text-gray-400 mb-1">03</p>
                        <h4 className="text-sm sm:text-base md:text-2xl font-medium">
                            FINE ART STUDIO POTRAITS
                        </h4>
                    </div>
                </div>

                {/* Card 04 */}
                <div className="flex flex-col gap-3 group cursor-pointer">
                    <div className="bg-neutral-800 rounded-xl aspect-4/5 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                        <img
                            src="/lifestyle.jpg"
                            alt="Studio 9"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                    <div>
                        <p className="text-lg sm:text-xl text-gray-400 mb-1">04</p>
                        <h4 className="text-sm sm:text-base md:text-2xl font-medium">
                            PERSONAL PHOTOGRAPHY
                        </h4>
                    </div>
                </div>

                <div className="relative flex flex-col gap-3">
                    {/* Card Box */}
                    <div className="relative bg-transparent rounded-xl aspect-4/5 p-4 sm:p-6 ">
                        {/* Top Left Text */}
                        <div className="absolute top-4 left-4">
                            <p className="text-base sm:text-xl font-light text-gray-300">vici.studio</p>
                            <p className="text-lg sm:text-2xl font-semibold text-white leading-tight">
                                OUR LATEST PROJECTS
                            </p>
                        </div>

                        {/* Top Right Arrow */}
                        <div className="absolute bottom-0 right-1">
                            <ArrowDownRight className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
                        </div>
                    </div>
                </div>

                {/* Card 05 */}
                <div className="flex flex-col gap-3 group cursor-pointer">
                    <div className="bg-neutral-800 rounded-xl aspect-4/5 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                        <img
                            src="/shoes-blackbg2.jpg"
                            alt="Studio 9"
                            className="w-full h-full object-cover rounded-xl border border-gray-700"
                        />
                    </div>
                    <div>
                        <p className="text-lg sm:text-xl text-gray-400 mb-1">05</p>
                        <h4 className="text-sm sm:text-base md:text-2xl font-medium">
                            LIFESTYLE PRODUCT
                        </h4>
                    </div>
                </div>

                {/* Card 06 */}
                <div className="flex flex-col gap-3 group cursor-pointer">
                    <div className="bg-neutral-800 rounded-xl aspect-4/5 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                        <img
                            src="/prehasmukh.jpg"
                            alt="Studio 9"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                    <div>
                        <p className="text-lg sm:text-xl text-gray-400 mb-1">06</p>
                        <h4 className="text-sm sm:text-base md:text-2xl font-medium">
                            PREWEDDING PHOTOGRAPHY
                        </h4>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CapturingStories;
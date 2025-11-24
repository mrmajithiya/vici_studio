import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const Letswork: React.FC = () => {
    return (
        <section className="bg-black text-white py-10 px-4 sm:px-6 md:px-16">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-3">
                <div className="w-full lg:w-150 h-auto lg:h-150 bg-neutral-200 rounded-xl aspect-auto lg:aspect-4/5 p-4 md:p-0">
                    <div className="w-full md:w-70 h-60 md:h-90 bg-neutral-500 mt-4 md:mt-5 ml-0 md:ml-10 rounded-xl aspect-auto"></div>
                    <div className="flex flex-col md:flex-row p-4 md:p-5">
                        <div className="flex-1">
                            <p className="text-2xl md:text-4xl text-black mt-4 md:ml-5">Bhadarka Group </p>
                            <p className="text-base md:text-xl text-black leading-tight mt-2 md:w-1/2 md:ml-5">
                                As a business owner, We thrilled with the stunning showcase Vici Studio created for my events.
                            </p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <div className="w-16 md:w-20 h-20 md:h-25 bg-neutral-500 mt-4 md:mt-10 mr-0 md:mr-5 rounded-xl aspect-auto"></div>
                        </div>
                    </div>
                </div>
                <div className="relative h-auto bg-black flex justify-center lg:block">
                    {/* Other content */}
                    <div className="relative lg:absolute bottom-1 left-0 lg:left-80 transform lg:-translate-x-1/2 w-40 md:w-50 h-40 md:h-50 rounded-full border-2 border-white aspect-auto flex items-center justify-center hover:bg-gray-200 hover:text-black cursor-pointer">
                        <span className="text-sm md:text-lg font-medium underline underline-offset-4 decoration-2">Testimonials</span>
                        <ArrowUpRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                    </div>
                </div>
            </div>

            {/* <div>
                <span>vici studio</span>
            </div> */}
            <div className="relative h-20 md:h-50 bg-black text-white overflow-hidden">
                {/* ✅ Background text */}
                <div className="absolute -bottom-15 md:-bottom-25 inset-0 flex justify-center items-center text-white/20 text-6xl md:text-[10rem] font-extrabold tracking-tight select-none pointer-events-none">
                    <span className="text-6xl md:text-[15rem] font-extrabold tracking-tight">vici studio</span>
                </div>
            </div>

            <div className="min-h-screen bg-black text-white flex flex-col justify-between px-4 sm:px-6 md:px-10 py-8 md:py-10 font-sans">
                {/* Top Section */}
                <div className="space-y-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-6 md:gap-0">
                        <h1 className="text-3xl md:text-5xl font-semibold">LET'S WORK</h1>
                        <button className="bg-white text-black text-sm px-4 py-2 rounded-full hover:bg-gray-200 w-full md:w-auto">
                            Book a Session
                        </button>
                        <div className="flex flex-col items-start space-y-4 md:space-y-6 max-w-xs">
                            <p className="text-lg md:text-xl text-gray-300">hello@sansbrothers.com</p>
                            <p className="text-xs md:text-sm text-gray-400">
                                Ready to elevate your creativity? Book a session at Vici Studio today!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 md:gap-0">
                    {/* Left Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-20 text-sm mt-8 md:mt-10 w-full lg:w-auto">
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <p className="hover:underline cursor-pointer text-lg md:text-xl">ABOUT US</p>
                                <ArrowUpRight className="inline-block ml-1 w-4 h-4 md:w-5 md:h-5"></ArrowUpRight>
                            </div>
                            <div className="flex justify-between">
                                <p className="hover:underline cursor-pointer text-lg md:text-xl">PACKAGE</p>
                                <ArrowUpRight className="inline-block ml-1 w-4 h-4 md:w-5 md:h-5"></ArrowUpRight>
                            </div>
                            <div className="flex justify-between">
                                <p className="hover:underline cursor-pointer text-lg md:text-xl">PROJECT</p>
                                <ArrowUpRight className="inline-block ml-1 w-4 h-4 md:w-5 md:h-5"></ArrowUpRight>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <p className="hover:underline cursor-pointer text-lg md:text-xl">TESTIMONIAL</p>
                                <ArrowUpRight className="inline-block ml-1 w-4 h-4 md:w-5 md:h-5" />
                            </div>
                            <div className="flex justify-between">
                                <p className="hover:underline cursor-pointer text-lg md:text-xl">BLOG</p>
                                <ArrowUpRight className="inline-block ml-1 w-4 h-4 md:w-5 md:h-5" />
                            </div>
                            <div className="flex justify-between">
                                <p className="hover:underline cursor-pointer text-lg md:text-xl">CONSULTATION</p>
                                <ArrowUpRight className="inline-block ml-1 w-4 h-4 md:w-5 md:h-5" />
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col items-start space-y-6 max-w-xs mr-0 lg:mr-25 w-full lg:w-auto">
                        <div className="flex gap-4 mt-6 md:mt-10 w-full justify-center lg:justify-start">
                            <div className="w-20 md:w-50 h-32 md:h-55 bg-gray-300 rounded-sm">
                                <img
                                    src="/rose-9939147.jpg"
                                    alt="Studio 9"
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                            <div className="w-20 md:w-50 h-32 md:h-55 bg-gray-700 rounded-sm">
                                <img
                                    src="/eastern.jpg"
                                    alt="Studio 9"
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-0 text-xs text-gray-400 mt-12 md:mt-16 border-t border-gray-800 pt-6 md:pt-8">
                    <div>
                        <p className="text-sm">Phone</p>
                        <p className="text-white text-base md:text-lg">+62 778 9901 2345</p>
                    </div>

                    <div>
                        <p className="text-sm">Office</p>
                        <p className="text-white text-base md:text-lg">Thatej, Ahmedabad</p>
                    </div>

                    <div>
                        <p className="text-sm">Stand By</p>
                        <p className="text-white text-base md:text-lg">Monday – Friday 09.00 – 17.00</p>
                    </div>

                    <div>
                        <p className="text-sm">Instagram</p>
                        <p className="text-white text-base md:text-lg">@hellosansbrothers</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Letswork;
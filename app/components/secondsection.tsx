import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const WhyChooseVici: React.FC = () => {
    return (
        <section className="bg-black text-white py-10 px-4 sm:px-6 md:px-16">
            {/* Top Quote */}
            <hr className="w-full md:w-1/2 border-gray-500 mb-4 md:mb-0" />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-8 md:mb-16">
                <p className="text-xs tracking-wider text-gray-400 uppercase mt-5">
                    Vici PHOTO STUDIO -
                </p>
                <p className="text-right text-gray-400 md:w-1/2 mt-4 md:mt-0 leading-relaxed text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    <span className="text-white font-medium">"Vici Studio</span> provides
                    unique cultural photography. From pre-weddings to portraits,{" "}
                    <span className="text-white font-medium">
                        we capture your memories."
                    </span>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5 items-start">
                {/* Left Side - Title + Images */}
                <div>
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold leading-tight mb-8 md:mb-10 tracking-widest" style={{ marginTop: "-40px" }}>
                        WHY <br /> CHOOSE <br /> VICI?
                    </h2>

                    {/* Small image grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 w-full mb-5">
                        {/* Left large box */}
                        <div className="w-full max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] h-[200px] sm:h-[250px] md:h-[350px] lg:h-[400px] xl:h-[450px] bg-neutral-800 rounded-xl mx-auto md:mx-0">
                            <img
                                src="/traditional-4367791.jpg"
                                alt="Studio 9"
                                className="w-full h-full object-cover rounded-xl border border-white"
                            />
                        </div>

                        {/* Right two stacked boxes */}
                        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 items-center md:items-start justify-center">
                            <div className="w-full max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] bg-neutral-700 rounded-xl">
                                <img
                                    src="/corporate-event.jpg"
                                    alt="Studio 9"
                                    className="w-full h-full object-cover rounded-xl border border-white"
                                />
                            </div>
                            <div className="w-full max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] h-[180px] sm:h-[200px] md:h-[280px] lg:h-80 bg-neutral-700 rounded-xl">
                                <img
                                    src="/pe-samarth.jpg"
                                    alt="Studio 9"
                                    className="w-full h-full object-cover rounded-xl border border-white"
                                />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Side - Text Content */}
                <div className="space-y-12 md:space-y-16 md:pl-60">
                    {/* Point 1 */}
                    <div>
                        <div className="flex justify-end items-end md:hidden ">
                            <ArrowUpRight className="text-white w-8 h-8 sm:w-10 sm:h-10 md:w-15 md:h-15 " />
                        </div>
                        <div className="flex justify-end items-end ">
                            <ArrowUpRight className="text-white w-8 h-8 sm:w-10 sm:h-10 md:w-15 md:h-15 hidden md:block cursor-pointer" />
                        </div>
                        <div className="flex justify-between items-start">
                            <p className="text-gray-400 text-xl sm:text-2xl">01</p>

                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2 mb-2 cursor-pointer">
                            INCLUSIVE COLLABORATION
                        </h3>
                        <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
                            Unused photography, we explore diverse creative, industry underpinnings teams.
                        </p>
                    </div>

                    {/* Point 2 */}
                    <div>
                        <div className="flex justify-between items-start">
                            <p className="text-gray-400 text-xl sm:text-2xl">02</p>
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2 mb-2 cursor-pointer">
                            UNIQUE & CINEMATIC CONCEPT
                        </h3>
                        <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
                            Deep textures array artists with unusual views & accessories.
                        </p>
                        <div className="flex justify-end items-end cursor-pointer">
                            <ArrowDownRight className="text-white w-8 h-8 sm:w-10 sm:h-10 md:w-15 md:h-15" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Large bottom boxes */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-5">
                <div className="aspect-video md:aspect-25/15 bg-white rounded-xl">
                    <img
                        src="/bride-7324805.jpg"
                        alt="Studio 9"
                        className="w-full h-full object-cover rounded-xl border border-white"
                    />
                </div>
                <div className="aspect-video md:aspect-25/15 bg-white rounded-xl">
                    <img
                        src="/amodita-fram.jpg"
                        alt="Studio 9"
                        className="w-full h-full object-cover rounded-xl border border-white"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseVici;
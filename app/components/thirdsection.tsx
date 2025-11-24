"use client";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function OurService() {
  return (
    <section className="bg-white text-black px-6 md:px-16 py-16 w-full">
      {/* Title */}
      <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tight">
        OUR SERVICE
      </h2>

      <div className="flex flex-col gap-6">
        {/* Item 01 */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-4">
          <div className="flex items-center gap-3 cursor-pointer">
            <span className="text-sm font-medium text-gray-400">01</span>
            <div className="w-6 h-6 bg-gray-200 rounded-md ml-10 overflow-hidden">
              <img
                        src="/traditional-4367791.jpg"
                        alt="Studio 9"
                        className="w-full h-full scale-200 rounded-xl"
                    />
            </div>
            <span className="text-lg md:text-3xl font-medium">
              WEDDING PHOTOGRAPHY
            </span>
          </div>
          <ArrowDownRight className="w-15 h-15 cursor-pointer" />
        </div>


        <div className="relative bg-gray-100 rounded-2xl pt-20 sm:pt-30 pb-20 sm:pb-30 pl-6 pr-6 sm:pl-10 sm:pr-10 overflow-hidden flex items-start">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-100">
            <div className="absolute -top-2 left-20 sm:left-88 w-24 sm:w-48 h-12 sm:h-25 bg-gray-200 rounded-xl">
                <img
                        src="/331A9837.JPG"
                        alt="Studio 9"
                        className="w-full h-full object-cover rounded-xl border border-white"
                    />
            </div>
            <div className="absolute top-12 sm:top-23 left-32 sm:left-136 w-28 sm:w-55 h-28 sm:h-55 bg-gray-200 rounded-xl">
                <img
                        src="/331A9687.jpg"
                        alt="Studio 9"
                        className="w-full h-full object-cover rounded-xl border border-white"
                    />
            </div>
            <div className="absolute bottom-6 sm:bottom-12 right-8 sm:right-29 w-20 sm:w-40 h-18 sm:h-35 bg-gray-200 rounded-xl">
                <img
                        src="/331A9663.jpg"
                        alt="Studio 2"
                        className="w-full h-full object-cover rounded-xl border border-white"
                    />
            </div>
            <div className="absolute top-15 sm:top-30 -right-2 w-15 sm:w-30 h-18 sm:h-35 bg-gray-200 rounded-xl">
                <img
                        src="/331A9888.JPG"
                        alt="Studio 9"
                        className="w-full h-full object-cover rounded-xl border border-white"
                    />
            </div>
          </div>

          {/* Text content */}
          <div className="relative z-10 cursor-pointer">
            <p className="text-sm text-gray-700 mb-2">02</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight">
              PRODUCT<br />PHOTOGRAPHY
            </h2>
          </div>

          {/* Arrow icon */}
          <div className="absolute top-0 right-0 z-10">
            <ArrowUpRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-15 lg:h-15 cursor-pointer" />
          </div>
        </div>

        {/* Item 03 */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-4">
          <div className="flex items-center gap-3 cursor-pointer">
            <span className="text-sm font-medium text-gray-400">03</span>
            <div className="w-6 h-6 bg-gray-200 rounded-md ml-10 overflow-hidden">
              <img
                        src="/amodita-fram.jpg"
                        alt="Studio 9"
                        className="w-full h-full scale-200 rounded-xl"
                    />
            </div>
            <span className="text-lg md:text-3xl font-medium">
              FAMILY & MATERNITY
            </span>
          </div>
          <ArrowDownRight className="w-15 h-15 cursor-pointer" />
        </div>


        {/* Item 04 */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-4">
          <div className="flex items-center gap-3 cursor-pointer">
            <span className="text-sm font-medium text-gray-400">04</span>
            <div className="w-6 h-6 bg-gray-200 rounded-md ml-10 overflow-hidden">
              <img
                        src="/womanphoto.jpg"
                        alt="Studio 9"
                        className="w-full h-full scale-200 rounded-xl"
                    />
            </div>
            <span className="text-lg md:text-3xl font-medium">
              PORTRAIT & MODEL
            </span>
          </div>
          <ArrowDownRight className="w-15 h-15 cursor-pointer" />
        </div>

        {/* Item 05 */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-4">
          <div className="flex items-center gap-3 cursor-pointer">
            <span className="text-sm font-medium text-gray-400">05</span>
            <div className="w-6 h-6 bg-gray-200 rounded-md ml-10 overflow-hidden">
              <img
                        src="/Gemini_Generated.png"
                        alt="Studio 9"
                        className="w-full h-full scale-200 rounded-xl"
                    />
            </div>
            <span className="text-lg md:text-3xl font-medium">
              CULTURAL & TRADITIONAL
            </span>
          </div>
          <ArrowDownRight className="w-15 h-15 cursor-pointer" />
        </div>
      </div>
    </section>
  );
}
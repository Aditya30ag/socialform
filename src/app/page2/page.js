"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import ParticleCanvas from "@/components/ParticleCanvas";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden px-4 py-4">
      <ParticleCanvas />
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-600 via-transparent to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-cyan-400 via-transparent to-transparent animate-pulse"></div>
      </div>
      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50 animate-fade-in">
        <motion.button
          onClick={() => router.push("/page1")}
          className="flex items-center justify-center w-12 h-12 bg-gray-800/80 hover:bg-gray-700 border border-gray-600 rounded-full backdrop-blur-sm transition-all duration-300 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors duration-300" />
        </motion.button>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center border-2 border-white rounded-lg p-2 sm:p-3 max-w-6xl mx-auto">
        {/* Main Logo Section */}
        <div className="relative mb-2 sm:mb-3">
          <div className="relative w-80 h-60 sm:w-96 sm:h-72 lg:w-[500px] lg:h-[375px] xl:w-[600px] xl:h-[450px] flex items-center justify-center overflow-hidden">
            <Image 
              src="/page2.png" 
              alt="Hirecentive Logo" 
              fill
              className="object-contain"
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 600px"
            />
          </div>
        </div>

        {/* Features Text */}
        <div className="text-center max-w-4xl mx-auto space-y-2 sm:space-y-3 mb-2 sm:mb-3">
          <h1 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold leading-tight">
            <span className="text-white font-bold">
              Pay Per Hire Model | Transparent Pricing Model | Verified Candidates 
            </span>
          </h1>
          
          {/* Secondary Image */}
          <div className="relative flex justify-center my-2 sm:my-3">
            <div className="relative w-64 h-24 sm:w-80 sm:h-32 lg:w-[400px] lg:h-[160px] xl:w-[500px] xl:h-[200px] flex items-center justify-center overflow-hidden">
              <Image 
                src="/page2-2.png" 
                alt="Hirecentive Features" 
                fill
                className="object-contain"
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 500px"
              />
            </div>
          </div>
          
          <h3 className="text-sm sm:text-base lg:text-lg text-white font-bold animate-bounce-slow leading-tight">
            | ZERO REGISTRATION COSTS | ZERO UPFRONT COST |
          </h3>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center justify-center mt-2 sm:mt-4 z-10">
          <button 
            className="bg-white text-black px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-md hover:bg-gray-100 transition-colors duration-200 cursor-pointer shadow-lg"
            onClick={() => {router.push("/page3")}}
          >
            Finish Registration!
          </button>   
        </div>
      </div>
    </div>
  );
}

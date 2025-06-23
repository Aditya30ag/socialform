"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import ParticleCanvas from "@/components/ParticleCanvas";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      <ParticleCanvas />
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-600 via-transparent to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-cyan-400 via-transparent to-transparent animate-pulse"></div>
      </div>
      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50 animate-fade-in z-10">
        <motion.button
          onClick={() => router.push("/")}
          className="flex items-center justify-center w-12 h-12 bg-gray-800/80 hover:bg-gray-700 border border-gray-600 rounded-full backdrop-blur-sm transition-all duration-300 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors duration-300" />
        </motion.button>
      </div>
      <div className="relative" >
            
            <div className="relative w-40 h-40 sm:w-40 sm:h-40 flex items-center justify-center overflow-hidden">
              {/* Replace with your actual logo or initial */}
              
              {/* Uncomment and use this for an actual image logo */}
              <Image src="/page1.png" alt="Hirecentive Logo" height={300} width={300}/>
            </div>
          </div>
      <div className="text-center max-w-5xl mx-auto space-y-6 sm:space-y-8 px-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2rem] font-bold duration-300">
          <span className="text-white font-bold">
            Simplify your Hiring Process with Automation!
          </span>
        </h1>
        <h3 className="text-2xl sm:text-lg lg:text-lg text-white font-bold animate-bounce-slow">A Community Driven Platform designed to match your Open Positions with Suitable Candidates
        From Locations Nearby Your Business!</h3>
      </div>
      <div className="flex flex-col items-center justify-center mt-6 z-10 cursor-pointer" style={{zIndex:1000,cursor:"pointer"}} onClick={()=>{router.push("/page2")}}>
        <button className="bg-white text-black px-6 py-3 text-lg rounded-md" style={{zIndex:1000,cursor:"pointer"}}>
          Start Hiring!
        </button>   
      </div>

    </div>
  );
}

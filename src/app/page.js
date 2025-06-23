"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import ParticleCanvas from "@/components/ParticleCanvas";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      <ParticleCanvas />
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-600 via-transparent to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-cyan-400 via-transparent to-transparent animate-pulse"></div>
      </div>
      <div className="fixed top-8 left-8 z-50 animate-fade-in">
      <div className="relative group" >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-black rounded-full border border-slate-800 overflow-hidden group-hover:scale-110 transition-transform duration-300">
              {/* Replace with your actual logo or initial */}
              
              {/* Uncomment and use this for an actual image logo */}
              <Image src="/9e8806_f802bd961b9a4c20995641de0ba09cf0~mv2.png" alt="Hirecentive Logo" height={100} width={100}/>
            </div>
          </div>
          </div>
      <div className="text-center max-w-5xl mx-auto space-y-6 sm:space-y-8 px-4 animate-slide-up">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[6rem] font-bold duration-300">
          <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text animate-gradient-x">
            Hirecentive Social
          </span>
        </h1>
        <h3 className="text-2xl sm:text-xl lg:text-2xl text-white font-bold animate-bounce-slow">Discover Local Talent, Drive Your Business Forward!</h3>
      </div>
      <div className="flex flex-col items-center justify-center mt-6 z-10 cursor-pointer" style={{zIndex:1000,cursor:"pointer"}} onClick={()=>{router.push("/page1")}}>
        <button className="bg-white text-black px-6 py-3 text-lg rounded-md" style={{zIndex:1000,cursor:"pointer"}}>
          Unlock Now!
        </button>
      </div>

    </div>
  );
}

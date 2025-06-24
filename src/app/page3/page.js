"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, ArrowLeft } from "lucide-react";
import ParticleCanvas from "@/components/ParticleCanvas";

export default function Home() {
  const router = useRouter();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phoneNumber: '',
    emailAddress: '',
    designation: '',
    country: 'India'
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.log);
      setIsPlaying(true);
    }
  }, []);

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

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
          onClick={() => router.push("/page2")}
          className="flex items-center justify-center w-12 h-12 bg-gray-800/80 hover:bg-gray-700 border border-gray-600 rounded-full backdrop-blur-sm transition-all duration-300 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors duration-300" />
        </motion.button>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center border-2 border-white rounded-lg p-4 sm:p-6 max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto space-y-6 sm:space-y-8 px-4 animate-slide-up mb-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[4rem] font-bold duration-300">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400 text-transparent bg-clip-text animate-gradient-x">
              Hirecentive Social
            </span>
          </h1>
          <h3 className="text-xl sm:text-xl lg:text-2xl text-white font-bold animate-bounce-slow">
            Influencer Driven Hyperlocal Hiring Platform
          </h3>
        </div>
          
        <hr className="w-full border-gray-600 mb-4" />
        
        {/* YouTube-Style Video Player */}
        <div className="w-full max-w-3xl mb-4">
          <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 border-2 border-purple-500/30 relative bg-gray-900">
            
              
                <motion.div
                  key="video"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full relative"
                  onMouseEnter={() => setShowControls(true)}
                  onMouseLeave={() => setShowControls(false)}
                >
                  <video
                    ref={videoRef}
                    src="/page3.mp4"
                    loop
                    autoPlay
                    className="w-full h-full object-cover"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                  
                  {/* Video Controls Overlay */}
                  
            </motion.div>
        </div>
        </div>
        
        <hr className="w-full border-gray-600 mb-4" />
        
        <p className="text-center text-lg mb-6">Revolutionize Recruitment with AI-driven Automation & Human Interaction</p>
        
        <hr className="w-full border-gray-600 mb-6" />
        
        {/* KYC Form */}
        <div className="w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-cyan-400">KYC Process Initiation</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                1) Your Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium mb-2">
                2) Company Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                placeholder="Enter your company name"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium mb-2">
                3) Phone Number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Country
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              >
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium mb-2">
                4) Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                placeholder="Enter your email address"
              />
            </div>

            {/* Designation */}
            <div>
              <label className="block text-sm font-medium mb-2">
                5) Your Designation <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                placeholder="Enter your designation"
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center justify-center mt-8">
              <motion.button 
                type="submit"
                className="bg-white text-black px-8 py-4 text-lg font-semibold rounded-lg hover:from-cyan-500 hover:to-violet-600 transition-all duration-200 cursor-pointer shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit KYC Application
              </motion.button>   
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

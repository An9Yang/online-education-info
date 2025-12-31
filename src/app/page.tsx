"use client";

import Link from "next/link";
import { ArrowRight, Play, Star, MapPin, Globe, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function Home() {



  return (
    <div className="flex flex-col min-h-screen bg-sand/30 overflow-hidden noise-bg">

      {/* 
        =============================================
        HERO SECTION: Magazine Style Asymmetrical
        =============================================
      */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left Content */}
            <div className="lg:col-span-7 relative z-20">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/10 text-primary-dark font-bold text-sm mb-8 shadow-soft">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                <span className="tracking-wide uppercase">The Future of Education</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-serif font-bold text-primary-dark leading-[0.9] tracking-tight mb-8">
                Global <br />
                <span className="italic font-light text-primary">Access</span> to <br />
                Excellence.
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-xl text-text-muted max-w-xl leading-relaxed mb-10">
                Connect directly with the world's most prestigious private schools through immersive live classrooms and virtual tours.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Link href="/schools" className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2 group">
                  Explore Schools
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex items-center gap-4 px-6 py-4 rounded-full glass hover:bg-white/80 transition-colors cursor-pointer group">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-current" />
                  </div>
                  <span className="font-bold text-primary-dark">Watch Showreel</span>
                </div>
              </motion.div>
            </div>

            {/* Right Visual - Abstract Compositon */}
            <div className="lg:col-span-5 relative h-[500px] lg:h-[600px] hidden md:block">
              {/* Decorative Blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[80px]"></div>

              {/* Floating Images with Parallax */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute top-0 right-0 w-80 h-96 rounded-[2rem] overflow-hidden shadow-hard rotate-3 z-10 border-4 border-white"
              >
                <div className="w-full h-full bg-gray-200 relative">
                  {/* Placeholder for Main Hero Image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                    Eton College
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute bottom-10 left-10 w-64 h-72 rounded-[2rem] overflow-hidden shadow-medium -rotate-6 z-20 border-4 border-white"
              >
                <div className="w-full h-full bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-blue-200"></div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute top-1/2 -left-10 bg-white p-4 rounded-2xl shadow-hard z-30 max-w-[200px]"
              >
                <div className="flex -space-x-3 mb-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-xs font-bold">
                    +2k
                  </div>
                </div>
                <p className="text-sm font-bold text-primary-dark">Students joined live classes today.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* 
        =============================================
        STATS: Minimalist Strip
        =============================================
      */}
      <section className="py-12 border-y border-primary/5 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
            {["50+ Countries", "500+ Top Schools", "10k+ Live Sessions", "98% Placement Rate"].map((stat, i) => (
              <h3 key={i} className="text-xl md:text-2xl font-serif font-bold text-primary-dark opacity-80">{stat}</h3>
            ))}
          </div>
        </div>
      </section>


      {/* 
        =============================================
        SCHOOLS: Horizontal Scroll with Snap
        =============================================
      */}
      <section className="py-24 px-4 overflow-hidden">
        <div className="container mx-auto mb-16 flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-dark mb-4">Curated Excellence</h2>
            <p className="text-text-muted text-lg max-w-lg">Hand-picked top-tier institutions for ambitious students.</p>
          </div>
          <Link href="/schools" className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors pb-1 border-b-2 border-transparent hover:border-accent">
            View All Collection <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="flex overflow-x-auto gap-8 pb-12 px-4 md:px-8 -mx-4 md:-mx-8 snap-x hide-scrollbar">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="min-w-[320px] md:min-w-[400px] snap-center group relative cursor-pointer">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-medium transition-all duration-500 group-hover:shadow-hard group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gray-200">
                  {/* Placeholder Image */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                </div>

                <div className="absolute top-6 left-6 z-20">
                  <span className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-lg text-xs font-bold text-white border border-white/20 uppercase tracking-wider">
                    Boarding
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-8 z-20 text-white transform transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-2 text-white/80 text-sm">
                    <MapPin className="w-4 h-4" /> Geneva, Switzerland
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-4 leading-tight">Collège du Léman</h3>
                  <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-white/80 text-sm mb-4 line-clamp-2">A prestigious international day and boarding school situated on the shores of Lake Geneva.</p>
                    <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wide">
                      More Details <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 
        =============================================
        LIVE: Dark Mode "Cinema" Section
        =============================================
      */}
      <section className="bg-primary-dark text-white py-32 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary rounded-full blur-[150px] opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-red-500 font-bold tracking-widest uppercase text-xs mb-6 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> Live Now
              </div>
              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
                Experience Campus <br /><span className="text-white/30">Before You Fly.</span>
              </h2>
              <p className="text-white/60 text-lg max-w-md mb-12 leading-relaxed">
                Join live classroom sessions, virtual open days, and admissions Q&A directly from your home. None of the travel, all of the insight.
              </p>

              <div className="flex flex-col gap-4">
                {[1, 2].map((i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-4 cursor-pointer">
                    <div className="w-16 h-16 rounded-xl bg-gray-800 relative overflow-hidden flex-shrink-0">
                      {/* Thumb */}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-1">Admissions Workshop: Ivy League</h4>
                      <p className="text-sm text-white/40">Starts in 15 mins • 342 waiting</p>
                    </div>
                    <button className="p-3 rounded-full bg-white text-primary-dark hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Cinema Screen Mockup */}
              <div className="aspect-video rounded-2xl bg-gray-900 border border-white/10 shadow-2xl overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-white fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6">
                  <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded inline-block mb-2">LIVE</div>
                  <h3 className="text-2xl font-bold">Le Rosey: Winter Term Tour</h3>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        =============================================
        CTA: Simple & Clean
        =============================================
      */}
      <section className="py-32 container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary-dark mb-8">Start Your Journey.</h2>
        <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">Create a free account to access detailed brochures, tuition breakdowns, and book 1-on-1 calls with admission officers.</p>
        <button className="px-10 py-5 bg-accent text-white rounded-full font-bold text-lg shadow-xl shadow-accent/20 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-1 transition-all">
          Join EduGlobal Free
        </button>
      </section>

    </div>
  );
}

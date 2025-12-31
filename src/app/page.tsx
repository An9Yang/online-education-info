"use client";

import Link from "next/link";
import { ArrowRight, Play, CheckCircle2, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* 
        =============================================
        HERO SECTION: Clean & Centered
        =============================================
      */}
      <section className="pt-20 pb-20 md:pt-32 md:pb-32 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span>The Global Education Platform</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8 leading-tight"
          >
            Find the right school, <br />
            <span className="text-accent">anywhere in the world.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            EduGlobal connects families with top-tier international schools through verified data, virtual tours, and live admissions events.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/schools" className="px-8 py-4 bg-accent text-white rounded-xl font-bold text-lg hover:bg-accent-hover transition-all w-full sm:w-auto">
              Browse Schools
            </Link>
            <Link href="/live" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all w-full sm:w-auto flex items-center justify-center gap-2">
              <Play className="w-5 h-5 fill-slate-700" />
              Watch Demo
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-20 relative mx-auto max-w-6xl rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
          >
            <div className="aspect-[16/9] bg-slate-50 relative flex items-center justify-center">
              <div className="text-slate-300 font-bold text-2xl">Platform Dashboard Preview</div>
              {/* Simulated UI Mockup */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/50 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* 
        =============================================
        STATS / TRUST
        =============================================
      */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-1">500+</div>
              <div className="text-sm text-slate-500 font-medium">Verified Schools</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-1">50+</div>
              <div className="text-sm text-slate-500 font-medium">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-1">10k+</div>
              <div className="text-sm text-slate-500 font-medium">Families Helped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-1">24/7</div>
              <div className="text-sm text-slate-500 font-medium">Admissions Support</div>
            </div>
          </div>
        </div>
      </section>


      {/* 
        =============================================
        FEATURES / VALUE PROP
        =============================================
      */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why use EduGlobal?</h2>
            <p className="text-slate-500 text-lg">We simplify the complex process of international school admissions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Globe, title: "Global Search", desc: "Filter schools by curriculum (IB, A-Level, AP), tuition, and location." },
              { icon: Play, title: "Virtual Classrooms", desc: "Experience the teaching style before you apply with live stream replays." },
              { icon: Users, title: "Direct Connection", desc: "Message admission officers directly through our verified portal." }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-50 text-accent rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 
        =============================================
        CTA
        =============================================
      */}
      <section className="py-32 bg-slate-900 text-white text-center px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Ready to find your future school?</h2>
          <p className="text-slate-300 text-lg mb-10">Join thousands of parents and students making informed education decisions today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-accent text-white rounded-xl font-bold text-lg hover:bg-accent-hover transition-colors">
              Get Started Free
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

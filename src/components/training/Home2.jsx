import React, { useState, useEffect } from 'react';
import { Battery, Zap, Wind, Leaf, ArrowRight, CheckCircle2, Users, Award, TrendingUp } from 'lucide-react';
import Lottie from "lottie-react";
import animationData from "../../assets/Green Energy Concept Animation.json";
import { Link } from "react-router-dom";

export default function GreenEnergyLanding() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCard, setActiveCard] = useState(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const sectors = [
        {
            icon: <Zap className="w-12 h-12" />,
            title: "Solar Energy",
            description: "Master photovoltaic systems, installation techniques, and grid integration for the solar revolution.",
            skills: ["System Design", "Installation", "Grid Integration"]
        },
        {
            icon: <Battery className="w-12 h-12" />,
            title: "Green Hydrogen",
            description: "Learn electrolysis technologies and renewable power integration for clean fuel production.",
            skills: ["Electrolysis Tech", "Power Integration", "Storage Systems"]
        },
        {
            icon: <Wind className="w-12 h-12" />,
            title: "E-Mobility",
            description: "Develop expertise in EV infrastructure, charging systems, and sustainable transportation.",
            skills: ["EV Infrastructure", "Charging Tech", "Battery Management"]
        }
    ];

    const stats = [
        { icon: <Users />, value: "10,000+", label: "Skills Gap in Workforce" },
        { icon: <TrendingUp />, value: "300%", label: "Industry Growth Rate" },
        { icon: <Award />, value: "OSHA", label: "Compliant Training" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#FFFAE5] via-amber-50 to-orange-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D97706]/10 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-6 py-20 relative">
                    <div
                        className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                            }`}
                    >
                        <div className="grid md:grid-cols-2 gap-12 items-center">

                            {/* Left Side: Text */}
                            <div>
                                <div className="flex items-center gap-2 mb-6">
                                    <Leaf className="w-8 h-8 text-[#D97706] animate-pulse" />
                                    <span className="text-[#D97706] font-semibold text-lg">
                                        Green Skills Revolution
                                    </span>
                                </div>

                                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                    Bridging the
                                    <span className="text-[#D97706] block mt-2">Green Skills Gap</span>
                                </h1>

                                <p className="text-xl text-gray-700 max-w-3xl mb-8 leading-relaxed">
                                    The global transition to clean energy is accelerating, but a significant lack
                                    of green skills in critical areas poses a major challenge. We're here to
                                    transform that challenge into opportunity.
                                </p>
                                <Link to="/training/contactform">
                                <button className="bg-[#D97706] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#B45309] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 group">
                                    Start Your Journey
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                </Link>
                            </div>

                            {/* Right Side: Animation */}
                            <div className="w-full flex justify-center">
                                <Lottie animationData={animationData} loop autoplay className="w-full max-w-md" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#D97706]">
                                    <div className="text-[#D97706] mb-4">{stat.icon}</div>
                                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                    <div className="text-gray-600">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Challenge Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="bg-gradient-to-br from-[#D97706] to-orange-600 rounded-3xl p-12 shadow-2xl transform hover:scale-105 transition-all duration-500">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-white/20 p-3 rounded-full">
                                        <Leaf className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">The Challenge</h3>
                                </div>
                                <div className="space-y-4 text-white/90 text-lg">
                                    <p>
                                        This skills gap hinders the industrial growth needed to address climate change,
                                        comply with environmental standards, and ensure safety compliance under frameworks such as OSHA.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 md:order-2 space-y-6">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Why Green Skills Matter
                            </h2>
                            <div className="space-y-4">
                                {[
                                    "Renewable energy sectors require specialized system design and maintenance knowledge",
                                    "Green hydrogen demands expertise in electrolysis technologies",
                                    "E-mobility expansion needs trained technicians for EV infrastructure",
                                    "OSHA compliance ensures safety in emerging clean energy sectors"
                                ].map((point, index) => (
                                    <div key={index} className="flex items-start gap-3 animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                                        <CheckCircle2 className="w-6 h-6 text-[#D97706] flex-shrink-0 mt-1" />
                                        <p className="text-gray-700 text-lg">{point}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sectors Section - FIXED */}
            <section className="py-20 relative">
                {/* Background gradient - now properly contained */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 to-transparent -z-10"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Master Critical <span className="text-[#D97706]">Green Sectors</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Specialized training in the technologies shaping our sustainable future
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {sectors.map((sector, index) => (
                            <div
                                key={index}
                                className={`group relative transform transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                                onMouseEnter={() => setActiveCard(index)}
                                onMouseLeave={() => setActiveCard(null)}
                            >
                                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent group-hover:border-[#D97706] h-full">
                                    <div className="bg-gradient-to-br from-[#D97706]/10 to-orange-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-[#D97706] group-hover:scale-110 transition-transform duration-300">
                                        {sector.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{sector.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{sector.description}</p>

                                    <div className="space-y-2">
                                        {sector.skills.map((skill, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                                <div className="w-2 h-2 bg-[#D97706] rounded-full"></div>
                                                {skill}
                                            </div>
                                        ))}
                                    </div>

                                    <button className="mt-6 text-[#D97706] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Learn More
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-[#D97706] to-orange-600">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Build Your Green Career?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Join thousands of professionals mastering the skills that power our sustainable future
                    </p>
                    <Link to="/training/contactform">
                    <button className="bg-white text-[#D97706] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#FFFAE5] transition-all duration-300 transform hover:scale-105 shadow-xl">
                        Get Started Today
                    </button>
                    </Link>
                </div>
            </section>

            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
        </div>
    );
}
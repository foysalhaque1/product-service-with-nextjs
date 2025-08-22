"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative bg-gray-900 text-white my-3">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop"
                    alt="Car Engine"
                    className="w-full h-full object-cover opacity-40"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 flex flex-col items-center text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                >
                    Premium Car Parts for Every Ride
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8"
                >
                    From engines to accessories, explore top-quality auto parts at the
                    best prices. Upgrade your car performance today.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-4"
                >
                    <a
                        
                        className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition"
                    >
                        Shop Now
                    </a>
                    <a
                      
                        className="px-6 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-gray-900 transition"
                    >
                        Learn More
                    </a>
                </motion.div>
            </div>
        </section>
    );
}


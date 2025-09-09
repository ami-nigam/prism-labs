import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Manifesto() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900 antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md spectral-gradient"></div>
              <span className="text-3xl font-semibold tracking-tight uppercase">PRISM LABS</span>
            </div>
            <Link 
              to="/"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Manifesto Content */}
      <main className="mx-auto max-w-4xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="prose prose-lg max-w-none">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-700 leading-relaxed mb-8"
            >
              <strong>Human intent is the origin of every breakthrough - fragile, fleeting, yet limitless in possibility. At Prism Labs, we believe that AI exists not to replace that intent, but to amplify it.</strong>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-700 leading-relaxed mb-8"
            >
              Like light through a prism, an idea enters undefined - scattered, incomplete. What emerges is clarity: structured, expanded, radiant in its full spectrum. This is our purpose - to refract human vision into its highest resolution.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-700 leading-relaxed mb-8"
            >
              <strong>We stand between the precision of a research lab and the imagination of a creative studio. A place where algorithms meet artistry, where data meets intuition, where the future is not automated but illuminated.</strong>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl text-gray-700 leading-relaxed mb-12"
            >
              Our tools are not answers; <strong>they are amplifiers</strong>. They take what you mean, what you dream, and expand it beyond its first expression. Because <strong>the future of intelligence is not artificial - it is human intent, magnified.</strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center mt-16"
            >
              <p className="text-2xl font-semibold spectral-text">
                Prism Labs. Amplifying human intent through AI.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
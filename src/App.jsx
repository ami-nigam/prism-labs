import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Beaker, Palette, Waves } from "lucide-react";
import { initSpectralMouse } from "./spectralMouse";

// Glass card with gray border
const SpectralCard = ({ children }) => (
  <div className="relative rounded-2xl p-[2px] bg-gray-200">
    <div className="relative bg-white p-6 rounded-2xl h-full">
      {children}
    </div>
  </div>
);

export default function App() {
  useEffect(() => {
    initSpectralMouse();
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-gray-900 antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-md spectral-gradient">
              </div>
              <span className="text-3xl font-semibold tracking-tight uppercase">PRISM LABS</span>
            </div>
            <Link 
              to="/manifesto" 
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Manifesto
            </Link>
          </div>
        </div>
      </header>

      {/* Hero + products (right) with interactive refraction background */}
      <section className="relative overflow-hidden h-[80vh] flex items-center bg-white">

        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
            >
              Amplifying{" "}
              <span className="spectral-text">
                Human Intent
              </span>{" "}
              through{" "}
              <span className="spectral-text">
                AI
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-gray-700 max-w-xl"
            >
              A <span className="font-bold">research lab × creative studio</span>. We refract messy ideas into structured clarity, expanding them into their
              full spectrum.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex items-center gap-3 text-xs text-gray-600"
            >
              <span className="flex items-center gap-1">
                <Beaker className="h-3.5 w-3.5" /> Lab Rigor
              </span>
              <span className="flex items-center gap-1">
                <Palette className="h-3.5 w-3.5" /> Studio Imagination
              </span>
            </motion.div>
          </div>

          {/* Products */}
          <motion.div 
            id="products" 
            className="grid gap-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <SpectralCard>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Sparkles className="h-5 w-5" /> Prism Notes
                  </h3>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                    AI
                  </span>
                  <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                    Beta
                  </span>
                </div>
                <a 
                  href="https://prism.ami-nigam.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex justify-center rounded-md spectral-gradient px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Launch Application
                </a>
              </div>
              
              <p className="text-gray-700 mb-4">
                Transform your study materials into visual learning experiences using best-in-class AI models. Convert PDFs, notes, and documents into structured study guides with intelligent summaries and AI-generated imagery for enhanced comprehension.
              </p>
              
              <div>
                <p className="text-xs font-medium text-gray-500 mb-2">Key Features</p>
                <div className="flex flex-wrap gap-1">
                  {["Educational Tech", "AI Summaries", "Study Guides", "Image Generation"].map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              </SpectralCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <SpectralCard>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Waves className="h-5 w-5" /> Prism Viz
                  </h3>
                  <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                    Aggregator
                  </span>
                  <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                    Beta
                  </span>
                </div>
                <a 
                  href="https://prism-viz.ami-nigam.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex justify-center rounded-md spectral-gradient px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Launch Application
                </a>
              </div>
              
              <p className="text-gray-700 mb-4">
                Access the world's best-in-class AI image and video models through a single, unified platform. Transform design concepts into photorealistic renderings, sketches, concept diagrams, and more by leveraging cutting-edge AI from Google, Black Forest Labs, Stability AI, Runway, Magnific, and other leading providers.
              </p>
              
              <div>
                <p className="text-xs font-medium text-gray-500 mb-2">Key Features</p>
                <div className="flex flex-wrap gap-1">
                  {["Architecture", "AI Visualization", "Multi-Model Platform"].map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              </SpectralCard>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Prism Labs</div>
        </div>
      </footer>
    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import { Download, Github, Mail } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";

interface GeometricShape {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
}

const GeometricHero: React.FC = () => {
  const [shapes, setShapes] = useState<GeometricShape[]>([]);

  useEffect(() => {
    const generateShapes = (): GeometricShape[] => {
      return Array.from({ length: 8 }, (_, i) => ({
        id: i,
        size: Math.random() * 100 + 50,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
      }));
    };

    setShapes(generateShapes());
  }, []);

  return (
    <section className=" min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-muted">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="geometric-shape"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            delay: shape.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-4 tracking-tight">
            Yo'lchiyev Muhammad
          </h1>
          <div className="text-xl md:text-2xl text-primary font-semibold mb-6">
            FullStack Developer
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting modern web experiences with clean code, smooth animations,
            and bold designs. My mission is to build websites that don't just
            work — they impress.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <a
            href="/resume.pdf"
            download="Muhammad_resume.pdf"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2"
          >
            <Download size={20} />
            RESUME
          </a>

          <div className="flex gap-3">
            <a
              href="mailto:mirzayevmuhammad207@egmail.com"
              className="p-3 bg-card border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/mirzayevmuhammad"
              className="p-3 bg-card border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
         
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GeometricHero;

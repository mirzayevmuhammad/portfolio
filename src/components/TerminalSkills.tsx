"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend";
}

const skills: Skill[] = [
  { name: "HTML CSS", level: 100, category: "frontend" },
  { name: "React JS", level: 95, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  { name: "Next JS", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "backend" },
  { name: "JavaScript", level: 90, category: "backend" },
  { name: "Nest JS", level: 55, category: "backend" },
  { name: "Node JS", level: 55, category: "backend" },
];

const TerminalSkills: React.FC = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentSkill < skills.length) {
      const skill = skills[currentSkill];
      const fullText = `${skill.name}: ${"█".repeat(
        Math.floor(skill.level / 10)
      )} ${skill.level}%`;

      if (displayedText.length < fullText.length) {
        const timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setCurrentSkill((prev) => prev + 1);
          setDisplayedText("");
        }, 1000);
        return () => clearTimeout(timer);
      }
    } else {
      setIsTyping(false);
    }
  }, [currentSkill, displayedText]);

  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-foreground text-background rounded-lg overflow-hidden shadow-2xl"
          >
            <div className="bg-muted-foreground px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 bg-destructive rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-2 text-sm text-background">skills.sh</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="mb-2">$ ./display_skills.sh</div>
              <div className="mb-4">Loading developer skills...</div>

              {skills.map((skill, index) => (
                <div key={skill.name} className="mb-2">
                  {index <= currentSkill && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {index === currentSkill ? (
                        <span>
                          {displayedText}
                          {isTyping && (
                            <span className="terminal-cursor">|</span>
                          )}
                        </span>
                      ) : (
                        `${skill.name}: ${"█".repeat(
                          Math.floor(skill.level / 10)
                        )} ${skill.level}%`
                      )}
                    </motion.div>
                  )}
                </div>
              ))}

              {!isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-4 text-green-400"
                >
                  $ Skills loaded successfully ✓
                </motion.div>
              )}
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Front-End
              </h3>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === "frontend")
                  .map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className="bg-primary h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-primary text-2xl font-bold mb-6 ">
                Back-End
              </h3>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === "backend")
                  .map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className="bg-primary h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalSkills;

"use client";

import type React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "CRM-Woorkroom",
    description: "CRM-Workroom for company management with React and NestJS.",
    image: "/crm.png",
    technologies: ["React", "Nest.js", "TypeScript", "Tailwind CSS", "Prisma", "AWS"],
    liveUrl: "https://crm-workroom.vercel.app/",
    githubUrl: "https://github.com/mirzayevmuhammad/CRM-Workroom",
    featured: true,
  },
  {
    id: 2,
    title: "YouTube Clone",
    description: "YouTube clone frontend built with React (frontend only).",
    image: "/youtube.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://youtube-clone-frontend-beryl.vercel.app/",
    githubUrl: "https://github.com/mirzayevmuhammad/youtube-clone-frontend",
    featured: false,
  },
  {
    id: 3,
    title: "Creative Portfolio",
    description:
      "Stunning portfolio website with smooth animations and modern design.",
    image: "/partfolio.png",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://mrzyv17-sooty.vercel.app/",
    githubUrl: "https://github.com/mirzayevmuhammad/Partfolio",
    featured: true,
  },
  {
    id: 4,
    title: "Weather App",
    description: "Beautiful weather application with location-based forecasts.",
    image: "/weather-app-interface.png",
    technologies: ["React",  "Tailwind CSS","OpenWeather API"],
    liveUrl: "https://weather-app-ashen-theta-47.vercel.app/",
    githubUrl: "https://github.com/mirzayevmuhammad/WeatherApp",
    featured: false,
  },
    {
    id: 5,
    title: "Post-Pilot",
    description: "Responsive landing page for Post-Pilot.",
    image: "/PostPilot.png",
    technologies: ["React",  "Tailwind CSS"],
    liveUrl: "https://post-pilot-navy.vercel.app/",
    githubUrl: "https://github.com/mirzayevmuhammad/Post-Pilot",
    featured: false,
  },
];

const MagazineProjects: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`magazine-card bg-card border border-border rounded-xl overflow-hidden shadow-lg ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MagazineProjects;

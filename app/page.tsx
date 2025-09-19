"use client";

import GeometricHero from "../src/components/GeometricHero";
import TerminalSkills from "../src/components/TerminalSkills";
import MagazineProjects from "../src/components/MagazineProjects";
import ContactFooter from "../src/components/ContactFooter";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <GeometricHero />
      <TerminalSkills />
      <MagazineProjects />
      <ContactFooter />
    </div>
  );
}

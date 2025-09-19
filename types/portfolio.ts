export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  frontend: Skill[]
  backend: Skill[]
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  link: string
  tags: string[]
  featured?: boolean
}

export interface ContactInfo {
  email: string
  phone: string
  github: string
  linkedin: string
}

export interface PersonalInfo {
  name: string
  title: string
  description: string
  resumeUrl: string
}

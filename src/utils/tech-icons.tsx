// src/utils/tech-icons.tsx
import React from 'react';
import {
    SiNextdotjs,
    SiTypescript,
    SiReact,
    SiVercel,
    SiMongodb,
    SiTailwindcss,
    SiPrisma,
    SiPostgresql,
    SiBun,
    SiAppwrite,
    SiNodedotjs,
    SiExpress,
    SiSocketdotio,
    SiNetlify,
    SiGithub,
    SiFramer,
    SiThreedotjs,
    SiSanity
} from 'react-icons/si';

export const techIcons = {
    'Next.js': SiNextdotjs,
    'TypeScript': SiTypescript,
    'React': SiReact,
    'Vercel': SiVercel,
    'MongoDB': SiMongodb,
    'Tailwind CSS': SiTailwindcss,
    'Prisma': SiPrisma,
    'PostgreSQL': SiPostgresql,
    'Bun': SiBun,
    'Appwrite': SiAppwrite,
    'Node.js': SiNodedotjs,
    'Express.js': SiExpress,
    'Socket.io': SiSocketdotio,
    'Netlify': SiNetlify,
    'GitHub': SiGithub,
    'Motion': SiFramer,
    'Three.js': SiThreedotjs,
    'Sanity': SiSanity,
    'shadcn/ui': SiReact,
    'MDX': SiReact,
};

export type TechIconName = keyof typeof techIcons;

export const getTechIcon = (name: string, className: string = 'w-6 h-6') => {
    const Icon = techIcons[name as TechIconName] || SiReact;
    return <Icon className={className} />;
};
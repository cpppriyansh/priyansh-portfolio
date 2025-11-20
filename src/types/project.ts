// src/types/projects.ts
import { ReactNode } from 'react';

export interface Project {
    title: string;
    description: string;
    image: string;
    video?: string;
    link: string;
    technologies: {
        name: string;
        icon: ReactNode;
    }[];
    github?: string;
    live?: string;
    details?: boolean;
    projectDetailsPageSlug?: string;
    isWorking?: boolean;
}
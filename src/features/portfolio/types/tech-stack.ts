/**
 * A technology item displayed in the Tech Stack section.
 */
export type TechStack = {
  /** Unique identifier */
  key: string;
  /** Display name of the technology */
  title: string;
  /** Official website URL */
  href: string;
  /** Category tags for grouping/filtering */
  categories: string[];
  /** Direct URL to icon (Cloudinary, CDN, etc.) */
  icon?: string;
  /** If true, use theme-specific icons */
  theme?: boolean;
  /** URL to light theme icon */
  iconLight?: string;
  /** URL to dark theme icon */
  iconDark?: string;
};

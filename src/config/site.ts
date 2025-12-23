import { USER } from "@/features/portfolio/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://chanhdai.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Resume",
    href: "/resume",
  },
];

export const GITHUB_USERNAME = "cpppriyansh";
export const SOURCE_CODE_GITHUB_REPO = "cpppriyansh/priyansh-portfolio";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/cpppriyansh/priyansh-portfolio";

export const UTM_PARAMS = {
  utm_source: "priyanshhh.vercel.app",
  utm_medium: "referral",
  utm_campaign: "portfolio",
};

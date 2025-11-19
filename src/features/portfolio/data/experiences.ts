import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "ATORIX",
    companyName: "Atorix IT",
    companyLogo: "https://assets.chanhdai.com/images/companies/simplamo.webp",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Web Intern",
        employmentPeriod: {
          start: "06.2025",
          end: "12.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `
- Built responsive UIs using Next.js and Tailwind, converted designs to dynamic pages, created reusable components, implemented form validation, and optimized overall frontend performance.
- Built and maintained the admin panel with role-based access control, and implemented features like content management, blog handling, data filtering, and dynamic real-time updates.
- Deployed applications on Vercel/Render, managed environment variables and production configs, and resolved deployment and build issues.
- Built RESTful APIs using Node.js & Express, implemented authentication (JWT/NextAuth), and handled server-side routing, validation, and form submissions.
- Integrated MongoDB with efficient CRUD operations for users, blogs, dashboards, and real-time data handling.
- Improved UI performance by reducing re-renders, optimizing bundle size and images, and implementing effective caching strategies.
- Integrated external APIs, built dynamic real-time dashboards, and implemented secure protected API routes for reliable data handling.

`,
        skills: [
          "JavaScript",
          "Next.js",
          "React hooks",
          "Tailwind CSS",
          "Vercel",
          "Render",
          "MongoDB",
          "Hostinger",
          "Godaddy",
          "Agile",
          "Teamwork",
          "Research",
          "Problem-solving",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Full-stack Developer",
        employmentPeriod: {
          start: "2018",
          end: "2020",
        },
        employmentType: "Part-time",
        description: `- Built an order management website with real-time delivery tracking.
- Developed an e-commerce site for bird's nest products.
- Created a map to display monitoring station data.
- Designed a customizable WordPress landing page.`,
        icon: "code",
        skills: [
          "Laravel",
          "React",
          "Express.js",
          "Socket.IO",
          "MongoDB",
          "Firebase",
          "WordPress",
          "Docker",
          "NGINX",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "G H Raisoni College of Engineering and Management, Nagpur",
        employmentPeriod: {
          start: "08.2018",
          end: "2026",
        },
        icon: "education",
        description: `- Currently studying for a Bachelor's degree in Information Systems.
- Language Proficiency: B1 English Level.
- Achieved several awards, including:
  - Bronze Medal — 10th Design, Manufacturing, and Application Award 2022
  - 2nd Prize — Business Startup Competition 2019`,
        skills: [
          "C++",
          "Java",
          "Python",
          "Data Structures",
          "Algorithms",
          "Advanced Databases",
          "Systems Design",
          "Distributed Systems",
          "Software Engineering",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
      },
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: "Ly Tu Trong High School for the Gifted — Can Tho City",
        employmentPeriod: {
          start: "08.2015",
          end: "06.2018",
        },
        icon: "education",
        description: `- Student of the Specialized Computer Science Program.
- Granted direct admission to university due to achieving 3rd Prize at the national level.
- [Achieved numerous awards](https://baocantho.com.vn/nguyen-chanh-dai-17-tuoi-va-19-giai-thuong-a97348.html) at city and national levels, including:
  - [3rd Prize](https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm) — National Science and Engineering Fair 2018 (ViSEF)
  - 1st Prize — Can Tho City Science and Engineering Fair 2018
  - Creativity Award — Binh Duong Hackathon 2017
  - Consolation Prize — National Youth and Children's Creativity Contest 2016
  - [1st Prize](https://www.youtube.com/watch?v=OYgugvjqU4A) — Can Tho City Youth and Children's Creativity Contest 2016
  - 3rd Prize — National Young Informatics Contest 2016
- Achieved the title of Outstanding Student from Grade 10-12.
- Selected for the National Excellent Student Contest in Informatics for two consecutive years during high school.
- Honored on the school's "Hall of Fame" for academic achievements.
- Developed a feature using Node.js and Pandoc to recognize multiple-choice questions from .docx files and upload them to an [online quiz platform](https://youtu.be/QjR99wdmTyo) I created.
- Developed websites based on Laravel framework.
- Built websites with PHP and MySQL, following the MVC architecture.`,
        skills: [
          "Algorithms",
          "C++",
          "PHP",
          "MySQL",
          "Laravel",
          "Node.js",
          "Pandoc",
          "Self-learning",
        ],
      },
      {
        id: "36c4c6fb-02d0-48c0-8947-fda6e9a24af7",
        title: "Thuan Hung Secondary School",
        employmentPeriod: {
          start: "08.2011",
          end: "06.2015",
        },
        icon: "education",
        description: `- Recognized as the most outstanding student of the district.
- Achieved numerous awards at city and national levels:
  - Consolation Prize — National Young Informatics Contest 2015
  - Consolation Prize — National Young Informatics Contest 2014
  - 1st Prize — Can Tho City Young Informatics Contest 2014
- Achieved the title of Outstanding Student from Grade 6-9.
- Developed websites using the open-source NukeViet CMS.`,
        skills: [
          "Pascal",
          "NukeViet",
          "HTML",
          "CSS",
          "JavaScript",
          "Self-learning",
        ],
      },
    ],
  },
];

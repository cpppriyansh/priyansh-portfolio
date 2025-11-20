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
          start: "2021",
          end: "2022",
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
          start: "06.2023",
          end: "06.2026",
        },
        icon: "education",
        description: `- Pursuing a Bachelor’s Degree in Computer Science at GH Raisoni College of Engineering and Management, Nagpur, maintaining strong academic performance while actively building real-world technical skills through projects and internships.
- Certificates: 
  - Certificate of Participation : 24-Hour College Hackathon, built a functional prototype within time.

- Academics:
  - CGPA: 8.11/10

        `,
        skills: [
          "C++",
          "Java",
          "Python",
          "Data Structures",
          "Algorithms",
          "Databases",
          "Distributed Systems",
          "Software Engineering",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
      },
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: "V.Y.W.S polytechnic",
        employmentPeriod: {
          start: "11.2020",
          end: "06.2023",
        },
        icon: "education",
        description: `- Completed a Diploma in Computer Technology from V.Y.W.S polytechnic, where I built a strong foundation in programming, databases, and core computer science concepts.
- Academics:
  - Percentage: 80.29% `,
        skills: [
          "Algorithms",
          "C++",
          "PHP",
          "MySQL",
          "Node.js",
          "Java",
          "Self-learning",
        ],
      },
    ],
  },
];

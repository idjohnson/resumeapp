export interface Experience {
  companyName: string;
  companyLogo: string;
  location: string;
  startDate: string;
  endDate?: string;
  title: string;
  categories: string[];
  description: string;
  longDescription: string;
}

export const experiences: Experience[] = [
  {
    companyName: "Current Tech Corp",
    companyLogo: "/logos/current-tech.svg",
    location: "San Francisco, CA",
    startDate: "2022-01",
    title: "Senior Software Engineer",
    categories: ["Frontend", "React", "TypeScript"],
    description: "Leading frontend development team and architecting scalable solutions",
    longDescription: "Spearheading the development of next-generation web applications using React and TypeScript. Managing a team of 5 engineers, implementing CI/CD pipelines, and reducing build times by 40%."
  },
  {
    companyName: "Past Solutions Inc",
    companyLogo: "/logos/past-solutions.svg",
    location: "Seattle, WA",
    startDate: "2019-03",
    endDate: "2021-12",
    title: "Software Engineer",
    categories: ["Backend", "Node.js", "PostgreSQL"],
    description: "Developed and maintained backend services",
    longDescription: "Designed and implemented RESTful APIs serving millions of requests daily. Optimized database queries resulting in 60% performance improvement. Mentored junior developers and contributed to technical documentation."
  }
]


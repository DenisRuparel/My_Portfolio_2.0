import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  c,
  cpp,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  bootstrap,
  python,
  github,
  android,
  textutil,
  dflix,
  lms,
  S_html,
  H_python,
  c_java,
  Red_hat,
  g_cloud_badge,
  g_drive,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "React JS Developer",
    icon: backend,
  },
  {
    title: "DevOps Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C",
    icon: c,
  },
  {
    name: "CPP",
    icon: cpp,
  },
  {
    name: "PYTHON",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "ANDROID",
    icon: android,
  },
  {
    name: "GIT HUB",
    icon: github,
  },
  {
    name: "git",
    icon: git,
  },
];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Text Utils Web App",
    description:
      "Web-based simple app that allows users to perform different types of operations on string like convert string to capital, small, sentance case, new line remove etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "core JS",
        color: "pink-text-gradient",
      },
    ],
    image: textutil,
    source_code_link: "https://github.com/DenisRuparel/Text_Utilization_App_React",
  },
  {
    name: "Dflix Movies",
    description:
      "Web application that enables users to search for any type of movies and their reviews. and view content, trailer clips, suggested movies and many more.",
    tags: [
      {
        name: "html css",
        color: "blue-text-gradient",
      },
      {
        name: "core JS",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: dflix,
    source_code_link: "https://github.com/DenisRuparel/Dflix",
  },
  {
    name: "Library Management",
    description:
      "a Library Management System project using php with mysql. admin can manage books, students and faculties. you can also issue or return book in this project.",
    tags: [
      {
        name: "html css",
        color: "blue-text-gradient",
      },
      {
        name: "core JS",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: lms,
    source_code_link: "https://github.com/DenisRuparel/libraryProject",
  },
];

const certificates = [
  {
    name: "HTML Course Cretificate",
    description:
      "Completed HTML Course Successfully and Got Certificate in HTML from SoloLearn.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "sololearn",
        color: "green-text-gradient",
      },
      {
        name: "certificate",
        color: "pink-text-gradient",
      },
    ],
    image: S_html,
    source_code_link: "https://www.sololearn.com/certificates/CC-EXUGRMIL",
  },
  {
    name: "Python Skill Cretificate",
    description:
      "Completed Exam Successfully and Got Certificate in Python from HackerRank.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "hackerrank",
        color: "green-text-gradient",
      },
      {
        name: "certificate",
        color: "pink-text-gradient",
      },
    ],
    image: H_python,
    source_code_link: "https://www.hackerrank.com/certificates/cd4a66c073cc",
  },
  {
    name: "Codechef Java course",
    description:
      "Completed Java Programming Course from CodeChef on 10th Septmber 2023.",
    tags: [
      {
        name: "codechef",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "certificate",
        color: "pink-text-gradient",
      },
    ],
    image: c_java,
    source_code_link: "https://www.codechef.com/certificates/public/9d741d5",
  },
  {
    name: "Coursera Red Hat",
    description:
      "Completed Fundamentals of Red Hat Enterprise Linux 9 Course from Coursera.",
    tags: [
      {
        name: "coursera",
        color: "blue-text-gradient",
      },
      {
        name: "certificate",
        color: "green-text-gradient",
      },
      {
        name: "redhat",
        color: "pink-text-gradient",
      },
    ],
    image: Red_hat,
    source_code_link: "https://coursera.org/share/ee366b40f34fb5d70ee3d6bf1654fd02",
  },
  {
    name: "Intro to Generative AI",
    description:
      "Completed Fundamentals of introduction to Generative AI from Google Cloud.",
    tags: [
      {
        name: "google cloud",
        color: "blue-text-gradient",
      },
      {
        name: "badge",
        color: "green-text-gradient",
      },
      {
        name: "generative ai",
        color: "pink-text-gradient",
      },
    ],
    image: g_cloud_badge,
    source_code_link: "https://www.cloudskillsboost.google/public_profiles/67d5c486-1762-444a-90e3-ff1cb31f36e8/badges/7930436",
  },
  {
    name: "Google Drive",
    description:
      "Verified for knowledge for Google drive from udacity course on November 26, 2023.",
    tags: [
      {
        name: "google drive",
        color: "blue-text-gradient",
      },
      {
        name: "google",
        color: "green-text-gradient",
      },
      {
        name: "certificate",
        color: "pink-text-gradient",
      },
    ],
    image: g_drive,
    source_code_link: "https://www.udacity.com/certificate/e/ee951e3e-8c3e-11ee-8bf4-df71d5e75a49",
  },
  
];

// export { services, technologies, experiences, testimonials, projects, certificates };
export { services, technologies, projects, certificates };

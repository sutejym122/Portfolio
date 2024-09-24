import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  bmi,
  tipsy,
  clima,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Cloud Solutions Developer",
    icon: mobile,
  },
  {
    title: "iOS App Developer",
    icon: backend,
  },
  {
    title: "SaaS Developer",
    icon: creator,
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "iOS Developer Intern",
    company_name: "TCR Innovation",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Nov 2021 - Jan 2022",
    points: [
      "Developed an iOS app for 1,000+ users using Swift and Firebase, leveraging Scrum methodologies to enhance features and streamline development.",
      "Integrated Razorpay API for secure transactions and implemented continuous integration and deployment practices to ensure seamless app performance.",
      "Enhanced app performance through multi-threading, boosting speed by 30% and achieving a 95% user retention rate. Designed real-time tracking features and utilized foundational DevOps skills, including configuration, containerization, and infrastructure as code.",
    ],
  },
  {
    title: "Programmer Analyst",
    company_name: "Cognizant Technology Solutions",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "March 2022 - June 2023",
    points: [
      "Reduced system latency by 25% and improved reliability by 30% through real-time software solutions for over a million users in a cloud environment.",
      "Integrated software with existing cloud applications to ensure smooth system integration and effective field testing; automated key operational tasks using PowerShell scripting, reducing",
      "Collaborated in full-stack web development, ensuring smooth integration of cloud applications using React for front-end interfaces and Django for backend services.",
    ],
  },
  {
    title: "Information Technology Intern",
    company_name: "Sodexo",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2024 - present",
    points: [
      "Organized and managed a database with PostgreSQL and MongoDB, optimizing performance for high-availability systems, similar to SaaS platforms.",
      "Installed and configured advanced IT equipment such as cash register tablets and POS systems using SQL and scripting, enhancing operational efficiency.",
      "Enhanced web-based systems for real-time data reporting, using PostgreSQL and back-end web services integration, preparing for large-scale cloud-based SaaS applications.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Sutej greatly improved identity and access management for over a million users, cutting latency by 25%, boosting reliability by 30%, and streamlining operations with smart automation and a user-friendly interface. A true asset to the team!",
    name: "Swathi J",
    designation: "Team Lead",
    company: "Cognizant",
    //image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Sutej made a big impact on our identity and access management, reducing latency by 25% and boosting reliability by 30%. Their automation and user-friendly interface greatly improved our operations. A key contributor to the team!",
    name: "Harisha",
    designation: "Product Manager",
    company: "Cognizant",
    //image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Sutej was instrumental in developing our iOS app for 1,000+ users, integrating Razorpay for secure transactions and ensuring seamless performance with continuous deployment. Their optimization boosted speed by 30%, leading to a 95% user retention rate. A valuable member of our team!",
    name: "Rutuja",
    designation: "Manager",
    company: "TCR Innovation",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Covid - 19",
    description:
      "React.js covid infographic using axios to get the data from a public API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "HTML | CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/sutejym122/Covid-19.git",
  },
  {
    name: "Weather PWA",
    description:
      "React.js web-app to display the weather using openweathermap API. The bg-image is a cool little easter egg, check the website to find out.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "openweathermap API",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/sutejym122/WeatherPWA.git",
  },
  {
    name: "IP Address",
    description:
      "Simple React.js web-app using AJAX to access an API.",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "reactJS",
        color: "green-text-gradient",
      },
      {
        name: "Ajax",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/sutejym122/IPAddress.git",
  },
  {
    name: "BMI Calculator",
    description:
      "Body Mass Index calculator. Based on the user’s weight and height it will calculate their body mass and give a piece of health advice depending on whether if they have eaten too many pies or if they need to eat more pies.",
    tags: [
      {
        name: "Swift",
        color: "blue-text-gradient",
      },
      {
        name: "Swift-UI",
        color: "green-text-gradient",
      },
      {
        name: "UI Kit",
        color: "pink-text-gradient",
      },
    ],
    image: bmi,
    source_code_link: "https://github.com/sutejym122/BMI-Calculator.git",
  },
  {
    name: "Expense split Calculator",
    description:
      "Body Mass Index calculator. Based on the user’s weight and height it will calculate their body mass and give a piece of health advice depending on whether if they have eaten too many pies or if they need to eat more pies.",
    tags: [
      {
        name: "MVC Design Pattern",
        color: "blue-text-gradient",
      },
      {
        name: "Auto Layout",
        color: "green-text-gradient",
      },
      {
        name: "UI Kit",
        color: "pink-text-gradient",
      },
    ],
    image: tipsy,
    source_code_link: "https://github.com/sutejym122/Split-Calculator-with-Tip.git",
  },
  {
    name: "Weather App",
    description:
      "A dark-mode enabled weather app. You'll be able to check the weather for the current location based on the GPS data from the iPhone as well as by searching for a city manually.",
    tags: [
      {
        name: "Network Communication",
        color: "blue-text-gradient",
      },
      {
        name: "Core Location",
        color: "green-text-gradient",
      },
      {
        name: "OpenWeather API",
        color: "pink-text-gradient",
      },
    ],
    image: clima,
    source_code_link: "https://github.com/sutejym122/Weather-App.git",
  },
];

export { services, technologies, experiences, testimonials, projects };

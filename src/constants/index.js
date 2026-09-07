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
  tailwind,
  python,
  fastapi,
  swift,
  aws,
  postgresql,
  flask,
  angularjs,
  xcode,
  git,
  docker,
  tracepilot,
  fitforge,
  forensic,
  mirror,
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
    title: "iOS App Developer",
    icon: backend,
  },
  {
    title: "Backend & Cloud Developer",
    icon: mobile,
  },
  {
    title: "AI-Assisted Tooling",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "Flask",
    icon: flask,
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
    name: "Angular",
    icon: angularjs,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Swift / SwiftUI",
    icon: swift,
  },
  {
    name: "Xcode",
    icon: xcode,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
];

// NOTE: Find Me dates aren't confirmed yet — fill in the exact months below.
const experiences = [
  {
    title: "Research Intern (OPRA Platform)",
    company_name: "Binghamton University, School of Computing",
    initials: "BU",
    date: "Aug 2025 - Feb 2026",
    points: [
      "Contributed the MAPS feature to OPRA, an open-source Django platform for preference reporting, voting, and resource allocation: a PostGIS-backed Django REST Framework API serving district/election/map-layer data, including a management command importing real New Jersey congressional-district geometries.",
      "Built the front end for MAPS with React and Leaflet: an interactive map with candidate-colored districts, a filterable district-selection sidebar, a vote-distribution panel, and per-district hover tooltips.",
      "Worked within a pre-existing research codebase (Django 5, DRF, PostgreSQL/PostGIS, React, Channels/Redis) used by the department for course allocation research.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Find Me",
    initials: "FM",
    date: "2023",
    points: [
      "Built a store/product search feature (search stores, search products across stores, view in-store aisle/product details) end-to-end with a React front end, Typesense, PostgreSQL, and MongoDB, including designing the full database schema.",
      "Cut search latency by 40% by adding input debouncing (200-250ms) in front of the search API.",
      "Built REST endpoints in Flask, including a `/search` route querying the Typesense product collection and a `/documents` route for indexed product data; contributed to observability integration work (OpenTelemetry, Promtail, Grafana Loki).",
    ],
  },
  {
    title: "Programmer Analyst",
    company_name: "Cognizant Technology Solutions",
    initials: "CTS",
    date: "March 2022 - June 2023",
    points: [
      "Supported enterprise identity and ERP systems: Azure Active Directory access/identity troubleshooting and configuration validation on the IAM side, and JD Edwards production issue investigation (logs, SQL, data flows) on the ERP side.",
      "Automated repetitive admin and validation work using PowerShell scripting, and handled integration/API tasks touching AWS S3 and Azure Blob Storage.",
      "Converted from a 9-month internship to a full-time Programmer Analyst role; ~15 months total at the company.",
    ],
  },
];

const projects = [
  {
    name: "TracePilot",
    window_title: "tracepilot / dashboard.png",
    description:
      "Full-stack release intelligence and observability MVP: links services, releases, health checks, API latency/error metrics, rollback-readiness checklists, and incidents into one loop, so a degraded metric can be traced back to the release that likely caused it.",
    tags: [
      {
        name: "fastapi",
        color: "blue-text-gradient",
      },
      {
        name: "react-typescript",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: tracepilot,
    source_code_link: "https://github.com/sutejym122/TracePilot",
    live_demo_link: "https://trace-pilot-two.vercel.app",
  },
  {
    name: "Mirror",
    window_title: "mirror / run.log",
    description:
      "LLM evaluation harness that treats prompts like code: a Python library and CLI that runs versioned test suites against a prompt, scores responses (structural, field-accuracy, and similarity scorers), and gates a run pass/fail against a saved baseline for CI-style regression detection.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite-sqlalchemy",
        color: "green-text-gradient",
      },
      {
        name: "ci-regression-gating",
        color: "pink-text-gradient",
      },
    ],
    image: mirror,
    source_code_link: null,
  },
  {
    name: "FitForge",
    window_title: "fitforge / home.swift",
    description:
      "Native SwiftUI iOS fitness and nutrition coaching app with a FastAPI/OpenAI backend. Integrates HealthKit for activity data, generates AI meal plans from calorie/macro targets, and tracks streaks, achievements, and weekly insights via home-screen widgets.",
    tags: [
      {
        name: "swiftui",
        color: "blue-text-gradient",
      },
      {
        name: "healthkit-widgetkit",
        color: "green-text-gradient",
      },
      {
        name: "fastapi-openai",
        color: "pink-text-gradient",
      },
    ],
    image: fitforge,
    source_code_link: "https://github.com/sutejym122/FitForge-iOS",
  },
  {
    name: "Forensic Face Sketch",
    window_title: "forensic-face-sketch / sketch-builder.png",
    description:
      "Academic forensic sketch construction and face-recognition system: a JavaFX desktop app for assembling composite suspect sketches from facial components, storing records, and comparing sketches against stored images via AWS Rekognition.",
    tags: [
      {
        name: "javafx",
        color: "blue-text-gradient",
      },
      {
        name: "aws-rekognition",
        color: "green-text-gradient",
      },
      {
        name: "aws-s3",
        color: "pink-text-gradient",
      },
    ],
    image: forensic,
    source_code_link: "https://github.com/sutejym122/Forensic-Face-Sketch",
  },
];

export { services, technologies, experiences, projects };

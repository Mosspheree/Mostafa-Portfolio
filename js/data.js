/* ── data.js — all portfolio content in one place ── */

const EXPERIENCE = [
  {
    date: "AUG 2025 — MAY 2026",
    company: "Astrobotic Technology · NASA CLPS",
    role: "Software Integration & Testing Intern",
    bullets: [
      "Developed and maintained hardware-in-the-loop (HIL) and software-in-the-loop (SIL) test automation for flight and avionics interfaces on a NASA Commercial Lunar Payload Services mission.",
      "Implemented emulator-side protocol handling for serial/UART-style streams including buffering, framing, and CRC validation to support deterministic integration testing.",
      "Configured 5+ emulators and executed 10+ test procedures, resolving 15 critical bugs to maintain mission-ready standards.",
      "Updated and added features to DFS & EFS systems, improving system reliability and increasing test coverage by ~25%.",
    ],
    tags: [
      { label: "HIL/SIL Testing",  color: "cyan"  },
      { label: "Flight Software",  color: "cyan"  },
      { label: "UART/Serial",      color: "amber" },
      { label: "CRC Validation",   color: "amber" },
      { label: "NASA CLPS",        color: "green" },
      { label: "Python",           color: "cyan"  },
    ],
  },
  {
    date: "MAY 2025 — AUG 2025",
    company: "National Science Foundation · REU ASSET",
    role: "AI Research Intern",
    bullets: [
      "Trained and fine-tuned 5+ small language models (DistilBERT, MobileBERT, TinyBERT, Phi-3 Mini, TinyLLaMA) on FIU's Diamond GPU cluster using PyTorch and Hugging Face Transformers.",
      "Benchmarked models across 6+ metrics including accuracy, F1, latency, memory usage, and adversarial robustness; generated consolidated JSON/CSV reports.",
      "Collaborated with faculty PI, postdocs, and PhD students; contributed to poster presentation and IEEE-style paper draft.",
      "Presented findings at EAI MobiQuitous 2025 in Shanghai — \"Tiny Models, Tough Limits.\"",
    ],
    tags: [
      { label: "PyTorch",           color: "cyan"  },
      { label: "Hugging Face",      color: "cyan"  },
      { label: "GPU Cluster",       color: "amber" },
      { label: "Published Research",color: "green" },
      { label: "EAI MobiQuitous 2025", color: "red" },
    ],
  },
  {
    date: "DEC 2024 — PRESENT",
    company: "Codeadvantage",
    role: "Coding & STEM Instructor",
    bullets: [
      "Teach programming concepts to 10+ children using Minecraft: Education Edition — covering loops, conditionals, and functions through hands-on projects.",
      "Guide students in building interactive features using LEGO robotics, focusing on event-driven logic and problem-solving.",
      "Design lesson plans that adapt to varying skill levels, ensuring every student progresses at their own pace.",
    ],
    tags: [
      { label: "Teaching",         color: "cyan"  },
      { label: "STEM Education",   color: "amber" },
      { label: "LEGO Robotics",    color: "green" },
      { label: "Minecraft:EE",     color: "green" },
    ],
  },
  {
    date: "AUG 2024 — PRESENT",
    company: "Institute for International Economic Policy · GWU",
    role: "Web Assistant",
    bullets: [
      "Maintained 80%+ of IIEP's web presence using Drupal and HTML/CSS, ensuring stable performance and consistent content updates.",
      "Deployed 30+ articles and 10+ multimedia resources monthly.",
      "Improved site navigation and interface, contributing to a 15% reduction in bounce rate.",
    ],
    tags: [
      { label: "Drupal",    color: "cyan"  },
      { label: "HTML/CSS",  color: "amber" },
      { label: "Web Dev",   color: "green" },
    ],
  },
];


const PROJECTS = [
  {
    featured: true,
    num: "FEATURED PROJECT",
    name: "Kessler",
    sub: "Space Debris Cascade Simulator",
    desc: "Real-time 3D visualization of Kessler Syndrome using live TLE orbital data and SGP4 propagation — the same standard used by NASA. Select two real satellites, trigger a collision, and watch the debris cascade propagate across orbital shells in your browser. No API keys. No backend. Pure orbital mechanics.",
    tags: [
      { label: "Three.js",                    color: "cyan"  },
      { label: "SGP4",                         color: "cyan"  },
      { label: "Orbital Mechanics",            color: "amber" },
      { label: "CelesTrak TLE Data",           color: "green" },
      { label: "Space Situational Awareness",  color: "red"   },
    ],
    link: "https://github.com/Mosspheree/Kessler",
    hasOrbit: true,
  },
  ,
  {
    num: "PROJECT 02",
    name: "Codemedic",
    sub: "AI Compiler Error Fixer",
    desc: "C++ tool that intercepts compiler errors, extracts structured AST context using libclang, synthesizes a minimal patch via LLM, applies it, and recompiles to verify — closing the feedback loop automatically. Existing tools explain errors; Codemedic fixes and confirms them.",
    tags: [
      { label: "C++17",          color: "cyan"  },
      { label: "libclang",       color: "cyan"  },
      { label: "AST Parsing",    color: "amber" },
      { label: "LLM Integration",color: "amber" },
      { label: "CMake",          color: "green" },
    ],
    link: "https://github.com/Mosspheree/Codemedic",
  },
  {
    num: "PROJECT 03",
    name: "SLM-Bench",
    sub: "Small Language Model Benchmarking",
    desc: "Comprehensive evaluation framework for small language models targeting edge deployment. Benchmarks 6 SLMs across accuracy, inference time, memory, model size, energy efficiency, and adversarial robustness. Includes full ONNX optimization pipeline. Research presented at EAI MobiQuitous 2025, Shanghai.",
    tags: [
      { label: "PyTorch",         color: "cyan"  },
      { label: "ONNX",            color: "cyan"  },
      { label: "Hugging Face",    color: "amber" },
      { label: "Published Research", color: "green" },
      { label: "Edge AI",         color: "red"   },
    ],
    link: "https://github.com/Mosspheree/SLM-Bench",
  },
  {
    num: "PROJECT 04",
    name: "Enigma",
    sub: "WWII Cipher Machine Simulation",
    desc: "Java simulation of the Enigma rotor encryption mechanism with a real-time GUI. Supports encrypting 1,000+ messages in real time. Tested with 20+ cases covering edge conditions in rotor stepping and reflector logic.",
    tags: [
      { label: "Java",          color: "cyan"  },
      { label: "Swing GUI",     color: "amber" },
      { label: "Cryptography",  color: "green" },
    ],
    link: "https://github.com/Mosspheree",
  },
];


const SKILLS = [
  {
    title: "Languages",
    color: "cyan",
    items: ["C++", "Python", "Java", "JavaScript", "C", "SQL", "Kotlin", "HTML/CSS"],
  },
  {
    title: "ML / AI",
    color: "amber",
    items: ["PyTorch", "Hugging Face", "ONNX", "DistilBERT", "TinyLLaMA", "Phi-3", "Model Benchmarking"],
  },
  {
    title: "Systems",
    color: "green",
    items: ["HIL/SIL Testing", "Flight Software", "UART/Serial", "CRC Validation", "libclang", "CMake", "Linux", "Git"],
  },
  {
    title: "Web & Cloud",
    color: "red",
    items: ["React", "Node.js", "Flask", "MySQL", "AWS", "Three.js", "Vite", "Drupal"],
  },
];


const AWARDS = [
  {
    icon: "★ SCHOLARSHIP",
    name: "Presidential Academic Scholarship",
    org: "The George Washington University",
    date: "2022 — Present",
  },
  {
    icon: "★ ACADEMIC HONOR",
    name: "Dean's List — SEAS",
    org: "The George Washington University",
    date: "Spring 2023",
  },
  {
    icon: "★ PUBLICATION",
    name: "EAI MobiQuitous 2025 — \"Tiny Models, Tough Limits\"",
    org: "Shanghai, China (Online)",
    date: "November 2025",
  },
  {
    icon: "★ CERTIFICATION",
    name: "AWS Academy Graduate: Cloud Foundations",
    org: "AWS Academy",
    date: "February 2025",
  },
  {
    icon: "★ HONOR ROLL",
    name: "JIS Higher Honor Roll",
    org: "Jubail International School",
    date: "Fall 2019 — Winter 2022",
  },
];

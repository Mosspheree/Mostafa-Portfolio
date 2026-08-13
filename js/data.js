/* ── data.js — all portfolio content in one place ── */

const EXPERIENCE = [
  {
    date: "MAY 2026 — AUG 2026",
    company: "Tennessee Technological University · NSF CyberAI REU",
    role: "NSF CyberAI Research Intern",
    bullets: [
      "Executed white-box adversarial attacks on Meta's V-JEPA 2.1 ViT-L video encoder, achieving a 91% untargeted attack success rate via a dual-constrained sparse attack perturbing only 4 of 16 input frames within LPIPS perceptual bounds.",
      "Engineered a training-time backdoor via LoRA fine-tuning, achieving a 90.5% attack success rate on the Something-Something V2 action-recognition dataset.",
      "Established and validated a clean fine-tuning baseline against published benchmark accuracy prior to poisoning experiments, ensuring measured degradation was attributable to the attack rather than pipeline variance.",
      "Implemented and compared three threat models: pixel-space PGD, frequency-domain PGD, and perceptual LPA, measuring transferability and perceptual detectability across each.",
    ],
    tags: [
      { label: "Adversarial ML",   color: "cyan"  },
      { label: "V-JEPA 2.1",       color: "cyan"  },
      { label: "LoRA",             color: "amber" },
      { label: "PGD / LPIPS",      color: "amber" },
      { label: "PyTorch",          color: "green" },
    ],
  },
  {
    date: "AUG 2025 — MAY 2026",
    company: "Astrobotic Technology · NASA CLPS",
    role: "Software Integration & Testing Intern",
    bullets: [
      "Designed a pull-style serial protocol parser for the NASA CLPS mission, reverse-engineering the undocumented byte-level protocols of four spacecraft hardware emulators (High-Speed Switch, Transponder, Main Bus Controller, Gimbal) from existing driver code and observed behavior; consolidated four finite state machines into one reusable framing layer with frame synchronization and resync-on-error recovery, cutting frame processing time 60%.",
      "Refactored a flight hardware peripheral driver from blocking sequential I/O to concurrent send/receive via background threading with metadata-based response matching, eliminating idle wait and preventing deadlocks.",
      "Expanded emulator telemetry from 2 baseline counters to 18 exposed parameters per unit (FET switch states, RF path status, board temperatures, CRC/protocol error counters), enabling near-hardware-fidelity validation without consuming HITL cycles.",
      "Wrote integration tests validating Mission Manager safe-state transition after a command-and-data-handling CPU reset, with relative and absolute timer synchronization holding across reboots to isolate true reset behavior from timing artifacts.",
      "Built and maintained 50+ integration test cases across SITL and HITL with pytest and Docker, cutting manual test effort ~25% and raising coverage 20-30%; owned CI/CD pipelines and Git workflows across two semesters.",
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
    date: "JAN 2025 — PRESENT",
    company: "CodeAdvantage",
    role: "Coding & Robotics Instructor",
    bullets: [
      "Designed and led hands-on robotics lessons using LEGO kits, enabling 20+ students to build and program event-driven game features.",
      "Taught foundational programming concepts in JavaScript and Python using Minecraft: Education Edition to visualize coding structures and syntax.",
      "Adapted lesson plans to varying skill levels, ensuring every student progressed at their own pace.",
    ],
    tags: [
      { label: "Teaching",         color: "cyan"  },
      { label: "STEM Education",   color: "amber" },
      { label: "LEGO Robotics",    color: "green" },
      { label: "JavaScript",       color: "cyan"  },
      { label: "Python",           color: "cyan"  },
    ],
  },
  {
    date: "SEP 2024 — AUG 2025",
    company: "Institute for International Economic Policy · GWU",
    role: "Web Assistant",
    bullets: [
      "Maintained 80%+ of IIEP's web presence using Drupal and HTML/CSS, ensuring stable performance and consistent content updates.",
      "Streamlined deployment of 30+ articles and 10+ multimedia resources monthly, enhancing content consistency and visibility.",
      "Revitalized the website through five key upgrades, reducing bounce rate by 15% and improving overall user engagement.",
    ],
    tags: [
      { label: "Drupal",    color: "cyan"  },
      { label: "HTML/CSS",  color: "amber" },
      { label: "Web Dev",   color: "green" },
    ],
  },
  {
    date: "AUG 2024 — MAY 2025",
    company: "GWU Campus Living & Residential Education",
    role: "Community Engagement Advisor",
    bullets: [
      "Served as a primary point of contact for 50+ residents, fostering an inclusive and supportive residential community.",
      "Organized and executed community programs and events, connecting residents with campus resources and each other.",
      "Acted as a mandated reporter under Title IX, handling confidential student information with discretion and professionalism.",
    ],
    tags: [
      { label: "Leadership",      color: "cyan"  },
      { label: "Community Building", color: "amber" },
      { label: "Event Planning",  color: "green" },
    ],
  },
  {
    date: "AUG 2024 — DEC 2024",
    company: "GWU School of Engineering & Applied Science",
    role: "First Year Mentor (SEAS)",
    bullets: [
      "Mentored a cohort of incoming SEAS first-year students, guiding them through academic and social transitions to university life.",
      "Led an off-campus trip experience, coordinating logistics and fostering peer connections among new engineering students.",
      "Provided ongoing academic guidance and connected students with GWU resources to support their success.",
    ],
    tags: [
      { label: "Mentorship",    color: "cyan"  },
      { label: "Leadership",    color: "amber" },
      { label: "Engineering",   color: "green" },
    ],
  },
  {
    date: "SEP 2023 — MAY 2024",
    company: "GWU — JBKO Residence Hall",
    role: "Communications Chair",
    bullets: [
      "Served as Communications Chair for JBKO residence hall, managing internal communications and community outreach for 100+ residents.",
      "Planned and coordinated hall events, handling logistics, promotion, and execution from concept to completion.",
      "Acted as liaison between residents and residential staff, ensuring timely and clear communication across the community.",
    ],
    tags: [
      { label: "Event Planning",   color: "cyan"  },
      { label: "Communications",   color: "amber" },
      { label: "Leadership",       color: "green" },
    ],
  },
];


const PROJECTS = [
  {
    featured: true,
    num: "FEATURED PROJECT",
    name: "Kessler",
    sub: "Space Debris Cascade Simulator",
    desc: "Real-time 3D visualization of Kessler Syndrome using live TLE orbital data and SGP4 propagation. The same standard used by NASA. Select two real satellites, trigger a collision, and watch the debris cascade propagate across orbital shells in your browser. No API keys. No backend. Pure orbital mechanics.",
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
  {
    num: "PROJECT 02",
    name: "Porkchop Plotter",
    sub: "Interplanetary Launch Window Calculator",
    desc: "Mission-grade interplanetary trajectory tool using a Lambert arc solver. Again, the same math JPL uses for every planetary mission. Computes C3 energy landscapes across departure dates and flight times, renders an interactive porkchop plot, and identifies optimal launch windows. Zero dependencies, live in the browser.",
    tags: [
      { label: "Lambert Solver",        color: "cyan"  },
      { label: "Orbital Mechanics",     color: "cyan"  },
      { label: "Keplerian Ephemeris",   color: "amber" },
      { label: "Canvas API",            color: "amber" },
      { label: "NASA JPL Technique",    color: "green" },
    ],
    link: "https://github.com/Mosspheree/porkchop-plotter",
    liveLink: "https://mosspheree.github.io/porkchop-plotter",
  },
  {
    num: "PROJECT 03",
    name: "Codemedic",
    sub: "AI Compiler Error Fixer",
    desc: "C++ tool that compiles broken source files, builds a dependency graph to identify root causes among cascading errors, synthesizes minimal patches via LLM, applies them, and recompiles to verify closing the loop automatically. Features batch mode, git auto-commit, and explain-only mode. The only tool that proves its fixes work.",
    tags: [
      { label: "C++17",              color: "cyan"  },
      { label: "libclang",           color: "cyan"  },
      { label: "Root Cause Analysis",color: "amber" },
      { label: "LLM Integration",    color: "amber" },
      { label: "CMake",              color: "green" },
    ],
    link: "https://github.com/Mosspheree/Codemedic",
  },
  {
    num: "PROJECT 04",
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
    paperLink: "https://par.nsf.gov/servlets/purl/10653860",
  },
  {
    num: "PROJECT 05",
    name: "RISC-V RV32I Processor",
    sub: "3-Stage Pipelined CPU on Intel MAX 10 FPGA",
    desc: "Full 32-bit RISC-V CPU designed from scratch in Verilog HDL and targeting the Intel MAX 10 FPGA. Implements a 3-stage pipeline (Fetch, Decode, Execute/Writeback) with hazard detection, data forwarding, and a memory-mapped UART peripheral. Includes a bare-metal C runtime, linker script, and 5 self-checking testbenches with 19 passing assertions. Verified with Icarus Verilog simulation.",
    tags: [
      { label: "Verilog HDL",       color: "cyan"  },
      { label: "RISC-V RV32I",      color: "cyan"  },
      { label: "Intel MAX 10 FPGA", color: "amber" },
      { label: "Pipeline Design",   color: "amber" },
      { label: "UART Peripheral",   color: "green" },
      { label: "Bare-Metal C",      color: "red"   },
    ],
    link: "https://github.com/Mosspheree/riscv-rv32i-processor",
  },
];


const SKILLS = [
  {
    title: "Languages",
    color: "cyan",
    items: ["C++", "Python", "Java", "JavaScript", "TypeScript", "C", "C#", "SQL", "Kotlin", "MATLAB", "Bash", "HTML/CSS"],
  },
  {
    title: "ML / AI",
    color: "amber",
    items: ["PyTorch", "TensorFlow", "Hugging Face", "ONNX", "scikit-learn", "NumPy", "Pandas", "LangChain", "Azure AI", "DistilBERT", "TinyLLaMA", "Phi-3", "Model Benchmarking"],
  },
  {
    title: "Systems",
    color: "green",
    items: ["HIL/SIL Testing", "Flight Software", "UART/Serial", "CRC Validation", "libclang", "CMake", ".NET", "Docker", "Azure", "CI/CD", "GDB", "Linux", "Git"],
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

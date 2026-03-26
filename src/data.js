/**
 * ============================================
 * LEADERBOARD DATA - EDIT THIS FILE TO UPDATE RESULTS
 * ============================================
 * 
 * HOW TO ADD A NEW MODEL RESULT:
 * 1. Add a new object to the `results` array below
 * 2. Fill in: model, llm, dataset, accuracy, github, description
 * 
 * HOW TO ADD A NEW DATASET:
 * 1. Add results with the new dataset name
 * 2. Add the dataset to the `datasets` array below
 * 
 * HOW TO ADD A NEW LLM FAMILY:
 * 1. Add the LLM name to the `llmFamilies` array below
 */

// ============================================
// DATASETS - Add new dataset names here
// ============================================
export const datasets = [
  "GPQA-Diamond",
  "HLE-Maths", 
  "BrowseCompPlus",
  "SWE-Bench Lite"
];

// ============================================
// LLM FAMILIES - Add new LLM families for filtering
// ============================================
export const llmFamilies = [
  "GPT-4o",
  "GPT-OSS",
  "GPT-5",
  "Gemini-2.5-Pro"
];

// ============================================
// RESULTS DATA - Add your experiment results here
// ============================================
export const results = [
  // -------- GPQA-Diamond Results --------
  {
    model: "DyLAN",
    llm: "GPT-4o",
    dataset: "GPQA-Diamond",
    accuracy: 52.41,
    github: "https://github.com/example/maas",
    description: "Multi-agent collaboration system"
  },
  {
    model: "MaAS",
    llm: "GPT-4o",
    dataset: "GPQA-Diamond",
    accuracy: 52.41,
    github: "https://github.com/example/maas",
    description: "Multi-agent collaboration system"
  },
  {
    model: "ADAS",
    llm: "GPT-4o",
    dataset: "GPQA-Diamond",
    accuracy: 44.4,
    github: "https://github.com/ShengranHu/ADAS",
    description: "Automatically designed agentic systems"
  },
  {
    model: "ADAS",
    llm: "GPT-5",
    dataset: "GPQA-Diamond",
    accuracy: 85.23,
    github: "https://github.com/ShengranHu/ADAS",
    description: "Automatically designed agentic systems"
  },
  {
    model: "AFlow",
    llm: "GPT-OSS",
    dataset: "GPQA-Diamond",
    accuracy: 55.12,
    github: "https://github.com/joaomdmoura/crewai",
    description: "Multi-agent collaboration system"
  },
  {
    model: "MAS-Zero",
    llm: "Gemini-2.5-Pro",
    dataset: "GPQA-Diamond",
    accuracy: 51.88,
    github: "https://github.com/langchain-ai/langgraph",
    description: "Multi-agent collaboration system"
  },
  {
    model: "CoT-SC",
    llm: "GPT-5",
    dataset: "GPQA-Diamond",
    accuracy: 58.95,
    github: "https://github.com/geekan/CoT-SC",
    description: "Software company simulation"
  },

  // -------- HLE-Maths Results --------
  {
    model: "MaAS",
    llm: "GPT-4o",
    dataset: "HLE-Maths",
    accuracy: 45.20,
    github: "https://github.com/example/maas",
    description: "Multi-agent collaboration system"
  },
  {
    model: "DyLAN",
    llm: "GPT-OSS",
    dataset: "HLE-Maths",
    accuracy: 42.15,
    github: "https://github.com/microsoft/autogen",
    description: "Microsoft conversational agents"
  },
  {
    model: "ADAS",
    llm: "GPT-4o",
    dataset: "HLE-Maths",
    accuracy: 3.8,
    github: "https://github.com/ShengranHu/ADAS",
    description: "Automatically designed agentic systems"
  },
  {
    model: "ADAS",
    llm: "GPT-5",
    dataset: "HLE-Maths",
    accuracy: 34.6,
    github: "https://github.com/ShengranHu/ADAS",
    description: "Automatically designed agentic systems"
  },
  {
    model: "AFlow",
    llm: "Gemini-2.5-Pro",
    dataset: "HLE-Maths",
    accuracy: 47.33,
    github: "https://github.com/langchain-ai/langgraph",
    description: "Stateful agent workflows"
  },
  {
    model: "CoT-SC",
    llm: "GPT-4o",
    dataset: "HLE-Maths",
    accuracy: 51.02,
    github: "https://github.com/geekan/CoT-SC",
    description: "Software company simulation"
  },

  // -------- BrowseCompPlus Results --------
  {
    model: "MaAS",
    llm: "GPT-5",
    dataset: "BrowseCompPlus",
    accuracy: 67.45,
    github: "https://github.com/example/maas",
    description: "Multi-agent collaboration system"
  },
  {
    model: "DyLAN",
    llm: "GPT-4o",
    dataset: "BrowseCompPlus",
    accuracy: 63.21,
    github: "https://github.com/microsoft/autogen",
    description: "Microsoft conversational agents"
  },
  {
    model: "ADAS",
    llm: "GPT-4o",
    dataset: "BrowseCompPlus",
    accuracy: 57.2,
    github: "https://github.com/ShengranHu/ADAS",
    description: "Automatically designed agentic systems"
  },
  {
    model: "ADAS",
    llm: "GPT-5",
    dataset: "BrowseCompPlus",
    accuracy: 67.63,
    github: "https://github.com/ShengranHu/ADAS",
    description: "Automatically designed agentic systems"
  },
  {
    model: "AFlow",
    llm: "GPT-o3",
    dataset: "BrowseCompPlus",
    accuracy: 65.77,
    github: "https://github.com/langchain-ai/langgraph",
    description: "Stateful agent workflows"
  },
  {
    model: "CoT-SC",
    llm: "GPT-4o",
    dataset: "BrowseCompPlus",
    accuracy: 69.34,
    github: "https://github.com/geekan/CoT-SC",
    description: "Software company simulation"
  },

  // -------- SWE-Bench Lite Results --------
  {
    model: "MaAS",
    llm: "GPT-4o",
    dataset: "SWE-Bench Lite",
    accuracy: 38.50,
    github: "https://github.com/example/maas",
    description: "Multi-agent collaboration system"
  },
  {
    model: "DyLAN",
    llm: "Gemini-2.5-Pro",
    dataset: "SWE-Bench Lite",
    accuracy: 35.12,
    github: "https://github.com/microsoft/autogen",
    description: "Microsoft conversational agents"
  },
  {
    model: "ADAS",
    llm: "GPT-4o",
    dataset: "SWE-Bench Lite",
    accuracy: 8.97,
    github: "https://github.com/ShengranHu/ADAS",
    description: "Automatically designed agentic systems"
  },
  {
    model: "ADAS",
    llm: "GPT-5",
    dataset: "SWE-Bench Lite",
    accuracy: 27.23,
    github: "https://github.com/ShengranHu/ADAS",
    description: "Automatically designed agentic systems"
  },
  {
    model: "AFlow",
    llm: "GPT-5",
    dataset: "SWE-Bench Lite",
    accuracy: 44.23,
    github: "https://github.com/langchain-ai/langgraph",
    description: "Stateful agent workflows"
  },
  {
    model: "CoT-SC",
    llm: "GPT-4o",
    dataset: "SWE-Bench Lite",
    accuracy: 46.89,
    github: "https://github.com/geekan/CoT-SC",
    description: "Software company simulation"
  },
];

// ============================================
// SITE CONFIGURATION
// ============================================
export const siteConfig = {
  title: "Multi-Agent System Leaderboard",
  subtitle: "Comparing Automatic Multi-Agent System Performance Across Benchmarks",
  // GitHub repo for the leaderboard itself (optional)
  repoUrl: "https://github.com/your-username/mas-leaderboard",
};

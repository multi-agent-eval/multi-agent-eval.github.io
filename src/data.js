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
    model: "CoT-SC",
    llm: "GPT-4o",
    dataset: "GPQA-Diamond",
    accuracy: 48.44,
    github: "https://github.com/geekan/CoT-SC",
    description: "Vanilla Chain-of-Thought Ensemble"
  },
  {
    model: "CoT-SC",
    llm: "GPT-5",
    dataset: "GPQA-Diamond",
    accuracy: 86.47,
    github: "https://github.com/geekan/CoT-SC",
    description: "Vanilla Chain-of-Thought Ensemble"
  },
  {
    model: "DyLAN",
    llm: "GPT-4o",
    dataset: "GPQA-Diamond",
    accuracy: 53.01,
    github: "https://github.com/SALT-NLP/DyLAN",
    description: "An LLM-agent Collaboration Framework with Agent Team Optimization"
  },
  {
    model: "DyLAN",
    llm: "GPT-5",
    dataset: "GPQA-Diamond",
    accuracy: 82.33,
    github: "https://github.com/SALT-NLP/DyLAN",
    description: "An LLM-agent Collaboration Framework with Agent Team Optimization"
  },
  {
    model: "AFlow",
    llm: "GPT-4o",
    dataset: "GPQA-Diamond",
    accuracy: 52.01,
    github: "https://github.com/FoundationAgents/AFlow",
    description: "A framework for automatically generating and optimizing Agentic Workflows."
  },
  {
    model: "AFlow",
    llm: "GPT-5",
    dataset: "GPQA-Diamond",
    accuracy: 84.14,
    github: "https://github.com/FoundationAgents/AFlow",
    description: "A framework for automatically generating and optimizing Agentic Workflows."
  },
  {
    model: "MaAS",
    llm: "GPT-4o",
    dataset: "GPQA-Diamond",
    accuracy: 51.40,
    github: "https://github.com/bingreeky/MaAS",
    description: "Multi-agent Architecture Search via Agentic Supernet"
  },
  {
    model: "MaAS",
    llm: "GPT-5",
    dataset: "GPQA-Diamond",
    accuracy: 86.95,
    github: "https://github.com/bingreeky/MaAS",
    description: "Multi-agent Architecture Search via Agentic Supernet"
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
    model: "MAS-Zero",
    llm: "GPT-4o",
    dataset: "GPQA-Diamond",
    accuracy: 43.37,
    github: "https://github.com/SalesforceAIResearch/MAS-Zero",
    description: "Designing Multi-Agent Systems with Zero Supervision"
  },
  {
    model: "MAS-Zero",
    llm: "GPT-5",
    dataset: "GPQA-Diamond",
    accuracy: 86.75,
    github: "https://github.com/SalesforceAIResearch/MAS-Zero",
    description: "Designing Multi-Agent Systems with Zero Supervision"
  },
  

  // -------- HLE-Maths Results --------
  {
    model: "CoT-SC",
    llm: "GPT-4o",
    dataset: "HLE-Maths",
    accuracy: 3.78,
    github: "https://github.com/geekan/CoT-SC",
    description: "Vanilla Chain-of-Thought Ensemble"
  },
  {
    model: "CoT-SC",
    llm: "GPT-5",
    dataset: "HLE-Maths",
    accuracy: 31.21,
    github: "https://github.com/geekan/CoT-SC",
    description: "Vanilla Chain-of-Thought Ensemble"
  },
  {
    model: "DyLAN",
    llm: "GPT-4o",
    dataset: "HLE-Maths",
    accuracy: 3.57,
    github: "https://github.com/SALT-NLP/DyLAN",
    description: "An LLM-agent Collaboration Framework with Agent Team Optimization"
  },
  {
    model: "DyLAN",
    llm: "GPT-5",
    dataset: "HLE-Maths",
    accuracy: 35.52,
    github: "https://github.com/SALT-NLP/DyLAN",
    description: "An LLM-agent Collaboration Framework with Agent Team Optimization"
  },
  {
    model: "AFlow",
    llm: "GPT-4o",
    dataset: "HLE-Maths",
    accuracy: 2.78,
    github: "https://github.com/FoundationAgents/AFlow",
    description: "A framework for automatically generating and optimizing Agentic Workflows."
  },
  {
    model: "AFlow",
    llm: "GPT-5",
    dataset: "HLE-Maths",
    accuracy: 32.74,
    github: "https://github.com/FoundationAgents/AFlow",
    description: "A framework for automatically generating and optimizing Agentic Workflows."
  },
  {
    model: "MaAS",
    llm: "GPT-4o",
    dataset: "HLE-Maths",
    accuracy: 4.76,
    github: "https://github.com/bingreeky/MaAS",
    description: "Multi-agent Architecture Search via Agentic Supernet"
  },
  {
    model: "MaAS",
    llm: "GPT-5",
    dataset: "HLE-Maths",
    accuracy: 35.32,
    github: "https://github.com/bingreeky/MaAS",
    description: "Multi-agent Architecture Search via Agentic Supernet"
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
    model: "MAS-Zero",
    llm: "GPT-4o",
    dataset: "HLE-Maths",
    accuracy: 3.17,
    github: "https://github.com/SalesforceAIResearch/MAS-Zero",
    description: "Designing Multi-Agent Systems with Zero Supervision"
  },
  {
    model: "MAS-Zero",
    llm: "GPT-5",
    dataset: "HLE-Maths",
    accuracy: 38.20,
    github: "https://github.com/SalesforceAIResearch/MAS-Zero",
    description: "Designing Multi-Agent Systems with Zero Supervision"
  },
  
  

  // -------- BrowseCompPlus Results --------
  {
    model: "CoT-SC",
    llm: "GPT-4o",
    dataset: "BrowseCompPlus",
    accuracy: 62.03,
    github: "https://github.com/geekan/CoT-SC",
    description: "Vanilla Chain-of-Thought Ensemble"
  },
  {
    model: "CoT-SC",
    llm: "GPT-5",
    dataset: "BrowseCompPlus",
    accuracy: 78.52,
    github: "https://github.com/geekan/CoT-SC",
    description: "Vanilla Chain-of-Thought Ensemble"
  },
  {
    model: "DyLAN",
    llm: "GPT-4o",
    dataset: "BrowseCompPlus",
    accuracy: 63.30,
    github: "https://github.com/SALT-NLP/DyLAN",
    description: "An LLM-agent Collaboration Framework with Agent Team Optimization"
  },
  {
    model: "DyLAN",
    llm: "GPT-5",
    dataset: "BrowseCompPlus",
    accuracy: 76.19,
    github: "https://github.com/SALT-NLP/DyLAN",
    description: "An LLM-agent Collaboration Framework with Agent Team Optimization"
  },
  {
    model: "AFlow",
    llm: "GPT-4o",
    dataset: "BrowseCompPlus",
    accuracy: 59.92,
    github: "https://github.com/FoundationAgents/AFlow",
    description: "A framework for automatically generating and optimizing Agentic Workflows."
  },
  {
    model: "AFlow",
    llm: "GPT-5",
    dataset: "BrowseCompPlus",
    accuracy: 75.79,
    github: "https://github.com/FoundationAgents/AFlow",
    description: "A framework for automatically generating and optimizing Agentic Workflows."
  },
  {
    model: "MaAS",
    llm: "GPT-4o",
    dataset: "BrowseCompPlus",
    accuracy: 64.88,
    github: "https://github.com/bingreeky/MaAS",
    description: "Multi-agent Architecture Search via Agentic Supernet"
  },
  {
    model: "MaAS",
    llm: "GPT-5",
    dataset: "BrowseCompPlus",
    accuracy: 83.92,
    github: "https://github.com/bingreeky/MaAS",
    description: "Multi-agent Architecture Search via Agentic Supernet"
  },
  {
    model: "ADAS",
    llm: "GPT-4o",
    dataset: "BrowseCompPlus",
    accuracy: 57.20,
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
    model: "MAS-Zero",
    llm: "GPT-4o",
    dataset: "BrowseCompPlus",
    accuracy: 61.89,
    github: "https://github.com/SalesforceAIResearch/MAS-Zero",
    description: "Designing Multi-Agent Systems with Zero Supervision"
  },
  {
    model: "MAS-Zero",
    llm: "GPT-5",
    dataset: "BrowseCompPlus",
    accuracy: 71.63,
    github: "https://github.com/SalesforceAIResearch/MAS-Zero",
    description: "Designing Multi-Agent Systems with Zero Supervision"
  },
  
 

  // -------- SWE-Bench Lite Results --------
  {
    model: "CoT-SC",
    llm: "GPT-4o",
    dataset: "SWE-Bench Lite",
    accuracy: 15.20,
    github: "https://github.com/geekan/CoT-SC",
    description: "Vanilla Chain-of-Thought Ensemble"
  },
  {
    model: "CoT-SC",
    llm: "GPT-5",
    dataset: "SWE-Bench Lite",
    accuracy: 42.78,
    github: "https://github.com/geekan/CoT-SC",
    description: "Vanilla Chain-of-Thought Ensemble"
  },
  {
    model: "DyLAN",
    llm: "GPT-4o",
    dataset: "SWE-Bench Lite",
    accuracy: 19.28,
    github: "https://github.com/SALT-NLP/DyLAN",
    description: "An LLM-agent Collaboration Framework with Agent Team Optimization"
  },
  {
    model: "DyLAN",
    llm: "GPT-5",
    dataset: "SWE-Bench Lite",
    accuracy: 55.97,
    github: "https://github.com/SALT-NLP/DyLAN",
    description: "An LLM-agent Collaboration Framework with Agent Team Optimization"
  },
  {
    model: "AFlow",
    llm: "GPT-4o",
    dataset: "SWE-Bench Lite",
    accuracy: 10.57,
    github: "https://github.com/FoundationAgents/AFlow",
    description: "A framework for automatically generating and optimizing Agentic Workflows."
  },
  {
    model: "AFlow",
    llm: "GPT-5",
    dataset: "SWE-Bench Lite",
    accuracy: 39.05,
    github: "https://github.com/FoundationAgents/AFlow",
    description: "A framework for automatically generating and optimizing Agentic Workflows."
  },
  {
    model: "MaAS",
    llm: "GPT-4o",
    dataset: "SWE-Bench Lite",
    accuracy: 12.19,
    github: "https://github.com/bingreeky/MaAS",
    description: "Multi-agent Architecture Search via Agentic Supernet"
  },
  {
    model: "MaAS",
    llm: "GPT-5",
    dataset: "SWE-Bench Lite",
    accuracy: 32.71,
    github: "https://github.com/bingreeky/MaAS",
    description: "Multi-agent Architecture Search via Agentic Supernet"
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
    model: "MAS-Zero",
    llm: "GPT-4o",
    dataset: "SWE-Bench Lite",
    accuracy: 15.17,
    github: "https://github.com/SalesforceAIResearch/MAS-Zero",
    description: "Designing Multi-Agent Systems with Zero Supervision"
  },
  {
    model: "MAS-Zero",
    llm: "GPT-5",
    dataset: "SWE-Bench Lite",
    accuracy: 45.52,
    github: "https://github.com/SalesforceAIResearch/MAS-Zero",
    description: "Designing Multi-Agent Systems with Zero Supervision"
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

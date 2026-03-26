/**
 * ============================================
 * WEBSITE CONTENT - EDIT THIS FILE TO UPDATE CONTENT
 * ============================================
 *
 * Keep content brief and web-friendly. Add your own text and citations.
 */

// ============================================
// SITE METADATA
// ============================================
export const metadata = {
  title: "Multi-Agent System Evaluation",
  subtitle: "Benchmarking automatic multi-agent systems across diverse reasoning tasks",
  authors: [
    { name: "Your Name", affiliation: "Your Institution", url: "#" },
    // Add more authors as needed
  ],
  date: "March 2026",
  arxivUrl: "#", // Add your arXiv link when available
  githubUrl: "https://github.com/your-username/mas-leaderboard",
};

// ============================================
// NO ABSTRACT - Start directly with Introduction
// ============================================
export const abstract = null; // Set to null to hide abstract section

export const introduction = {
  title: "Introduction",
  content: `
    Multi-agent systems (MAS) promise to solve complex problems by coordinating specialized agents. The prevailing hypothesis is that decomposing tasks into subtasks handled by multiple agents should improve performance—especially for weaker models that benefit from task simplification. But does this hold in practice?

    We evaluate several automatic MAS frameworks on standard benchmarks spanning scientific reasoning (GPQA), mathematics (HLE-Maths), web comprehension (BrowseCompPlus), and software engineering (SWE-Bench Lite). Surprisingly, we find that simple chain-of-thought reasoning (CoT-SC) with strong models often outperforms complex multi-agent orchestration. This raises a critical question: are these benchmarks actually suited for multi-agent decomposition, or do they inherently resist being broken into meaningful subtasks?

    To isolate coordination ability from domain complexity, we design a synthetic stock portfolio benchmark with clear parallel decomposition structure. Here we observe that MAS improves performance for large models like GPT-5, but provides little benefit—or even hurts performance—for smaller models like GPT-4o. This contradicts the conventional wisdom that multi-agent systems primarily help weaker models by simplifying complex tasks.

    Finally, we conduct a deeper investigation into task decomposition itself. A fundamental challenge in evaluating MAS is that existing benchmarks conflate two distinct capabilities: **(1) sub-agent execution skills** (can individual agents perform their assigned subtasks?) and **(2) meta-agent orchestration** (can the system correctly decompose tasks and coordinate agents?). Our synthetic benchmark allows us to disentangle these factors by systematically varying agent granularity and testing whether meta-agents can discover optimal decomposition strategies—a question that traditional benchmarks cannot answer.
  `,
  citations: [
    "[1] Author et al. (2023). Paper Title. arXiv:1234.5678",
    "[2] Another Author et al. (2024). Another Paper. Conference/Journal",
    // Add your citations here - they'll appear at the bottom of the section
  ]
};

// ============================================
// MODELS AND DATASETS
// ============================================
export const modelsAndDatasets = {
  title: "Models and Datasets",
  intro: ``,

  models: {
    title: "Multi-Agent Systems",
    description: "We evaluate the following systems:",
    systems: [
      {
        name: "MaAS",
        description: "Collaborative framework with shared workspace",
        paper: "#",
      },
      {
        name: "DyLAN",
        description: "Dynamically assembles agent teams based on task needs",
        paper: "#",
      },
      {
        name: "ADAS",
        description: "Automatically designs agent architectures",
        paper: "https://github.com/ShengranHu/ADAS",
      },
      {
        name: "AFlow",
        description: "Workflow-based system with explicit control flow",
        paper: "#",
      },
      {
        name: "CoT-SC",
        description: "Single-agent baseline (chain-of-thought + self-consistency)",
        paper: "#",
      },
    ]
  },

  datasets: {
    title: "Benchmark Datasets",
    description: "Four benchmarks spanning different domains:",
    benchmarks: [
      {
        name: "GPQA-Diamond",
        domain: "Scientific Reasoning",
        description: "Graduate-level science questions requiring deep domain knowledge",
        stats: "~450 questions, Expert-validated",
        citation: "Rein et al. (2023)"
      },
      {
        name: "HLE-Maths",
        domain: "Mathematical Problem-Solving",
        description: "High-level math problems with proofs and competition-level difficulty",
        stats: "~500 problems",
        citation: "Various sources"
      },
      {
        name: "BrowseCompPlus",
        domain: "Web Comprehension",
        description: "Real-world web browsing and information synthesis tasks",
        stats: "~300 tasks",
        citation: "Extended from WebShop"
      },
      {
        name: "SWE-Bench Lite",
        domain: "Software Engineering",
        description: "Real GitHub bug fixes and feature implementations",
        stats: "~300 Python tasks",
        citation: "Jimenez et al. (2023)"
      },
    ]
  }
};

// ============================================
// SYNTHETIC DATASET
// ============================================
export const syntheticDataset = {
  title: "Synthetic Dataset - Stock Portfolio Task",
  intro: `
    Existing benchmarks conflate domain knowledge with coordination ability. To isolate
    multi-agent coordination skills, we created a synthetic stock portfolio task that requires
    parallel processing of multiple investors with complex transaction histories.
  `,

  design: {
    title: "Dataset Design",
    content: `
      Each problem provides extensive context: stock price histories for multiple companies and transaction logs for 2-6 investors.

      **Parallel decomposition**
      Calculate each investor's profit/loss independently by identifying orphan transactions (unpaired buys/sells) and computing portfolio state.

      **Multi-step reasoning**
      For each investor, determine the price needed to achieve a target profit, then find valid dates when that price occurs.

      **Coordination & comparison**
      Aggregate date lists across all investors to identify who can reach the target earliest or latest.

      The haystack includes 20+ companies with daily stock data, but only a subset is relevant to each investor. Systems must efficiently filter information, parallelize calculations, and synthesize results—core multi-agent coordination primitives.
    `
  },

  results: {
    title: "Results",
    content: `
      We evaluate the same systems across varying problem complexity (2, 3, 4, 5, and 6
      parallel investors). Results show how coordination overhead scales with problem size.
    `
  }
};

// ============================================
// META-AGENT BENCHMARK
// ============================================
export const metaAgentBenchmark = {
  title: "Meta-Agent Benchmark",
  intro: `
    Beyond executing tasks, can systems adaptively plan and compose sub-agents? We evaluate
    how meta-agents decompose our synthetic task based on available tools, and whether
    agent granularity affects performance.
  `,

  framework: {
    title: "Framework",
    content: `
      We provided GPT-5 with the synthetic stock portfolio task and asked it to act as a
      meta-agent: decompose the problem and specify which sub-agents/tools to use. We then
      varied the granularity of available sub-agents to observe how plans adapt.
    `
  },

  initialExample: {
    title: "Initial Exploration: Fine vs. Coarse-Grained Agents",
    content: `
      When asked to decompose the synthetic task, GPT-5's strategy changed based on available tools.

      **Scenario 1: No constraints**
      GPT-5 proposed a highly fine-grained decomposition:
      • StockDataParser - Extract relevant stock data from context
      • TransactionMatcher - Find orphan buy/sell transactions
      • PortfolioCalculator - Compute profit/loss for each investor
      • PriceTargetSolver - Calculate required price for target profit
      • DateFinder - Identify dates matching target price
      • ComparativeAnalyzer - Compare dates across investors
      • ResultSynthesizer - Format final answer

      **Scenario 2: Coarse-grained constraints**
      When given only broader tools, the meta-agent adapted:
      • DataFilter - Extract all relevant stock and transaction data
      • Calculator - Perform all numerical computations (profit, target price, etc.)
      • Comparator - Compare results and determine winner

      **Observation**
      The meta-agent successfully adapted to tool availability, but changed its decomposition strategy. This raises the question: does agent granularity affect final performance?
    `
  },

  experiments: {
    title: "Planned Experiments",
    intro: `
      Sub-task decomposition is fundamentally dependent on the tools and building blocks available to a meta-agent. We hypothesize that there exists an optimal level of granularity for decomposition—and that this optimum is task-dependent. Some problems benefit from fine-grained specialized agents, while others may be better suited for coarse abstractions or even direct chain-of-thought reasoning.

      This benchmark moves beyond automatic multi-agent systems to universally test meta-agent capabilities: whether the orchestrator is a learned system, a rule-based planner, or an LLM acting as coordinator. We aim to answer a core question: can meta-agents correctly identify and execute the optimal breakdown strategy?
    `,
    subsections: [
      {
        title: "Fixed Granularity Comparison",
        content: `
          We systematically test three granularity settings on the synthetic stock portfolio task:

          **Fine-grained decomposition (7 specialized agents)**
          • DataParser - Extract stock price data from haystack
          • TransactionMatcher - Identify orphan transactions
          • PortfolioCalculator - Compute profit/loss per investor
          • PriceTargetSolver - Calculate required price for target
          • DateFinder - Find dates when target price occurs
          • ComparativeAnalyzer - Compare dates across investors
          • ResultSynthesizer - Format final answer

          **Coarse-grained decomposition (3 broad tools)**
          • DataProcessor - Handle all data extraction and filtering
          • Calculator - Perform all numerical computations
          • AnswerGenerator - Compare and format final result

          **Abstract reasoning (non-task-specific)**
          • Chain-of-Thought (CoT) - Direct reasoning without explicit decomposition
          • Debate - Multiple reasoning perspectives competing
          • Reflexion - Iterative self-reflection and refinement

          Each configuration is tested across varying task complexity (2-6 investors) to measure how granularity interacts with problem scale. We compare performance (accuracy), cost (token usage), and runtime efficiency.
        `
      },
      {
        title: "Optimal Granularity Discovery",
        content: `
          Can meta-agents discover the optimal decomposition without being explicitly told which tools to use?

          **With ideal sub-agents provided**
          When given access to perfectly-implemented fine-grained tools, can the meta-agent correctly identify which subset to use and in what order? This tests planning ability in a controlled setting where execution is guaranteed to succeed.

          **Without constraints (unconstrained planning)**
          When asked to propose arbitrary decompositions with no tool library, do meta-agents converge on the optimal granularity we identified empirically? Our hypothesis: probably not. Without execution feedback, planning may be overly abstract or mismatched to task requirements.

          This experiment isolates the meta-agent's ability to reason about task structure and coordination needs—a capability distinct from multi-agent execution.
        `
      },
      {
        title: "Performance-Cost-Speed Tradeoffs",
        content: `
          Different granularities present distinct tradeoffs:

          **Fine-grained agents**
          • Pro: Better parallelization, clearer reasoning traces, easier debugging
          • Con: Coordination overhead, more API calls, higher latency

          **Coarse-grained agents**
          • Pro: Lower overhead, faster execution, fewer token costs
          • Con: Less interpretable, harder to parallelize, potential for monolithic failures

          **Abstract reasoning**
          • Pro: Minimal overhead, flexible approach, model-native reasoning
          • Con: No explicit structure, harder to debug, limited parallelization

          We systematically quantify these tradeoffs across the complexity spectrum (2-6 investors), providing empirical guidance for practitioners: when is fine-grained decomposition worth the overhead, and when should you stick with simpler approaches?
        `
      }
    ]
  }
};

// ============================================
// LEADERBOARD RESULTS DESCRIPTION
// ============================================
export const leaderboardResults = {
  title: "Results Summary",
  content: `
    Across standard benchmarks, we observe that simple chain-of-thought reasoning with self-consistency (CoT-SC) achieves competitive or superior performance compared to complex multi-agent systems. This suggests that the coordination overhead and potential for inter-agent communication errors may outweigh the benefits of task decomposition on these datasets.

    The limited gains from multi-agent approaches raise questions about whether these benchmarks inherently favor monolithic reasoning, or whether current automatic MAS frameworks have not yet identified the right decomposition strategies for these problems.
  `
};

// ============================================
// DISCUSSION AND CONCLUSION
// ============================================
export const discussion = {
  title: "Discussion",
  content: `
    **When multi-agent helps**: Tasks needing diverse perspectives, parallel work, or iteration.

    **When it doesn't**: Simple, well-defined problems where coordination overhead isn't worth it.
  `
};

export const conclusion = {
  title: "Conclusion",
  content: `
    Multi-agent systems show promise for complex tasks, but aren't always better than
    single-agent baselines. Our synthetic benchmark and meta-agent experiments aim to
    disentangle coordination ability from domain knowledge, providing clearer insights
    into when and how multi-agent decomposition actually helps.
  `
};

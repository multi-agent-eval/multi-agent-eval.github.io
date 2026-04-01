# Multi-Agent System Evaluation

A research paper-style website for presenting comprehensive multi-agent system benchmarks in an approachable blog format.

![Preview](https://img.shields.io/badge/React-19-blue) ![Vite](https://img.shields.io/badge/Vite-7-purple)

## ✨ Features

- **Research Paper Layout**: Clean, academic-style presentation with sections, citations, and structured content
- **Interactive Leaderboard**: Embedded sortable and filterable benchmark results
- **Easy Content Editing**: Update research content in `src/content.js`
- **Flexible Results Management**: Update benchmark data in `src/data.js`
- **Light Mode Theme**: Professional, readable design
- **Responsive**: Works on desktop and mobile
- **Modular Structure**: Separate content from code for easy maintenance

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

## ⚡ Common Tasks

### I want to... update my introduction
→ Edit `src/content.js`, find `export const introduction`, fill in the placeholder text

### I want to... add a new benchmark result
→ Edit `src/data.js`, add a new object to the `results` array

### I want to... describe my synthetic dataset
→ Edit `src/content.js`, find `syntheticDataset`, replace the placeholder text

### I want to... add my experimental findings
→ Edit `src/content.js`, find `metaAgentBenchmark.experiments.subsections`, fill in placeholders

### I want to... update author information
→ Edit `src/content.js`, update the `metadata.authors` array

### I want to... add citations
→ Edit `src/content.js`, add to the `citations` array in `introduction` (example already there)

### I want to... change the title
→ Edit `src/content.js`, update `metadata.title` and `metadata.subtitle`

## 📝 Editing Your Content

The website has **two main files** you'll edit:

### 1. **`src/content.js`** - Website Text Content

This file contains all text content. Keep it **brief and web-friendly** - save detailed writing for your paper.

#### Paper Metadata
```javascript
export const metadata = {
  title: "Your Paper Title",
  subtitle: "Brief subtitle",
  authors: [
    {
      name: "Your Name",
      affiliation: "Your Institution",
      url: "https://yourwebsite.com"
    }
  ],
  date: "March 2026",
  arxivUrl: "https://arxiv.org/abs/...",
  githubUrl: "https://github.com/your-username/your-repo",
};
```

#### Introduction (No Abstract, No Section Numbers)
```javascript
export const introduction = {
  title: "Introduction",
  content: `
    Keep it short - 2-3 paragraphs max.

    Your intro text here...
  `,
  citations: [
    "[1] Author et al. (2023). Paper title. arXiv:1234.5678",
    "[2] Another citation..."
    // These appear at the bottom of the section
  ]
};
```

#### All Sections Follow This Pattern
```javascript
export const sectionName = {
  title: "Section Title",  // No numbering!
  content: `
    [Keep it brief - placeholder text shows what to add]

    Your 1-2 paragraph summary here...
  `,
  // Optional citations
  citations: ["[1] Citation here..."]
};
```

**The file has placeholder text showing you exactly what to add.** Just fill in the brackets!

#### Creating Visual Info Boxes

Use bold headers (**Setup**, **Hypothesis**, **Observation**) to create colored info boxes:

```javascript
content: `
  Regular paragraph text here.

  **Setup**
  This text will appear in a blue info box with a colored border.

  **Hypothesis**
  This text will appear in a purple info box.

  **Observation**
  This text will appear in a green info box.
`
```

These are automatically styled with color-coded borders and backgrounds!

### 2. **`src/data.js`** - Benchmark Results

This file contains the actual benchmark data for the leaderboard tables.

#### Adding a New Model Result

Add a new object to the `results` array:

```javascript
{
  model: "YourModel",           // Model name (displayed in table)
  llm: "GPT-4o",                // Base LLM used
  dataset: "GPQA-Diamond",      // Dataset name (must match a dataset)
  accuracy: 55.67,              // Accuracy percentage
  github: "https://github.com/...", // Link to model code
  description: "Brief model description"  // 4-5 word description
}
```

#### Adding a New Dataset

1. Add the dataset name to the `datasets` array:
```javascript
export const datasets = [
  "GPQA-Diamond",
  "HLE-Maths",
  "BrowseCompPlus",
  "SWE-Bench Lite",
  "YourNewDataset"  // Add here
];
```

2. Add results for that dataset to the `results` array
3. Optionally describe the dataset in `src/content.js` under `modelsAndDatasets.datasets.benchmarks`

#### Adding a New LLM Family

Add the LLM name to the `llmFamilies` array for it to appear in the filter:

```javascript
export const llmFamilies = [
  "GPT-4o",
  "GPT-5",
  "GPT-o3",
  "Gemini-2.5-Pro",
  "YourLLM"  // Add here
];
```

## 📊 Updating Result Tables

### Synthetic Dataset Results

Edit the `SyntheticResultsTable` component in `src/App.jsx`:

```javascript
const SyntheticResultsTable = () => {
  const directResults/codeResults = [
    {
      model: 'MaAS',
      llm: 'GPT-4o',
      investors_2: 85.5,  // Replace with your results
      investors_3: 78.2,
      investors_4: 71.8,
      investors_5: 65.3,
      investors_6: 58.9
    },
    // Add more rows for other models
  ];
  // ... rest stays the same
};
```

### Meta-Agent Benchmark Results

Edit the `MetaAgentResultsTable` component in `src/App.jsx`:

```javascript
const MetaAgentResultsTable = () => {
  const metaAgentResults = [
    {
      model: 'GPT-5',
      granularity: 'Fine-grained (10+ agents)',
      accuracy: 72.4  // Replace with your results
    },
    // Add more rows for different granularities
  ];
  // ... rest stays the same
};
```

### Creating New Tables

To add completely custom tables:

1. Look at `SyntheticResultsTable` or `MetaAgentResultsTable` as templates
2. Create a new component in `src/App.jsx`
3. Use the `leaderboard-table` class for consistent styling
4. Insert the component where you want it to appear

## 🎨 Customizing the Theme

All theme variables are in `src/index.css` at the top of the file (lines 1-50). The site currently uses a **light mode theme**. You can customize:

- **Colors**: Background, accent, text colors
- **Typography**: Font families
- **Spacing**: Border radius, shadows

```css
:root {
  /* Primary colors - Light Mode */
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f8fafc;
  --color-text-primary: #0f172a;
  --color-accent-primary: #6366f1;

  /* Change these to customize */
}
```

### Switching to Dark Theme

To switch to a dark theme, update the color values:

```css
:root {
  /* Primary colors - Dark Mode */
  --color-bg-primary: #0a0a0f;
  --color-bg-secondary: #12121a;
  --color-text-primary: #f1f5f9;
  --color-text-secondary: #94a3b8;
  --color-border: #2a2a3a;
  /* ... etc */
}
```

### Customizing Accent Colors

The accent color is used for buttons, links, and highlights:

```css
:root {
  --color-accent-primary: #6366f1;   /* Indigo (default) */
  --color-accent-secondary: #4f46e5; /* Darker indigo */

  /* Try other colors:
  --color-accent-primary: #10b981;   /* Green */
  --color-accent-primary: #f59e0b;   /* Orange */
  --color-accent-primary: #ec4899;   /* Pink */
  */
}
```

## 🌐 Deploying to GitHub Pages

### Option 1: GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install and Build
        run: |
          npm ci
          npm run build
          
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Option 2: Manual Deploy

```bash
# Install gh-pages if not already installed
npm install --save-dev gh-pages

# Deploy
npm run deploy
```

### Important: Update Base Path

Before deploying, update `vite.config.js` with your repository name:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',  // Change this!
})
```

## 📁 Project Structure

```
multi-agent-eval/
├── src/
│   ├── content.js   # ← Edit this to update research paper text
│   ├── data.js      # ← Edit this to update benchmark results
│   ├── App.jsx      # Main application component (React code)
│   ├── index.css    # Styles and theme variables
│   └── main.jsx     # Entry point
├── index.html       # HTML template
├── vite.config.js   # Vite configuration
├── package.json     # Dependencies and scripts
└── README.md        # This file
```

### Key Files

| File | Purpose | What to Edit |
|------|---------|--------------|
| `src/content.js` | Research paper text content | All paper sections, citations, descriptions |
| `src/data.js` | Benchmark results data | Model results, dataset names, LLM families |
| `src/index.css` | Visual styling | Colors, fonts, spacing (if needed) |
| `src/App.jsx` | React components | Layout, custom tables/charts (advanced) |

## 💡 Tips & Best Practices

### Writing Content

1. **Keep it brief** - This is a website, not a paper. 2-3 paragraphs max per section.
2. **Follow the placeholders** - `src/content.js` has brackets showing exactly what to add
3. **Use simple formatting**:
   - `**bold text**` for emphasis
   - Bullet points with `•`
   - Separate paragraphs with blank lines

4. **Citations** - Use numbering: `[1]`, `[2]`, etc. (example in introduction)

### Organizing Results

1. **Group by dataset** in `src/data.js` with comments
2. **Use consistent model names** across datasets
3. **Keep descriptions short** (4-6 words) - they appear under model names
4. **Update `llmFamilies`** when adding new LLMs

### Content Structure

Simple, web-friendly structure (no section numbers):
- **Introduction** - Brief motivation (2-3 paragraphs)
- **Models & Datasets** - What you're testing
- **Results** - Interactive leaderboard + your custom sections
- **Synthetic Dataset** - Your coordination benchmark (if applicable)
- **Meta-Agent Benchmark** - Your experiments (if applicable)
- **Discussion** - Key insights (punchy, brief)
- **Conclusion** - Quick wrap-up (2-3 sentences)

### Placeholder Boxes

Gray dashed boxes = **add your content here**. Replace them by:
1. Writing prose in `src/content.js`, or
2. Creating a custom table/chart in `src/App.jsx`

## 📄 License

MIT License - feel free to use and modify for your own research!

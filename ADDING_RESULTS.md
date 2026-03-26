# Adding Results to the Leaderboard

Quick guide for team members to add their experimental results to the website.

## 📊 Main Leaderboard Results

**File to edit:** `src/data.js`

### Step 1: Add your result entry

Find the `results` array and add a new entry:

```javascript
export const results = [
  // ... existing results ...

  // Add your new result here:
  {
    model: "YourModelName",           // e.g., "MaAS", "DyLAN", "ADAS"
    llm: "BaseLLMName",                // e.g., "GPT-4o", "Gemini-2.5-Pro"
    dataset: "DatasetName",            // Must match: "GPQA", "HLE-Maths", "BrowseCompPlus", or "SWE-Bench Lite"
    accuracy: 45.2,                    // Your accuracy as a number (e.g., 45.2 for 45.2%)
    description: "Brief description",  // One sentence about your model
    github: "https://github.com/..."   // Link to code/paper
  },
];
```

### Step 2: Verify the dataset name

Make sure your `dataset` field exactly matches one of these:
- `"GPQA"`
- `"HLE-Maths"`
- `"BrowseCompPlus"`
- `"SWE-Bench Lite"`

### Step 3: Add new LLM family (if needed)

If you're using a new base LLM, add it to the `llmFamilies` array:

```javascript
export const llmFamilies = [
  "GPT-4o",
  "GPT-5",
  "Claude-Opus-4",
  "Gemini-2.5-Pro",
  "YourNewLLM",  // Add here
];
```

---

## 📈 Synthetic Dataset Results

**File to edit:** `src/App.jsx`

Find the `SyntheticResultsTable` component (around line 280) and update the `syntheticResults` array:

```javascript
const syntheticResults = [
  {
    model: 'MaAS',
    llm: 'GPT-4o',
    investors_2: 85.5,  // Accuracy for 2 investors
    investors_3: 78.2,  // Accuracy for 3 investors
    investors_4: 71.0,  // Accuracy for 4 investors
    investors_5: 64.8,  // Accuracy for 5 investors
    investors_6: 58.3   // Accuracy for 6 investors
  },
  // Add your results here
];
```

**Important:** All accuracy values should be numbers (e.g., `85.5` not `"85.5%"`)

---

## 🔬 Meta-Agent Granularity Results

**File to edit:** `src/App.jsx`

Find the `MetaAgentResultsTable` component (around line 338) and update the `metaAgentResults` array:

```javascript
const metaAgentResults = [
  {
    model: 'GPT-5',
    granularity: 'Fine-grained (7 specialized agents)',
    accuracy: 82.5
  },
  {
    model: 'GPT-5',
    granularity: 'Coarse-grained (3 broad tools)',
    accuracy: 78.0
  },
  {
    model: 'GPT-5',
    granularity: 'Abstract (CoT/Debate/Reflexion)',
    accuracy: 75.2
  },
  // Add your results here
];
```

**Granularity options:**
- `'Fine-grained (7 specialized agents)'`
- `'Coarse-grained (3 broad tools)'`
- `'Abstract (CoT/Debate/Reflexion)'`

---

## 🚀 Testing Your Changes Locally

1. **Install dependencies** (first time only):
   ```bash
   npm install
   ```

2. **Start dev server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**: Usually `http://localhost:5173`

4. **Verify your results appear correctly** in the appropriate table

---

## 📝 Committing Your Changes

Once you've verified your results locally:

```bash
# Stage your changes
git add src/data.js src/App.jsx

# Commit with a clear message
git commit -m "Add [YourModel] results for [Dataset/Experiment]"

# Push to main
git push origin main
```

The website will automatically rebuild and deploy (if GitHub Pages is configured).

---

## ❓ Common Issues

### My results don't appear
- Check that dataset/LLM names match exactly (case-sensitive)
- Verify accuracy is a number, not a string
- Check browser console for errors

### Table formatting looks wrong
- Make sure all accuracy values are numbers
- Verify you didn't accidentally delete a comma or bracket
- Run `npm run dev` to see syntax errors

### Need help?
- Check the existing entries in the files for examples
- See `README.md` for more detailed content editing instructions
- Ask in the team chat!

---

## 🎯 Quick Checklist

Before committing:
- [ ] Accuracy values are numbers (not strings with `%`)
- [ ] Dataset/LLM names match exactly
- [ ] Tested locally with `npm run dev`
- [ ] No syntax errors in browser console
- [ ] Results display correctly in the table
- [ ] GitHub link works (if applicable)

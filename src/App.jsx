import { useState, useMemo } from 'react';
import { datasets, llmFamilies, results } from './data';
import {
  metadata,
  abstract,
  introduction,
  modelsAndDatasets,
  leaderboardResults,
  syntheticDataset,
  metaAgentBenchmark,
  discussion,
  conclusion
} from './content';
import './index.css';

// GitHub icon SVG component
const GitHubIcon = () => (
  <svg className="github-icon" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

// Sort arrow icon
const SortIcon = () => (
  <span className="sort-icon">▲</span>
);

// Helper to parse and render content with info boxes
const renderContentWithInfoBoxes = (content) => {
  // Process content line by line
  const lines = content.trim().split('\n');
  const elements = [];
  let currentBox = null;
  let currentParagraph = [];

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(' ').trim();
      if (text) {
        elements.push({ type: 'p', content: text });
      }
      currentParagraph = [];
    }
  };

  const flushBox = () => {
    if (currentBox) {
      elements.push(currentBox);
      currentBox = null;
    }
  };

  for (let line of lines) {
    line = line.trim();

    // Check for bold header (info box title)
    const headerMatch = line.match(/^\*\*([^*]+)\*\*$/);

    if (headerMatch) {
      flushParagraph();
      flushBox();

      const title = headerMatch[1].trim();
      const boxType = title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
      const validTypes = ['setup', 'hypothesis', 'observation', 'parallel-decomposition',
                          'multi-step-reasoning', 'coordination-and-comparison',
                          'scenario-1', 'scenario-2'];
      const className = validTypes.includes(boxType) ? boxType : 'default';

      currentBox = {
        type: 'box',
        title: title,
        className: className,
        content: []
      };
    } else if (line === '') {
      // Empty line - might be paragraph break
      if (currentBox && currentBox.content.length > 0) {
        // Within a box, treat as paragraph separator
        const text = currentBox.content.join(' ').trim();
        if (text) {
          currentBox.paragraphs = currentBox.paragraphs || [];
          currentBox.paragraphs.push(text);
          currentBox.content = [];
        }
      } else if (!currentBox) {
        flushParagraph();
      }
    } else {
      // Regular content line
      if (currentBox) {
        currentBox.content.push(line);
      } else {
        currentParagraph.push(line);
      }
    }
  }

  // Flush remaining content
  if (currentBox) {
    const text = currentBox.content.join(' ').trim();
    if (text) {
      currentBox.paragraphs = currentBox.paragraphs || [];
      currentBox.paragraphs.push(text);
    }
    flushBox();
  }
  flushParagraph();

  // Render elements
  return elements.map((element, idx) => {
    if (element.type === 'box') {
      return (
        <div key={idx} className={`info-box ${element.className}`}>
          <div className="info-box-title">{element.title}</div>
          <div className="info-box-content">
            {(element.paragraphs || []).map((para, pIdx) => (
              <p key={pIdx}>{para}</p>
            ))}
          </div>
        </div>
      );
    } else if (element.type === 'p') {
      return <p key={idx}>{element.content}</p>;
    }
    return null;
  });
};

// Leaderboard component (extracted for reuse)
const LeaderboardTable = ({ datasetName }) => {
  const [llmFilter, setLlmFilter] = useState('all');
  const [sortConfig, setSortConfig] = useState({ key: 'accuracy', direction: 'desc' });

  const filteredResults = useMemo(() => {
    let filtered = results.filter(r => r.dataset === datasetName);

    if (llmFilter !== 'all') {
      filtered = filtered.filter(r => r.llm === llmFilter);
    }

    filtered.sort((a, b) => {
      if (sortConfig.key === 'accuracy') {
        return sortConfig.direction === 'desc'
          ? b.accuracy - a.accuracy
          : a.accuracy - b.accuracy;
      }
      if (sortConfig.key === 'model') {
        return sortConfig.direction === 'desc'
          ? b.model.localeCompare(a.model)
          : a.model.localeCompare(b.model);
      }
      if (sortConfig.key === 'llm') {
        return sortConfig.direction === 'desc'
          ? b.llm.localeCompare(a.llm)
          : a.llm.localeCompare(b.llm);
      }
      return 0;
    });

    return filtered;
  }, [datasetName, llmFilter, sortConfig]);

  const maxAccuracy = useMemo(() => {
    return Math.max(...filteredResults.map(r => r.accuracy), 100);
  }, [filteredResults]);

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'desc' ? 'asc' : 'desc'
    }));
  };

  const getRankClass = (rank) => {
    if (rank === 1) return 'rank-1';
    if (rank === 2) return 'rank-2';
    if (rank === 3) return 'rank-3';
    return 'rank-other';
  };

  return (
    <div className="leaderboard-section">
      <div className="filters-bar">
        <div className="filter-group">
          <label className="filter-label">Filter by LLM</label>
          <select
            className="filter-select"
            value={llmFilter}
            onChange={(e) => setLlmFilter(e.target.value)}
          >
            <option value="all">All LLMs</option>
            {llmFamilies.map(llm => (
              <option key={llm} value={llm}>{llm}</option>
            ))}
          </select>
        </div>
        <div className="results-count">
          {filteredResults.length} results
        </div>
      </div>

      <div className="table-container">
        {filteredResults.length > 0 ? (
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th
                  className={`th-sortable ${sortConfig.key === 'model' ? 'sorted' : ''} ${sortConfig.direction}`}
                  onClick={() => handleSort('model')}
                >
                  Model <SortIcon />
                </th>
                <th
                  className={`th-sortable ${sortConfig.key === 'llm' ? 'sorted' : ''} ${sortConfig.direction}`}
                  onClick={() => handleSort('llm')}
                >
                  Base LLM <SortIcon />
                </th>
                <th
                  className={`th-sortable ${sortConfig.key === 'accuracy' ? 'sorted' : ''} ${sortConfig.direction}`}
                  onClick={() => handleSort('accuracy')}
                >
                  Accuracy <SortIcon />
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredResults.map((result, index) => (
                <tr key={`${result.model}-${result.llm}`}>
                  <td className="rank-cell">
                    <span className={`rank-badge ${getRankClass(index + 1)}`}>
                      {index + 1}
                    </span>
                  </td>
                  <td className="model-cell">
                    <a
                      href={result.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="model-link"
                    >
                      {result.model}
                      <GitHubIcon />
                    </a>
                    <div className="model-description">{result.description}</div>
                  </td>
                  <td className="llm-cell">
                    <span className="llm-badge">{result.llm}</span>
                  </td>
                  <td className="accuracy-cell">
                    <div className="accuracy-value">
                      <span className="accuracy-number">{result.accuracy.toFixed(2)}%</span>
                      <div className="accuracy-bar-container">
                        <div
                          className="accuracy-bar"
                          style={{ width: `${(result.accuracy / maxAccuracy) * 100}%` }}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">📊</div>
            <h3>No results found</h3>
            <p>Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Synthetic dataset results table
const SyntheticResultsTable = () => {
  const [scoreView, setScoreView] = useState('direct');
  const [llmFilter, setLlmFilter] = useState('all');

  // Direct answer score (model outputs final answer directly)
  const directResults = [
    { model: 'CoT-SC', llm: 'GPT-4o', investors_2: 40.28, investors_3: 23.61, investors_4: 17.95, investors_5: 12.28, investors_6: 13.57 },
    { model: 'CoT-SC', llm: 'GPT-5', investors_2: 63.20, investors_3: 64.60, investors_4: 66.62, investors_5: 56.10, investors_6: 44.04 },
    { model: 'DyLAN', llm: 'GPT-4o', investors_2: 53.12, investors_3: 29.86, investors_4: 15.06, investors_5: 14.69, investors_6: 14.29 },
    { model: 'DyLAN', llm: 'GPT-5', investors_2: 58.34, investors_3: 59.38, investors_4: 59.29, investors_5: 48.90, investors_6: 39.76 },
    { model: 'AFlow', llm: 'GPT-4o', investors_2: 52.08, investors_3: 27.78, investors_4: 20.51, investors_5: 13.38, investors_6: 18.10 },
    { model: 'AFlow', llm: 'GPT-5', investors_2: 61.11, investors_3: 61.46, investors_4: 58.98, investors_5: 54.39, investors_6: 37.62 },
    { model: 'MaAS', llm: 'GPT-4o', investors_2: 0.0, investors_3: 0.0, investors_4: 0.0, investors_5: 0.0, investors_6: 0.0 },
    { model: 'ADAS', llm: 'GPT-5', investors_2: 0.0, investors_3: 0.0, investors_4: 0.0, investors_5: 0.0, investors_6: 0.0 },
  ];

  // Code execution score (model writes code and is scored by code output)
  // Replace these placeholder values with your code-score results.
  const codeResults = [
    { model: 'CoT-SC', llm: 'GPT-4o', investors_2: 47.57, investors_3: 24.65, investors_4: 11.22, investors_5: 8.77, investors_6: 10.00 },
    { model: 'CoT-SC', llm: 'GPT-5', investors_2: 67.13, investors_3: 56.65, investors_4: 56.37, investors_5: 41.94, investors_6: 28.17 },
    { model: 'DyLAN', llm: 'GPT-4o', investors_2: 42.36, investors_3: 18.06, investors_4: 10.90, investors_5: 5.70, investors_6: 6.43 },
    { model: 'DyLAN', llm: 'GPT-5', investors_2: 52.08, investors_3: 47.22, investors_4: 45.51, investors_5: 36.84, investors_6: 27.38 },
    { model: 'AFlow', llm: 'GPT-4o', investors_2: 39.24, investors_3: 17.71, investors_4: 16.35, investors_5: 7.21, investors_6: 7.86 },
    { model: 'AFlow', llm: 'GPT-5', investors_2: 54.52, investors_3: 46.88, investors_4: 42.63, investors_5: 32.46, investors_6: 20.24 },
    { model: 'MaAS', llm: 'GPT-4o', investors_2: 0.0, investors_3: 0.0, investors_4: 0.0, investors_5: 0.0, investors_6: 0.0 },
    { model: 'ADAS', llm: 'GPT-5', investors_2: 0.0, investors_3: 0.0, investors_4: 0.0, investors_5: 0.0, investors_6: 0.0 },
  ];

  const syntheticResults = scoreView === 'direct' ? directResults : codeResults;
  const llmOptions = ['all', ...new Set(syntheticResults.map((result) => result.llm))];
  const filteredSyntheticResults = llmFilter === 'all'
    ? syntheticResults
    : syntheticResults.filter((result) => result.llm === llmFilter);

  return (
    <div className="results-table-container">
      <div className="results-table-header">
        <div className="results-table-title">Accuracy by Problem Complexity (% of investors)</div>
        <div className="synthetic-controls">
          <div className="synthetic-llm-filter">
            <select
              aria-label="Filter by LLM"
              className="filter-select synthetic-filter-select"
              value={llmFilter}
              onChange={(e) => setLlmFilter(e.target.value)}
            >
              {llmOptions.map((llm) => (
                <option key={llm} value={llm}>
                  {llm === 'all' ? 'All LLMs' : llm}
                </option>
              ))}
            </select>
          </div>
          <div className="score-toggle" role="tablist" aria-label="Score type">
            <button
              type="button"
              className={`score-toggle-button ${scoreView === 'direct' ? 'active' : ''}`}
              onClick={() => setScoreView('direct')}
            >
              Direct Score
            </button>
            <button
              type="button"
              className={`score-toggle-button ${scoreView === 'code' ? 'active' : ''}`}
              onClick={() => setScoreView('code')}
            >
              Code Score
            </button>
          </div>
        </div>
      </div>
      <div className="table-container">
        <table className="leaderboard-table synthetic-results-table">
          <thead>
            <tr>
              <th>Model</th>
              <th>Base LLM</th>
              <th>2 Investors</th>
              <th>3 Investors</th>
              <th>4 Investors</th>
              <th>5 Investors</th>
              <th>6 Investors</th>
            </tr>
          </thead>
          <tbody>
            {filteredSyntheticResults.map((result, index) => (
              <tr key={index}>
                <td className="model-cell">
                  <div style={{ fontWeight: 600 }}>{result.model}</div>
                </td>
                <td className="llm-cell">
                  <span className="llm-badge">{result.llm}</span>
                </td>
                <td className="accuracy-cell">
                  <span className="accuracy-number">{result.investors_2.toFixed(1)}%</span>
                </td>
                <td className="accuracy-cell">
                  <span className="accuracy-number">{result.investors_3.toFixed(1)}%</span>
                </td>
                <td className="accuracy-cell">
                  <span className="accuracy-number">{result.investors_4.toFixed(1)}%</span>
                </td>
                <td className="accuracy-cell">
                  <span className="accuracy-number">{result.investors_5.toFixed(1)}%</span>
                </td>
                <td className="accuracy-cell">
                  <span className="accuracy-number">{result.investors_6.toFixed(1)}%</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Meta-agent benchmark results table
const MetaAgentResultsTable = () => {
  // Placeholder data - replace with actual results
  const metaAgentResults = [
    { model: 'GPT-5', granularity: 'Fine-grained (7 specialized agents)', accuracy: 0.0 },
    { model: 'GPT-5', granularity: 'Coarse-grained (3 broad tools)', accuracy: 0.0 },
    { model: 'GPT-5', granularity: 'Abstract (CoT/Debate/Reflexion)', accuracy: 0.0 },
  ];

  return (
    <div className="results-table-container">
      <div className="results-table-title">Accuracy by Agent Granularity (4 Investors Task)</div>
      <div className="table-container">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Model</th>
              <th>Agent Granularity</th>
              <th>Accuracy</th>
            </tr>
          </thead>
          <tbody>
            {metaAgentResults.map((result, index) => (
              <tr key={index}>
                <td className="llm-cell">
                  <span className="llm-badge">{result.model}</span>
                </td>
                <td style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>
                  {result.granularity}
                </td>
                <td className="accuracy-cell">
                  <span className="accuracy-number">{result.accuracy.toFixed(1)}%</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

function App() {
  const [activeDataset, setActiveDataset] = useState(datasets[0]);

  return (
    <div className="paper-container">
      {/* Paper Header */}
      <header className="paper-header">
        <h1 className="paper-title">{metadata.title}</h1>
        <p className="paper-subtitle">{metadata.subtitle}</p>

        <div className="paper-meta">
          <div className="authors">
            {metadata.authors.map((author, idx) => (
              <span key={idx} className="author">
                {author.url ? (
                  <a href={author.url} target="_blank" rel="noopener noreferrer">
                    {author.name}
                  </a>
                ) : (
                  author.name
                )}
                {author.affiliation && <span className="affiliation">{author.affiliation}</span>}
              </span>
            ))}
          </div>
          <div className="paper-date">{metadata.date}</div>
          <div className="paper-links">
            {metadata.arxivUrl && (
              <a href={metadata.arxivUrl} className="paper-link" target="_blank" rel="noopener noreferrer">
                arXiv
              </a>
            )}
            <a href={metadata.githubUrl} className="paper-link" target="_blank" rel="noopener noreferrer">
              <GitHubIcon /> Code
            </a>
          </div>
        </div>
      </header>

      {/* Abstract (only if not null) */}
      {abstract && (
        <section className="paper-section">
          <h2>{abstract.title}</h2>
          <div className="paper-text">
            {abstract.content.trim().split('\n\n').map((para, idx) => (
              <p key={idx}>{para.trim()}</p>
            ))}
          </div>
        </section>
      )}

      {/* Introduction */}
      <section className="paper-section">
        <h2>{introduction.title}</h2>
        <div className="paper-text">
          {introduction.content.trim().split('\n\n').map((para, idx) => (
            <p key={idx}>{para.trim()}</p>
          ))}
        </div>
        {introduction.citations && introduction.citations.length > 0 && (
          <div className="citations">
            <div className="citations-title">References</div>
            {introduction.citations.map((cite, idx) => (
              <div key={idx} className="citation">{cite}</div>
            ))}
          </div>
        )}
      </section>

      {/* Models and Datasets */}
      <section className="paper-section">
        <h2>{modelsAndDatasets.title}</h2>
        <div className="paper-text">
          <p>{modelsAndDatasets.intro}</p>
        </div>

        <h3>{modelsAndDatasets.models.title}</h3>
        <div className="paper-text">
          <p>{modelsAndDatasets.models.description}</p>
        </div>
        <div className="models-list">
          {modelsAndDatasets.models.systems.map((system, idx) => (
            <div key={idx} className="model-item">
              <strong>{system.name}:</strong> {system.description}
              {system.paper !== "#" && (
                <a href={system.paper} target="_blank" rel="noopener noreferrer" className="inline-link">
                  [code]
                </a>
              )}
            </div>
          ))}
        </div>

        <h3>{modelsAndDatasets.datasets.title}</h3>
        <div className="paper-text">
          <p>{modelsAndDatasets.datasets.description}</p>
        </div>
        <div className="benchmarks-grid">
          {modelsAndDatasets.datasets.benchmarks.map((benchmark, idx) => (
            <div key={idx} className="benchmark-card">
              <h4>{benchmark.name}</h4>
              <div className="benchmark-domain">{benchmark.domain}</div>
              <p>{benchmark.description}</p>
              <div className="benchmark-stats">{benchmark.stats}</div>
            </div>
          ))}
        </div>

        {/* Embedded Results */}
        <h3>Results</h3>
        <div className="paper-text">
          <p>
            Performance across all benchmarks. Filter by dataset and LLM to explore comparisons.
          </p>
        </div>

        {/* Dataset selector */}
        <div className="dataset-selector">
          <label>Select Dataset:</label>
          <div className="dataset-buttons">
            {datasets.map(dataset => (
              <button
                key={dataset}
                className={`dataset-button ${activeDataset === dataset ? 'active' : ''}`}
                onClick={() => setActiveDataset(dataset)}
              >
                {dataset}
              </button>
            ))}
          </div>
        </div>

        <LeaderboardTable datasetName={activeDataset} />

        {/* Pending results notice */}
        <div className="pending-notice">
          <div className="pending-notice-icon">⏳</div>
          <div className="pending-notice-content">
            <div className="pending-notice-title">Pending Results</div>
            <p className="pending-notice-text">
              Results for all models with Gemini-3.0-Pro are currently pending and will be added once evaluations are complete.
            </p>
          </div>
        </div>

        {/* Results description */}
        <h3>{leaderboardResults.title}</h3>
        <div className="paper-text">
          {leaderboardResults.content.trim().split('\n\n').map((para, idx) => (
            <p key={idx}>{para.trim()}</p>
          ))}
        </div>
      </section>

      {/* Synthetic Dataset */}
      <section className="paper-section">
        <h2>{syntheticDataset.title}</h2>
        <div className="paper-text">
          <p>{syntheticDataset.intro}</p>
        </div>

        <h3>{syntheticDataset.design.title}</h3>
        <div className="paper-text">
          {renderContentWithInfoBoxes(syntheticDataset.design.content)}
        </div>

        <h3>{syntheticDataset.results.title}</h3>
        <div className="paper-text">
          <p>{syntheticDataset.results.content}</p>
        </div>

        <SyntheticResultsTable />

        {/* Pending results notice */}
        <div className="pending-notice">
          <div className="pending-notice-icon">⏳</div>
          <div className="pending-notice-content">
            <div className="pending-notice-title">Pending Results</div>
            <p className="pending-notice-text">
              Evaluation on the synthetic stock portfolio dataset is in progress. Results will be updated as experiments complete.
            </p>
          </div>
        </div>
      </section>

      {/* Meta-Agent Benchmark */}
      <section className="paper-section">
        <h2>{metaAgentBenchmark.title}</h2>
        <div className="paper-text">
          <p>{metaAgentBenchmark.intro}</p>
        </div>

        <h3>{metaAgentBenchmark.framework.title}</h3>
        <div className="paper-text">
          {metaAgentBenchmark.framework.content.trim().split('\n\n').map((para, idx) => (
            <p key={idx}>{para.trim()}</p>
          ))}
        </div>

        {/* Initial Example */}
        {metaAgentBenchmark.initialExample && (
          <>
            <h3>{metaAgentBenchmark.initialExample.title}</h3>
            <div className="paper-text">
              {renderContentWithInfoBoxes(metaAgentBenchmark.initialExample.content)}
            </div>
          </>
        )}

        <h3>{metaAgentBenchmark.experiments.title}</h3>
        <div className="paper-text">
          {metaAgentBenchmark.experiments.intro.trim().split('\n\n').map((para, idx) => (
            <p key={idx}>{para.trim()}</p>
          ))}
        </div>
        {metaAgentBenchmark.experiments.subsections.map((subsection, idx) => (
          <div key={idx}>
            <h4>{subsection.title}</h4>
            <div className="paper-text">
              {renderContentWithInfoBoxes(subsection.content)}
            </div>
            {/* Add result table after first experiment */}
            {idx === 0 && (
              <>
                <MetaAgentResultsTable />
                {/* Pending results notice */}
                <div className="pending-notice">
                  <div className="pending-notice-icon">⏳</div>
                  <div className="pending-notice-content">
                    <div className="pending-notice-title">Pending Results</div>
                    <p className="pending-notice-text">
                      Experiments testing different agent granularities (fine-grained, coarse-grained, and abstract reasoning approaches) are currently in progress. Results will be updated as data becomes available.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}

        {/* Future Directions */}
        {metaAgentBenchmark.futureDirections && (
          <>
            <h3>{metaAgentBenchmark.futureDirections.title}</h3>
            <div className="paper-text">
              {metaAgentBenchmark.futureDirections.content.trim().split('\n\n').map((para, idx) => (
                <p key={idx}>{para.trim()}</p>
              ))}
            </div>
          </>
        )}
      </section>

      {/* Discussion */}
      <section className="paper-section">
        <h2>{discussion.title}</h2>
        <div className="paper-text">
          {discussion.content.trim().split('\n\n').map((para, idx) => (
            <p key={idx}>{para.trim()}</p>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="paper-section">
        <h2>{conclusion.title}</h2>
        <div className="paper-text">
          {conclusion.content.trim().split('\n\n').map((para, idx) => (
            <p key={idx}>{para.trim()}</p>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="paper-footer">
        <p>
          <a href={metadata.githubUrl} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
          {' • '}
          Last updated: {metadata.date}
        </p>
      </footer>
    </div>
  );
}

export default App;

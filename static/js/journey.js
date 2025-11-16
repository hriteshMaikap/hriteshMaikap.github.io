// Journey/Work Experience roadmap
export function initializeJourney() {
  const journeyData = [
    {
      company: 'Siemens DISW',
      role: 'AI Intern',
      date: 'Jun 2025 — Present',
      description: 'Shaping agentic copilots and RAG platforms on Azure while building the validation harnesses that keep them honest.',
      tags: ['Azure AI', 'Agentic', 'Validation'],
      highlights: [
        'Productionised serverless backends with Azure Functions, AI Search, and storage orchestration.',
        'Rolled internal playbooks that cut new pilot timelines by 35%.',
        'Designed scenario-based test benches for frontier LLM rollouts.'
      ]
    },
    {
      company: 'ISRO · NRSC',
      role: 'Project Intern',
      date: 'Dec 2024 — Jan 2025',
      description: 'Bridged geospatial analysts with automation by wrapping Google Earth Engine and LLM routing into clean APIs.',
      tags: ['Flask', 'GEE', 'LLMs'],
      highlights: [
        'Built Flask + PostgreSQL services that translate natural language into geospatial queries.',
        'Integrated LLM orchestration to automate report-ready insights.',
        'Modularised the codebase with Agile rituals and shaved 30% off processing time.'
      ]
    },
    {
      company: 'VIT Pune',
      role: 'B.E. AI & DS',
      date: '2022 — 2026',
      description: 'High-agency undergrad experience: research, hackathons, and community work that keep me experimenting.',
      tags: ['Research', 'Hackathons', 'Leadership'],
      highlights: [
        'CGPA 9.29 with dual publications (conference + Scopus indexed).',
        'Top finishes across Citi Innovation Challenge and ISRO hackathons.',
        'Built communities around GenAI tooling and open-source contributions.'
      ]
    }
  ];

  const container = document.getElementById('journey-container');
  if (!container) return;

  journeyData.forEach((item, index) => {
    const journeyItem = document.createElement('div');
    journeyItem.className = 'journey-item';
    journeyItem.style.animationDelay = `${index * 0.2}s`;
    
    journeyItem.innerHTML = `
      <div class="journey-timeline">
        <span class="journey-date">${item.date}</span>
        <span class="journey-marker"></span>
      </div>
      <div class="journey-content">
        <div class="journey-company">${item.company}</div>
        <div class="journey-role">${item.role}</div>
        <p class="journey-description">${item.description}</p>
        <div class="journey-tags">
          ${item.tags.map(tag => `<span class="journey-tag">${tag}</span>`).join('')}
        </div>
        <ul class="journey-highlights">
          ${item.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
        </ul>
      </div>
    `;
    
    container.appendChild(journeyItem);
  });
}
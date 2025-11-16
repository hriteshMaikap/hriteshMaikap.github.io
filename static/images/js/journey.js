// Journey/Work Experience roadmap
export function initializeJourney() {
  const journeyData = [
    {
      company: 'Siemens DISW',
      role: 'AI Intern',
      date: 'June 2025 - Present',
      description: 'Building and deploying scalable AI solutions on Azure',
      highlights: [
        'Engineered agentic systems and RAG pipelines on Azure AI for enterprise use cases',
        'Built serverless backends with Azure Function Apps and AI Search for high-quality data retrieval',
        'Reduced dev cycles through rigorous validation protocols and model in-context tuning'
      ]
    },
    {
      company: 'ISRO (NRSC)',
      role: 'Project Intern',
      date: 'Dec 2024 - Jan 2025',
      description: 'Developed geospatial data processing APIs',
      highlights: [
        'Built RESTful APIs with Flask and PostgreSQL for geospatial data interaction',
        'Integrated LLMs to automate complex geospatial analysis through natural language',
        'Achieved 30% performance improvement through Agile modularization'
      ]
    },
    {
      company: 'VIT Pune',
      role: 'AI & DS Student',
      date: '2022 - 2026',
      description: 'Pursuing B.E. in Artificial Intelligence and Data Science',
      highlights: [
        'CGPA: 9.29 - Consistent academic excellence',
        'Published 2 research papers (Conference + Scopus Indexed)',
        'Won 5+ hackathons in AI/ML and GenAI domains'
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
        <div class="journey-dot"></div>
        <div class="journey-line"></div>
        <div class="journey-date">${item.date}</div>
      </div>
      <div class="journey-content">
        <div class="journey-company">${item.company}</div>
        <div class="journey-role">${item.role}</div>
        <p class="journey-description">${item.description}</p>
        <ul class="journey-highlights">
          ${item.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
        </ul>
      </div>
    `;
    
    container.appendChild(journeyItem);
  });
}
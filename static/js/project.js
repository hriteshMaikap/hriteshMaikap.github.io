// Projects data and initialization
export function initializeProjects() {
  const projectsData = [
    {
      emoji: '🤖',
      title: 'Notion to GitHub Pages',
      description: 'Automated CLI tool that converts Notion pages to GitHub Pages with async API integration, markdown conversion, and git automation. Built the entire pipeline from scratch.',
      tech: ['Python', 'Async', 'Pydantic', 'Click'],
      link: 'https://github.com/hriteshMaikap/notion-to-gh-pages'
    },
    {
      emoji: '🧠',
      title: 'Organisational-Agents',
      description: 'Multi-agent system using smolagents framework to automate productivity workflows across Notion and email. Natural language task execution powered by LLaMA 3.3.',
      tech: ['Python', 'LLMs', 'Groq', 'Agents'],
      link: 'https://github.com/hriteshMaikap'
    },
    {
      emoji: '🎤',
      title: 'Marathi ASR',
      description: 'Fine-tuned Wav2Vec2-BERT for Marathi speech-to-text. Built complete MLOps pipeline with data validation, mixed-precision training, and model deployment to Hugging Face Hub.',
      tech: ['PyTorch', 'Transformers', 'HF Hub'],
      link: 'https://huggingface.co/hriteshMaikap'
    },
    {
      emoji: '☁️',
      title: 'Azure AI Solutions',
      description: 'Enterprise-grade RAG pipelines and agentic systems deployed on Azure. Serverless backends with Azure Functions, AI Search integration, and production-ready validation protocols.',
      tech: ['Azure AI', 'RAG', 'Python', 'APIs'],
      link: '#'
    },
    {
      emoji: '🌍',
      title: 'ISRO Geospatial API',
      description: 'RESTful APIs using Flask and PostgreSQL for geospatial data processing. Integrated LLMs to automate complex queries through natural language. 30% performance improvement.',
      tech: ['Flask', 'PostgreSQL', 'GEE', 'LLMs'],
      link: '#'
    }
  ];

  const container = document.getElementById('projects-scroll');
  if (!container) return;

  // Render project cards
  projectsData.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
      <span class="project-emoji">${project.emoji}</span>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tech">
        ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
      <a href="${project.link}" class="project-link" target="_blank">
        View Project →
      </a>
    `;
    
    container.appendChild(card);
  });

  // Scroll functionality
  const scrollLeft = document.getElementById('scroll-left');
  const scrollRight = document.getElementById('scroll-right');

  scrollLeft?.addEventListener('click', () => {
    container.scrollBy({ left: -400, behavior: 'smooth' });
  });

  scrollRight?.addEventListener('click', () => {
    container.scrollBy({ left: 400, behavior: 'smooth' });
  });

  // Auto-scroll animation (optional)
  let autoScroll = setInterval(() => {
    if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: 2, behavior: 'auto' });
    }
  }, 50);

  // Pause auto-scroll on hover
  container.addEventListener('mouseenter', () => clearInterval(autoScroll));
  container.addEventListener('mouseleave', () => {
    autoScroll = setInterval(() => {
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: 2, behavior: 'auto' });
      }
    }, 50);
  });
}
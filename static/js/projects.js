const projectsData = [
  {
    kicker: 'Agentic ops · 2025',
    title: 'Organisational Agents',
    summary: 'Multi-agent copilots that reconcile Notion workspaces with email threads. Ships actions through custom tools powered by smolagents.',
    result: 'CodeAgent converts unstructured requests into tracked actions in seconds.',
    tech: ['Python', 'smolagents', 'Groq', 'Notion API'],
    link: 'https://github.com/hriteshMaikap/organisational-agents'
  },
  {
    kicker: 'Speech systems · 2025',
    title: 'Marathi ASR',
    summary: 'Fine-tuned Wav2Vec2-BERT with a fully versioned MLOps lane, mixed precision, and gradient checkpointing tuned for Indian dialects.',
    result: 'Open pipeline on Hugging Face with reproducible datasets + tokenizer.',
    tech: ['PyTorch', 'Transformers', 'HF Hub', 'Datasets'],
    link: 'https://huggingface.co/hriteshMaikap'
  },
  {
    kicker: 'Enterprise LLM infra · 2025',
    title: 'Azure AI Playbooks',
    summary: 'Blueprinted RAG stacks with Azure AI Search, serverless Function App backends, and evaluation harnesses that reduce regression risk.',
    result: 'Cut pilot deployment time for internal teams by 35%.',
    tech: ['Azure AI', 'RAG', 'Functions', 'Python'],
    link: '#'
  },
  {
    kicker: 'Geospatial automation · 2024',
    title: 'ISRO NRSC APIs',
    summary: 'RESTful layer over Google Earth Engine so analysts can hit geospatial data via natural language prompts routed through LLMs.',
    result: '30% faster query turnaround for flood-mapping reports.',
    tech: ['Flask', 'PostgreSQL', 'GEE', 'LLMs'],
    link: '#'
  },
  {
    kicker: 'Reliability toolkit · 2024',
    title: 'LLM Validation Harness',
    summary: 'Structured evaluation suite for agentic workflows—scenario configs, guard-rails, and regression recording tied to GitHub issues.',
    result: 'Gives me go/no-go clarity before shipping frontier models to prod.',
    tech: ['LangChain', 'LangGraph', 'pytest', 'Azure Monitor'],
    link: '#'
  }
];

export function initializeProjects() {
  const container = document.getElementById('projects-scroll');
  if (!container) return;

  projectsData.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <p class="project-kicker">${project.kicker}</p>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.summary}</p>
      <p class="project-meta">${project.result}</p>
      <div class="project-tech">
        ${project.tech.map((tech) => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
      <a href="${project.link}" class="project-link" target="_blank" rel="noopener">See the build</a>
    `;

    container.appendChild(card);
  });

  const cards = Array.from(container.children);
  if (!cards.length) return;

  const scrollLeftBtn = document.getElementById('scroll-left');
  const scrollRightBtn = document.getElementById('scroll-right');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let currentIndex = 0;
  let autoplayId;

  const scrollToCard = (nextIndex) => {
    if (!cards.length) return;
    currentIndex = (nextIndex + cards.length) % cards.length;
    cards[currentIndex].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  scrollLeftBtn?.addEventListener('click', () => scrollToCard(currentIndex - 1));
  scrollRightBtn?.addEventListener('click', () => scrollToCard(currentIndex + 1));

  const stopAutoplay = () => {
    if (autoplayId) {
      clearInterval(autoplayId);
      autoplayId = null;
    }
  };

  const startAutoplay = () => {
    if (prefersReducedMotion || cards.length < 2) return;
    stopAutoplay();
    autoplayId = setInterval(() => {
      scrollToCard(currentIndex + 1);
    }, 4500);
  };

  const interactiveZone = document.querySelector('.projects-shell');
  interactiveZone?.addEventListener('mouseenter', stopAutoplay);
  interactiveZone?.addEventListener('mouseleave', startAutoplay);

  startAutoplay();

  container.addEventListener('scroll', () => {
    const visibleIndex = cards.findIndex((card) => isCardMostlyVisible(card, container));
    if (visibleIndex >= 0) {
      currentIndex = visibleIndex;
    }
  });

  window.addEventListener('resize', () => {
    const visibleIndex = cards.findIndex((card) => isCardMostlyVisible(card, container));
    if (visibleIndex >= 0) {
      currentIndex = visibleIndex;
    }
  });
}

function isCardMostlyVisible(card, container) {
  const cardRect = card.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  const visibleWidth = Math.min(cardRect.right, containerRect.right) - Math.max(cardRect.left, containerRect.left);
  return visibleWidth >= cardRect.width * 0.6;
}

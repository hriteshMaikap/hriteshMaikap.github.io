const projectsData = [
  {
    kicker: 'Agentic ops · 2025',
    title: 'Organisational Agents',
    summary: 'Developed a multi-agent system using Python and the `smolagents` framework to automate and unify productivity workflows across Notion and email.',
    result: 'Engineered a `CodeAgent` to interpret natural language and execute tasks through custom tools.',
    tech: ['Python', 'smolagents', 'Groq', 'Notion API'],
    link: 'https://github.com/hriteshMaikap/organisational-agents'
  },
  {
    kicker: 'Speech systems · 2025',
    title: 'Marathi ASR',
    summary: 'Fine-tuned a Wav2Vec2-BERT model for Automatic Speech Recognition (ASR) on a custom Marathi dataset, managing the full MLOps pipeline.',
    result: 'Versioned and deployed dataset, tokenizer, and final model to Hugging Face Hub for public reuse.',
    tech: ['PyTorch', 'Transformers', 'HF Hub', 'Datasets'],
    link: 'https://huggingface.co/hriteshMaikap'
  },
  {
    kicker: 'DevOps automation · 2025',
    title: 'Notion-to-GitHub Pages',
    summary: 'Developed a Python CLI application that automates content publishing workflows by integrating Notion REST APIs with GitHub Pages deployment, eliminating manual export processes.',
    result: 'Built type-safe data processing pipeline using Pydantic models to parse Notion blocks and convert rich text, equations, and media to clean Markdown format.',
    tech: ['Python', 'httpx', 'Pydantic', 'Git', 'Notion API'],
    link: 'https://github.com/hriteshMaikap/notion-to-gh-pages'
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
  let currentIndex = 0;

  const scrollToCard = (nextIndex) => {
    if (!cards.length) return;
    currentIndex = (nextIndex + cards.length) % cards.length;
    cards[currentIndex].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  scrollLeftBtn?.addEventListener('click', () => scrollToCard(currentIndex - 1));
  scrollRightBtn?.addEventListener('click', () => scrollToCard(currentIndex + 1));

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

// Tech stack with emojis
export function initializeTechStack() {
  const techStackData = [
    {
      category: '🧠 AI Engineering',
      emoji: '🧠',
      items: ['PyTorch', 'Transformers', 'Hugging Face', 'LangChain', 'LangGraph', 'RAG Pipelines', 'Agentic Systems', 'Evaluation Harnesses']
    },
    {
      category: '💾 Data & Backend',
      emoji: '💾',
      items: ['Python', 'FastAPI', 'Flask', 'PostgreSQL', 'MySQL', 'Pandas', 'NumPy', 'Pydantic']
    },
    {
      category: '☁️ Cloud & Infra',
      emoji: '☁️',
      items: ['Azure AI Search', 'Azure Functions', 'Azure Storage', 'Docker', 'GitHub Actions', 'Azure Monitor']
    },
    {
      category: '🎯 Vector & Agents',
      emoji: '🎯',
      items: ['Qdrant', 'FAISS', 'Llama 3', 'Qwen', 'Prompt Orchestration', 'Model Validation']
    },
    {
      category: '🧭 Ops & Workflow',
      emoji: '🧭',
      items: ['Google Earth Engine', 'RESTful APIs', 'Postman', 'Agile Delivery', 'Notion Systems', 'VS Code']
    }
  ];

  const container = document.getElementById('tech-stack');
  if (!container) return;

  techStackData.forEach((category, index) => {
    const techCategory = document.createElement('div');
    techCategory.className = 'tech-category';
    techCategory.style.animationDelay = `${index * 0.1}s`;
    
    techCategory.innerHTML = `
      <div class="tech-category-title">
        <span>${category.emoji}</span>
        <span>${category.category}</span>
      </div>
      <div class="tech-items">
        ${category.items.map(item => `<span class="tech-item">${item}</span>`).join('')}
      </div>
    `;
    
    container.appendChild(techCategory);
  });
}
// Tech stack with emojis
export function initializeTechStack() {
  const techStackData = [
    {
      category: '🤖 AI & ML',
      emoji: '🧠',
      items: ['PyTorch', 'Transformers', 'Hugging Face', 'Langchain', 'Langgraph', 'RAG', 'LLMs', 'Fine-Tuning']
    },
    {
      category: '☁️ Cloud & DevOps',
      emoji: '⚙️',
      items: ['Azure AI', 'AI Search', 'Function Apps', 'Docker', 'Git', 'Postman']
    },
    {
      category: '💾 Data & Backend',
      emoji: '🔧',
      items: ['Python', 'Flask', 'FastAPI', 'PostgreSQL', 'MySQL', 'Pandas', 'NumPy', 'Pydantic']
    },
    {
      category: '🔍 Vector & Search',
      emoji: '🎯',
      items: ['Qdrant', 'FAISS', 'AI Search', 'Semantic Search']
    },
    {
      category: '💻 Languages',
      emoji: '📝',
      items: ['Python', 'C++', 'C', 'SQL']
    },
    {
      category: '🌐 Tools',
      emoji: '🛠️',
      items: ['Google Earth Engine', 'RESTful APIs', 'Agile', 'Data Processing']
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
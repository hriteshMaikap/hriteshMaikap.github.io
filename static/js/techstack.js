// Tech stack with logos
export function initializeTechStack() {
  const techStackData = [
    {
      category: 'AI Engineering',
      items: [
        { name: 'PyTorch', slug: 'pytorch' },
        { name: 'Hugging Face', slug: 'huggingface' },
        { name: 'LangChain', slug: 'langchain' },
        { name: 'Python', slug: 'python' },
        { name: 'Qdrant', slug: 'qdrant' },
        { name: 'Meta Llama', slug: 'meta' },
        { name: 'Alibaba Qwen', slug: 'alibabacloud' }
      ]
    },
    {
      category: 'Data & Backend',
      items: [
        { name: 'FastAPI', slug: 'fastapi' },
        { name: 'Flask', slug: 'flask' },
        { name: 'PostgreSQL', slug: 'postgresql' },
        { name: 'MySQL', slug: 'mysql' },
        { name: 'Pandas', slug: 'pandas' },
        { name: 'NumPy', slug: 'numpy' },
        { name: 'Pydantic', slug: 'pydantic' }
      ]
    },
    {
      category: 'Cloud & Infra',
      items: [
        { name: 'Azure', slug: 'azure' },
        { name: 'Azure Functions', slug: 'azurefunctions' },
        { name: 'Docker', slug: 'docker' },
        { name: 'GitHub Actions', slug: 'githubactions' },
        { name: 'Google Earth Engine', slug: 'googleearth' }
      ]
    },
    {
      category: 'Tools',
      items: [
        { name: 'Postman', slug: 'postman' },
        { name: 'Notion', slug: 'notion' },
        { name: 'VS Code', slug: 'visualstudiocode' },
        { name: 'Git', slug: 'git' }
      ]
    }
  ];

  const container = document.getElementById('tech-stack');
  if (!container) return;

  techStackData.forEach((category, index) => {
    const techCategory = document.createElement('div');
    techCategory.className = 'tech-category';
    techCategory.style.animationDelay = `${index * 0.1}s`;

    techCategory.innerHTML = `
      <h3 class="tech-category-title">${category.category}</h3>
      <div class="tech-items-grid">
        ${category.items.map(item => `
          <div class="tech-item-logo" title="${item.name}">
            <img src="https://cdn.simpleicons.org/${item.slug}/EAEAEA" alt="${item.name}" />
            <span>${item.name}</span>
          </div>
        `).join('')}
      </div>
    `;

    container.appendChild(techCategory);
  });
}
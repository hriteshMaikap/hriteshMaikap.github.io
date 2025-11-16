// Posts loading functionality
export function initializePosts() {
  loadPosts();
}

async function loadPosts() {
  const primaryContainer = document.getElementById('posts-list');
  const featuredContainer = document.getElementById('featured-posts-list');
  if (!primaryContainer && !featuredContainer) return;

  try {
    const posts = await fetchPostsList();
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (featuredContainer) {
      const featuredPosts = posts.slice(0, 3);
      renderPosts(featuredContainer, featuredPosts, 'Featured pieces are on their way.');
    }

    if (primaryContainer) {
      renderPosts(primaryContainer, posts, 'No posts yet. Coming soon.');
    }

  } catch (error) {
    console.error('Error loading posts:', error);
    const fallbackMessage = '<p style="color: #e74c3c;">Failed to load posts.</p>';
    if (featuredContainer) featuredContainer.innerHTML = fallbackMessage;
    if (primaryContainer) primaryContainer.innerHTML = fallbackMessage;
  }
}

function renderPosts(container, posts, emptyMessage) {
  if (!container) return;

  if (!posts.length) {
    container.innerHTML = `<p style="color: #888;">${emptyMessage}</p>`;
    return;
  }

  container.innerHTML = posts.map(post => `
    <div class="post-card">
      <h3><a href="${post.url}">${post.title}</a></h3>
      <p class="post-meta">${formatDate(post.date)}</p>
      ${post.excerpt ? `<p class="post-excerpt">${post.excerpt}</p>` : ''}
    </div>
  `).join('');
}

async function fetchPostsList() {
  try {
    const response = await fetch('/posts-index.json');
    if (!response.ok) throw new Error('Posts index not found');
    const data = await response.json();
    return data.posts || [];
  } catch (error) {
    // Fallback: return empty or hardcoded posts
    return [
      {
        title: "Building AI That Actually Works",
        date: "2025-01-15",
        url: "#",
        excerpt: "My journey building production-ready AI systems at Siemens and ISRO"
      }
    ];
  }
}

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}
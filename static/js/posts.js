// Posts loading functionality
export function initializePosts() {
  loadPosts();
}

async function loadPosts() {
  const postsContainer = document.getElementById('posts-list');
  if (!postsContainer) return;
  
  try {
    const posts = await fetchPostsList();
    
    if (posts.length === 0) {
      postsContainer.innerHTML = '<p style="color: #888;">No posts yet. Coming soon! 🚀</p>';
      return;
    }
    
    // Sort posts by date (newest first)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Generate HTML for posts
    const postsHTML = posts.map(post => `
      <div class="post-card">
        <h3><a href="${post.url}">${post.title}</a></h3>
        <p class="post-meta">${formatDate(post.date)}</p>
        ${post.excerpt ? `<p class="post-excerpt">${post.excerpt}</p>` : ''}
      </div>
    `).join('');
    
    postsContainer.innerHTML = postsHTML;
    
  } catch (error) {
    console.error('Error loading posts:', error);
    postsContainer.innerHTML = '<p style="color: #e74c3c;">Failed to load posts.</p>';
  }
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
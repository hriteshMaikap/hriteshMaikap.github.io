---
layout: default
title: Home
---

# Hritesh Maikap

Welcome to my technical blog on statistics, machine learning, and data science.

---

## Recent Posts

<div id="posts-list">
  <p style="color: #888;">Loading posts...</p>
</div>

<script>
// Fetch all posts from content/posts directory
async function loadPosts() {
  const postsContainer = document.getElementById('posts-list');
  
  try {
    // GitHub Pages serves files directly, so we'll use a posts index
    // We'll generate this list dynamically by scanning the posts directory
    const posts = await fetchPostsList();
    
    if (posts.length === 0) {
      postsContainer.innerHTML = '<p style="color: #888;">No posts yet.</p>';
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

// Fetch posts list from posts-index.json (we'll create this)
async function fetchPostsList() {
  try {
    const response = await fetch('/posts-index.json');
    if (!response.ok) throw new Error('Posts index not found');
    const data = await response.json();
    return data.posts || [];
  } catch (error) {
    // Fallback: hardcoded posts list (temporary until we generate posts-index.json)
    return [
      {
        title: "In Progress",
        date: "2025-11-15",
        url: "https://hriteshmaikap.github.io/",
        excerpt: "In Progress"
      }
    ];
  }
}

// Format date nicely
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

// Load posts when page loads
document.addEventListener('DOMContentLoaded', loadPosts);
</script>

---

## Featured Projects

### Notion to GitHub Pages Automation Tool

A Python CLI tool that automates the conversion and deployment of Notion pages to GitHub Pages, streamlining my content workflow from note-taking to publication.

**What I Built:**
- **Async Notion API Integration**: Efficiently fetches page content using Notion's REST API with proper error handling and pagination
- **Intelligent Block Conversion**: Converts Notion blocks with rich text and equations (headings, lists, code, equations, images) to clean Markdown
- **Image Management**: Automatically downloads and relocates images with URL rewriting for static hosting
- **Git Automation**: Optional auto-commit and push to GitHub Pages repositories for seamless deployment
- **CLI-Driven Workflow**: User-friendly command-line interface with configuration management
- **Type-Safe Architecture**: Built with Pydantic for robust data validation and error prevention

**Tech Stack**: Python 3.12, httpx (async HTTP), Pydantic, Click, GitPython

**Outcome**: Designed a modular three-stage pipeline (fetch → parse → convert → deploy) that transforms complex Notion JSON structures into clean Markdown, automatically handling image downloads and git operations for a fully automated publishing workflow.

[View Project on GitHub →](https://github.com/hriteshMaikap/notion-to-gh-pages)

---

## About Me

Data enthusiast sharing insights on statistics, ML, and programming

[GitHub](https://github.com/hriteshmaikap) • [LinkedIn](https://www.linkedin.com/in/hritesh-maikap-7aaa76246/)

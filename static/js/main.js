// Main entry point for all JavaScript modules
import { initializeProjects } from './projects.js';
import { initializeJourney } from './journey.js';
import { initializeTechStack } from './techstack.js';
import { initializePosts } from './posts.js';

// Initialize all components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initializeProjects();
  initializeJourney();
  initializeTechStack();
  initializePosts();
});
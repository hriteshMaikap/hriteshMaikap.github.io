    <div>
      <p class="section-eyebrow">Featured Posts</p>
      <h2>Work logs synced from Notion</h2>
    </div>
    <p class="section-copy">
      A rotating feed of build notes, shipped experiments, and teardown write-ups pulled straight from my Notion journal.
    </p>
  </header>

  <div id="featured-posts-list" class="posts-list posts-list--featured">
    <p class="skeleton-text">Loading featured posts…</p>
  </div>
</section>

---

<section class="section-block" id="featured-projects">
  <header class="section-heading">
    <div>
      <p class="section-eyebrow">Featured Labs</p>
      <h2>High-leverage builds I keep iterating on</h2>
    </div>
    <p class="section-copy">
      Modular, opinionated systems ranging from multi-agent orchestrations to speech models.
      Light-weight cards below auto-scroll, but you can drag or use the controls for a closer look.
    </p>
  </header>

  <div class="projects-shell">
    <button class="scroll-btn scroll-left" id="scroll-left">Prev</button>
    <div class="projects-container">
      <div class="projects-scroll" id="projects-scroll"></div>
    </div>
    </ul>
  </div>
</section>

<script type="module" src="/static/js/main.js"></script>
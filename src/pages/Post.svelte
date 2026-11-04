<script lang="ts">
  import Asset from '../components/Asset.svelte'
  import { formatDate, inline, posts } from '../lib/posts'

  let { slug }: { slug: string } = $props()

  const post = $derived(posts.find((p) => p.slug === slug)!)

  // '816 / 567' → 1.44, so paired images share one height
  const aspect = (ratio: string) => ratio.split('/').map(Number).reduce((w, h) => w / h)
</script>

{#snippet text(source: string)}
  {#each inline(source) as part, j (j)}
    {#if part.href}
      <a href={part.href} target={part.href.startsWith('http') ? '_blank' : undefined} rel={part.href.startsWith('http') ? 'noopener' : undefined}>{part.text}</a>
    {:else}{part.text}{/if}
  {/each}
{/snippet}

<article class="post">
  <header class="container narrow">
    <a class="back" href="/devlog"><span aria-hidden="true">←</span> All posts</a>
    <p class="meta"><time datetime={post.date}>{formatDate(post.date)}</time></p>
    <h1>{post.title}</h1>
    <p class="subtitle">{post.excerpt}</p>
    {#if post.tags?.length}
      <ul class="tags" aria-label="Tags">
        {#each post.tags as tag (tag)}<li>{tag}</li>{/each}
      </ul>
    {/if}
  </header>

  <div class="container narrow prose">
    {#each post.body as block, i (i)}
      {#if typeof block !== 'string'}
        <figure class:pair={block.images.length > 1}>
          <div class="images">
            {#each block.images as image (image.src)}
              <div class="cell" style:flex-grow={block.images.length > 1 ? aspect(image.ratio) : undefined}><Asset src={image.src} alt={image.alt} ratio={image.ratio} /></div>
            {/each}
          </div>
          {#if block.caption}<figcaption>{block.caption}</figcaption>{/if}
        </figure>
      {:else if block.startsWith('## ')}
        <h2>{block.slice(3)}</h2>
      {:else if block.startsWith('- ')}
        <ul>
          {#each block.split('\n') as item, j (j)}<li>{@render text(item.slice(2))}</li>{/each}
        </ul>
      {:else}
        <p>{@render text(block)}</p>
      {/if}
    {/each}
  </div>
</article>

<style>
  .post { padding: calc(var(--header-h) + clamp(32px, 6vw, 72px)) 0 clamp(96px, 12vw, 160px); }
  .narrow { max-width: calc(46rem + 2 * var(--gutter)); }
  .back { display: inline-flex; gap: 8px; color: var(--ink-soft); font-weight: 600; font-size: 0.95rem; }
  .back:hover { color: var(--wisp); }
  .meta { margin: 32px 0 12px; color: var(--ink-soft); font-size: 0.95rem; }
  h1 { font-size: clamp(2.6rem, 7vw, 4.75rem); }
  .subtitle { margin: 16px 0 0; max-width: 40ch; color: var(--ink-soft); font-size: clamp(1.2rem, 2vw, 1.4rem); line-height: 1.45; }
  .tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 24px 0 0; padding: 0; list-style: none; }
  .tags li { padding: 4px 12px; background: var(--night-raise); clip-path: var(--chip-c); font-size: 0.9rem; color: var(--ink-soft); }
  .prose { margin-top: clamp(40px, 6vw, 64px); font-size: 1.125rem; line-height: 1.75; }
  .prose p { margin: 0 0 1.4em; color: oklch(0.88 0.025 295); }
  .prose ul { margin: 0 0 1.4em; padding-left: 1.4em; color: oklch(0.88 0.025 295); }
  .prose a { color: var(--wisp); text-decoration: underline; text-underline-offset: 4px; text-decoration-thickness: 1px; }
  figure { margin: 2.2em 0; }
  .images { display: flex; justify-content: center; align-items: center; gap: 16px; }
  figure:not(.pair) .cell { width: min(100%, 30rem); }
  .pair .cell { flex-basis: 0; min-width: 0; }
  figcaption { margin-top: 12px; text-align: center; color: var(--ink-soft); font-size: 0.95rem; }
  .prose h2 { margin: 1.8em 0 0.6em; font-size: clamp(1.7rem, 3vw, 2.2rem); }
  @media (max-width: 640px) {
    .pair .images { flex-direction: column; }
    .pair .cell { flex: none; width: 100%; }
  }
</style>

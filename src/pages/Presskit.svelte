<script lang="ts">
  import Asset from '../components/Asset.svelte'
  import { STUDIO_NAME } from '../lib/site'

  // Section headers mirror the Canva press kit. Each file has a .webp preview and a full .png download in /images/presskit/
  type Item = { file: string; alt: string; cutout?: boolean }
  type Section = { id: string; title: string; items: Item[] }

  const sections: Section[] = [
    {
      id: 'logos',
      title: 'Logos',
      items: [
        { file: 'logo-full', alt: `${STUDIO_NAME} logo with wordmark on a purple background` },
        { file: 'logo-mark-bg', alt: `${STUDIO_NAME} moon and berry mark on a purple background` },
        { file: 'logo-mark', alt: `${STUDIO_NAME} moon and berry mark without background`, cutout: true },
      ],
    },
    {
      id: 'player',
      title: 'Player',
      items: [
        { file: 'player-1', alt: 'Player character model, full body front view' },
        { file: 'player-2', alt: 'Player character model, full body back view' },
        { file: 'player-3', alt: 'Player character model, upper body in engine' },
        { file: 'player-4', alt: 'Player character model, face close-up in engine' },
      ],
    },
    {
      id: 'npcs',
      title: 'NPC’s',
      items: [
        { file: 'npc-1', alt: 'Townsfolk NPC: an old woman with a walking staff', cutout: true },
        { file: 'npc-2', alt: 'The old woman NPC, front view' },
        { file: 'npc-3', alt: 'The old woman NPC, three-quarter view leaning on her staff' },
      ],
    },
    {
      id: 'enemies',
      title: 'Enemies',
      items: [{ file: 'enemy-1', alt: 'A red-eyed goblin creature in a tall white hat' }],
    },
    {
      id: 'props',
      title: 'Props',
      items: [
        { file: 'prop-1', alt: 'A closed wooden box labelled Failed Projects' },
        { file: 'prop-2', alt: 'Close-up of crystal jewellery and charms inside the Failed Projects box' },
        { file: 'prop-3', alt: 'The Failed Projects box with its lid open, full of jewellery' },
      ],
    },
    {
      id: 'qr',
      title: 'QR codes',
      items: [
        { file: 'qr-gofundme', alt: `QR code for the ${STUDIO_NAME} GoFundMe fundraiser`, cutout: true },
        { file: 'qr-gofundme-code', alt: `QR code for the ${STUDIO_NAME} GoFundMe fundraiser, code only`, cutout: true },
        { file: 'qr-socials', alt: `${STUDIO_NAME} poster with TikTok and Instagram QR codes`, cutout: true },
        { file: 'qr-instagram', alt: `QR code for the ${STUDIO_NAME} Instagram`, cutout: true },
      ],
    },
  ]
</script>

<header class="kit-head container">
  <h1>PressKit</h1>
</header>

<div class="presskit container">
  {#each sections as section (section.id)}
    <section class="kit-section" id={section.id} aria-labelledby="{section.id}-title">
      <h2 id="{section.id}-title">{section.title}</h2>
      <ul class="grid" class:single={section.items.length === 1}>
        {#each section.items as item (item.file)}
          <li>
            <a class="download" href="/images/presskit/{item.file}.png" download>
              <Asset src="/images/presskit/{item.file}.webp" alt={item.alt} cutout={item.cutout} />
              <span class="label">Download PNG</span>
            </a>
          </li>
        {/each}
      </ul>
    </section>
  {/each}
</div>

<style>
  .kit-head { padding-top: calc(var(--header-h) + clamp(48px, 7vw, 96px)); }
  h1 { font-size: clamp(3.25rem, 9vw, 6rem); }
  .presskit { padding-block: clamp(32px, 5vw, 56px) clamp(96px, 12vw, 160px); }


  .kit-section {
    position: relative;
    padding-top: clamp(40px, 5vw, 64px);
    margin-top: clamp(32px, 5vw, 56px);
  }
  .kit-section:first-child { margin-top: 0; }
  .kit-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: var(--night-line);
    mask: var(--brush) center / 100% 100% no-repeat;
  }
  h2 { font-size: clamp(2.2rem, 5vw, 3.5rem); margin-bottom: clamp(24px, 3.5vw, 40px); }

  .grid {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr));
    gap: clamp(20px, 3vw, 36px);
    align-items: end;
  }
  .grid.single { grid-template-columns: 1fr; }

  .download { display: block; }
  /* Plain square frames here instead of the site's chipped print edges */
  .download :global(.asset) { clip-path: none; transition: transform 0.5s var(--ease-out); }
  .download :global(.asset:not(.cover)::after) { box-shadow: inset 0 0 0 1px var(--night-line); }
  .download:hover :global(.asset) { transform: scale(1.015); }
  .download :global(.asset img) { max-height: 560px; }
  .label {
    display: inline-block;
    margin-top: 12px;
    font-size: 0.95rem;
    color: var(--wisp);
  }
  .download:hover .label { color: var(--wisp-hi); text-decoration: underline; text-underline-offset: 4px; }
</style>

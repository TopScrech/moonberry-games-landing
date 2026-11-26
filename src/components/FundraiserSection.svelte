<script lang="ts">
  // The GoFundMe card: heading and button on the left, the scan code on a parchment tag on the right
  import { LINKS, GAME_TITLE } from '../lib/site'
</script>

<section class="fund container" aria-labelledby="fund-title">
  <div class="card">
    <div class="copy">
      <h2 id="fund-title">Help {GAME_TITLE} go live on Steam</h2>
      <a class="donate" href={LINKS.gofundme} target="_blank" rel="noopener">
        <!-- GoFundMe sunrise mark, from the Simple Icons logo (CC0) -->
        <svg viewBox="0 2.4 24 10" aria-hidden="true">
          <path fill="currentColor" d="M21.6236 4.0792l-4.2223 3.0705c-.6695.4892-.8127 1.4224-.3309 2.0922.4892.6698 1.4221.8128 2.0921.3312l4.2219-3.0706c.67-.4892.8127-1.4224.3313-2.0922a1.4883 1.4883 0 0 0-2.092-.3312zm-9.6483-1.1816c-.8278 0-1.4978.6698-1.4978 1.4976v2.5212c0 .8279.67 1.4977 1.4978 1.4977.8279 0 1.4974-.6698 1.4974-1.4977V4.3952c0-.8278-.6695-1.4976-1.4974-1.4976zM.2877 4.4103c-.4892.6698-.3387 1.603.3308 2.0922L4.841 9.573c.6695.4891 1.6029.3386 2.092-.3312.4893-.6698.3387-1.603-.3313-2.0922L2.3798 4.0792c-.6773-.4817-1.6107-.3387-2.092.331zm3.695 7.7893C6.1051 10.303 8.905 9.144 11.9753 9.144c3.0705 0 5.8702 1.159 7.9926 3.0555z" />
        </svg>
        Donate on GoFundMe
      </a>
    </div>
    <a class="tag" href={LINKS.gofundme} target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">
      <img src="/images/presskit/qr-gofundme-code.png" alt="" width="148" height="148" loading="lazy" decoding="async" />
    </a>
  </div>
</section>

<style>
  .fund { padding-block: clamp(24px, 4vw, 48px) clamp(64px, 9vw, 120px); }

  /* A solid grape panel with chipped edges, after the fundraiser's card, so it stands off the night page */
  .card {
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: clamp(32px, 6vw, 96px);
    padding: clamp(32px, 5vw, 64px) clamp(24px, 6vw, 80px);
    background: var(--glow-grape);
    clip-path: var(--chip-b);
  }

  .copy { display: grid; justify-items: start; gap: 14px; }
  h2 { font-size: clamp(2.4rem, 5vw, 3.75rem); }
  /* A flat parchment sign that matches the scan-code tag: chipped, no wood, no paint */
  .donate {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    min-height: 56px;
    margin-top: 14px;
    padding: 0 30px 0 24px;
    background: var(--parchment-ink);
    color: var(--night);
    font: 700 1.1rem/1 var(--font-body);
    clip-path: var(--chip-a);
    rotate: -0.6deg;
    transition: rotate 0.35s var(--ease-out), translate 0.35s var(--ease-out);
  }
  .donate:hover { rotate: 0deg; translate: 0 -2px; }
  .donate:focus-visible { outline: none; box-shadow: inset 0 0 0 3px var(--wisp); }
  .donate svg { width: 1.6em; height: auto; flex: none; }

  /* The scan code pinned on a parchment tag, multiplied so its white turns to paper */
  .tag {
    /* --qr is the code itself; the image's own 16px white margin (of 148px) is scaled out past the edge */
    --qr: clamp(180px, 19vw, 240px);
    display: block;
    padding: 14px;
    overflow: hidden;
    background: var(--parchment-ink);
    clip-path: var(--chip-c);
    rotate: 2deg;
    transition: rotate 0.5s var(--ease-out);
  }
  .tag:hover { rotate: 0deg; }
  .tag img {
    display: block;
    width: var(--qr);
    height: var(--qr);
    scale: calc(148 / 116);
    image-rendering: pixelated;
    mix-blend-mode: multiply;
  }

  @media (max-width: 760px) {
    .card { grid-template-columns: 1fr; }
    .tag { justify-self: center; }
  }
  @media (prefers-reduced-motion: reduce) {
    .tag, .donate { transition: none; }
  }
</style>

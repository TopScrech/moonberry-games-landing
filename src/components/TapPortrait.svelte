<script lang="ts">
  import Asset from './Asset.svelte'

  // A portrait that swaps to a transparent animation when tapped, and back on the next tap
  type Props = { src: string; alt: string; animation: string; label: string; ratio?: string }
  let { src, alt, animation, label, ratio }: Props = $props()

  let wanted = $state(false)
  let loaded = $state(false)
  // Hold the portrait until the animation has downloaded, so a slow connection never shows an empty frame
  const playing = $derived(wanted && loaded)

  function toggle() {
    wanted = !wanted
    if (wanted && !loaded) {
      const preload = new Image()
      preload.onload = () => (loaded = true)
      preload.src = animation
    }
  }
</script>

<button type="button" aria-label="{alt}. {label}" aria-pressed={wanted} onclick={toggle}>
  <Asset src={playing ? animation : src} {alt} {ratio} cutout={playing} />
</button>

<style>
  button {
    display: block;
    width: 100%;
    padding: 0;
    border: 0;
    background: none;
    cursor: pointer;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }
</style>

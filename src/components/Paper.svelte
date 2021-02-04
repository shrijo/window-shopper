<script>
  import marked from "marked";
  import { title, subtitle, text, image, link } from "../stores";
  import ImagePlaceholder from "./ImagePlaceholder.svelte";
  import LibLoader from "./LibLoader.svelte";
  let qrClass, qrReady, qrSVG;
  let m = 12;
  let h = 297;
  let w = 210;
  let a = w - m * 2;
  let b = h - m * 3 - a;
  let c = m + a - b;

  let imageProps = {
    x: m,
    y: m,
    width: a,
    height: a,
    preserveAspectRatio: "xMidYMid slice",
  };

  let qrProps = {
    transform: `translate(${c}, ${a + m * 2})`,
    width: b,
    height: b,
  };

  let textProps = {
    x: m,
    y: a + m * 2,
    width: a - b - m,
    height: b,
    style: "font-size: 4.23333", // 4.23333mm = 12pt
  };

  const init = () => {
    qrClass = QRCode;
    qrReady = true;
  };

  $: if (qrReady) {
    qrSVG = new qrClass({
      content: $link,
      padding: 0,
      ...qrProps,
    }).svg();
  }

  const outline = (t) => {
    return {
      d: `M${0.5 * t},${0.5 * t} H${w - 0.5 * t} V${h - 0.5 * t} H${0.5 * t} Z`,
      "stroke-width": t,
    };
  };
</script>

<LibLoader url="js/qrcode.js" on:loaded={init} />

<svg
  class="A4"
  viewBox="0 0 210 297"
  preserveAspectRatio="xMinYMin meet"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect x="0" y="0" width="210" height="297" fill="white" />
  <path {...outline(0.25)} stroke="black" fill="none" class="screen-only" />
  <!-- svelte-ignore component-name-lowercase -->
  {#if $image}
    <image href={$image} {...imageProps} />
  {:else}
    <ImagePlaceholder {...imageProps} />
  {/if}
  <g {...qrProps}>{@html qrSVG}</g>
  <foreignObject {...textProps}>
    <body xmlns="http://www.w3.org/1999/xhtml">
      <h1>{$title}</h1>
      <h4>{$subtitle}</h4>
      <div class="text">{@html marked($text)}</div>
    </body>
  </foreignObject>
</svg>

<style>
  svg {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  }

  svg body {
    padding: 0.2em 0;
    background-color: white !important;
    background-image: none;
  }

  :global(svg ul) {
    padding-left: 1em;
    list-style: none;
  }
  :global(svg li::before) {
    content: "\2014";
    margin-right: 0.4em;
  }
  @media print {
    .screen-only {
      display: none;
    }
  }
</style>

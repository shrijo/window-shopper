<script>
  import marked from "marked";
  import QRCode from "qrcode-svg";
  import { title, subtitle, text, image, qrContainer, link } from "../stores";
  let ref;
  let m = 8;
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
    x: c,
    y: a + m * 2,
    width: b,
    height: b,
  };
  let textProps = {
    x: m,
    y: a + m * 2,
    width: a - b - m,
    height: b,
    "font-size": 10,
  };

  // $: setQR(ref, $link);
</script>

<svelte:head
  ><script
    src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"
    on:load={() => {QR.init();}}></script></svelte:head
>
<!-- svelte-ignore component-name-lowercase -->
<svg
  class="A4"
  viewBox="0 0 210 297"
  preserveAspectRatio="xMinYMin meet"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect {...imageProps} fill="green" />
  <rect x="0" y="0" width="210" height="297" fill="white" />
  <image href={$image} {...imageProps} />
  <g class="QRContainer" {...qrProps} />

  <!-- <rect {...qrProps} fill="red" class="QR" /> -->

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
    background-color: peachpuff;
  }
</style>

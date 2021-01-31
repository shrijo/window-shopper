<script>
  import { link } from "../stores";

  let squareSize = 300;
  let ref, h;

  const update = (x) => {
    ref.innerHTML = "";
    new QRCode(ref, {
      text: x,
      width: h,
      height: h,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.Q,
    });
  };

  $: if (typeof QRCode !== "undefined") {
    update($link);
  }
</script>

<svelte:head
  ><script
    src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"
    on:load={update}></script></svelte:head
>

<div class="container" bind:clientHeight={h}>
  <div bind:this={ref} />
</div>

<style>
  .container {
    --qr-size: calc(var(--h) * 0.25);
    width: var(--qr-size);
    height: var(--qr-size);
  }
</style>

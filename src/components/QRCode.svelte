<script>
  import { link } from "../stores";
  let ref, h;

  const update = (x) => {
    ref.innerHTML = "";
    new QRCode(ref, {
      text: x,
      width: 300,
      height: 300,
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

<div class="container" bind:this={ref} />

<style>
  :global(.container img) {
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>

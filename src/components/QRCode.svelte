<script>
  import { link, qrContainer } from "../stores";
  let ref, h;

  const update = (x) => {
    $qrContainer.innerHTML = "";
    new QRCode($qrContainer, {
      text: x,
      width: 300,
      height: 300,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.Q,
    });
  };

  $: if (typeof QRCode !== "undefined" && $qrContainer) {
    update($link);
  }
</script>

<svelte:head
  ><script
    src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"
    on:load={update}></script></svelte:head
>

<!-- <div class="container" bind:this={$qrContainer} /> -->
<style>
  :global(canvas) {
    display: none;
  }
  :global(.container img) {
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>

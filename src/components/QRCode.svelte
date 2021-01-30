<svelte:head>
  <script
    src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"
    on:load={update}
  ></script>
</svelte:head>

<script>
  import { link } from "../stores";
  import makeOutline from "../helpers/outline";
  let squareSize = 300;
  let ref;

  const update = x => {
    ref.innerHTML = ''
    new QRCode(ref, {
      text: x,
      width: squareSize,
      height: squareSize,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.Q
    });
  };

  $: if (typeof QRCode !== 'undefined') {
    update($link);
  };
</script>

<div class="container" style={makeOutline()}>
  <div bind:this={ref}></div>
</div>

<style>
  .container{
    position: relative;
  }
  .container::after {
    content: "🤞";
    text-shadow: var(--outline);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 100px;
    line-height: 300px;
    text-align: center;
    vertical-align: middle;
  }
</style>

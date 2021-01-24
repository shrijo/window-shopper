<svelte:head>
  <script
    src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"
    on:load={update}
  ></script>
</svelte:head>

<script>
	export let value;
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
      correctLevel : QRCode.CorrectLevel.H
    });
  };

  $: if (typeof QRCode !== 'undefined') {
    update(value);
  };
</script>

<div bind:this={ref}></div>
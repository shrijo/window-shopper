<script>
  let w, h, debug;
  let pageRatio = 210 / 297;
  let viewRatio = w / h;
  let fitHeight = pageRatio < viewRatio;
  $: {
    viewRatio = w / h;
    fitHeight = pageRatio < viewRatio;
  }
</script>

<div
  class="A4--wrapper"
  bind:clientWidth={w}
  bind:clientHeight={h}
  style="--w: {0.707 * (h - 20)}px; --h: {h - 20}px"
>
  <div class="A4" class:fitHeight>
    <svg viewBox="0 0 210 297">
      {#if debug}
        <path stroke="red" d="M0,0 L210,297" />
      {/if}
    </svg>
    <div class="content">
      <slot />
    </div>
  </div>
</div>

<style>
  .A4--wrapper {
    margin: 10px;
    margin-left: 0;
    height: 100%;
  }
  .A4 {
    display: grid;
    position: relative;

    width: 100%;
    background-color: #ffffff;
    -webkit-box-shadow: 0px 10px 53px -23px rgba(0, 0, 0, 0.52);
    -moz-box-shadow: 0px 10px 53px -23px rgba(0, 0, 0, 0.52);
    box-shadow: 0px 10px 53px -23px rgba(0, 0, 0, 0.52);
  }
  .A4.fitHeight {
    width: var(--w);
    height: var(--h);
  }

  .A4 svg,
  .A4 .content {
    grid-area: 1 / 1 / 2 / 2;
  }
  .content {
    position: relative;
  }
</style>

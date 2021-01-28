<script>
  export let image = false;
  let strokeWidth = 0.01;
</script>

<style>
  img {
    width:100%;
    height:auto;
    max-height: 69%;
    object-fit: cover;
  }
</style>

{#if image}
  <img src="{image}" alt="d" />
{:else}
  <svg viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="black" stroke-width={strokeWidth}>
      <path d="M0,0 L1,1 M0,1 L1,0" />
      <rect stroke-width={strokeWidth * 2}
        x="0"
        y="0"
        height="1"
        width="1" />
    </g>
  </svg>
{/if}

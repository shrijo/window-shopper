<script>
  export let image = false;
</script>

{#if image}
  <img src="{image}" alt="d" />
{:else}
  <img
    width="1"
    height="1"
    src="https://via.placeholder.com/150/0000FF/FFFFFF"
    alt=""
  /> 
{/if}

<style>
  img {
    width:100%;
    height:auto;
  }
</style>
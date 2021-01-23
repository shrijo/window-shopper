<script>
  export let image = false;
</script>

{#if image}
  <img src="{image}" alt="d" />
{:else}
  <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="" /> 
{/if}

<style>
  img {
    max-width: 100%;
  }
</style>
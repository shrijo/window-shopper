<script>
  import Close32 from "carbon-icons-svelte/lib/Close32";
  export let label = "defaul label";
  let open = false;
</script>

<button type="button" on:click={() => (open = !open)}>{label}</button>
{#if open}
  <div class="not-modal" on:click={() => (open = false)} />
  <div class="modal">
    <button class="close" type="button" on:click={() => (open = false)}>
      <div class="visuallyhidden">Close</div>
      <Close32 />
    </button>

    <div class="slot-wrapper">
      <slot />
    </div>
  </div>
{/if}

<style>
  button {
    appearance: none;
    display: inline-block;
  }
  button.close {
    display: block;
    aspect-ratio: 1;
    width: auto;
    padding: 0;
    line-height: 1em;
    margin-left: auto;
    background-color: white;
  }
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    max-width: 33%;
    background: white;
    border: 1px solid black;
    transform: translate(-50%, -50%);
    aspect-ratio: 1;
    z-index: 1001;
  }
  .slot-wrapper {
    padding: 1em 2em;
  }
  .not-modal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(219, 229, 221, 0.7);
    z-index: 1000;
  }
</style>

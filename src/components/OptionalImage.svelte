<script>
  import { image } from "../stores";
  let strokeWidth = 0.01;
</script>

<div class="image">
  <img src={$image} alt="" />
  {#if $image === ""}
    <svg viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="black" stroke-width={strokeWidth}>
        <path d="M0,0 L1,1 M0,1 L1,0" />
        <rect stroke-width={strokeWidth * 2} x="0" y="0" height="1" width="1" />
      </g>
    </svg>
  {/if}
</div>

<style>
  .image {
    background-image: var(--image) center/cover;
    width: 90%;
    margin: 5%;
    height: 0;
    padding-bottom: 90%;
    position: relative;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }

  .image svg {
    grid-area: 1 / 1 / 2 / 2;
  }
</style>

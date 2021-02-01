<script>
  import marked from "marked";
  import A4 from "./components/A4.svelte";
  import Layout from "./components/Layout.svelte";
  import OptionalImage from "./components/OptionalImage.svelte";
  import QRCode from "./components/QRCode.svelte";

  import { title, subtitle, text } from "./stores";

  const onPrint = () => {
    window.print();
  };
</script>

<Layout {$title} />

<!-- <A4>
  <OptionalImage />
  <section>
    <div class="text">
      <h2>{$title}</h2>
      <h4>{$subtitle}</h4>
      <p class="description">{@html marked($text)}</p>
    </div>
    <QRCode />
  </section>
</A4> -->
<style>
  /* :global(body) {
    font-size: calc(0.03 * var(--h));
  }
  section {
    margin: 5%;
    position: absolute;
    bottom: 0;
    right: 0;
    top: 67.2%;
    left: 0;
  }
  h2 {
    font-size: 3rem;
  }
  h4 {
    font-size: 2rem;
  }
  .text {
    flex-grow: 1;
    margin-right: 2rem;
    font-size: 1rem;
  }
  .description {
    text-align: justify;
  } */
</style>

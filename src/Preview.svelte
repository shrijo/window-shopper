<script>
  import marked from "marked";
  import A4 from "./components/A4.svelte";
  import OptionalImage from "./components/OptionalImage.svelte";
  import QRCode from "./components/QRCode.svelte";

  import { title, subtitle, text } from "./stores";
  export let image = false;

  const onPrint = () => {
    window.print();
  };
</script>

<A4>
  <OptionalImage bind:image />
  <section>
    <div class="text">
      <h2>{$title}</h2>
      <h4>{$subtitle}</h4>
      <p class="description">{@html marked($text)}</p>
    </div>
    <QRCode />
  </section>
</A4>

<style>
  section {
    display: flex;
    margin-top: min(auto, 8mm);
  }
  .text {
    flex-grow: 1;
    margin-right: 2rem;
  }
  .description {
    text-align: justify;
  }
</style>

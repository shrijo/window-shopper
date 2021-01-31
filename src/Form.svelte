<script>
  import Debug from "./components/debug.svelte";
  import ImageUpload from "./components/form/ImageUpload.svelte";
  import LabeledInput from "./components/form/LabeledInput.svelte";
  import LabeledTextarea from "./components/form/LabeledTextarea.svelte";
  import QRCodeSection from "./components/form/QRCodeSection.svelte";

  import { link, title, subtitle, text, image } from "./stores";

  const onPrint = () => {
    window.print();
  };
</script>

<form>
  <LabeledInput label="Titel" placeholder="Produkt Titel" bind:value={$title} />
  <LabeledInput
    label="Untertitel"
    placeholder="Produkt Preis"
    bind:value={$subtitle}
  />
  <LabeledTextarea
    label="Text"
    placeholder="Produkt beschreiben"
    bind:value={$text}
  />
  <ImageUpload bind:value={$image} />
  <QRCodeSection />
  <Debug
    vars={{
      link: $link,
      subtitle: $subtitle,
      title: $title,
    }}
  />
  <button on:click={onPrint} type="button" class="print-button">Print!</button>
</form>

<style>
  :global(label) {
    font-size: 0.8em;
    color: #a1a1a1;
    margin-bottom: 3px;
  }

  :global(input),
  :global(textarea) {
    width: 100%;
    background-color: #efefef;
    border: none;
  }
  form {
    border-top: 1px solid #000000;
    padding: 10px 10px 0 10px;
  }

  .print-button {
    width: 100%;
    background-color: #000000;
    border: none;
    color: #ffffff;
    font-weight: 600;
    line-height: 2em;
    margin: 10px -10px 0 -10px;
    width: calc(100% + 20px);
  }
</style>

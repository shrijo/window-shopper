<script>
  import marked from "marked";
  import A4 from "./components/A4.svelte";
  import Debug from "./components/debug.svelte";
  import ImageUpload from "./components/form/ImageUpload.svelte";
  import LabeledInput from "./components/form/LabeledInput.svelte";
  import LabeledTextarea from "./components/form/LabeledTextarea.svelte";
  import OptionalImage from "./components/OptionalImage.svelte";
  import QRCode from "./components/QRCode.svelte";
  import QRCodeSection from "./components/form/QRCodeSection.svelte";

  import { link, title, subtitle, text } from "./stores";
  let image = false;

  const onPrint = () => {
    window.print();
  };
</script>

<main>
  <div id="editor">
    <h1>Window Shopper</h1>
    <form>
      <LabeledInput
        label="Titel"
        placeholder="Produkt Titel"
        bind:value={$title}
      />
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
      <ImageUpload bind:value={image} />
      <QRCodeSection />
			<Debug
	      vars={{
	        link: $link,
	        subtitle: $subtitle,
	        title: $title,
	      }}
	    />
      <button on:click={onPrint} type="button" class="print-button"
        >Print!</button
      >
    </form>


  </div>
  <div id="preview">
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
  </div>
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
    text-align: left;
    margin: 0;
    padding: 0;
    display: flex;
    margin: 0 auto;
    box-sizing: border-box;
		align-items: flex-start;
  }

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

  #editor {
    margin: 10px;
    border: 1px solid #000000;
    z-index: 10;
    background: white;
    box-sizing: border-box;
    /* width: 30vw; */
    width: 400px;
    flex-shrink: 0;
		overflow: scroll;
		max-height: calc(100vh - 20px);
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

  #preview {
    flex-grow: 1;
    flex-shrink: 1;
		height: 100vw;
  }

  h1 {
    padding: 0.1em 10px 0 10px;
    line-height: 2em;
    margin: 0;
    color: #000000;
    text-transform: uppercase;
    font-size: 1.3em;
    font-weight: 1000;
  }
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

	@media (orientation: portrait) {
	  #editor {
	    display:none;
	  }
	}
</style>

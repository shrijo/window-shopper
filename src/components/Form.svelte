<script>
  import Debug from "./debug.svelte";
  import ImageUpload from "./form/ImageUpload.svelte";
  import LabeledInput from "./form/LabeledInput.svelte";
  import LabeledTextarea from "./form/LabeledTextarea.svelte";
  import QRCodeSection from "./form/QRCodeSection.svelte";

  import { link, title, subtitle, text, image } from "../stores";
  import Modal from "./Modal.svelte";

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
  <Modal label="Impressum">
    Die App soll Menschen dienen die nicht wissen wie man QR Codes generiert
    oder keine Zeit für Grafik haben, in diesen Zeiten. Geld wird unsereseits
    keines damit verdient. Wenn ihr aber Feedback oder Wünsche habt könnt ihr
    euch hier melden: <a href="mailto:dudes@example.com">dudes@example.com</a>
    <br />
    <h2>&forall;</h2>
  </Modal>
  <br />
  <Modal label="Datenschutz">
    <h2>APP</h2>
    Diese App sendet im Gebrauch keine Daten an einen Server
    <h2>Web Server</h2>
    Die App wird durch
    <a href="https://www.netlify.com">netlify</a>
    ausgeliefert, wie immer wenn eine Webseite angefordert wird, speichert der server
    grundsätzlich ein paar sachen. Hier könnt ihr mehr darüber erfahren:<a
      href="https://www.netlify.com/privacy/">www.netlify.com/privacy</a
    >
  </Modal>

  <button on:click={onPrint} type="button" class="print-button">Print!</button>
  <!-- <Debug
    vars={{
      link: $link,
      subtitle: $subtitle,
      title: $title,
    }}
  /> -->
</form>

<style>
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

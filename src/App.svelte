<script>
  import Form from "./components/Form.svelte";
  import Paper from "./components/Paper.svelte";

  const onPrint = () => {
    window.print();
  };
</script>

<main>
  <div id="editor">
    <h1>Window Shopper</h1>
    <Form />
  </div>
  <div id="preview">
    <Paper />
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

  #editor {
    margin: 10px;
    border: 1px solid #000000;
    z-index: 10;
    background: white;
    box-sizing: border-box;
    width: 400px;
    flex-shrink: 0;
    overflow: scroll;
    max-height: calc(100vh - 20px);
  }

  #preview {
    flex-grow: 1;
    flex-shrink: 1;
    height: 100vh;
    padding: 10px;
    padding-left: 0;
    box-sizing: border-box;
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
</style>

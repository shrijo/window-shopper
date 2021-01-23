<script>
  export let value = '';
  let fileinput;

  const onFileSelected = (e) => {
  	let image = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);

		reader.onload = e => {
      value = e.target.result;
      console.log(e);
    };
  };
</script>


<label
  on:click={fileinput.click}
>
  Choose Image
  <input
    name="file-input"
    type="file"
    accept=".jpg, .jpeg, .png"
    on:change={onFileSelected}
    bind:this={fileinput}
  >
</label>

<style>
  .chan {
		width: 100%;
		background-color: #efefef;
		border: none;
  }
</style>


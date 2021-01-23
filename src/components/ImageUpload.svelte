<script>
  export let value = '';
  let fileinput;

  const onFileSelected = (e) => {
  	let image = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);

		reader.onload = e => {
      value = e.target.result;
    };
  };
</script>


<label>
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
  	label{
		font-size: 0.8em;
		color: #a1a1a1;
		margin-bottom: 3px;
	}

  input {
		width: 100%;
		background-color: #efefef;
		border: none;
  }
</style>


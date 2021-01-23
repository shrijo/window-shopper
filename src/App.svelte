<script>
	import QrCode from "svelte-qrcode"

	let title = 'Title';
	let price = 'Price';
	let text = 'Lorem dolor sit amet.';
	let link = 'http://google.com';

</script>

<main>
	<div id="editor">
		<h1>Window Shopper</h1>
		<form>
		  <label for="title">Title</label>
		  <input type="text" id="title" name="title" bind:value={title}>
			<label for="price">Price</label>
		  <input type="text" id="price" name="price" bind:value={price}>
			<label for="text">Text</label>
		  <input type="text" id="text" name="text" bind:value={text}>
			<label for="link">Link to</label>
		  <input type="text" id="link" name="link" bind:value={link}>
		</form>
	</div>

	<div id="preview">
		<div id="paper">
			<h2>{title}</h2>
			<h4>{price}</h4>
			<p>{text}</p>
			<QrCode bind:value={link} />
		</div>
	</div>
</main>

<style>
	main {
		width: 100vw;
		height: 100vh;
		text-align: left;
		margin: 0;
		padding: 0;
		margin: 0 auto;
		display: flex;
	}

	#editor{
		padding: 20px;
		flex-grow: 2;
	}

	form{
		margin-top: 20px;
		flex-direction: column;
		align-items: stretch;
	}

	label{
		font-size: 0.8em;
		color: #a1a1a1;
		margin-bottom: 3px;
	}

	input{
		width: 100%;
		background-color: #efefef;
		border: none;
	}

	#preview{
		flex-grow: 10;
		background-color: #efefef;
		border-left: 1px solid #d4d4d4;
		display:flex;
		align-items: center;
		justify-content: center;
	}

	#paper{
		width: 80%;
		aspect-ratio: 0.71;
		background-color: #ffffff;
		padding: 10px;
		-webkit-box-shadow: 0px 10px 53px -23px rgba(0,0,0,0.52);
		-moz-box-shadow: 0px 10px 53px -23px rgba(0,0,0,0.52);
		box-shadow: 0px 10px 53px -23px rgba(0,0,0,0.52);
	}

	h1 {
		margin: 0;
		color: #000000;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 600;
	}


</style>

<script>
	// import QrCode from "svelte-qrcode"

	import ImageUpload from "./components/ImageUpload.svelte";
	import OptionalImage from "./components/OptionalImage.svelte";
	import QRCode from "./components/QRCode.svelte";
	import A4 from "./components/A4.svelte";

	let title = 'Title';
	let price = 'CHF 1,000.00';

	let text = 'Lorem dolor sit amet.';
	let image = false;
	let link = 'http://google.com';
	
	const onPrint = () => {
		window.print()
	};
</script>


<main>
	<div id="editor">
		<h1>Window Shopper</h1>
		<form>
			<label for="title">Product</label>
			<input type="text" id="title" name="title" bind:value={title}>
			<label for="price">Price</label>
			<input type="text" id="price" name="price" bind:value={price}>
			<label for="text">Description</label>
			<input type="text" id="text" name="text" bind:value={text}>
			<ImageUpload bind:value={image}/>
			<label for="link">Link to</label>
			<input type="text" id="link" name="link" bind:value={link}>
			<button on:click={onPrint} type="button">Print!</button>
		</form>
	</div>
	<div id="preview">
		<A4>
			<OptionalImage bind:image/>
			<section>
				<div class="text">
					<h2>{title}</h2>
					<h4>{price}</h4>
					<p>{text}</p>
				</div>
				<QRCode bind:value={link} />
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
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 4fr;
	}

	:global(label){
		font-size: 0.8em;
		color: #a1a1a1;
		margin-bottom: 3px;
	}

	:global(input){
		width: 100%;
		background-color: #efefef;
		border: none;
	}
	form{
		margin-top: 20px;
	}
	
	#editor{
		box-sizing: border-box;
		height: 100vh;
		padding: 20px;
	}

	#preview{
		background-color: #efefef;
		border-left: 1px solid #d4d4d4;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	h1 {
		margin: 0;
		color: #000000;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 600;
	}
	section {
		display: flex;
		margin-top: auto;
	}
	.text {
		flex-grow: 1;
	}
</style>

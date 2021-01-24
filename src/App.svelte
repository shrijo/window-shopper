<script>
	// import QrCode from "svelte-qrcode"

	import ImageUpload from "./components/ImageUpload.svelte";
	import OptionalImage from "./components/OptionalImage.svelte";
	import QRCode from "./components/QRCode.svelte";

	let zoomLevel = 0.2;

	let title = 'Title';
	let price = 100;
	$: priceView = new Intl
		.NumberFormat('ch-DE', { style: 'currency', currency: 'CHF' })
		.format(parseFloat(price, 10))

	let text = 'Lorem dolor sit amet.';
	let image = false;
	let link = 'http://google.com';

	function zoomOut(){
	 zoomLevel -=0.05
	};

	function zoomIn(){
		zoomLevel +=0.05
	};

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
			<ImageUpload bind:value={image}/>
			<label for="link">Link to</label>
		  <input type="text" id="link" name="link" bind:value={link}>
		</form>
	</div>

	<div id="preview">

		<div id="preview-toolbar">
			<button type="button" class="zoom-button" on:click={zoomOut}>-</button>
			<p id="zoom-level">{zoomLevel}</p>
			<button type="button" class="zoom-button" on:click={zoomIn}>+</button>
		</div>

		<div id="preview-area">
			<div id="paper" style="transform: scale({zoomLevel})">
				<h2>{title}</h2>
				<h4>{priceView}</h4>
				<p>{text}</p>
				<OptionalImage bind:image/>
				<QRCode bind:value={link} />
			</div>
		</div>

		<div id="preview-actionbar">
			<button id="print">Print</button>
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
		overflow: hidden;
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

	#editor{
		width: 20vw;
		padding: 20px;
	}

	form{
		margin-top: 20px;
	}


	#preview{
		background-color: #efefef;
		border-left: 1px solid #d4d4d4;
		width: 80vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	#preview-toolbar{
		height: 40px;
		padding: 10px;
		border-bottom: 1px solid #d4d4d4;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}

	.zoom-button{
		width: 40px;
		height: 40px;
	}

	#zoom-level{
		width: auto;
		line-height: 40px;
		margin: 0 10px;
	}

	#preview-area{
		background-color: #efefef;
		overflow: scroll;
		height: 100vh;
	}

	#paper{
		background-color: #ffffff;
		padding: 10px;
		-webkit-box-shadow: 0px 10px 53px -23px rgba(0,0,0,0.52);
		-moz-box-shadow: 0px 10px 53px -23px rgba(0,0,0,0.52);
		box-shadow: 0px 10px 53px -23px rgba(0,0,0,0.52);
		transition: transform ease 0.2s;
	}

	#preview-actionbar{
		height: 40px;
		border-top: 1px solid #d4d4d4;
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding: 10px;
	}

	h1 {
		margin: 0;
		color: #000000;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 600;
	}


</style>

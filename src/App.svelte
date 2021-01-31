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
		window.print()
	};
</script>


<main>
	<div id="editor">
		<h1>Window Shopper</h1>
		<form>
			<LabeledInput label="Titel" placeholder="Produkt Titel" bind:value={$title} />
			<LabeledInput label="Untertitel" placeholder="Produkt Preis" bind:value={$subtitle} />
			<LabeledTextarea label="Text" placeholder="Produkt beschreiben" bind:value={$text} />
			<ImageUpload bind:value={image}/>
			<QRCodeSection />
			<button on:click={onPrint} type="button">Print!</button>
		</form>

		<Debug vars={{
      link: $link,
      subtitle: $subtitle,
      title: $title
    }} />

	</div>
	<div id="preview">
		<A4>
			<OptionalImage bind:image/>
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
	}

	:global(label){
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
	form{
		margin-top: 20px;
	}
	
	#editor {
		box-sizing: border-box;
		height: 100vh;
		/* width: 30vw; */
		width: 400px;
		padding: 20px;
		flex-shrink: 0;
	}

	#preview {
		background-color: #efefef;
		border-left: 1px solid #d4d4d4;
		flex-grow: 1;
		flex-shrink: 1;
		display: flex;
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

<script>
	import LabeledInput from "./LabeledInput.svelte";
	import { link } from "../../stores";

	let type = 1;
	let webLink = 'https://example.com'
	let address = 'jonas@gmail.com';
	$: $link = (type === 1) ? webLink : `mailto://${address}`;
</script>

<h4>QR Code</h4>
<section>
	<input name="web" id="web" type=radio bind:group={type} value={1}>
	<label for="web">Web Link</label>
	<input name="mail" id="mail" type=radio bind:group={type} value={2}>
	<label for="mail">Email</label>
</section>

{#if type === 1}
	<LabeledInput bind:value={webLink} label="Web Link" />
{:else}
	<LabeledInput bind:value={address} label="Email Adresse"/>
{/if}

<style>
	section {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}
	label {	
		width: 100%;
		background-color: #efefef;
		border: none;
		font: inherit;
		padding: inherit;
		text-align: center;
	}
	input[type=radio]:checked + label {
		background-color: white;
		color: black;
		border: 2px solid #efefef;
	}
	input {
		opacity: 0;
    width: 0;
    height: 0;
	}
</style>
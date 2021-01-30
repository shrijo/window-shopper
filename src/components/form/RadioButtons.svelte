<script>
	import QRLinkFields from "./QRLinkFields.svelte";
	import QRMailFields from "./QRMailFields.svelte";

  let type = 1;
</script>

<section>
	<label>
		<input type=radio bind:group={type} value={1}>
		Web Link
	</label>
	
	<label>
		<input type=radio bind:group={type} value={2}>
		Mail
	</label>
</section>
<section>
	{#if type === 1}
		<!-- <QRLinkFields /> -->
	{:else}
		<!-- <QRMailFields /> -->
	{/if}
</section>


<style>
	section {
		display: flex;
		justify-content: space-between;
	}
</style>
<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Caleb Denio</title>
	<meta name="description" content="A code-writer. Actually three code-writers in a trenchcoat." />

	<meta property="og:type" content="website" />
	<meta property="og:title" content="Caleb Denio" />
	<meta
		property="og:description"
		content="A code-writer. Actually three code-writers in a trenchcoat."
	/>
</svelte:head>

<div class="px-10">
	<div class="max-w-3xl mx-auto text-center">
		<slot />
	</div>
</div>

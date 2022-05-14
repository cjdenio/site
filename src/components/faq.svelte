<script lang="ts">
	export let question: string;
</script>

<div class="border border-zinc-600 p-5 pt-6 rounded-md mb-6 text-left relative">
	<h2 class="absolute top-0 left-5 -translate-y-1/2 bg-zinc-900 text-zinc-400 px-3">{question}</h2>
	<h3><slot /></h3>
</div>

<script lang="ts">
	export let name: string;
	export let logo: string | undefined = undefined;
	export let description: string = '';
	export let github: string | undefined = undefined;
	export let site: string | undefined = undefined;
	export let flavor: string | undefined = undefined;

	const flavorColors = [
		'text-emerald-300',
		'text-orange-300',
		'text-sky-300',
		'text-violet-300',
		'text-rose-300'
	];
	const flavorBackgrounds = [
		'bg-emerald-900',
		'bg-orange-900',
		'bg-sky-900',
		'bg-violet-900',
		'bg-rose-900'
	];

	const daRandomIndex = Math.floor(Math.random() * flavorColors.length);

	const flavorClass = `${flavorBackgrounds[daRandomIndex]} ${flavorColors[daRandomIndex]} text-sm rounded-full inline-block px-2 absolute top-0 left-5 -translate-y-1/2`;
</script>

<div class="border border-zinc-600 rounded-lg p-5 flex items-start relative" class:pt-6={flavor}>
	{#if flavor}
		<h4 class={flavorClass}>
			{flavor}
		</h4>
	{/if}

	{#if logo}
		<img src={logo} alt={name} class="mr-5 rounded-md w-20" />
	{/if}

	<div class="text-left">
		<h3 class="text-3xl font-bold mb-2">
			{name}
		</h3>

		<p class="text-md mb-2">{description}</p>
		{#if github}
			<a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
		{/if}
		{#if site}
			&middot; <a href={site} target="_blank" rel="noopener noreferrer">Site</a>
		{/if}
	</div>
</div>

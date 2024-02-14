<script>
	import Header from "../components/header/header.svelte"
	import Search from "../components/search/search.svelte"
	import Box from "../components/grid/box.svelte"
	import { getCollections } from "$lib/api"
</script>

<Header />
<Search />
<main class="max-w-full flex justify-center">
	<section class="grid grid-cols sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center p-10 m-10 max-w-7xl">
		{#await getCollections('/character') then { results } }
			{#each results as selection, index }
			<Box selection={ selection } key={ `character${index}` } />
			{/each}
		{/await}
	</section>
</main>

<script>
	import Header from "$lib/components/header/header.svelte"
	import Search from "$lib/components/search/search.svelte"
	import Boxes from "$lib/components/grid/boxes.svelte"
</script>

<Header />
<Search />
<main class="max-w-full flex justify-center">
	<Boxes />
</main>

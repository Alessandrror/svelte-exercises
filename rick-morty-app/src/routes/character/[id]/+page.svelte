<script lang="ts">

  import { page } from "$app/stores"
  import { getCharacter } from "$lib/api"
	import Box from "../../../components/grid/box.svelte";
  import Header from "../../../components/header/header.svelte"
  import Search from "../../../components/search/search.svelte"

  const callRandomCharacters = () => {
    const randomCharacters: number[] = []
    for (let i = 0; randomCharacters.length <= 10; i++) {
      const randomNumber = Math.floor(Math.random() * i)
      if (!randomCharacters.includes(randomNumber) && randomNumber > 0) {
        randomCharacters.push(randomNumber)
      }
    }
    return randomCharacters
  }

</script>

<Header />
<!-- <Search /> -->
<main class="grid place-content-center gap-20">
  {#await getCharacter($page.url.pathname) then { image, name, status, species, gender, type, origin, location, episode }}
  <section class="flex justify-between max-w-7xl gap-3 mx-20 mt-10">
    <article>
      <div class="flex">
        <img src={ image } alt={ `${name} image` } class="rounded-md aspect-square w-[300px]">
      </div>
      <div class="flex flex-col gap-3">
        <p class="text-6xl">Name: { name }</p>
        <p class="text-xl">Status: { status }</p>
        <p class="text-xl">Species: { species }</p>
        <p class="text-xl">Gender: { gender }</p>
        <p class="text-xl">Type: { type }</p>
        <p class="text-xl">Origin: { origin.name }</p>
        <p class="text-xl">Location: { location.name }</p>
      </div>
    </article>
    <section class="flex flex-col gap-10">
      <div class="flex flex-col">
        <span class="text-4xl">Episodes</span>
        <span class="text-xl">Appears in</span>
      </div>
      <div class="grid grid-cols-12 gap-5">
        {#each episode as n, i}
          <a href={ `/episode/${n.split('/').pop()}` } class="text-md flex justify-center items-center p-6 border border-stone-20 bg-slate-700 rounded-lg hover:bg-slate-500 hover:scale-110 hover:transition-all">{ n.split('/').pop() }</a>
        {/each}
      </div>
    </section>
  </section>
  {/await}
  <section class="max-w-7xl flex flex-col items-center">
    <h2 class="text-5xl w-fit">More characters:</h2>
    <div class="grid grid-cols sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center p-10 m-10">
      {#each callRandomCharacters() as randomCharacter}
        {#await getCharacter(`/character/${randomCharacter}`) then character }
          <Box selection={character} key={ `character/${randomCharacter}` } />
        {/await}
      {/each}
    </div>
  </section>
</main>



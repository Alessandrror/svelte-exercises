<script lang="ts">

  import { page } from "$app/stores"
  import { getCharacter } from "$lib/api"
  import Header from "../../../components/header/header.svelte"
  import Search from "../../../components/search/search.svelte"

</script>

<Header />
<!-- <Search /> -->
<main>
  {#await getCharacter($page.url.pathname) then { image, name, status, species, gender, type, origin, location, episode }}
  <article class="flex justify-between gap-3 mx-20 mt-10">
    <section>
      <div class="flex">
        <img src={ image } alt={ `${name} image` } class="rounded-md">
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
    </section>
    <section class="flex flex-col gap-10">
      <div class="flex flex-col">
        <span class="text-4xl">Episodes</span>
        <span class="text-xl">Appears in</span>
      </div>
      <div class="grid grid-cols-12 gap-5">
        {#each episode as n, i}
          <a href={ `/episode/${n.split('/').pop()}` } class="text-md text-center p-6 border border-stone-20 bg-slate-700 rounded-lg hover:bg-slate-500 hover:scale-110 hover:transition-all">{ n.split('/').pop() }</a>
        {/each}
      </div>
    </section>
  </article>
  {/await}
</main>



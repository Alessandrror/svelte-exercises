<script lang="ts">

  import { page } from "$app/stores"
  import Header from "../../../components/header/header.svelte"
  import Search from "../../../components/search/search.svelte"
  import Box from "../../../components/grid/box.svelte"
  import { getCharacter, getEpisode } from "$lib/api"

  const episodePath = `episode/${$page.url.pathname.split('/').pop()}`

</script>

<Header />
<!-- <Search /> -->
<main class="grid place-content-center gap-20">
  <section class="grid grid-cols sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center p-10 m-10 max-w-7xl">
    {#await getEpisode(episodePath) then { name, air_date, episode, characters }}
      {#each characters as character, i }
        {#await getCharacter(character.split('/').slice(-2).join('/')) then char }
          <Box selection={ char } key={ `${$page.url.pathname}${i}` } />
        {/await}
      {/each}
    {/await}
    <!-- {#await episodeCharacters(episodePath) then characters}
      {#each characters as character, i}
        <Box selection={ character } key={ `${$page.url.pathname}${i}` } />
      {/each}
    {/await} -->
  </section>
</main>

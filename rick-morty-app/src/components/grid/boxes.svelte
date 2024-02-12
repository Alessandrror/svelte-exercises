<script lang="ts">

  import { page } from "$app/stores"
  import Box from "./box.svelte"
  import { getCollections } from "$lib/api"

  const routes = ['/character', '/location', '/episode']

  const isValidPath = routes.some((route: string) => route === $page.url.pathname)
  console.log($page.url.pathname)

</script>

<section class="grid grid-cols sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center p-10 m-10 max-w-7xl">
  {#if isValidPath}
    {#await getCollections($page.url.pathname) then { results } }
      {#if results }
        {#each results as selection, index}
          <Box selection={ selection } key={ `${$page.url.pathname}${index}` } />
        {/each}
      {/if}
    {/await}
  {/if}
</section>

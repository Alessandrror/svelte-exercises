<script lang="ts">

  import { page } from "$app/stores";
  import Box from "./box.svelte"
  import { type Characters, type Locations, type Episodes } from "./boxes"
  import { getCollections } from "./boxes";

  const ROUTES_FILTERS = {
    CHARACTERS: '/character',
    LOCATIONS: '/location',
    EPISODES: '/episode'
  } as const

  const API_FILTRERS = {
    [ROUTES_FILTERS.CHARACTERS]: {
      literal: 'characters',
      param: `${ROUTES_FILTERS.CHARACTERS}`
    },
    [ROUTES_FILTERS.LOCATIONS]: {
      literal: 'locations',
      param: `${ROUTES_FILTERS.LOCATIONS}`
    },
    [ROUTES_FILTERS.EPISODES]: {
      literal: 'episodes',
      param: `${ROUTES_FILTERS.EPISODES}`
    }
  } as const

  interface RoutesFilters {
    [ROUTES_FILTERS.CHARACTERS]: Promise<Characters>
    [ROUTES_FILTERS.LOCATIONS]: Promise<Locations>
    [ROUTES_FILTERS.EPISODES]: Promise<Episodes>
  }

  // type routesValue = typeof ROUTES_FILTERS[keyof typeof ROUTES_FILTERS]

  // const path = $page.url.pathname
  const path = '/character'
  console.log(path)

</script>

<section class="grid grid-cols sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center p-10 m-10 max-w-7xl">
  {#await getCollections(path) then { results } }
    {#if results }
      {#each results as selection, i}
        <Box selection={ selection } />
      {/each}
    {/if}
  {/await}
</section>

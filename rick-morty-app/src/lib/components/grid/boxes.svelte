<script lang="ts">

  import Box from "./box.svelte"
  import { getChars } from "./boxes"

</script>
<section class="grid grid-cols sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center p-10 m-10 max-w-7xl">
  {#await getChars() then { results } }
      {#each results as char}
        <Box char={ char } />
      {/each}
  {/await}
</section>
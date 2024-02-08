<script lang="ts">

  import Box from "./box.svelte"
  import { getChars } from "./boxes"

</script>

<section class="grid gap-3 max-w-xs:grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 max-xl:grid-cols-7 p-10 m-10 bg-white w-12/12">
  {#await getChars() then { results } }
      {#each results as char}
        <Box char={ char } />
      {/each}
  {/await}
</section>
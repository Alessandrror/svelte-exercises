<script lang="ts">
  import Box from "./box.svelte"
  import type { Characters } from "./boxes"
  import { getChars } from "./boxes"

  let chars: Characters = getChars()

</script>

<section class="p-10 m-10 bg-white w-12/12">
  {#await getChars() }
    {#each chars as char}
      <Box { char.name } />
    {/each}
  {/await}
</section>
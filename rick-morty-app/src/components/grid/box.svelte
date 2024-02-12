<script lang="ts">

	import { z } from "zod"
  import { ResultCharacterSchema } from "$lib/validation/character"
  import { ResultLocationSchema } from "$lib/validation/location"
  import { ResultEpisodeSchema } from "$lib/validation/episode"

  // export let selection: Characters | Locations | Episodes
  // type CharactersResult = z.infer<typeof ResultCharacterSchema>
  // export let selection: CharactersResult
  export let selection: z.infer<typeof ResultCharacterSchema>
  export let key: string

</script>

<slot>
  <div id={ key } class="p-2 text-center bg-slate-700 rounded-xl">
    {#if selection }
      <img src={ selection.image } alt={ `${selection.name} Picture` } class="rounded-xl" >
      <span class="text-2xl text-balance">{ selection.name }</span>
    {/if}
  </div>
</slot>
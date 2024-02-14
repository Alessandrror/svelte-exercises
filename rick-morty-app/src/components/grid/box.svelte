<script lang="ts">

	import { z } from "zod"
  import { ResultCharacterSchema } from "$lib/validation/character"
  // import { ResultLocationSchema } from "$lib/validation/location"
  // import { ResultEpisodeSchema } from "$lib/validation/episode"

  // type CharactersResult = z.infer<typeof ResultCharacterSchema>
  // type LocationResult = z.infer<typeof ResultLocationSchema>
  // type EpisodeResult = z.infer<typeof ResultEpisodeSchema>

  // export let selection: z.infer<typeof ResultCharacterSchema | typeof ResultLocationSchema | typeof ResultEpisodeSchema>
  export let selection: z.infer<typeof ResultCharacterSchema>
  export let key: string

  const isCharacter = typeof selection === typeof ResultCharacterSchema
  // const isLocation = typeof selection === typeof ResultLocationSchema
  // const isEpisode = typeof selection === typeof ResultEpisodeSchema

</script>

<slot>
  <div id={ key } class="p-2 text-center bg-slate-700 rounded-xl btn" role="button">
    {#if selection }
      {#if isCharacter}
      <a href={ `/character/${selection.id}` }>
        <img src={ selection.image } alt={ `${selection.name} Picture` } class="rounded-xl" >
        <span class="text-2xl text-balance">{ selection.name }</span>
      </a>
      {/if}
    {/if}
  </div>
</slot>
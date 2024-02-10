<script lang="ts">

  import type { ResultCharacter, ResultLocation, ResultEpisode } from "./boxes";

  export let selection: ResultCharacter /* | ResultLocation | ResultEpisode */

</script>

<slot>
  <div class="p-2 text-center bg-slate-700 rounded-xl">
    <img src={ selection.image } alt={ `${selection.name} Picture` } class="rounded-xl" >
    <span class="text-2xl text-balance">{ selection.name }</span>
  </div>
</slot>
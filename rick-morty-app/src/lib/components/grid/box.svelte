<script lang="ts">

  import type { Result } from "./boxes";

  export let char: Result

</script>

<slot>
  <div class="p-2 text-center bg-slate-700 rounded-xl">
    <img src={ char.image } alt={ `${char.name} Picture` } class="rounded-xl" >
    <span class="text-2xl text-balance">{ char.name }</span>
  </div>
</slot>
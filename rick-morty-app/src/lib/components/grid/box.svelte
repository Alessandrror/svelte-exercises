<script lang="ts">

  import type { Result } from "./boxes";

  export let char: Result

</script>

<slot>
  <div class="w-80 p-2 text-center">
    <img src={ char.image } alt={ `${char.name} Picture` }>
    <span class="text-2xl text-black">{ char.name }</span>
  </div>
</slot>
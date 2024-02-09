<script>
  let search = ''
</script>

<div class="flex justify-center space-x-6 mx-auto px-16 py-10">
  <label class="text-5xl" for="search">Search a character</label>
  <input id="search" type="search" bind:value={search} class="rounded-xl text-3xl p-2 outline-none dark:text-white bg-slate-700">
</div>
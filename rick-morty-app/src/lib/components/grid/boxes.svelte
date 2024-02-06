<script lang="ts">
  import Box from "./box.svelte"
  import axios from "axios"

  type Result = {
    id: Number,
    name: String,
    status: String,
    species: String,
    type: String,
    gender: String,
    origin: {
      name: String,
      url: String
    },
    location: {
      name: String,
      url: String
    },
    image: String,
    episode: String[],
    url: String,
    created: String
  }

  type Info = {
    count: Number,
    pageS: Number,
    next: String,
    prev: String | null
  }

  type Characters = {
    info: Info,
    results: Result[]
  }

  let characters: Characters
  const getChars = async () => {
    characters = await axios.get('https://rickandmortyapi.com/api/character').then(e => e.data)
  }
  getChars()

</script>

<section class="p-10 m-10 bg-white w-12/12">
  {#await getChars() }
    <Box>
      <span>
        { characters.results.map(e => e.name) }
      </span>
    </Box>
  {/await}
</section>
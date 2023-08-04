<template>
  <div class="mt-4 mr-8">
    <p class="ml-3">Search By Name</p>
    <input
      type="text"
      class="w-full p-2 border-2 border-black ml-3 lg:w-[400px]"
      aria-label="search-box"
      @input="handleChange"
    />
    <button
      class="rounded bg-slate-400 hidden text-white p-[11px] ml-2 lg:inline-block"
    >
      Search
    </button>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

// functions
function handleChange(e) {
  let rickMortyData = computed(() =>
    store.getters.setSearchedRickMorty(e.target.value)
  );
  store.commit("updateRickMortyArray", rickMortyData.value);
  store.commit("setSearchKeyword", e.target.value);
}
</script>

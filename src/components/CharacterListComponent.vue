<template lang="">
  <div class="w-full lg:w-3/4">
    <h2 class="main-color mb-[50px] text-4xl" aria-label="heading">
      Selected filter
    </h2>

    <!-- filters button -->
    <div v-if="checkEmpty" class="ml-3">No Filters Selected !!</div>
    <div v-else class="flex flex-col md:flex-row">
      <template v-for="filterValue of props.filteredValues">
        <button
          class="rounded bg-slate-800 p-2 mb-2 text-white ml-3 flex flex-row justify-between"
        >
          <div class="mr-4">{{ filterValue }}</div>
          <div @click="handleCloseFilter(filterValue)">X</div>
        </button>
      </template>
    </div>

    <!-- Sorting UI and search -->
    <div class="flex flex-col justify-between md:flex-row">
      <SearchComponent />

      <div class="mt-4">
        <select
          @change="handleSort"
          class="border-2 border-black p-2 ml-3 w-full"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>

    <!-- CharacterList -->
    <div v-if="error">{{ error }}</div>
    <div class="grid m-4 gap-4 sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4">
      <template v-for="rickMortyCharacter of rickMortyData.result" :key="rickMortyCharacter.id">
        <!-- <router-link to='/'></router-link> -->
        <RickMortyCard :rickMortyCharacter="rickMortyCharacter" />
      </template>
    </div>
  </div>
</template>

<script setup>
//Imports
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import SearchComponent from "./SearchComponent.vue";
import RickMortyCard from "./RickMortyCard.vue";

// Props
const props = defineProps({
  filteredValues: Array,
});

onMounted(() => {
  store.dispatch("fetchRickMorty");
});

// variables
const emit = defineEmits(["onfilterClose"]);

// Store
const store = useStore();
const checkEmpty = computed(() => store.getters["checkEmptyFilterValues"]);
const rickMortyData = computed(() => store.state.rickMorty);
const error = computed(() => store.state.error);

//functions
function handleCloseFilter(val) {
  emit("onfilterClose", val);
}
function handleSort(e) {
  console.log(e.target.value);
}
</script>

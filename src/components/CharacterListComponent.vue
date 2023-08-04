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

      <div class="mt-12 mr-8">
        <select
          @change="handleSort"
          class="border-2 w-full border-black p-2 ml-3"
        >
          <option value="" disabled selected hidden>Sort by Id</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>

    <!-- CharacterList -->
    <div v-if="error">{{ error }}</div>
    <div
      class="grid m-4 max-[1020px]:gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      v-if="rickMortyDataResult.length > 0"
    >
      <template
        v-for="rickMortyCharacter of rickMortyDataResult"
        :key="rickMortyCharacter.id"
      >
        <router-link
          :to="{
            name: 'characterDetails',
            params: {
              name: rickMortyCharacter.name,
              id: rickMortyCharacter.id,
            },
          }"
          class="black-bg"
        >
          <RickMortyCard :rickMortyCharacter="rickMortyCharacter" />
        </router-link>
      </template>
    </div>

    <div class="w-full text-center my-8" v-if="rickMortyDataResult.length > 0">
      <button
        class="border-2 p-2 border-slate-500"
        @click="handleLoadMore"
        :class="
          searchKeyword.length > 0 || filteredValues.length > 0 ? 'hidden' : ''
        "
      >
        Load More
      </button>
      Total Loaded - {{ rickMortyData.resultCopy.length }}
    </div>

    <div v-if="rickMortyDataResult.length == 0" class="ml-3">
      No Data to Show !!
    </div>
  </div>
</template>

<script setup>
//Imports
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import SearchComponent from "./SearchComponent.vue";
import RickMortyCard from "./RickMortyCard.vue";

// Props
const props = defineProps({
  filteredValues: Array,
});

onMounted(() => {
  store.dispatch("fetchRickMortyInitial");
});

// variables
const emit = defineEmits(["onfilterClose"]);

// Store
const store = useStore();
const checkEmpty = computed(() => store.getters["checkEmptyFilterValues"]);
const rickMortyData = computed(() => store.state.rickMorty);
const rickMortyDataResult = computed(() => store.state.rickMorty.resultCopy);
const pageNumber = computed(() => store.state.pageNumber);
const error = computed(() => store.state.error);
const searchKeyword = computed(() => store.state.searchKeyword);

// watchers
watch(
  () => props.filteredValues,
  (filteredValuesNew, filteredValuesOld) => {
    let rickMortyData = computed(() => store.getters["filtersLogic"]);
    store.commit("updateRickMortyArray", rickMortyData.value);
  }
);

//functions
function handleCloseFilter(val) {
  emit("onfilterClose", val);
}
function handleLoadMore() {
  store.dispatch("fetchRickMorty", pageNumber);
}
function handleSort(e) {
  let rickMortyData = computed(() => store.getters.sortData(e.target.value));
  store.commit("updateRickMortyArray", rickMortyData.value);
}
</script>

<style>
.black-bg {
  background-color: #1f232a;
}
</style>

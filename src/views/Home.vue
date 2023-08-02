<template>
  <div class="flex gap-14 py-6 px-4 flex-col lg:flex-row xl:ml-[50px]">
    <FilterComponent
      @onfilteredValues="handleFilterEvent"
      ref="filterComponentRef"
    />
    <CharacterListComponent
      :filteredValues="filteredValues"
      @onfilterClose="handleFilterClose"
    />
  </div>
</template>

<script setup>
// Imports
import FilterComponent from "../components/FilterComponent.vue";
import CharacterListComponent from "../components/CharacterListComponent.vue";
import { ref } from "vue";
import { useStore } from "vuex";

const filteredValues = ref([]);
const filterComponentRef = ref();
const store = useStore();

// Functions
function handleFilterEvent(val) {
  filteredValues.value = val.value;
}
function handleFilterClose(val) {
  filteredValues.value = filteredValues.value.filter((fValue) => fValue != val);
  store.commit("setFilteredValues", filteredValues);
  filterComponentRef.value.handleCheckboxes(val)
}
</script>

<style scoped></style>

<template lang="">
  <div class="w-full lg:w-1/4">
    <h2 class="main-color mb-[50px] text-4xl" aria-label="heading">Filters</h2>

    <template v-for="filter of filters" :key="filter.name">
      <CardComponent>
        <h4 class="text-2xl font-semibold">{{ filter.name }}</h4>

        <template v-for="value of filter.values" :key="filter.name">
          <label :for="value">
            <input
              type="checkbox"
              class="mx-2"
              :value="value"
              :name="value"
              v-model="filterValue"
            />{{ value }}</label
          >
        </template>
      </CardComponent>
    </template>

    <pre>{{ filterValue }}</pre>
  </div>
</template>

<script setup>
// Imports
import CardComponent from "./CardComponent.vue";
import { useStore } from "vuex";
import { ref } from "vue";

// variables
const filterValue = ref([]);
const store = useStore();
const filters = store.state.filters;

// functions

</script>

<style scoped></style>

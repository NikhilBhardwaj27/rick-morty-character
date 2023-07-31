<template>
  <div class="flex gap-14 py-6 px-4 flex-col lg:flex-row xl:ml-[50px]">
    <FilterComponent />
    <CharacterListComponent />
  </div>
</template>

<script setup>
import FilterComponent from "../components/FilterComponent.vue";
import CharacterListComponent from "../components/CharacterListComponent.vue";

</script>

<style scoped></style>

<template>
  <div class="rounded-md m-[10px] h-[550px] gray-bg xl:h-[580px]">
    <!-- Image -->
    <img
      :src="rickMortyCharacter.image"
      :alt="rickMortyCharacter.name"
      class="w-full h-[250px] object-fit rounded-md"
    />

    <!-- Opacity name and time -->
    <div
      class="black-bg-opacity text-white opacity-30 w-full h-[50px] flex flex-col relative -top-[50px]"
    >
      <p class="ml-2 font-semibold">{{ rickMortyCharacter.name }}</p>
      <div class="flex flex-row">
        <div class="ml-2 text-xs">id: {{ rickMortyCharacter.id }}</div>
        <div class="ml-2 text-xs">- {{ time }}</div>
      </div>
    </div>

    <!-- Character details -->
    <div class="flex flex-col mx-4">
      <!-- STATUS -->
      <div class="flex flex-row justify-around p-3 gap-2 ml-4">
        <h4 class="text-slate-300 text-xs">STATUS</h4>
        <h4 class="text-amber-700 text-xs">{{ rickMortyCharacter.status }}</h4>
      </div>
      <hr class="w-3/4 mx-auto" />

      <!-- SPECIES -->
      <div class="flex flex-row justify-around p-3 gap-2 ml-4">
        <h4 class="text-slate-300 text-xs">SPECIES</h4>
        <h4 class="text-amber-700 text-xs">{{ rickMortyCharacter.species }}</h4>
      </div>
      <hr class="w-3/4 mx-auto" />

      <!-- GENDER -->
      <div class="flex flex-row justify-around p-3 gap-2 ml-4">
        <h4 class="text-slate-300 text-xs">GENDER</h4>
        <h4 class="text-amber-700 text-xs">{{ rickMortyCharacter.gender }}</h4>
      </div>
      <hr class="w-3/4 mx-auto" />

      <!-- ORIGIN -->
      <div class="flex flex-row justify-around p-3 gap-2 ml-4">
        <h4 class="text-slate-300 text-xs">ORIGIN</h4>
        <h4 class="text-amber-700 text-xs">
          {{ rickMortyCharacter.origin.name }}
        </h4>
      </div>
      <hr class="w-3/4 mx-auto" />

      <!-- LAST LOCATION -->
      <div class="flex flex-row justify-around p-3 gap-2 ml-4">
        <h4 class="text-slate-300 text-xs">LAST LOCATION</h4>
        <h4 class="text-amber-700 text-xs">
          {{ rickMortyCharacter.location.name }}
        </h4>
      </div>
      <hr class="w-3/4 mx-auto" />
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import moment from "moment";

const props = defineProps({
  rickMortyCharacter: Object,
});

const time = ref();
onMounted(() => {
  time.value = moment(props.rickMortyCharacter.created, "YYYYMMDD").fromNow();
});
</script>

<style scoped>
.black-bg {
  background-color: #1f232a;
}
.black-bg-opacity {
  background-color: #1f232a;
  opacity: 0.8;
}
.gray-bg {
  background-color: #333333;
}
</style>

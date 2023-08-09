<template lang="">
  <div class="flex flex-col justify-center items-center h-screen">
    <div class="max-w-[500px] h-full my-4 mx-4">
      <button @click="router.go(-1)" class="border-2 border-slate-300 p-2">
        Go Back
      </button>
      <h1 class="text-4xl text-center">{{ characterDetails.name }}</h1>
      <img
        :src="characterDetails.image"
        :alt="characterDetails.name"
        class="object-fit w-[500px] rounded-md mt-4"
      />
      <div class="flex flex-col">
        <button
          class="p-2 text-white mt-4"
          :class="
            characterDetails.status == 'Alive' ? 'bg-green-700' : 'bg-red-700'
          "
        >
          {{ characterDetails.status }}
        </button>

        <!-- Character Gender -->
        <div class="flex flex-row text-2xl mt-4">
          <p class="font-bold">Gender:</p>
          <p>{{ characterDetails.gender }}</p>
        </div>

        <!-- Character Location -->
        <div class="flex flex-row text-2xl mt-4">
          <p class="font-bold">Location:</p>
          <p>{{ characterDetails?.location?.name }}</p>
        </div>

        <!-- Character Species -->
        <div class="flex flex-row text-2xl mt-4">
          <p class="font-bold">Species:</p>
          <p>{{ characterDetails.species }}</p>
        </div>
        <!-- Character Origin -->
        <div class="flex flex-row text-2xl mt-4">
          <p class="font-bold">Origin:</p>
          <p>{{ characterDetails?.origin?.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

// Props
const props = defineProps({
  id: String,
});

const router = useRouter();
const store = useStore();
const characterDetails = computed(() => store.state.singleCharacter);

onMounted(() => store.dispatch("getCharacter", props.id));
</script>
<style lang=""></style>

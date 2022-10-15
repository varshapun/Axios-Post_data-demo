<script setup>
import BaseButton from "../base/BaseButton.vue";
import { useFormStore } from "../../stores/FormStore";
let formStore = useFormStore();
("FormGetData");
</script>
<template>
  <div class="flex items-center justify-center py-10 w-100">
    <BaseButton type="primary" @click="formStore.getData">Load Data</BaseButton>
  </div>
  <div class="w-full mt-2">
    <h1
      v-show="formStore.posts.length === 0"
      class="my-5 text-2xl font-bold text-center text-sky-800"
    >
      Please Load The data!!!
    </h1>
    <h1
      v-show="formStore.posts.length !== 0"
      class="my-5 text-2xl font-bold text-center text-sky-800"
    >
      Fetched Data is :
    </h1>
    <ul class="w-11/12 mx-auto md:w-3/4">
      <li v-for="post in formStore.posts" :key="post.id" class="my-2 text-lg">
        <h3 class="text-xl font-semibold text-sky-800">
          {{ post.id }} . {{ post.title }}
        </h3>
        <p>
          {{ post.body }}
          <button class="" @click="formStore.deleteData(post.id)">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              ></path>
            </svg>
          </button>
        </p>
      </li>
    </ul>
  </div>
</template>

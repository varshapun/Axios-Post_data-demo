<script setup>
import BaseButton from "../base/BaseButton.vue";
import { useFormStore } from "../../stores/FormStore";
import FormPostData from "../Form/FormPostData.vue";
import FormGetData from "../Form/FormGetData.vue";

let FormStore = useFormStore();

let tabs = [FormPostData, FormGetData];
let tabName = ["Post Data", "Get Data"];
function handleClick(tab, i) {
  FormStore.activeTab = tab;
  FormStore.active[i] = true;
  for (let index = 0; index < FormStore.active.length; index++) {
    if (index !== i) {
      FormStore.active[index] = false;
    }
  }
}
</script>
<template>
  <div class="bg-sky-400">
    <div
      class="flex items-center justify-center w-5/6 py-5 mx-auto text-sm font-semibold border-t md:w-1/2 space-x-7 md:space-x-10 md:text-xl border-amber-200"
    >
      <BaseButton
        v-for="(tab, i) in tabs"
        type="HeaderTab"
        :key="tab"
        @click="handleClick(tab, i)"
        :active="FormStore.active[i]"
        >{{ tabName[i] }}
      </BaseButton>
    </div>
  </div>
</template>

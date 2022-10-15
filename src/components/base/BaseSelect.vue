<script setup>
import { useFormStore } from "../../stores/FormStore";
let FormStore = useFormStore();
let props = defineProps({
  type: String,
  modelValue: String,
});
let courses = [];
if (props.type == "post") {
  courses = FormStore.post;
} else if (props.type == "graduation") {
  courses = FormStore.graduation;
}
</script>
<template>
  <select
    name="course"
    id=""
    @change="$emit('Update:modelValue', $event.target.value)"
    class="px-5 py-2 my-2 mb-5 text-xl outline-none"
    placeholder="select course"
  >
    <option value="" disabled selected hidden>Select your option</option>
    <option v-for="course in courses" :value="course">
      {{ course }}
    </option>
  </select>
</template>

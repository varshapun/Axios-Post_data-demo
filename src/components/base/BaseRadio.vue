<script setup>
defineProps({
  value: String,
  name: String,
  modelValue: String,
});
</script>
<template>
  <div class="p-2 px-5 space-x-2 text-xl bg-white rounded-md">
    <input
      type="radio"
      :value="value"
      :name="name"
      @click="$emit('Update:modelValue', $event.target.value)"
      :id="value"
    />

    <label :for="value">{{ value }}</label>
  </div>
</template>

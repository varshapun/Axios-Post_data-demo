<script setup>
defineProps({
  LabelFor: String,
});
</script>
<template>
  <label :for="LabelFor" class="mb-10 text-xl font-semibold"
    ><slot></slot
  ></label>
</template>

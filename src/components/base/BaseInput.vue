<script setup>
let props = defineProps({
  type: {
    type: String,
    default: "text",
  },

  InputSize: {
    type: String,
    default: "large",
  },
  pattern: String,
  InputPlaceHolder: String,
  InputMaxLength: Number,
  modelValue: String,
});
console.log("this is hello", props.model);
</script>
<template>
  <input
    :type="type"
    class="p-2 mb-3 text-xl rounded focus:outline-none"
    :placeholder="InputPlaceHolder"
    :pattern="pattern"
    :value="modelValue"
    @input="$emit('Update:modelValue', $event.target.value)"
    :maxlength="InputMaxLength"
    :class="{
      'w-5/6 md:w-2/5 ': InputSize === 'small',
      'w-5/6': InputSize === 'large',
      'w-1/5': InputSize === 'verySmall',
    }"
  />
</template>
<script setup></script>

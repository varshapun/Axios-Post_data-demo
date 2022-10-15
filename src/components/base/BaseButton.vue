<script setup>
defineProps({
  type: String,
  active: Boolean,
});
</script>
<template>
  <button
    class="p-1 transition-all duration-200 ease-in-out rounded-md w-52 md:p-5"
    :type="type"
    :class="{
      'bg-sky-900 text-sky-100 ': type === 'HeaderTab' && active,
      ' bg-sky-100 text-sky-500 hover:bg-sky-200':
        type === 'HeaderTab' && !active,
      'bg-sky-900 text-sky-100 hover:bg-sky-700 text-xl': type === 'submit',
    }"
  >
    <slot></slot>
  </button>
</template>

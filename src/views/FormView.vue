<script setup>
import FormHeader from "../components/FormHeader.vue";
import FormBody from "../components/FormBody.vue";
import { useFormStore } from "../stores/FormStore";
import { useVuelidate } from "@vuelidate/core";
let formStore = useFormStore();
formStore.v$ = useVuelidate(formStore.rules, formStore.formData);
</script>

<template>
  <FormHeader />
  <FormBody />
</template>

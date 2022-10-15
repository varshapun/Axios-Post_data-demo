<script setup>
import FormGetData from "../components/Form/FormGetData.vue";
import FormHeader from "../components/Form/FormHeader.vue";
import FormPostData from "../components/Form/FormPostData.vue";
import { useFormStore } from "../stores/FormStore";
import { useVuelidate } from "@vuelidate/core";
import FormTabs from "../components/Form/FormTabs.vue";
let formStore = useFormStore();

formStore.v$ = useVuelidate(formStore.rules, formStore.formData);
</script>

<template>
  <FormHeader />
  <FormTabs />
  <KeepAlive>
    <component :is="formStore.activeTab" />
  </KeepAlive>
</template>

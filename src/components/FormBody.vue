<script setup>
import BaseInput from "./base/BaseInput.vue";
import BaseLabel from "./base/BaseLabel.vue";
import BaseRadio from "./base/BaseRadio.vue";
import BaseButton from "./base/BaseButton.vue";
import { useFormStore } from "../stores/FormStore";
import BaseErrorMessage from "./base/BaseErrorMessage.vue";
let formStore = useFormStore();
console.log("Vuevalidate", formStore.v$);
</script>
<template>
  <form class="grid w-full place-items-center" style="height: 85vh">
    <div
      action=""
      class="w-full px-5 py-3 mx-auto md:px-0 md:w-4/5 lg:w-3/4 center bg-sky-200 4 rounded-xl"
    >
      <div class="w-full mx-auto my-5 space-y-1 md:w-5/6">
        <BaseLabel>ID</BaseLabel>

        <div>
          <BaseInput
            v-model="formStore.formData.id"
            type="tel"
            InputSize="small"
            InputPlaceHolder="ID(3 Digit Value!)"
            @input="formStore.v$.id.$touch()"
          />
        </div>
        <div v-if="formStore.v$.id.$error">
          <span class="text-red-500">{{
            formStore.v$.id.$silentErrors[0].$message
          }}</span>
        </div>
        <BaseLabel>Title </BaseLabel>
        <div>
          <BaseInput
            InputPlaceHolder="Title"
            v-model="formStore.formData.title"
            InputSize="small"
            @input="formStore.v$.title.$touch()"
          />
        </div>
        <div v-if="formStore.v$.title.$error">
          <span class="text-red-500">{{
            formStore.v$.title.$silentErrors[0].$message
          }}</span>
        </div>
        <BaseLabel>Body </BaseLabel>
        <div>
          <BaseInput
            type="text"
            v-model="formStore.formData.body"
            InputPlaceHolder="body"
            InputSize="small"
            @input="formStore.v$.body.$touch()"
          />
        </div>
        <div v-if="formStore.v$.body.$error">
          <span class="text-red-500">{{
            formStore.v$.body.$silentErrors[0].$message
          }}</span>
        </div>
        <BaseLabel>User ID </BaseLabel>
        <h1>{{ formStore.errMessage }}</h1>
        <div class="flex items-center justify-between">
          <div>
            <BaseInput
              type="tel"
              InputSize="small"
              InputPlaceHolder="UserID"
              v-model="formStore.formData.userId"
              @input="formStore.v$.userId.$touch()"
            />
            <div v-if="formStore.v$.userId.$error">
              <span class="text-red-500">{{
                formStore.v$.userId.$silentErrors[0].$message
              }}</span>
            </div>
          </div>

          <BaseButton type="submit" @click.prevent="formStore.submitForm"
            >Submit</BaseButton
          >
        </div>
      </div>
    </div>
  </form>
</template>

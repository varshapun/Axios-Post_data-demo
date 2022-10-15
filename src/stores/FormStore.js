import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useVuelidate } from "@vuelidate/core";
import swal from "sweetalert2";
import { usePostStore } from "./PostStore";
import {
  required,
  maxLength,
  minLength,
  alpha,
  integer,
} from "@vuelidate/validators";
export const useFormStore = defineStore("formStore", {
  state: () => ({
    postStore: usePostStore(),
    errMessage: "",
    v$: "",
    formData: {
      id: "",
      title: "",
      body: "",
      userId: "",
    },
    rules: {
      id: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(3),
        integer,
      },
      title: {
        required,
        minLength: minLength(3),
      },
      body: { required },
      userId: {
        required,
        integer,
        minLength: minLength(6),
        maxLength: maxLength(6),
      },
    },
  }),
  actions: {
    submitForm() {
      this.v$.$touch();

      if (this.v$.$error) {
        swal.fire("Oops", "Please Enter Data properly", "error");
      } else {
        this.postStore.postData();

        /*  swal
          .fire("Success", "Data Saved Successfully", "success")
          .then((result) => {
            if (result.value) {

              window.location.reload();
            }
          }); */
      }
    },
  },
});

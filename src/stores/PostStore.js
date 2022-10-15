import { useFormStore } from "./FormStore";
import axios from "axios";
import { defineStore } from "pinia";
import swal from "sweetalert2";
export let usePostStore = defineStore("postStore", {
  state: () => ({
    formStore: useFormStore(),
  }),
  actions: {
    postData() {
      axios
        .post(
          "https://jsonplaceholder.typicode.com/posts",
          this.formStore.formData
        )
        .then((Response) => {
          swal
            .fire("success", "Data submitted successfully!!!", "success")
            .then((result) => {
              if (result.value) {
                window.location.reload();
              }
            });
        })
        .catch((error) => swal.fire("Error", error, "Error"));
    },
  },
});

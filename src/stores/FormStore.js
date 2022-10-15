import { defineStore } from "pinia";
import swal from "sweetalert2";
import FormPostData from "../components/Form/FormPostData.vue";
import axios from "axios";
import { required, maxLength, minLength, integer } from "@vuelidate/validators";
export const useFormStore = defineStore("formStore", {
  state: () => ({
    posts: [],
    activeTab: FormPostData,
    active: [true, false],
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
        axios
          .post("https://jsonplaceholder.typicode.com/posts", this.formData)
          .then((Response) => {
            console.log(Response);
            swal
              .fire("success", "Data submitted successfully!!!", "success")
              .then((result) => {
                if (result.value) {
                  window.location.reload();
                }
              });
          })
          .catch((error) => swal.fire("Error", error, "Error"));
      }
    },

    getData() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((Response) => {
          console.log(Response.data);
          this.posts = Response.data;
        })
        .catch((error) => console.log(error));
    },
    deleteData(id) {
      axios
        .delete("https://jsonplaceholder.typicode.com/posts/" + id)
        .then(() => {
          const index = this.posts.findIndex((post) => post.id === id);
          if (index > -1) this.posts.splice(index, 1);
          swal.fire("success", "Deleted SuccessFully!!", "success");
        });
    },
  },
});

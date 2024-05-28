<template>
  <v-card class="pa-5">
    <v-card-title>
      Add New Movie
    </v-card-title>
    <v-form
      ref="form"
      @submit.prevent="submitForm"
      class="pa-5"
      enctype="multipart/form-data"
    >
      <v-text-field label="Movie Name" v-model="post.title" :rules="rules">
      </v-text-field>
      <v-text-field label="Movie type" v-model="post.category" :rules="rules">
      </v-text-field>
      <v-text-field label="Movie Rating" v-model="post.rating" :rules="rules">
      </v-text-field>
      <v-textarea label="Description" v-model="post.content" :rules="rules">
      </v-textarea>
      <v-file-input
        @change="selectFile"
        label="Movie Images"
        :rules="rules"
        show-size
        counter
        multiple
      >
      </v-file-input>
      <v-text-field label="Download Url" v-model="post.url" :rules="rules">
      </v-text-field>
      <v-btn type="submit" class="mt-3" color="primary">Add New Movie</v-btn>
    </v-form>
  </v-card>
</template>

<script>
import Api from "./axios";
export default {
  data() {
    return {
      rules: [(value) => !!value || "This field is required"],
      post: {
        title: "",
        category: "",
        rating: "",
        url: "",
        image: "",
        content: "",
      },
      image: "",
    };
  },
  methods: {
    selectFile(file) {
      this.image = file[0];
    },

    async submitForm() {
      const formData = new FormData();
      formData.append("title", this.post.title);
      formData.append("category", this.post.category);
      formData.append("rating", this.post.rating);
      formData.append("content", this.post.content);
      formData.append("image", this.image);
      formData.append("url", this.post.url);

      //check Form Validate
      if (this.$refs.form.validate()) {
        const response = await Api.addPost(formData);
        this.$router.push({
          name: "Home",
          params: { message: response.message },
        });
      }
    },
  },
};
</script>

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
      <v-text-field label="Movie Name" v-model="post.title"> </v-text-field>
      <v-text-field label="Movie type" v-model="post.category"> </v-text-field>
      <v-text-field label="Movie Rating" v-model="post.rating"> </v-text-field>
      <v-textarea label="Description" v-model="post.content"> </v-textarea>
      <v-file-input
        @change="selectFile"
        label="Movie Images"
        show-size
        counter
        multiple
      >
      </v-file-input>
      <v-text-field label="Download Url" v-model="post.url"> </v-text-field>
      <v-img :src="`/${post.image}`" width="150"></v-img>
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
        url: "",
        rating: "",
        image: "",
        content: "",
      },
      image: "",
    };
  },

  //get form by id
  async created() {
    const response = await Api.getPostById(this.$route.params.id);
    this.post = response;
  },
  methods: {
    selectFile(file) {
      this.image = file[0];
    },

    async submitForm() {
      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("title", this.post.title);
      formData.append("category", this.post.category);
      formData.append("rating", this.post.rating);
      formData.append("url", this.post.url);
      formData.append("content", this.post.content);
      formData.append("old_image", this.post.image);

      //check Form Validate
      if (this.$refs.form.validate()) {
        const response = await Api.updatePost(this.$route.params.id, formData);
        this.$router.push({
          name: "Home",
          params: { message: response.message },
        });
      }
    },
  },
};
</script>

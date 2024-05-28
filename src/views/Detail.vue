<template>
  <v-container>
    <v-row>
      <v-col sm="10" class="pa-3">
        <v-card class="pa-1">
          <v-img :src="`/${movie.image}`"> </v-img>
          <v-btn class="ml-4 mt-3" small outlined color="red">{{
            movie.category
          }}</v-btn>
          <v-btn class="ml-4 mt-3" small color="yellow">{{
            movie.rating
          }}</v-btn>
          <v-card-title class="headline">
            {{ movie.title }}
          </v-card-title>
          <v-btn
            class="mr-4"
            :to="{ name: 'updateMovie', params: { id: movie._id } }"
            color="green"
            >update</v-btn
          >
          <v-btn @click="deletePost(movie._id)" color="primary">delete</v-btn>
          <a style="text-decoration: none" v-bind:href="movie.url"
            ><v-btn class="ml-4" color="purple">download</v-btn></a
          >
        </v-card>
      </v-col>
      <v-card-text class="py-0">
        <h3>Movie Description</h3>
        <p>{{ movie.content }}.</p>
      </v-card-text>
    </v-row>
    <br />
    <br /><br />
  </v-container>
</template>

<script>
import Api from "./axios";
export default {
  data() {
    return {
      movie: {},
    };
  },

  async created() {
    const response = await Api.getPostById(this.$route.params.id);
    this.movie = response;
    console.log(response);
  },
  methods: {
    async deletePost(id) {
      const response = await Api.deletePost(id);
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

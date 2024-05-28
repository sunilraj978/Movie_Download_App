<template>
  <v-container>
    <v-row>
      <v-col sm="4" class="pa-3" v-for="movie in movieList" :key="movie._id">
        <v-card
          class="pa-1"
          :to="{ name: 'Detail', params: { id: movie._id } }"
        >
          <v-img height="230" :src="`/${movie.image}`"> </v-img>
          <v-btn class="ml-4 mt-3" small outlined color="red">{{
            movie.category
          }}</v-btn>
          <v-card-title class="headline">
            {{ movie.title }}
          </v-card-title>
          <v-card-text class="py-0">
            <p>{{ movie.content.substring(0, 30) }}....</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Api from "./axios";
export default {
  data() {
    return {
      movieList: [],
    };
  },
  async created() {
    this.movieList = await Api.getAllPost();
  },
};
</script>

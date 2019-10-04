<template>
  <v-container>
    <v-row>
      <v-col>
        <MyStory />
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col>
        <MySkills />
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col>
        <MyRepos />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MyStory from "../components/MyStory";
import MySkills from "../components/MySkills";
import MyRepos from "../components/MyRepos";

export default {
  name: "HomeView",
  components: {
    MyStory,
    MySkills,
    MyRepos
  }
};
</script>

<style>
</style>
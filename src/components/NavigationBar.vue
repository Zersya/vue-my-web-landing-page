<template>
    <v-app-bar color="primary" fixed dark>
      <v-app-bar-nav-icon style="margin-left:30px">
        <v-img src="../assets/logo.png" aspect-ratio="1" class="grey lighten-2"></v-img>
      </v-app-bar-nav-icon>


      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn @click="myStory" text>My Story</v-btn>
        <v-btn @click="mySkills" text>My Skill</v-btn>
        <v-btn @click="myRepo" text>My Repos</v-btn>

      </v-toolbar-items>
    </v-app-bar>
</template>


<script>
import VueScrollTo from "vue-scrollto";

export default {
  name: "NavigationBar",
  methods: {
    myStory() {
      VueScrollTo.scrollTo("#myStory");
    },
    mySkills() {
      VueScrollTo.scrollTo("#mySkills");
    },
    myRepo() {
      VueScrollTo.scrollTo("#myRepo");
    }
  }
};
</script>

<style>
</style>
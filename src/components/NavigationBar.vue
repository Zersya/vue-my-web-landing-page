<template>
  <div>
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon style="margin-left:30px">
        <v-img src="../assets/logo.png" aspect-ratio="1" class="grey lighten-2"></v-img>
      </v-app-bar-nav-icon>

      <!-- <v-toolbar-title>Zein Ersyad</v-toolbar-title> -->

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn @click="myStory" text>My Story</v-btn>
        <v-btn @click="mySkills" text>My Skill</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
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
    }
  }
};
</script>

<style>
</style>
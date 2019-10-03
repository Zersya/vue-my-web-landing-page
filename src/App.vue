<template>
  <transition appear appear-active-class="fade-enter-active">
    <v-app>
      <NavigationBar />
      <Header />

      <v-content>
        <HomeView />
      </v-content>
      <v-spacer></v-spacer>
      <Footer />
    </v-app>
  </transition>
</template>

<script>
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeView from "./views/HomeView";

export default {
  name: "App",
  components: {
    NavigationBar,
    Header,
    HomeView,
    Footer
  },
  data: () => ({
    //
  })
};
</script>

<style scoped>
.fade-enter-active {
  animation: go 2s;
}

@keyframes go {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

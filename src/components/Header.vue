<template>
  <v-container color="primary">
    <v-parallax src="../assets/header.jpg">
      <v-overlay :opacity="0.25" absolute>
        <v-card
          light
          outlined
          class="display-2"
          align="center"
          style="padding:16px;"
          width="350"
          :ripple="false"
          flat
          @click="show = !show"
        >
          Welcome
          <transition name="slide-fade" mode="out-in">
            <p v-if="show" class="subtitle-1" key="university">I'm a student at Telkom University</p>
            <p v-if="!show" class="subtitle-1" key="name">My name is Muhammad Zein Ersyad</p>
          </transition>
        </v-card>
        <transition name="slide-fade" mode="out-in">
          <v-progress-linear v-if="show" value="80" height="25" background-opacity="0.5" rounded>
            <strong class="body-1" style="color:white;">
              <strong>Study Progress</strong> 80%
            </strong>
          </v-progress-linear>

          <div v-if="!show" style="height:25px"></div>
        </transition>
      </v-overlay>
    </v-parallax>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    show: false
  })
};
</script>

<style scoped>
.container {
  position: relative;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
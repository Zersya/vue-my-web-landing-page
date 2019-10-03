<template>
  <v-footer dark padless>
    <v-card flat tile class="primary lighten-1 white--text text-center" style="width:100%">
      <div class="flex-grow-1"></div>

      <v-card-text>
        <v-btn v-for="(icon, index) in icons" :key="icon" class="mx-4 white--text"  large icon @click="openLink(links[index])">
          <i :class="icon" style="font-size:20px;"></i>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>Zein Ersyad</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-linkedin",
      "fab fa-instagram"
    ],
    links: [
        'https://facebook.com/zeinersyad',
        'http://twitter.com/zeinersyad',
        'http://linkedin.com/in/zeinersyad',
        'http://instagram.com/zeinersyad'
    ]
  }),
  methods: {
      openLink(url){
          window.open(url, '_blank')
      }
  }
};
</script>

<style>
</style>
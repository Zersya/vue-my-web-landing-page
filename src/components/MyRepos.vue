<template>
  <scroll-view>
    <v-container>
      <v-row id="myRepo">
        <v-col align="center">
          <p class="primary--text display-1">My Repository</p>
        </v-col>
      </v-row>
      <v-lazy>
        <RecycleScroller
          style="max-height:500px"
          class="overflow-y-auto"
          direction="vertical"
          :item-size="repos.length"
          :items="repos"
          :buffer="2000"
          key-field="id"
          v-slot="{ item }"
        >
          <v-card>
            <v-card-text class="primary--text">
              <div class="headline mb-2">{{ item.full_name }}</div>
              {{ item.description }}
            </v-card-text>

            <v-card-actions>
              <v-btn @click="openLink(item.html_url)" text>Open</v-btn>
            </v-card-actions>
          </v-card>
        </RecycleScroller>
      </v-lazy>
    </v-container>
  </scroll-view>
</template>

<script>
import axios from "axios";

export default {
  name: "MyRepos",
  data: () => ({
    repos: []
  }),
  methods: {
    openLink(url) {
      window.open(url, "_blank");
    }
  },
  mounted() {
    axios.get("https://api.github.com/users/Zersya/repos").then(response => {
      this.repos = response.data;
    });
  }
};
</script>

<style scoped>
</style>
<template>
  <v-container>
    <v-row id="mySkills">
      <v-col align="center">
        <p class="primary--text display-1">My Skills</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="skill in skills" :key="skill.name">
        <v-row style="min-height:88px">
          <v-col align="center">
            <p class="body-1">{{ skill.name }}</p>
          </v-col>
        </v-row>
        <!-- <v-row align="center">
          <v-col align="center">
            <v-progress-circular
              :rotate="360"
              :size="150"
              :width="15"
              :value="skill.value"
              color="primary"
            >{{skill.value}}%</v-progress-circular>
          </v-col>
        </v-row> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MySkills",
  data: () => ({
    skills: [
      {
        name: "Mobile App Development"
      },
      {
        name: "Web App Development"
      },
      {
        name: "Programming Interest"
      },
      {
        name: "Flutter"
      },
      {
        name: "Laravel"
      }
    ]
  })
};
</script>

<style></style>

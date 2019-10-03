<template>
  <v-container>
    <v-row id="mySkills">
      <v-col align="center">
        <p class="display-1">My Skills</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="skill in skills" :key="skill.name" >
        <v-row>
          <v-col align="center">
            <p class="body-1">{{ skill.name }}</p>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col align="center">
            <v-progress-circular
              :rotate="360"
              :size="150"
              :width="15"
              :value="skill.value"
              color="teal"
            >{{skill.value}}%</v-progress-circular>
          </v-col>
        </v-row>
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
        name: "Mobile App Development",
        value: 70
      },
      {
        name: "Web App Development",
        value: 60
      },
      {
        name: "Flutter",
        value: 80
      },
      {
        name: "Laravel",
        value: 70
      },
      {
        name: "Programming",
        value: 90
      }
    ]
  })
};
</script>

<style>
</style>
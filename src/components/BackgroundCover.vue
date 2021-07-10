<template>
  <div class="background-cover">
    <BackgroundCover class="background-cover-base"/>

    <div class="background-cover-oval-container">
      <BackgroundOval
          v-for="(oval,index) in 7"
          :key="index"
          class="background-cover-oval-container-item"
      />
    </div>
  </div>
</template>

<script>
import {BackgroundCover, BackgroundOval} from "../assets/units";

export default {
  name: 'Background',
  components: {
    BackgroundCover,
    BackgroundOval
  }
}
</script>

<style scoped>

</style>

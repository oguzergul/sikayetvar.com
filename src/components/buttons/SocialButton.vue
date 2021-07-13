<template>
  <a :href="route" :style="{backgroundColor:_media_button}" class="social-media-button" target="_blank">
    <slot/>
    <span class="social-media-button-popover">Follow us</span>
  </a>
</template>

<script>
export default {
  name: 'SocialButton',
  props: ["type", "route"],
  computed: {
    _media_button() {
      const buttonTypes = [
        {id: 1, type: 'facebook', color: '#3B5999'},
        {id: 2, type: 'twitter', color: '#1DA1F2'},
        {id: 3, type: 'dribble', color: '#EA4C89'},
        {id: 4, type: 'github', color: '#222222'},
      ]
      return buttonTypes.find(types => types.type === this.type).color;
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="container-card">
    <slot></slot>
  </div>
</template>

<script>
import ListItem from "./ListItem";
export default {
  name: 'ContainerCard',
  components: {ListItem}
}
</script>

<style scoped>

</style>

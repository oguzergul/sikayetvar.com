<template>
  <li class="list-item">

    <div class="list-item-container">
      <div class="list-item-container-content">
        <span class="list-item-container-content-number">{{ number }}</span>
        <p class="list-item-container-content-text">{{ title }}</p>
      </div>
      <div class="list-item-container-button-group">
        <Button title="DETAY" type="detail" @onClick="$emit('onDetail',$event)"/>
        <Button title="DÜZENLE" type="edit" @onClick="$emit('onEdit',$event)"/>
        <Button title="SİL" type="delete" @onClick="$emit('onDelete',$event)"/>
      </div>
    </div>
    <hr>

  </li>
</template>

<script>
import Button from "../buttons/Button";

export default {
  name: 'ListItem',
  props: ["number", "title"],
  components: {Button}
}
</script>

<style scoped>

</style>

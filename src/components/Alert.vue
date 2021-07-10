<template>
  <div class="alert">
    <div class="alert-container">
      <div class="alert-container-header">
        <p class="alert-container-header-title">Silmek istediğinize emin misiniz ?</p>
        <IconClose @click="$emit('onClose',$event)"/>
      </div>
      <div class="alert-container-body">
        <p class="alert-container-body-post">{{ alertBody }}</p>
      </div>
      <div class="alert-container-footer">
        <Button title="SİL" type="delete" @onClick="$emit('submitDelete',$event)"/>
      </div>
    </div>
  </div>
</template>

<script>
import {IconClose} from "../assets/icons";
import Button from "./Button";

export default {
  name: 'Alert',
  props: {
    alertBody: {
      // type: String,
      default: false,
    }
  },
  components: {Button, IconClose},
}
</script>


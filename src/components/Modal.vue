<template>
  <div class="modal">
    <div class="modal-container">
      <div class="modal-container-header">
        <span>{{ title }}</span>
        <IconClose @click="$emit('onClose',$event)"/>
      </div>

      <div class="modal-container-content">
        <form>
          <p class="form-title">Title</p>
          <label>
            <input :value="titleValue" placeholder="Title" type="text" @input="$emit('titleInput', $event.target.value)">
          </label>
          <p class="form-title">Body</p>
          <label>
            <textarea :value="bodyValue" placeholder="Body" rows="4" @input="$emit('bodyInput',$event.target.value)"/>
          </label>
        </form>
      </div>

      <div class="modal-container-footer">
        <Button title="GÜNCELLE" type="update" @onClick="$emit('onUpdate',$event)"/>
      </div>
    </div>
  </div>
</template>

<script>
import {IconClose} from '../assets/icons/index'
import Button from "./buttons/Button";

export default {
  name: 'Modal',
  components: {Button, IconClose},
  data() {
    return {
      formModel: {
        title: "",
        body: ""
      }
    }
  },
  props: {
    title: {
      type: String
    },
    isModalOpened: {
      type: Boolean,
      default: false
    },
    titleValue: {
      type: String,
    },
    bodyValue: {
      type: String,
    }

  }
}
</script>

<style scoped>

</style>

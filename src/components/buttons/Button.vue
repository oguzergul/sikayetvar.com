<template>
  <div>
    <button :style="{backgroundColor:_button_type}" :type="type" class="regular-button"
            @click="$emit('onClick',$event)">
      <span>{{ title }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: ['type', 'title'],
  computed: {
    _button_type() {
      const buttonTypes = [
        {id: 1, type: 'detail', color: '#5E72E4'},
        {id: 2, type: 'delete', color: '#FB6340'},
        {id: 3, type: 'edit', color: '#2DCE89'},
        {id: 4, type: 'update', color: '#11CDEF'},
        {id: 5, type: 'login', color: '#FFFFFF'},
      ]
      return buttonTypes.find(types => types.type === this.type).color;
    }
  }
}
</script>

<style scoped>

</style>

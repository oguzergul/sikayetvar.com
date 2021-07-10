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
      const type = this.type;
      if (type === 'detail') {
        return '#5E72E4';
      } else if (type === 'delete') {
        return '#FB6340';
      } else if (type === 'edit') {
        return '#2DCE89';
      } else if (type === 'update') {
        return '#11CDEF';
      } else if (type === 'login') {
        return '#FFFFFF';
      }
    }
  }
}
</script>

<style scoped>

</style>

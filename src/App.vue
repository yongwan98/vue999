<template>
  <div id="app">
    <HeaderMenu />
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu.vue'

export default {
  name: 'Home',
  components: {
    HeaderMenu
  }
}
</script>

<style lang="scss">
  @import "scss/style";
</style>

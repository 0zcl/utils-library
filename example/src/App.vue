<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  data() {
    return {
      name: 'zcl'
    }
  }
}
</script>

<style scoped>
#app {
  height: 100%;
}
html, body {
  height: 100%;
  min-width: 1200px;
  margin: 0;
  padding: 0;
  color: #000;
  font-size: 14px;
  overflow: hidden;
}
</style>
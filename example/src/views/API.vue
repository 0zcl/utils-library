<template>
  <div class="page-container">
    <div class="aside">
      <div class="header">
        <h1 class="title">
          <a href="https://github.com/0zcl/utils-library">xe-utils</a>
        </h1>
      </div>
    </div>
    <div class="body">
      <div>
        <div id="donation" class="donation-item">
          <p>如果您觉得我们的开源软件对你有所帮助，请扫下方二维码打赏我们一杯咖啡☕</p>
          <p>由于维护一个开源项目需要花费非常大的精力与时间，如果您正在使用该项目，您的捐赠会帮助该项目能持续发展下去</p>
          <img src="static/donation/pay.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class API extends Vue {
  mounted() {
    console.log('mounted')
  }
}
</script>

<style scoped>
.page-container {
  font-size: 15px;
}
.donation-item {
  padding: 20px 0 600px 0;
  text-align: center;
}
img {
  width: 200px;
}
</style>
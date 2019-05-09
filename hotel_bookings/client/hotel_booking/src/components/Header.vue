<template lang="html">
  <div class="Header">
    <img src="@/assets/logo.png" alt="">
    <h1>{{text}}</h1>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style lang="css" scoped>
.Header {
  font-size: 20px;
}
</style>

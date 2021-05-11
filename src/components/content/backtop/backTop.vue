<template>
<div class="back-top">
<img src="~assets/img/common/top.png" alt="">
</div>
</template>

<script>
export default {
  name:"backTop",
}
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 10px;
  bottom: 55px;
  z-index: 10;
}

.back-top img {
  height: 43px;
  width: 43px;
}
</style>

c<template>
<div class="nav-bar">
  <div class="left"><slot name="left"></slot></div>
  <div class="center"><slot name="center"></slot></div>
  <div class="right"><slot name="right"></slot></div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    line-height: 44px;
    height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100, .2);
    overflow: hidden;
    position: relative;
    z-index: 10;
  }

  .left, .right {
    width: 12%;
  }

  .center {
    flex: 1;

    padding-top: -20px;
  }
</style>

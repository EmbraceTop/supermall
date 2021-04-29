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
    line-height: 60%;
    height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100, .2);
    overflow: hidden;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }

  .left, .right {
    width: 60px;
  }

  .center {
    flex: 1;
    top: -10px;
    padding-top: 0;
  }
</style>

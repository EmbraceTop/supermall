<template>
  <div class="wrapper" ref="wrap">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import MouseWheel from '@better-scroll/mouse-wheel'
BScroll.use(MouseWheel)

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    }
  },
  mounted() {

    this.scroll = new BScroll(this.$refs.wrap, {
      click:true,
      mouseWheel:true,
      observeDOM:true,
      pullUpLoad:true
    });

  },
  updated() {
    this.$nextTick(() => {
      this.scroll.refresh()
    });
  }
}
</script>

<style scoped>
.wrapper {
  overflow: hidden;
}
</style>

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
import PullUp from '@better-scroll/pull-up'
import {debounce} from 'components/common/utils'

BScroll.use(MouseWheel)
BScroll.use(PullUp)

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type:Boolean,
      default: false
    }
  },
  methods:{
    scrollTo(x, y, time = 300){
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    // 防抖函数

  },
  mounted() {
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrap, {
      click:true,
      mouseWheel:true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      disableMouse: false,
      disableTouch: false,
      observeDOM: true
    });

    if(this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll',(position) => {
        this.$emit('scrolling',position);
      })
    };

    if(this.pullUpLoad) {
      this.scroll.on('pullingUp',() => {
        this.$emit('loading')

        this.scroll.finishPullUp()
      });
    }


  },
  updated() {
    this.$nextTick(() => {
      //重新计算高度
      debounce(this.scroll.refresh(),500)
    });
  }
}
</script>

<style scoped>
.wrapper {
  overflow: hidden;
}
</style>

<template>
<div class="wrapper">
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(item,index) in topImages" :key="index">
      <img class="swiper-img" :src="item" alt="">
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          speed: 1000,
          autoplay: {
            delay: 1000,
            disableOnInteraction: false
          },
          loop: true,

          // effect: 'cube'
        },
        flag: false
      }
    },
    props:{
      topImages:{
        type: Array
      }
    },
    computed: {

    },
    methods:{

    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
    }
  }
</script>

<style scoped>
.wrapper {
  overflow: hidden;
  position: relative;
  top: 44px;
  width: 100%;
  height: 400px;
  padding-bottom: 0;
}
.swiper-img {
  width: 100%;
}
.swiper-pagination {
  padding-bottom:226px ;
}
</style>

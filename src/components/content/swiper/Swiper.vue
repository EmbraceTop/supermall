<template>
<div class="wrapper">
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="item in swiperItem" :key="item.acm" @load="swiperImgLoad">
      <a :href="item.link">
      <img class="swiper-img" :src="item.image" alt="">
      </a>
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
      swiperItem:{
        type:Array
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    methods:{
      swiperImgLoad() {
        this.$emit('swiperImgLoad');
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
    }
  }
</script>

<style scoped>
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 52%;
}
.swiper-img {
  width: 100%;
}
.swiper-pagination {
  padding-bottom:10px ;
}
</style>

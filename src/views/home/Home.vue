<template>
  <div id="home">
    <nav-bar class="home-nav"><template v-slot:center><p>购物街</p></template></nav-bar>
    <home-swiper :swiperItem="banner"></home-swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from 'components/content/swiper/Swiper'
import {getHomeMultidata} from 'network/home.js'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper
  },
  data() {
    return {
      banner: [],
      dkeyword: [],
      keywords: [],
      recommend: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      this.banner = res.data.banner.list;
      this.dkeyword = res.data.dKeyword;
      this.keywords = res.data.keywords.list;
      this.recommend = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
  #home {
    overflow: hidden;
  }
  .home-nav {
    background-color: #ff5777;
    color: #fff;
  }
</style>

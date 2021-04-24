<template>
  <div id="home">
    <nav-bar class="home-nav"><template v-slot:center><p>购物街</p></template></nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from 'network/home.js'

export default {
  name: 'Home',
  components: {
    NavBar
  },
  data() {
    return {
      banner: null,
      dkeyword: null,
      keywords: null,
      recommend: null
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
  .home-nav {
    background-color: #ff5777;
    color: #fff;
  }
</style>

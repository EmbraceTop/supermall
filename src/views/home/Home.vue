<template>
  <div id="home">
    <nav-bar class="home-nav"><template v-slot:center><p>购物街</p></template></nav-bar>

    <scroll class="content" ref="scroll">
    <home-swiper :swiperItem="banner"></home-swiper>
    <recommend-view :recommendsList="recommends"></recommend-view>
    <popular-view></popular-view>
    <tab-control class="tab-control"
                 :titles="['流行','新款','精选']"
                 @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>
    </scroll>


  </div>
</template>

<script>
import HomeSwiper from 'components/content/swiper/Swiper'
import RecommendView from 'components/content/homerecommend/RecommendView'
import PopularView from 'components/content/home/popular/PopularView'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabcontrol/TabControl'

import {getHomeMultidata, getHomeGoods} from 'network/home.js'


export default {
  name: 'Home',
  components: {
    Scroll,
    NavBar,
    HomeSwiper,
    RecommendView,
    PopularView,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      banner: [],
      dkeyword: [],
      keywords: [],
      recommends: [],
      goods:{
        'pop': {page:0 ,list:[]},
        'new': {page:0 ,list:[]},
        'sell': {page:0 ,list:[]},
      },
      currentType: 'pop'
    }
  },
  computed: {
    showGoods () {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    //事件监听相关的方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break
        case 1:
          this.currentType = 'new';
          break
        case 2:
          this.currentType = 'sell';
          break
      }
    },

    //网络请求相关的方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
      this.banner = res.data.banner.list;
      this.dkeyword = res.data.dKeyword;
      this.keywords = res.data.keywords.list;
      this.recommends = res.data.recommend.list
    })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1

      })
    }
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    // 2.请求tabcontrol下方的商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');

  },

}
</script>

<style scoped>
  #home {
    height: 100vh;
  }

  .home-nav {
    background-color: #ff5777;
    color: #fff;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }

  .content {
    height: calc( 100vh - 44px );
  }
</style>

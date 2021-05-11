<template>
  <div id="detail">
    <detail-nav-bar ref="detailNavBar" class="nav" @navClick="navClick" :current-index="currentIndex"></detail-nav-bar>
    <scroll :probe-type="3"
            :pullUpLoad="true"
            class="detail-scroll"
            ref="scroll"
            @scrolling="contentScroll">
    <detail-swiper :topImages="topImages" class="swiper"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
    <detail-param-info :param-info="paramInfo" ref="param"></detail-param-info>
    <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
    <detail-recommend-list :recommend-info="recommendInfo" ref="recommend"></detail-recommend-list>
    </scroll>
    <detail-bottom-bar></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailRecommendList from './childComps/DetailRecommendList'
import DetailBottomBar from './childComps/DetailBottomBar'


import Scroll from 'components/common/scroll/Scroll'
import {backTopMixin} from '@/common/mixin.js'
import {BACKTOP_DISTANCE} from '@/common/const'

import {getDetail,getRecommend,Goods,Shop,GoodsParam} from 'network/detail'

export default {
  name: "Detail",
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendList,
    DetailBottomBar,

    getDetail,
    Scroll
  },
  mixins: [backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendInfo: [],
      scrollTopY: [],
      currentIndex: 0
    }
  },
  methods: {
    // 监听商品图片的加载，刷新better-scroll的高度
    imageLoad() {
      this.$refs.scroll.scroll.refresh();
    },
    // 获取不同组件的元素顶部距离
    getScroll() {
        this.scrollTopY = [];

        this.scrollTopY.push(0);
        this.scrollTopY.push(this.$refs.param.$el.offsetTop);
        this.scrollTopY.push(this.$refs.comment.$el.offsetTop);
        this.scrollTopY.push(this.$refs.recommend.$el.offsetTop);
        this.scrollTopY.push(Number.MAX_VALUE)
    },
    // 点击顶部导航时，跳转至相应位置
    navClick(index) {
      this.$refs.scroll.scrollTo(0,-this.scrollTopY[index],200)
    },
    // 根据滚动位置，反馈到currentIndex上，并传入子组件
    contentScroll(position) {
      let scLength = this.scrollTopY.length
      const positionY = -position.y
      for(let i = 0 ;i < scLength ; i++) {

        if(positionY >= this.scrollTopY[i] && positionY < this.scrollTopY[i+1]) {
          if(this.currentIndex !== i){
            this.currentIndex = i
        }
        break;
      }
    };
    this.isShowBackTop = Math.abs(position.y) > BACKTOP_DISTANCE
  }
},
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      const data = res.result

      // 1.获取顶部的图片轮播数据
      console.log(res)
      this.topImages = data.itemInfo.topImages

      // 2.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo)

      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo

      // 5.保存商品的参数数据
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

      // 6.保存评论信息
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      };

  //     this.$nextTick(() => {
  //       // offsetTop值不对的原因: 图片没有计算在内
  //       // 根据最新的数据，对应的DOM是已经被渲染出来
  //       // 但是图片依然是没有加载完
  //       this.scrollTopY = [];

  //       this.scrollTopY.push(0);
  //       this.scrollTopY.push(this.$refs.param.$el.offsetTop);
  //       this.scrollTopY.push(this.$refs.comment.$el.offsetTop);
  //       this.scrollTopY.push(this.$refs.recommend.$el.offsetTop);
  // })
    });

    getRecommend().then(res => {
      this.recommendInfo = res.data.list
    });

},
  updated() {
    this.getScroll()
  }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 11;
    background-color: #fff;
    height: 100vh;
  }
  .swiper {
    position: relative;
    top: 0;
    margin-bottom: -44px;
  }

  .nav{
    background: #fff;
  }

  .detail-scroll {
    position: relative;
    height: calc( 100vh - 49px - 44px );
  }
</style>

<template>
  <div id="detail">
    <detail-nav-bar ref="detailNavBar" class="nav" @navClick="navClick"></detail-nav-bar>
    <scroll :probe-type="3"
            :pullUpLoad="true"
            class="detail-scroll"
            ref="scroll">
    <detail-swiper :topImages="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
    <detail-param-info :param-info="paramInfo" ref="param"></detail-param-info>
    <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
    <detail-recommend-list :recommend-info="recommendInfo" ref="recommend"></detail-recommend-list>
    </scroll>
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

import Scroll from 'components/common/scroll/Scroll'

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

    getDetail,
    Scroll

  },
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
      scrollTopY: []
    }
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.scroll.refresh();
        this.scrollTopY = [];

        this.scrollTopY.push(0);
        this.scrollTopY.push(this.$refs.param.$el.offsetTop);
        this.scrollTopY.push(this.$refs.comment.$el.offsetTop);
        this.scrollTopY.push(this.$refs.recommend.$el.offsetTop);
    },
    navClick(index) {
      this.$refs.scroll.scrollTo(0,-this.scrollTopY[index]+44,300)
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

  .nav{
    background: #fff;
  }

  .detail-scroll {
    position: relative;
    height: 100vh;
  }
</style>

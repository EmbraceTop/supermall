<template>
  <div class="goods-list">
    <detail-recommend-list-item v-for="(item,index) in recommendInfo" :key="index" :goodsItems="item" ></detail-recommend-list-item>
  </div>
</template>

<script>
import DetailRecommendListItem from './DetailRecommendListItem'

export default {
  name: "GoodsList",
  props:{
    recommendInfo:{
      type:Array,
      default() {
        return []
      }
    }
  },
  components:{
    DetailRecommendListItem
  }
}
</script>

<style scoped>
.goods-list {
  display: flex;
  position: relative;
  top: 44px;
  flex-wrap: wrap;
}

</style>

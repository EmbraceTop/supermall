<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :key="item.page" :goodsItems="item" ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: "GoodsList",
  props:{
    goods:{
      type:Array,
      default() {
        return []
      }
    }
  },
  components:{
    GoodsListItem
  }
}
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
}

</style>

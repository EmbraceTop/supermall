<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="getImg" alt="">
    <p>{{goodsItems.title}}</p>
    <div class="remain">
    <span class="price">{{'￥'+goodsItems.price}}</span>
    <span class="cfav">{{goodsItems.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"GoodsListItem",
  props:{
    goodsItems:{
      type:Object,
      default() {
        return {}
      }
    }
  },
  methods:{
    itemClick() {
      this.$router.push('/detail/' + this.goodsItems.iid)
    }
  },
  computed:{
    getImg() {
      return this.goodsItems.img || this.goodsItems.image || this.goodsItems.show.img
    }
  }
}
</script>

<style scoped>
.goods-item {
  float: left;
  width: 50%;
  padding: 2px;
  justify-content: space-around;
}
.goods-item img{
  height: 299px;
  width: 200px;
  border-radius: 7px;
}
.goods-item p{
  height: 20px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 5px;
}
.remain {
  display: flex;
}
.remain .price {
  flex: 1;
  text-align: center;
  color: var(--color-high-text) ;
}
.remain .cfav {
  flex: 1;
  text-align: center;
  position: relative;
}
  .remain .cfav::before {
    content: '';
    position: absolute;
    left: 14px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>

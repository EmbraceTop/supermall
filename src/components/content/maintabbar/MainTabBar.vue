<template>
  <tab-bar>
  <tab-bar-item link="/home" activeColor="orange">
    <template v-slot:item-icon><img src="assets/img/tabbar/home.svg" alt=""></template>
    <template v-slot:item-icon-selected><img src="assets/img/tabbar/home_active.svg" alt=""></template>
    <template v-slot:item-text><div>首页</div></template>
  </tab-bar-item>
  <tab-bar-item link="/category" activeColor="aqua">
    <template v-slot:item-icon><img src="assets/img/tabbar/category.svg" alt=""></template>
    <template v-slot:item-icon-selected><img src="assets/img/tabbar/category_active.svg" alt=""></template>
    <template v-slot:item-text><div>分类</div></template>
  </tab-bar-item>
  <tab-bar-item link="/cart" activeColor="pink">
    <template v-slot:item-icon><img src="assets/img/tabbar/cart.svg" alt=""></template>
    <template v-slot:item-icon-selected><img src="assets/img/tabbar/cart_active.svg" alt=""></template>
    <template v-slot:item-text><div>购物车</div></template>
  </tab-bar-item>
  <tab-bar-item link="/user">
    <template v-slot:item-icon><img src="assets/img/tabbar/profile.svg" alt=""></template>
    <template v-slot:item-icon-selected><img src="@/assets/img/tabbar/profile_active.svg" alt=""></template>
    <template v-slot:item-text><div>我的</div></template>
  </tab-bar-item>
</tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

export default {
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>
tab-bar-item >>> img {
  width: 12px;
  height: 12px;
}
</style>

<template>
<div id="cart">
  <nav-bar class="nav-bar">
    <template v-slot:center><div class="center">购物车({{cartLength}})</div></template>
  </nav-bar>
  <scroll :probe-type="3"
          class="cart-scroll"
          ref="scroll">
    <cart-list></cart-list>
  </scroll>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import CartList from './childComps/CartList'

export default {
  name: "Cart",
  components:{
    NavBar,
    Scroll,
    CartList
  },
  computed:{
    ...mapGetters([
      'cartLength'
    ])
  },
  activated() {
    this.$refs.scroll.scroll.refresh()
  }
}
</script>

<style scoped>
.nav-bar {
  background-color: #ff5777;
}
.center {
  color: #fff;
}
.cart-scroll {
  position: relative;
  height: calc( 100vh - 44px - 49px );
}
</style>

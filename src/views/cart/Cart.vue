<template>
<div id="cart">
  <nav-bar class="nav-bar">
    <template v-slot:center><div class="center">购物车({{cartLength}})</div></template>
  </nav-bar>
  <cart-list></cart-list>
  <cart-bottom-bar class="bottom"></cart-bottom-bar>
  <div class="em"></div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import NavBar from 'components/common/navbar/NavBar'

import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar.vue'

export default {
  name: "Cart",
  components:{
    NavBar,
    CartList,
    CartBottomBar
  },
  methods:{
  },
  computed:{
    ...mapGetters([
      'cartLength'
    ])
  },
}
</script>

<style scoped>
#cart {
  position: relative;
  padding: 5px;
  height: 100vh;
}

.nav-bar {
  background-color: #ff5777;
}
.center {
  color: #fff;
}

.bottom {
  position: relative;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-top: 1px solid #ccc;
  height: 40px;
  bottom: 7px;
}
.em {
  clear: both;
  height: 0;
}
</style>

<template>
  <scroll :probe-type="3"
          class="cart-scroll"
          ref="scroll">
    <div class="cart-list">
      <cart-list-item v-for="(item,index) in cartList"
                      :key="index"
                      :product="item"
                      @refreshScroll="refreshScroll"></cart-list-item>
    </div>
  </scroll>
</template>

<script>
import {mapGetters} from 'vuex'
import CartListItem from './CartListItem'
import Scroll from 'components/common/scroll/Scroll'
export default {
  components:{
    CartListItem,
    Scroll
  },
  computed:{
    ...mapGetters([
      'cartList'
    ])
  },
  methods:{
    refreshScroll() {
      this.$refs.scroll.scroll.refresh()
    }
  },
  activated() {
    this.$refs.scroll.scroll.refresh()
  },
  // updated() {
  //   this.$refs.scroll.scroll.refresh()
  // }
}
</script>

<style scoped>
.cart-list {
  position: relative;
  top: 0;
  width: 100%;
}
.cart-scroll {
  position: relative;
  height: calc( 100vh - 44px - 49px - 40px );
}
</style>

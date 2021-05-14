<template>
<div>
  <div class="selector">
    <check-button @checkBtnClick="checkedChange" v-model="isSelected">
    </check-button>
    <p>全选</p>
  </div>
  <div class="total">合计：{{totalPrice}}</div>
  <div class="cal">去结算({{calculate}})</div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import CheckButton from './CheckButton'


export default {
  name: "CartBottomBar",
  components:{
    CheckButton
  },
  data() {
    return {
      isSelectedAll:true
    }
  },
  computed:{
    ...mapGetters([
      'cartList'
    ]),
    totalPrice(){
      let totalPrice = 0;
      totalPrice = this.cartList.filter(item => item.checked).reduce((prevalue,item) => {
        return prevalue + item.count * item.price
      }, 0)
      return '￥' + totalPrice.toFixed(2)
    },
    isSelected() {
      return this.cartList.find(item => !item.checked) === undefined
    },
    calculate() {
      return this.cartList.filter(item => item.checked).length
    }
  },
  methods:{
    checkedChange() {
      let goods = this.cartList

      // 判断是否有未选中的按钮
      let SelectedAll = goods.find(item => !item.checked);

      // 如果有未选中的按钮，则改为全部选中
      if (SelectedAll) {
        goods.forEach(item => {
          item.checked = true
        });
      }else {
        goods.forEach(item => {
          item.checked = false
        })
      }
    }
  }
}
</script>

<style scoped>
.selector {
  position: relative;
  display: flex;
  align-items: center;
  left: 0;
  height: 100%;
  width: 16%
}

.selector p {
  flex:1;
  position: absolute;
  left: 18px;
}

.total {
  position: relative;
  display: flex;
  align-items: center;
  left: 0;
  height: 100%;
  width: 60%;
}

.cal {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22%;
  height: 100%;
  background-color: rgb(255,190,220);
}

</style>

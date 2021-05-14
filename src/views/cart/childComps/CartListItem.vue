<template>
  <div class="item">
    <div class="item-selector">
      <check-button @checkBtnClick="checkedChange" v-model="product.checked"></check-button>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">商品描述: {{product.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{product.price}}</div>
        <div class="item-count right">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton'


export default {
  components:{
    CheckButton
  },
  data(){
    return {

    }
  },
  methods:{
    checkedChange() {
      this.product.checked = !this.product.checked
    }
  },
  props:{
    product:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  created() {
    this.$emit('refreshScroll')
  }
}
</script>

<style scoped>
.item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
}

.item-selector {
    position: relative;
    display: flex;
    align-items: center;
}

.item-img {
  position: relative;
  left: 2px;
  padding: 5px;
}

.item-img img{
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-title, .item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 150px;
  right: 10px;
}

.info-bottom .item-price {
  color: orangered;
}
</style>

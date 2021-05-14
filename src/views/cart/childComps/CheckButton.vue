<template>
    <div>
      <div class="icon-selector" :class="{'selector-active': checked}" @click="selectItem">
        <img src="~/assets/img/cart/tick.svg" alt="">
      </div>
    </div>
</template>

<script>
	export default {
		name: "CheckButton",
    model:{
      prop: 'value',
    },
    props: {
		  value: {
		    type: Boolean,
        default: false
      }
    },
    data() {
		  return {
		    checked: this.value
      }
    },
    methods: {
      selectItem() {
        this.$emit('checkBtnClick')
      }
    },
    watch: {
		  value(newValue) {
        this.checked = newValue;
      }
    }
	}
</script>

<style scoped>
  .icon-selector {
    display: flex;
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }

  .selector-active {
    background-color: #ff8198;
    border-color: #ff8198;
  }
</style>

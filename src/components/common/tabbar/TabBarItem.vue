<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive" class="de">
    <slot name="item-icon"></slot>
    </div>
    <div v-else class="de">
      <slot name="item-icon-selected"></slot>
    </div>
    <div :style="activeStyle">
    <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    link:String,
    activeColor: {
      type:String,
      default:'red'
    }
  },
  data () {
    return {
      defau:null
    }
  },
  computed:{
    isActive() {
      return this.$route.path.includes(this.link)
    },
    activeStyle() {
      return this.isActive? {color:this.activeColor} : {}
    }
  },
  methods: {
    itemClick () {
      this.$router.replace(this.link)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex:1;
  text-align: center;
  height: 49px;
}

.tab-bar-item .de >>> img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 0px;
}
.tab-bar-item >>> .active {
  color: red;
}
</style>
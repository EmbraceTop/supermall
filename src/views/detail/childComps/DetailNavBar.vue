<template>
  <nav-bar>
    <template v-slot:left>
      <div class="left-box" @click="backClick">
      <p class="back">&lt;</p>
      </div>
    </template>
    <template v-slot:center>
      <div class="title">
        <div v-for="(item,index) in title" :key="index" class="title-item" @click="itemClick(index)" :class="{active: currentIndex === index}">{{item}}</div>
      </div>
    </template>
   </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'


export default {
  name: "Detail",
  components:{
    NavBar
  },
  props:{
    currentIndex:{
      type: Number,
      default:0
    }
  },

  data() {
    return {
      iid: null,
      title: ['商品','参数','评论','推荐'],
    }
  },
  methods: {
    itemClick(index) {
      this.$emit('navClick',index)
    },
    backClick() {
      this.$router.back()
    }
  },
  computed:{

  },
  created() {




  },
}
</script>

<style scoped>
.title {
  display: flex;
}
.title-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}

.back {
  vertical-align: middle;
  text-align: center;
}
</style>

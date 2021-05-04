<template>
  <div class="recommend">
    <div v-for="item in recommendsList" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommendsList:{
      type:Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  position: relative;
  left: 0;
  top: 15px;
  display: flex;
  height: 110px;
  width: 100%;
  text-align: center;
  font-size: 80%;
  padding: 10px 0 15px;
  border-bottom: 6px solid #eee;
}
.recommend .recommend-item{
  flex: 1;
}
.recommend .recommend-item img {
  width: 65px;
  height: 65px;
  margin-bottom: 5px;
}

</style>

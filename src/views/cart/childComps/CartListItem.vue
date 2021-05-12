<template>
  <div>{{product}}</div>
</template>

<script>
export default {
  props:{
    product:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>

</style>

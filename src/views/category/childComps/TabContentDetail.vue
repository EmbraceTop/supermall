<template>
  <grid-view>
  </grid-view>
</template>

<script>
  import GridView from 'components/common/gridView/GridView'


  export default {
    name: "TabContentDetail",
    components: {
      GridView,
    },
    props: {
      categoryDetail: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>

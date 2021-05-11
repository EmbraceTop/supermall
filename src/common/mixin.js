import BackTop from 'components/content/backtop/backTop'

export const backTopMixin = {
  components:{
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo( 0, 0, 500)
    }
  }
}

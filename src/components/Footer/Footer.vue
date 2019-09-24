<template>
  <footer class="footer border-1px">
    <a href="javascript:;" class="footlink_item"
    :class="{'on':$route.path==='/msite'}"
    @click="goto('/msite')"
    >
      <span class="item_icon">
        <i class="iconfont icon-shouye1-copy"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="footlink_item" 
    :class="{'on':$route.path==='/category'}"
    @click="goto('/category')"
    >
      <span class="item_icon">
        <i class="iconfont icon-tubiao13"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="footlink_item"
    :class="{'on':$route.path==='/check'}"
    @click="goto('/check')"
    >
      <span class="item_icon">
        <i class="iconfont icon-zhaopian"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="footlink_item" 
    :class="{'on':$route.path==='/car'}"
    @click="goto('/car')"
    >
      <span class="item_icon">
        <i class="iconfont icon-gouwuchekong"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="footlink_item" 
    :class="{'on':$route.path==='/profile'}"
    @click="goto('/profile')"
    >
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </a>
  </footer>
</template>
 
<script>
export default {
  methods:{
    goto(path){
      if (this.$route.path !== path) {
        this.$router.replace(path)
      }
    }
  }
};
</script>
 
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
.footer
  top-border-1px(#e4e4e4) 
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 98px
  display flex
  .footlink_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 1px
    color #999999
    &.on
      color #02a774
    span
      font-size 30px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 40px

</style>
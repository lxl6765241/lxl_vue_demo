<template>
  <div>
    <div class="profile-title">
      <i class="iconfont icon-shouye1-copy" @click="goto('/msite')"></i>
      <img src="../../common/image/yanxuan.png" alt class="yanxuan" />
      <img src="../../common/image/search.png" alt class="search-title" />
      <i class="iconfont icon-gouwuchekong"></i>
    </div>
    <div class="login-content">
      <div class="logos">
        <img src="../../common/image/yanxuan1.png" alt />
      </div>
      <div class="login-style">
        <mt-button style="width:100%" type="danger" class="phone-login" @click="goto('/phonelogin')">
          <i class="iconfont icon-shouji"></i>
          <span>手机号快捷登录</span>
        </mt-button>
        <button class="mint-button mint-button--danger mint-button--large is-plain phone-login" @click="goto('/emaillogin')">
          <i class="iconfont icon-youjian"></i>
          <span>邮箱号登录</span>
        </button>
        
      </div>
      <div class="thirdWrap">
        <div class="icon-item wechat">
          <i class="iconfont icon-weixin"></i>
        <span>微信</span>
        </div>
        <div class="icon-item qq">
          <i class="iconfont icon-qq"></i>
        <span>QQ</span>
        </div>
        <div class="icon-item">
          <i class="iconfont icon-xinlang"></i>
        <span>微博</span>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  methods:{
    goto(path){
      this.$router.replace(path)
    }
  }
};
</script>
 
<style lang="stylus" rel="stylesheet/stylus">
.profile-title
  position: relative
  width: 750px
  height: 88px
  padding: 0 16px 0 24px
  box-sizing: border-box
  line-height: 88px
  .iconfont
    font-size: 60px
  .yanxuan
    position: absolute
    top: 17px
    left: 298px
    width: 154px
    height: 54px
  .icon-gouwuchekong
    position: absolute
    right: 30px
  .icon-shouye1-copy
    position: absolute
    left: 30px
  .search-title
    position: absolute
    top: 13px
    right: 100px
    height: 64px
    width: 64px
.login-content
  width 100%
  height 1244px
  background-color: #f2f5f4
  .logos
    box-sizing: border-box
    position: absolute
    top: 176px
    width: 750px
    height: 482px
    padding: 180px 0 0 232px
    img
      width: 268px
      height: 90px
  .login-style
    position: absolute
    box-sizing: border-box
    margin-bottom: 204px
    padding: 0 40px
    bottom: 200px
    width: 100%
    height: 220px
    .phone-login
      width: 670px
      height: 94px
      margin-bottom: 32px
      .iconfont
        font-size: 40px
        margin-right: 10px
      span
        font-size: 40px
  .thirdWrap
    position absolute
    bottom 96px
    width 100%
    height 40px      
    display flex
    line-height 40px
    .icon-item
      width 180px
      height 40px
      margin-left 40px
    .wechat
      margin-left 80px  
      border-right 2px solid black
    .qq  
      margin-left 50px
      border-right 2px solid black 
    span 
      font-size 40px
    .iconfont
      font-size 40px
    
</style>
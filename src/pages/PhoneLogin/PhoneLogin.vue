<template>
  <div>
    <div class="profile-title1">
      <i class="iconfont icon-shouye1-copy" @click="goto('/msite')"></i>
      <img src="../../common/image/yanxuan.png" alt class="yanxuan1" />
      <img src="../../common/image/search.png" alt class="search-title1" />
      <i class="iconfont icon-gouwuchekong"></i>
    </div>
    <div class="login-content1">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt class="login-img" />
      <input type="text" placeholder="请输入手机号" class="input-top" />
      <!-- <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span> -->
      <input type="text" placeholder="请输入验证码" class="input-bottom" />
      <a href="javascript:;">获取验证码</a>
    </div>
    <div class="unlogin">
      <a href="javascript:;">遇到问题？</a>
      <a href="javascript:;" @click="goto('/emaillogin')">使用邮箱验证登录</a>
    </div>
    <div class="long-sure-button">
      <div class="lgbutton">
        <span>登录</span>
      </div>
      <div class="CheckSure">
        <input type="checkbox" />
        <span>我同意</span>
        <a href="javascript:;">《服务条款》</a>
        <span>和</span>
        <a href="javascript:;">《网易隐私策略》</a>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  methods: {
    goto(path) {
      this.$router.replace(path);
    }
  }
};
</script>
 
<style lang="stylus" rel="stylesheet/stylus">
.profile-title1
  position: relative
  width: 750px
  height: 88px
  padding: 0 16px 0 24px
  box-sizing: border-box
  line-height: 88px
  background-color: #FAFAFA
  .iconfont
    font-size: 60px
  .yanxuan1
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
  .search-title1
    position: absolute
    top: 13px
    right: 100px
    height: 64px
    width: 64px
.login-content1
  position: relative
  height: 760px
  width: 750px
  padding-top: 30px
  background-color: #fff
  .login-img
    position: absolute
    left: 279px
    top: 50px
    width: 192px
    height: 64px
  input
    border: none
    outline: none
    position: absolute
    box-sizing: border-box
    width: 100%
    padding: 0 50px
    border-bottom: 2px solid #EEEEEE
    font-size: 32px
  .input-top
    top: 200px
  .input-bottom
    top: 300px
  a
    position: absolute
    top: 280px
    right: 40px
    width: 162px
    height: 53px
    font-size: 28px
    color: #333333
    border: 1px solid black
    text-align: center
    line-height: 53px
.unlogin
  position: absolute
  top: 480px
  left: 50px
  width: 670px
  font-size: 28px
  display: flex
  justify-content: space-between
.long-sure-button
  width: 670px
  height: 150px
  .lgbutton
    position: absolute
    left: 40px
    top: 600px
    width: 670px
    height: 91px
    font-size: 40px
    background-color: #DD1A21
    text-align: center
    line-height: 91px
    border-radius: 10px
    span
      color: white
  .CheckSure
    position: absolute
    top: 700px
    line-height: 37px
    left: 30px
    padding-left: 50px
    box-sizing: border-box
    fontsize: 32px
    input
      position: absolute
      top: 6px
      left: 8px
      height: 28px
      width: 28px
    &>span
      font-size: 32px
    a
      font-size: 28px
</style>
<template>
  <div class="Carwrap">
    <div class="Cartitle">
      <span class="title-left">购物车</span>
      <div class="title-right">
        <span class="title-right-text" @click="goto('/phonelogin')">领券</span>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="massage">
        <ul class="massageList">
          <li>☆30天无忧退货</li>
          <li>☆48小时快速退款</li>
          <li>☆满88元包邮</li>
        </ul>
      </div>
      <div class="Car-logo">
        <img src="../../common/image/car.png" alt />
        <div class="addsomething">去添加点东西吧</div>
        <mt-button type="danger" class="login-button" @click="goto('/phonelogin')">
          <span>登录</span>
        </mt-button>
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
  },
  components: {}
};
</script>
 
<style lang="stylus" rel="stylesheet/stylus">
.Carwrap
  position: relative
  .Cartitle
    width: 750px
    height: 88px
    padding: 0 30px
    box-sizing: border-box
    .title-left
      display: block
      width: 108px
      height: 100%
      font-size: 36px
      line-height: 88px
    .title-right
      position: absolute
      top: 0
      right: 0
      line-height: 88px
      width: 90px
      height: 100%
      text-align: center
      .title-right-text
        color: red
        font-size: 30px
  .content-wrapper
    background: #f4f4f4    
    height 1150px
    width 100%  
    .massage
      height: 70px
      padding: 0 30px
      background-color: #EEEEEE
      .massageList
        display: flex
        justify-content: space-between
        li
          font-size: 24px
          line-height: 70px
    .Car-logo
      width: 750px
      height: 400px
      margin: 250px 0 500px 0
      display: flex
      flex-direction: column
      align-items: center
      background-color: #f4f4f4
      .addsomething
        color: #999999
      .login-button
        margin-top: 20px
        width: 400px
        height: 70px
        span
          font-size: 30px
</style>
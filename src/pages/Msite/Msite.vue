<template>
  <div class="wrap">
    <!-- 头部搜索框 -->
    <div class="header-top">
      <a href="javascript:;" class="logo">
        <img src="../../common/image/yanxuan.png" alt />
      </a>
      <div class="search" @click="gosearch('/search')">
        <img src="../../common/image/search.png" alt class="search-icon" />
        <span class="search-text">搜索商品，共99999条好物</span>
      </div>
      <button class="loginButton" @click="goto('/phonelogin')">登录</button>
    </div>
    <div class="moreCate" v-show="!isShow">
      <div class="header-top">
        <a href="javascript:;" class="logo">
          <img src="../../common/image/yanxuan.png" alt />
        </a>
        <div class="search">
          <img src="../../common/image/search.png" alt class="search-icon" />
          <span class="search-text">搜索商品，共99999条好物</span>
        </div>
        <button class="loginButton">登录</button>
      </div>
      <div class="cateHeader">
        全部频道
        <div class="icon-wrapper">
          <i class="iconfont icon-jiantou-copy-copy-copy" @click="isShow=!isShow"></i>
        </div>
      </div>
      <div @click="isShow=!isShow">
        <ul class="cateList">
          <li class="redLii">推荐</li>
          <li>居家生活</li>
          <li>服饰鞋包</li>
          <li>美食酒水</li>
          <li>个护清洁</li>
          <li>母婴亲子</li>
          <li>运动亲子</li>
          <li>数码家电</li>
          <li>全球特色</li>
        </ul>
        <div class="yinying"></div>
      </div>
    </div>
    <div class="wrapper" ref="wrapper">
      <ul class="header-nav" ref="headernav">
        <li class="redLi">推荐</li>
        <li>居家生活</li>
        <li>服饰鞋包</li>
        <li>美食酒水</li>
        <li>个护清洁</li>
        <li>母婴亲子</li>
        <li>运动旅行</li>
        <li>数码家电</li>
        <li>全球特色</li>
      </ul>
      <span class="gang"></span>
    </div>
    <div class="toggle">
      <img src="../../common/image/jiantou.png" alt class="jiantou" @click="ppShow" />
    </div>
    <swiper :options="swiperOption" ref="mySwiper" class="swiper-wrap">
      <!-- slides -->
      <swiper-slide class="swiper-inner">
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/7c324fa2ebc05c912946f897eb1e4cc9.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" />
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/c74f5ba03c908826f32985c392f19199.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" />
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/ccfde8af22184921682d049b00b34be2.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" />
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/e47220bbd8030b9c26f574eeb769dfde.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" />
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/1eba77c8f34e1498b83cabca593f3a3f.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" />
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="javascript:;">
          <img src="https://yanxuan.nosdn.127.net/9c75dabb86e08cffcd0b4c95b4035b57.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" />
        </a>
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <ul class="assure">
      <li>
        <img src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" alt />
        <span>网易自营品牌</span>
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png" alt />
        <span>30天无忧退货</span>
      </li>
      <li>
        <img src="https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png" alt />
        <span>48小时快速退款</span>
      </li>
    </ul>
    <div class="shops">
      <a href="javascript:;" v-for="(shop,index) in shop" :key="index">
        <img :src="shop.picUrl" alt />
        <span>{{shop.text}}</span>
      </a>
    </div>
    <div class="guangao">
      <a href="javascript:;">
        <img src="https://yanxuan.nosdn.127.net/2def9f75b8ad1f92642e6c4954d25a39.gif" alt />
      </a>
    </div>
    <div class="ShopsModuleWrap">
      <div class="ShopsModule">
        <div class="ShopsTop">9.9超值专区</div>
        <div class="ShopsBottom">190款商品定价直降</div>
        <div class="ShopsImg">
          <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png" alt />
          <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png" alt />
        </div>
      </div>
      <div class="ShopsModule">
        <div class="ShopsTop">50元内好物</div>
        <div class="ShopsBottom">买到生活小幸运</div>
        <div class="ShopsImg">
          <img src="https://yanxuan-item.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png" alt />
          <img src="https://yanxuan-item.nosdn.127.net/f8ab1da43385ce39549272c1571f6397.png" alt />
        </div>
      </div>
      <div class="ShopsModule">
        <div class="ShopsTop">断货补单王</div>
        <div class="ShopsBottom">严选必买爆款</div>
        <div class="ShopsImg">
          <img src="https://yanxuan-item.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png" alt />
          <img src="https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png" alt />
        </div>
      </div>
      <div class="ShopsModule">
        <div class="ShopsTop">家装换季</div>
        <div class="ShopsBottom">夏去秋来翻新</div>
        <div class="ShopsImg">
          <img src="https://yanxuan-item.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png" alt />
          <img src="https://yanxuan-item.nosdn.127.net/a5b76d65fa4f9cecba601f954306a34b.png" alt />
        </div>
      </div>
    </div>
    <div class="self-order">
      <span>私人订制</span>
    </div>
    <swiper :options="swiperOption" ref="mySwiper" class="swiper-content">
      <!-- slides -->
      <swiper-slide class="swiper-insaid">
        <div class="swiper-inner">
          <img src="https://yanxuan-item.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png" alt />
          <span>武夷山大红袍,一年产一千克</span>
          <span class="swiper-shops-down">￥100000元一克</span>
        </div>

        <div class="swiper-inner">
          <img src="https://yanxuan-item.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png" alt />
          <span>武夷山大红袍,一年产一千克</span>
          <span class="swiper-shops-down">￥100000元一克</span>
        </div>

        <div class="swiper-inner">
          <img src="https://yanxuan-item.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png" alt />
          <span>武夷山大红袍,一年产一千克</span>
          <span class="swiper-shops-down">￥100000元一克</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { reqMsite } from "../../api";
import BScroll from "better-scroll";

export default {
  data() {
    return {
      shop: [],
      isShow: true,
      swiperOption: {
        loop: true,
        autoplay: {
          loop: true,
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
      }
    };
  },
  created() {
    this.$nextTick(() => {
      this.personScroll();
    });
  },
  async mounted() {
    const shop = await reqMsite();
    this.shop = shop.data.kingKongList;
  },
  methods: {
    goto(path) {
      this.$router.replace(path);
    },
    gosearch(path) {
      this.$router.push(path);
    },
    ppShow() {
      this.isShow = !this.isShow;
    },
    personScroll() {
      let width = 9 * 160;
      this.$refs.headernav.style.width = width + "px";
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh();
        }
      });
    }
  }
};
</script>
 
<style lang="stylus" rel="stylesheet/stylus">
.wrap
  position: relative
  margin: 0
  padding: 0
  // overflow hidden
  .header-top
    box-sizing: border-box
    width: 100%
    height: 88px
    padding: 16px 30px
    display: flex
    .logo img
      width: 138px
      height: 40px
      margin: 10px 20px 0 0
    .search
      width: 442px
      height: 56px
      background-color: #ededed
      border-radius: 10px
      .search-icon
        height: 28px
        width: 28px
        line-height: 56px
        margin-left: 30px
        margin-right: 10px
      .search-text
        width: 317px
        height: 41px
        font-size: 28px
        line-height: 56px
    .loginButton
      background-color: #fff
      width: 74px
      height: 40px
      border: 1px solid #b4282d
      color: #b4282d
      font-size: 24px
      border-radius: 8px
      margin: 10px 0 0 10px
  .moreCate
    position: fixed
    top: 0
    width: 100%
    background-color: #fff
    z-index: 3
    .header-top, box-sizing: border-box, width: 100%, height: 88px, padding: 16px 30px, display: flex, .logo img
      width: 138px
      height: 40px
      margin: 10px 20px 0 0
    .search
      width: 442px
      height: 56px
      background-color: #ededed
      border-radius: 10px
      .search-icon
        height: 28px
        width: 28px
        line-height: 56px
        margin-left: 30px
        margin-right: 10px
      .search-text
        width: 317px
        height: 41px
        font-size: 28px
        line-height: 56px
    .cateHeader
      height: 60px
      padding-left: 30px
      line-height: 60px
      font-size: 28px
      .icon-wrapper
        width: 100px
        height: 60px
        .iconfont
          position: absolute
          top: 100px
          right: 36px
          font-size: 26px
          font-weight: bold
          z-index: 2
    .yinying
      position: fixed
      left: 0
      top: 458px
      right: 0
      bottom: 0
      background-color: rgba(0, 0, 0, 0.5)
    .cateList
      width: 100%
      height: 311px
      margin-top: 20px
      display: flex
      flex-wrap: wrap
      font-size: 28px
      .redLii
        color: red
      li
        width: 180px
        height: 96px
        box-sizing: border-box
        padding: 0 0 40px 30px
        line-height: 96px
        text-align: center
        z-index: 3
  .wrapper
    position: relative
    width: 100%
    height: 60px
    overflow: hidden
    .header-nav
      height: 60px
      display: flex
      li
        line-height: 60px
        padding: 0 30px 0 30px
        font-size: 26px
        color: #333333
      .redLi
        color: red
    .gang
      position: absolute
      top: 50px
      left: 10px
      width: 90px
      height: 10px
      background-color: red
  .toggle
    position: absolute
    right: 0
    top: 90px
    width: 100px
    height: 60px
    background-color: #fff
    .jiantou
      position: absolute
      left: 35px
      top: 15px
      width: 30px
      height: 30px
      line-height: 60px
      text-align: center
      color: #333333
  .swiper-wrap
    height 370
      .swiper-inner
        img
          width: 100%
          height: 100%
  .assure
    box-sizing: border-box
    display: flex
    height: 72px
    width: 100%
    padding: 0 30px
    align-items: center
    li
      display: flex
      height: 36px
      width: 228px
      align-items: center
      justify-content: center
      img
        height: 32px
        width: 32px
        line-height: 36px
      span
        font-size: 24px
        line-height: 36px
  .shops
    box-sizing: border-box
    width: 750px
    height: 341px
    padding: 15px
    margin-bottom: 20px
    display: flex
    flex-wrap: wrap
    a
      width: 110px
      height: 156px
      margin: 10px 20px 2px 9px
      img
        width: 110px
        height: 110px
      span
        text-align: center
        width: 100px
        font-size: 24px
        margin-top: 10px
        margin-left: 26px
  .guangao
    width: 100%
    height: 126px
    img
      width: 100%
      height: 100%
  .ShopsModuleWrap
    // box-sizing border-box
    width: 100%
    height: 576px
    margin-botton: 20px
    display: flex
    flex-wrap: wrap
    padding: 10px 0px 30px 0px
    overflow: hidden
    .ShopsModule
      width: 343px
      height: 264px
      margin: 4px 0 0 4px
      padding: 20px 0 0 20px
      background-color: #f5f5f5
      .ShopsTop
        width: 323px
        height: 48px
        font-size: 32px
        color: #333333
      .ShopsBottom
        width: 323px
        height: 46px
        font-size: 24px
        color: #7f7f7f
      .ShopsImg
        display: flex
        width: 308px
        height: 150px
        margin-right: 4px
        img
          width: 150px
          height: 150px
          margin-right: 4px
  .self-order
    width: 690px
    height: 100px
    padding: 0 30px
    span
      color: #333333
      font-size: 32px
      line-height: 100px
  .swiper-content
    width: 750px
    height: 370px
    padding-bottom: 96px
    .swiper-insaid
      width: 750px
      height: 300px
      display: flex
      .swiper-inner
        width: 216px
        height: 300px
        margin-left: 22px
        img
          height: 216px
          width: 216px
          background-color: #f5f5f5
        span
          text-align: center
          font-size: 24px
        .swiper-shops-down
          color: red
</style>
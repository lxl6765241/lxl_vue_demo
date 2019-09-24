<template>
  <div>
    <div class="CategoryHeader" @click="goto('/search')">
      <div class="CategoryLink">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品共00000条好物</span>
      </div>
    </div>
    <div class="CategoryContent" >
      <div class="Content-left" ref="personWrap">
        <ul class="ContentList">
          <li v-for="(zuobian,index) in zuobiande" :key="index"  @click='handleclick(index)'>
            <span>{{zuobian.name}}</span>
          </li>
        </ul>
      </div>
      <div class="Content-right">
        <div class="bannar">
          <swiper :options="swiperOption" ref="mySwiper" class="swiper-wrapper">
          <swiper-slide class="swiper-innerr">
             <img src="https://yanxuan.nosdn.127.net/f7f216f5d01874f8f768ccfd78a7112e.jpg" alt=""></img>
          </swiper-slide>
          <swiper-slide class="swiper-innerr">
            <img src="https://yanxuan.nosdn.127.net/40ee9e553e6a2c228b0544bff65a618d.jpg" alt=""></img>
          </swiper-slide>
          </swiper>
        </div>
        <div class="ShowList">
          <ul class="ShowItems">
            <li v-for="(shops,index) in shopss" :key="index" >
              <img :src="shops.wapBannerUrl" alt="">
              <span>{{shops.name}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
            /* eslint-disable */
import BScroll from "better-scroll";
import {reqCategory,reqList} from '../../api';

export default {
  data(){
    return {
      zuobiande:[],
      shops:[],
      // shopList:[],
      shopss:[],
      index:0,
      loop: true,

      swiperOption:{
         loop: true,
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: false
      }
    }
  },
  methods:{
    goto(path){
      this.$router.push(path)
    },
     handleclick(index){
      this.index = index
      let shopss =this.shops.data[this.index].subCateList
      this.shopss = shopss
      console.log(shopss)
  },
  
  personScroll() {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.personWrap, {
            startY: 0,
            click: true,
            scrollX: false,
            scrollY: true
     }
       )
          } else {
               this.scroll.refresh();
          }
      }); 
}
  
  
    
  },
  created() {
    this.$nextTick(() => {
      this.personScroll();
    });
    
  },
  
  
    
 
  /* eslint-disable */
 async mounted(){
    const zuobian = await reqList()
    this.zuobiande = zuobian.data
    console.log(this.zuobiande)


    const shops = await reqCategory()
    this.shopss = shops.data[0].subCateList
    // this.shopLists = shops
    // console.log(this.shopLists)
    this.shops =shops
    console.log(shops)
    
   },
  }
 </script>
 
<style lang="stylus" rel="stylesheet/stylus">
.CategoryHeader
  position: relative
  top 10px
  width: 750px
  height: 88px
  border-bottom: 1px solid #EEEEEE
  .CategoryLink
    position: absolute
    width: 690px
    height: 56px
    background-color: #EEEEEE
    border-radius: 10px
    left: 30px
    top: 16px
    text-align: center
    color: #666666
    .iconfont
      font-size: 40px
      margin-right: 10px
    span
      line-height: 56px
      font-size: 28px
.CategoryContent
  margin-top 50px
  width: 750px
  height: 1044px
  display flex
  overflow hidden
  .Content-left
    width: 162px
    height: 100%
    .ContentList
      box-sizing border-box
      width 100%
      height 1120px
      padding 20px 0
      display flex
      flex-direction column
      justify-content space-between
      li
        width 162px
        height 50px
        font-size 28px
        margin-left 20px
        z-index 9
  .Content-right
    width 528px
    height 872px     
    .bannar
      img 
        width 500px
        height 192px
        margin-left 26px
    .ShowList  
      width 528px
      height 648px  
      .ShowItems
        display flex
        flex-wrap wrap
        li
          width 144px
          height 216px
          margin-left 30px
          text-align center
          img 
            height 144px
            width 144px
          span 
            font-size 24px
</style>
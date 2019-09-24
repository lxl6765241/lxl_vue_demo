<template>
  <div>
    <div class="Search-wrapper">
      <div class="Search-wrap">
        <div class="search-title">
          <input type="text" placeholder="鸡屎燕窝 溯源可查" class="Search-input" />
          <img src="../../common/image/search.png" alt />
          <span @click="back()">取消</span>
        </div>
      </div>
      <div class="Search-content">
        <header>
          <span>热门搜索</span>
        </header>
        <nav class="list">
          <a href="javascript" v-for="(search,index) in searchlist" :key="index">{{search.keyword}}</a>
        </nav>
      </div>
    </div>
  </div>
</template>
 
<script>
import {reqSearch} from '../../api';
export default {
  data(){
    return {
      searchlist:[]
    }
  },
  methods: {
    back() {
      this.$router.back();
    }
  },
  async mounted(){
    const search = await reqSearch()
    this.searchlist = search.data.hotKeywordVOList
    console.log(this.searchlist)

  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.Search-wrapper
  width 750px
  height 1334px
  background-color #f4f4f4
  .Search-wrap
    position: relative
    width: 750px
    height: 88px
    .search-title
      position: absolute
      left: 0
      right: 0
      top: 0
      bottom: 0
      margin: auto
      width: 604px
      height: 56px
      background-color: #f4f4f4
      input
        position: absolute
        left: 0
        right: 0
        top: 0
        bottom: 0
        margin: auto
        box-sizing: border-box
        padding-left: 50px
        width: 520px
        height: 39px
        font-size: 28px
        outline: none
        border: none
        background-color: #f4f4f4
      img
        position: absolute
        left: 30px
        top: 12px
        height: 34px
        width: 34px
      span
        position: absolute
        right: -60px
        top: 10px
        font-size: 28px
  .Search-content
    width: 750px
    height: 404px
    background-color: #fff
    padding: 0px 30px 30px
    header
      width: 690px
      height: 90px
      span
        line-height: 90px
        font-size: 30px
    .list
      height: 316px
      width: 720px
      margin: 0px -30px -32px 0px
      display flex
      flex-wrap wrap
      a
        line-height 47px
        font-size: 24px
        border: 1px solid #999
        border-radius: 4px
        color: #333
        margin 0 32px 32px 0
        padding 0 15px
</style>
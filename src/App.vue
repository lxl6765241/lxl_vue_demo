<template>
  <div>
      <router-view></router-view>
      <Footer v-show="$route.meta.isShowFooter" />
  </div>
</template>

<script>
            /* eslint-disable */
import Footer from './components/Footer/Footer.vue';
// import {reqCategory,reqMsite} from './api';
export default {
  name: 'app',
  components:{
    Footer
  },
//  async mounted(){
//     const result =await reqCategory()
//     console.log(result)
    
//   }
}
</script>

<style lang="stylus">

</style>

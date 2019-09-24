//引入路由
import Car from '../pages/Car/Car.vue'
import Category from '../pages/Category/Category.vue'
import Check from '../pages/Check/Check.vue'
import Msite from '../pages/Msite/Msite.vue'
import Profile from '../pages/Profile/Profile.vue'
import PhoneLogin from "../pages/PhoneLogin/PhoneLogin.vue";
import EmailLogin from "../pages/EmailLogin/EmailLogin.vue";
import Search from "../pages/Search/Search.vue";
export default [
  {
    path:'/car',
    component:Car,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/category',
    component:Category,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/check',
    component:Check,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/msite',
    component:Msite,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/profile',
    component:Profile,  
  },
  {
    path:'/phonelogin',
    component:PhoneLogin
  },
  {
    path:'/emaillogin',
    component:EmailLogin
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/',
    redirect:'/msite'
  }
  
]
// 引入data.json文件
import category from './category.json'
import msite from './msite.json'
// 引入mock
import Mock from 'mockjs'

Mock.mock('/category', { code: 0, data: category.currentCategory })
Mock.mock('/category', { code: 0, data: category.categoryL1List })
Mock.mock('/msite', { code: 0, data: msite.kingKongModule })

//Mock.mock('/category', { code: 0, data: category.currentCategory })

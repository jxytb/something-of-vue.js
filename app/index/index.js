import Vue from 'Vue'
import mainform from './components/form'
import tableform from './components/table-form'
import detailform from './components/item-details'
import VueRouter from "vue-router";

Vue.use(VueRouter);
// new Vue({
// 	el: 'body',
// 	components: { tableform, detailform}
// })
var App = Vue.extend({})  
var router = new VueRouter()  
router.map({  
    '/table': {  
        component:  tableform
    },
    '/table/:id/:t1/:t2': {  
        component:  tableform ,name:"table"
    }, 
    '/detail/:id/:t1/:t2': {  
        component: detailform ,name:"detail" 
    },
    '': 
    {  
        component:  tableform
    }
      
})  
  
router.start(App, 'body')
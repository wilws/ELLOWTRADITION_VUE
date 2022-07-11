import { createStore } from 'vuex';

import productsModule from './modules/products/index.js';
import authModule from './modules/auth/index.js';
import cartModule from './modules/cart/index.js';
import ordersModule from './modules/orders/index.js';


// import VuexPersistence from 'vuex-persist'
// const vuexLocal = new VuexPersistence({
//     storage: window.localStorage
//   });



const store = createStore({
    modules:{
        products : productsModule,
        auth : authModule,
        cart :cartModule,
        orders : ordersModule,
    },
    // plugins: [vuexLocal.plugin]


    // stats(){
    //     return{
    //         products:[],
    //     }
    // },

});


export default store
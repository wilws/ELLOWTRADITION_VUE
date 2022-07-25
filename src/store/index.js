import { createStore } from 'vuex';

import productsModule from './modules/products/index.js';
import authModule from './modules/auth/index.js';
import cartModule from './modules/cart/index.js';
import ordersModule from './modules/orders/index.js';


import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
  });



const store = createStore({
    modules:{
        products : productsModule,
        auth : authModule,
        cart :cartModule,
        orders : ordersModule,
    },
    


    state(){
        return{
            serverURL : 'http://localhost:8080/'
        }
    },
    mutations:{
        setServerUrl(state,payload){
            return state.serverURL = payload;
        }
    },
    actions:{
        setServerUrl(context,data){
            let serverURL;
            if (data.mode == "live") {
                serverURL = 'https://ellowtradition.herokuapp.com/'
            } else {
                serverURL ='http://localhost:8080/'
            }
            context.commit('setServerUrl',serverURL);
        }
    },
    getters:{
        getServerUrl(state){
            return state.serverURL
        }
    },
    plugins: [vuexLocal.plugin],

});


export default store
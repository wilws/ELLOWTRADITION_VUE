import actions from './actions';
import mutations from './mutations';
import getters from './getters';

// type cart = {
//     productId: String,
//     quantity: Number,
//     price:Number,
// }

export default {
    namespaced:true,
    state(){
        return{
            cart:[],
            totalCartValue:0,
        }
    },
    actions,
    getters,
    mutations,
}
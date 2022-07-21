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
            cart:[
                // {
                //     productId: "62d67cb5343b2531ad311eb9",
                //     quantity: 1,
                // },
                // {
                //     productId: "62d67cb5343b2531ad311eba",
                //     quantity: 3,
                // },
                // {
                //     productId: "62d67cb5343b2531ad311ebb",
                //     quantity: 1,
                // },
                // {
                //     productId: "62d67cb5343b2531ad311ebf",
                //     quantity: 1,
                // },
                // {
                //     productId: "62d67cb5343b2531ad311ec3",
                //     quantity: 1,
                // },
                // {
                //     productId: "62d67cb5343b2531ad311ec5",
                //     quantity: 1,
                // },
                // {
                //     productId: "62d67cb5343b2531ad311ec7",
                //     quantity: 1,
                // },
            ],
            // tempCart:[]
            // totalCartValue:0,
        }
    },
    actions,
    getters,
    mutations,
}
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
                {
                    productId: "39",
                    quantity: "1",
                },
                {
                    productId: "45",
                    quantity: "3",
                },
                {
                    productId: "33",
                    quantity: "1",
                },
                {
                    productId: "32",
                    quantity: "1",
                },
                {
                    productId: "34",
                    quantity: "1",
                },
                {
                    productId: "36",
                    quantity: "1",
                },
                {
                    productId: "40",
                    quantity: "1",
                },
                {
                    productId: "41",
                    quantity: "1",
                },
                {
                    productId: "42",
                    quantity: "1",
                },
                {
                    productId: "48",
                    quantity: "1",
                },
                {
                    productId: "54",
                    quantity: "1",
                },


            ],
            totalCartValue:0,
        }
    },
    actions,
    getters,
    mutations,
}
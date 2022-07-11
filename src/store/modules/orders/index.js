import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";


export default {
    namespaced: true,
    state(){
        return{
            invoices:[],
            isSet:false,
        }
    },
    actions,
    getters,
    mutations
}
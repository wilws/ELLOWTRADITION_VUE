export default {

    isLogin(state, payload){
        state.isLogin = payload
    },

    updateStatus(state, payload){
        state.isLogin = payload.isLogin,
        state.username = payload.username,
        state.email = payload.email,
        state.address = payload.address,
        state.token = payload.token
    },


    setAuthForCheckout(state,payload){
        state.authForCheckout = payload
    }

}
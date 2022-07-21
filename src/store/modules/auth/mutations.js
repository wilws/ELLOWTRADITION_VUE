export default {

    isLogin(state, payload){
        state.isLogin = payload
    },

    updateStatus(state, payload){

        console.log('in updateStatus')
        console.log(payload)
        state.username = payload.username,
        state.email = payload.email,
        state.token = payload.token
    },

    setAuthForCheckout(state,payload){
        console.log('in muttation, setAuthForCheckout. set:',payload)
        state.authForCheckout = payload
    }

}
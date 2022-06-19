export default {

    isLogin(state, payload){
        state.isLogin = payload
    },

    userLogin(state, payload){

        console.log('in userLogin')
        console.log(payload)
        state.username = payload.username,
        state.email = payload.email,
        state.token = payload.token
    }

}
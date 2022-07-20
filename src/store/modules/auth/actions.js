

export default {

    async signup(_,data){
        const formData = {
            email : data.email.val,
            username : data.username.val,
            password : data.password.val,
        }

        try{
            const resData = await fetch(
                'http://localhost:8080/auth/signup',{
                    method: "POST",                              
                    headers:{
                        'Content-Type':'application/json'         
                    },
                    body:JSON.stringify(formData),
                    credentials: 'include'
            });
   
            const res = await resData.json();  

            console.log(res)

            if (resData.status !== 200) {                           // Check if return status 200
                const error = new Error(res.message);
                throw error;
            } 

        } catch(err){
            console.log(err)
            const error = new Error(err.me);  // prevent " error  Unnecessary try/catch wrapper "
            throw error;
        }
    },



    async login(context,data){

        const formData = {
            email : data.email.val,
            password : data.password.val,
        }

        try{    
            const resData = await fetch(
                'http://localhost:8080/auth/login',{
                    method: "POST",                              
                    headers:{
                        'Content-Type':'application/json'         
                    },
                    body:JSON.stringify(formData),
                    credentials: 'include'
            });
            
            const res = await resData.json();  
     

            if (resData.status !== 200) {                        // Check if return status 200
                const error = new Error(res.message)
                throw error
            }

            context.dispatch('localStatusUpdate',{
                isLogin :true,
                token:res.token,
                username: res.username,
                email: res.email,
            })

            context.commit('isLogin',true)
            context.commit('userLogin',{
                token:res.token,
                username: res.username,
                email: res.email,
            });

        } catch(err){
            console.log(err)
            const error = new Error(err.me);  // prevent " error  Unnecessary try/catch wrapper "
            throw error;
        }
    },

    async logout(context){

        console.log('cookies:')
        console.log(document.cookie);

        try{

            const resData = await fetch("http://localhost:8080/auth/logout",{
                method:'POST',
                headers:{
                    "Content-Type" : "aplication/json",
                },
                credentials: 'include'
            })

            const res = await resData.json();


            console.log(res)
            if (resData.status != 200){
                const error = new Error(res.message);
                throw error;
            }


            context.dispatch('localStatusUpdate',{
                isLogin :false,
                token:"",
                username:"",
                email:"",
            })

            context.dispatch('orders/clearInvoices',null,{root:true})
            context.dispatch('cart/clearCart',null,{root:true})

            // context.commit('isLogin',false)
            // context.commit('userLogin',{
            //     token:"",
            //     username:"",
            //     email:"",
            // });

        } catch(err){
            console.log(err)
            const error = new Error(err.me);  // prevent " error  Unnecessary try/catch wrapper "
            throw error;
        }
    },

    async LoginValidation(context){

        console.log("in LoginValidation")

        try{
            const resData = await fetch("http://localhost:8080/auth/is-Login",{
                method:'POST',
                headers:{
                    "Content-Type" : "aplication/json",
                },
                credentials: 'include'
            })

            if (resData.status != 200){
                context.dispatch('localStatusUpdate',{
                    isLogin :false,
                    token:"",
                    username:"",
                    email:"",
                });
            }

        } catch(err){
            const error = new Error("Fail to checkstatus");
            context.dispatch('localStatusUpdate',{
                isLogin :false,
                token:"",
                username:"",
                email:"",
            });
            throw error;
        }

    },

    localStatusUpdate(context,data){
        context.commit('isLogin',data.isLogin)
        context.commit('updateStatus',{
            token:data.token,
            username:data.username,
            email:data.email,
        });

    }
    

}
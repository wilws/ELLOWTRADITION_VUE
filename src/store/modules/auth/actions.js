

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

            if (resData.status !== 200) {                           // Check if return status 200
                const error = new Error(res.message)
                throw error
            } 


        } catch(err){
            const error = new Error("Fail to Signup");
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

            if (resData.status !== 200) {                           // Check if return status 200
                const error = new Error(res.message)
                throw error
            }


            context.commit('isLogin',true)
        
            context.commit('userLogin',{
                token:res.token,
                username: res.username,
                email: res.email,
            });


        } catch(err){
            const error = new Error("Fail to Signup");
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

            if (resData.status != 200){
                const error = new Error(res.message);
                throw error;
            }

            context.commit('isLogin',false)
            context.commit('userLogin',{
                token:"",
                username:"",
                email:"",
            });

    } catch(err){
        const error = new Error("Fail to logout");
        throw error;


    }




    }
    

}
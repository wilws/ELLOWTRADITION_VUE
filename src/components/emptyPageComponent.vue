<template>
            <div class="logo">
                <div class="box">
                    <div class="front">
                        <img src="@/assets/black_logo.png" alt="" >
                    </div>
                    <div class="back">
                        <img src="@/assets/black_logo.png" alt="" >
                    </div>
                </div>
               <div class="msg"><slot></slot></div>
            </div>
</template>

<style scoped>
/* v-if */
.logo{
    position: relative;
    width:100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    perspective: 100rem;
    background-color: #FAFAFA
}

.logo .box{
    position:absolute;
    width:21rem;
    height: 9rem;
    transform: rotateY(-45deg) rotateZ(45deg);
    transform-style: preserve-3d;
    animation: rotate 2s forwards;

}

@keyframes rotate {
    0%{
        transform: rotateY(0) translateY(-500%);
    }
    100%{
        transform: 
            rotateY(-380deg) 
            rotateZ(360deg)  
            translateY(-50%);
    }
    /* 80%{
         transform: 
            rotateY(720deg);
    }*/
    
}

.logo .box .front{
    width:100%;
    height: 100%;
    position: absolute;
    background-color: white;
    transform: translateZ(5rem);
    transform-style: preserve-3d;
    font-family: 'Hubballi', cursive;
    font-weight: 200;
    font-size: 0.5rem;
    letter-spacing: .7rem;
    border: whitesmoke solid;
}

.logo .box .back img,
.logo .box .front img{
    width:100%;
}

.logo .box .back img{
    transform: rotateY(180deg);
}

.logo .box .front:after{
    content: "REDISCOVER & SHAR";
   background-color: white;
    width:10rem;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    transform:rotateY(90deg);
    transform-origin: left;
    border: whitesmoke solid;
}

.logo .box .front:before{
    content: "REDISCOVER & SHAR";
    background-color: white;
    width:10rem;
    height: 100%;
    position: absolute;
    top:-2px;
    right:0;
    transform-origin: right;
    transform:rotateY(-90deg);
    border: whitesmoke solid;
}



.logo .box .back{
    width:100%;
    height: 100%;
    position: absolute;
    background-color: white;
    transform: translateZ(-5rem);
    transform-style: preserve-3d;
    font-family: 'Hubballi', cursive;
    font-weight: 200;
    font-size: 0.5rem;
    letter-spacing: .7rem;
    border: whitesmoke solid;
}

.logo .box .back:before{
   content: "REDISCOVER & SHAR";
   background-color: white;
    width:100%;
    height: 10rem;
    position: absolute;
    bottom:0;
    left:0;
    transform-origin: bottom;
    transform:rotateX(-90deg); 
    border: whitesmoke solid;
}

.logo .box .back:after{
    content: "REDISCOVER & SHAR";
    background-color: white;
    width:100%;
    height: 10rem;
    position: absolute;
    top:0;
    left:0;
    transform:rotateX(90deg); 
    transform-origin: top;
    border: whitesmoke solid;
}

.logo .errorMsg{
    position: absolute;
    top: 54%;
}

.msg{
    position: absolute;
    bottom: 40%;
    width: 100%;
    text-align: center;
    font-size: 2.3rem;
    letter-spacing: 1.2rem;
    color: #5e5e61;
}
/* End of v-if */ 


</style>
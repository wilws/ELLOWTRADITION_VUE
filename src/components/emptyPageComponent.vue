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
               <div class="msg" id="emptyPageMessageInsertPoint"></div>
               <div class="emptyPageResponsive">{{msg}}</div>
            </div>
</template>

<script>
export default {
    props:['msg'],
    watch:{
        async msg(){
            this.textAnimation();
            // this.setMsgPosition();
        }
    },
    data(){
        return{
            leftValue:0,
            insertMsg:""
        }
    },
    created(){
        window.addEventListener("resize",()=>{
            this.setMsgPosition()
        });
    },
    mounted(){
        this.textAnimation();
        this.setMsgPosition();
    },
    methods:{
        textAnimation(){
         
            let delayValue = 0;
            let html = ""; 
            this.leftValue =0;
            for(let i=0;i<this.msg.length;i++){
                html +=`<span style="left:${this.leftValue}px; animation-name:drop-letters;animation-duration:3s;animation-iteration-count:infinite;animation-delay:${delayValue}s">${this.msg[i]}</span>`
                this.leftValue += 20;
                delayValue += 0.1;
            }
            document.getElementById('emptyPageMessageInsertPoint').innerHTML = html;            
        },
        setMsgPosition(){
            
            const containerWidth = document.querySelector('.logo').offsetWidth;
            const leftOffSet = (containerWidth - (this.leftValue))/2
            document.querySelector(".msg").style.left = `${leftOffSet}px`;
        }
    }
}
</script>

<style>
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
    background-color: #FAFAFA;
    overflow: hidden;

    max-height: 1020px;
    height: 100vh;
}

.logo .box{
    position:absolute;
    width:21rem;
    height: 9rem;
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
    left:0;
    bottom: 40%;
    width: auto;
    height: 3rem;
    text-align: center;
    font-size: 1.5rem;
    color: #5e5e61;
}

.msg span{
    position:absolute;
    text-transform: uppercase;
}

.emptyPageResponsive{
    position: absolute;
    width:100%;
    bottom: 40%;
    height: 3rem;
    text-align: center;
    font-size: 1.5rem;
    color: #5e5e61;
    display: none;
}

/* End of v-if */ 



/*  moving effect */

@keyframes drop-letters {
  0% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(0);
  }
  15% {
    transform: translateY(-100%);
  }
  20% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}
/* End of text moving effect */



@media (max-width:490px) {
    .emptyPageResponsive{
        display: unset;
    }
    .msg{
        display: none;
    }
}
</style>
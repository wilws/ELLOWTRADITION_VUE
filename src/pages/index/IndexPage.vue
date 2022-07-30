<template>
<section class="section-2">

    <div class="start">
        <img class="front-logo" src="@/assets/black_logo.png" alt="logo">
    </div>

    <img class="front-logo" src="@/assets/white_logo.png" alt="logo">

    
    <div class="img-wrapper">
        <div class="screener"></div>
        <div class="img-1"></div>
        <div class="img-2"></div>
        <div class="img-3"></div>
    </div>

    
    <div class="banner">
        <div>
            <h3>REDISCOVER & SHARE</h3>
            <p>CULTURAL</p>
            <p>TREASURE</p>
        </div>
    </div>


</section>
</template>



<script>
export default {

}
</script>


<style scoped>

/* Section 1 - Index Page */

.section-2{
    width:100%;
    height:100%;
    position: relative;
    perspective: 100rem;
    overflow: hidden; 
}



.start{
    position: relative;
    width:100%;
    height:100%;
    z-index: 2000;
    animation: startingScreenDisappear 3s 4s forwards;
}

.start .front-logo{
    position:absolute;
    opacity: 0;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    animation: startingLogoAnimation 4s forwards;
}



@keyframes startingLogoAnimation{
    0%{   
        opacity: 0;
    }
    40%{
        opacity: 1;
    }
    /* 45%{
        opacity: 1;
    } */
    100%{
        opacity: 0;
    }
}

@-webkit-keyframes startingLogoAnimation{
    0%{   
        opacity: 0;
    }
    40%{
        opacity: 1;
    }
    /* 45%{
        opacity: 1;
    } */
    100%{
        opacity: 0;
    }
}


@keyframes startingScreenDisappear{
    0%{
        width:100%;
        height:100vh;
        opacity: 1;
     
    }
    100%{    
        width:0%;
        height:0vh;
        opacity: 0;
    }
}

@-webkit-keyframes startingScreenDisappear{
    0%{
        width:100%;
        height:100vh;
        opacity: 1;
     
    }
    100%{    
        width:0%;
        height:0vh;
        opacity: 0;
    }
}

.front-logo{
    position: absolute;
    width:35rem;
    top:2.5rem;
    /* right:2.5rem; */
    right:-200rem;
    z-index: 10;
    animation: whiteLogoMove 2s 11s forwards;
}

@keyframes whiteLogoMove {
    0%{
        right:-100rem;
    }
    100%{
        right:2.5rem;
    }
}


.img-wrapper{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  box-shadow: 4.5rem 3.5rem 2rem #aaa;
}

.screener{
    position: absolute;
    width:100%;
    height:100%;
    background-color: rgba(14, 13, 13, 0.3);
    z-index: 9;
}


.img-wrapper div{
    position:absolute;
    height:100%;
    width:100%;
}

.img-wrapper .img-1{
   background:  url("~@/assets/index_1.jpg") no-repeat center;
   background-size:  auto 100%;
   visibility:hidden;
   opacity: 0;
   animation: scale 12s 6s infinite;
}

.img-wrapper .img-2{
    background:  url("~@/assets/index_2.jpg") no-repeat center;
    background-size:  auto 100%;
    visibility:hidden;
    opacity: 0;
    animation: scale 12s 10s infinite;
}

.img-wrapper .img-3{
    background:  url("~@/assets/index_3.jpg") no-repeat center;
    background-size:  auto 100%;
    visibility:hidden;
    opacity: 0;
    animation: scale 12s 14s infinite;
}

/* .container.change .routerView .section-2 .img-wrapper .img-1,
.container.change .routerView .section-2 .img-wrapper .img-2,
.container.change .routerView .section-2 .img-wrapper .img-3{
     animation-play-state: paused;
} */

@keyframes scale{
    0%{
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
        visibility:hidden;
        opacity: 0;
    }
    25%{
        -webkit-transform: scale(1);
        transform: scale(1);
        visibility:visible;
        opacity: 1;
    }
    35%{
        -webkit-transform: scale(1);
        transform: scale(1);
        visibility:hidden;
        opacity: 0;
    }
    100%{
        -webkit-transform: scale(1);
        transform: scale(1);
        visibility:hidden;
        opacity: 0;
    }
}

/* .banner-wrapper{
    transform:translateZ(50rem);
} */

.banner{
    position: absolute;
    width: 60rem;
    height: 34rem;
    border: rgb(255, 255, 255, 0.4) solid .4rem;
    padding: .5rem;
    z-index: 100;
    -webkit-transform-origin: center;
    transform-origin: center;
    /* right:0;
    bottom:0; */
    animation: BannerDisplay 2s 9s forwards; 
    -webkit-animation-name: BannerDisplay;
    -webkit-animation-duration: 2s;
    -webkit-animation-delay: 9s;
    -webkit-animation-fill-mode:infinite; 
}

.banner div {
    position: relative;
    width: 0%;
    height:100%;
    background-color: rgb(255, 255, 255, 0.05);
    padding: 0rem 2rem;
    display: flex;
    flex-direction: column;
    align-content: center;
    color:#fff;
    overflow: hidden;
    white-space: nowrap;
    visibility: hidden;
    opacity: 0;
    animation: ShowBannerDetail 1.5s 11s forwards;
    -webkit-animation-name: ShowBannerDetail;
    -webkit-animation-duration: 1.5s;
    -webkit-animation-delay: 11s;
    -webkit-animation-fill-mode: forwards;
}

.banner h3{
    font-family: 'Mukta Vaani', sans-serif;
    width: 100%;
    font-weight: 200;
    font-size: 5.3rem;
    letter-spacing: 0.5rem;
    text-align: justify;
    /* margin-bottom: 1rem; */
    margin-top: 2rem;
    /* margin-left: 0.5rem; */
}

.banner p {
    font-family: 'Mukta Vaani', sans-serif;
    width: 100%;
    font-weight: 500;
    font-size: 11.4rem;
    letter-spacing: 0.7rem;
    text-align: center;
    line-height: 7rem;
    margin-left:0rem;
}

.banner p:nth-child(2) {
    margin-top:1.1rem;
}

.banner p:nth-child(3) {
    margin-top:2.3rem;
}

@keyframes BannerDisplay{
    0%{
       bottom: -30rem;
       right:20rem;
       transform:translateZ(20rem) rotateY(360deg);
   
    }
    100%{
        bottom:15rem;
        right:20rem;
        transform: translateZ(20rem) rotateY(0deg) ;
        
    }
}

@-webkit-keyframes BannerDisplay{

    0%{
       bottom: -30rem;
       right:20rem;
       -webkit-transform:translateZ(20rem)  rotateY(360deg) ;

    
    }
    100%{
        bottom:15rem;
        right:20rem;
        -webkit-transform:translateZ(20rem) rotateY(0deg);

    }
}

@keyframes ShowBannerDetail{
    0%{
        visibility: hidden;
        opacity: 0;
        width: 0%;
    }


    100%{
        visibility: visible;
        opacity: 1;
        width: 100%;
    }
}

@-webkit-keyframes ShowBannerDetail{
    0%{
        visibility: hidden;
        opacity: 0;
        width: 0%;
    }


    100%{
        visibility: visible;
        opacity: 1;
        width: 100%;
    }
}

/* End of Index Page */



/* Responsive */

@media (max-width:1300px){
    img.front-logo{
        width: 20rem;
        top: 1.1rem;
    }

    .banner{
        position: absolute;
        right:unset;
        bottom:-100%; 
        /* top:50%; */
        left:50%;
        transform:translateX(-50%);
        -webkit-transform:translateX(-50%);
        width: 42rem;
        height: 24.5rem;
        animation: BannerDisplay 5s 9s forwards;
    }

    .banner h3{
        font-size: 3.3rem;
        margin-top: 2rem;
    }

    .banner p {
        font-size: 7.5rem;
        margin-left: -0.5rem;
    }

    .banner p:nth-child(2) {
        margin-top:0.1rem;
    }

    .banner p:nth-child(3) {
        margin-top:-0.4rem;
    }

    @keyframes BannerDisplay{
        0%{
            bottom: -100%;
            transform:translateZ(20rem) translateX(-50%) translateY(50%)  rotateY(360deg) ;
    
        }
        100%{
            bottom:50%;
            transform:translateZ(20rem) translateX(-50%) translateY(50%) rotateY(0deg);
            
        }
    }
    @-webkit-keyframes BannerDisplay{
        0%{
            bottom: -100%;
            -webkit-transform: translateZ(20rem) translateX(-50%) translateY(50%) rotateY(360deg);
    
        }
        100%{
            bottom:50%;
            -webkit-transform: translateZ(20rem) translateX(-50%) translateY(50%) rotateY(0deg);   
        }
    }
}


@media (max-width:600px){
    img.front-logo{
        width: 13rem;
        top: 1.1rem;
        transform: translateX(1.8rem);
    }

    .banner{
        width: 30rem;
        height: 17.54rem;
    }

    .banner h3{
        font-size: 1.8rem;
        margin-top: 2rem;
    }

    .banner p {
        font-size: 4.6rem;
        margin-left: -0.5rem;
    }

    .banner p:nth-child(2) {
        margin-top:-0.9rem;
    }

    .banner p:nth-child(3) {
        margin-top:-2.8rem;
    }
}
@media (max-width:420px) {
    .banner{
        width: 24rem;
        height: 14.14rem;
        /* animation: BannerDisplay 5s 9s forwards; */
    }

    .banner div{
        padding: 0 1.2rem;
    }
    .banner h3{
        font-size: 1.3rem;
        margin-top: 1.6rem;
        margin-left: 0;
    }

    .banner p {
        font-size: 3.6rem;
        margin-left: 0;

    }

    .banner p:nth-child(2) {
        margin-top:-1.1rem;
    }

    .banner p:nth-child(3) {
        margin-top:-3.7rem;
    }

        /* @keyframes BannerDisplay{
        0%{
            bottom: -100%;
            transform:translateZ(20rem) translateX(-50%) translateY(50%)  rotateY(360deg) ;
    
        }
        100%{
            bottom:56%;
            transform:translateZ(20rem) translateX(-50%) translateY(50%) rotateY(0deg);
            
        }
    }
    @-webkit-keyframes BannerDisplay{
        0%{
            bottom: -100%;
            -webkit-transform: translateZ(20rem) translateX(-50%) translateY(50%) rotateY(360deg);
    
        }
        100%{
            bottom:56%;
            -webkit-transform: translateZ(20rem) translateX(-50%) translateY(50%) rotateY(0deg);   
        } 
    }*/


}


@media (max-width:380px) {
    .banner{
        width: 20rem;
        height: 10.4rem;
    }

    .banner div{
        padding: 0 1rem;
    }
    .banner h3{
        font-size: 0.9rem;
        margin-top: 0.6rem;
        margin-left: 0;
    }

    .banner p {
        font-size: 2.7rem;
        margin-left: -0.1rem;

    }

    .banner p:nth-child(2) {
        margin-top:-1.8rem;
    }

    .banner p:nth-child(3) {
        margin-top:-4.5rem;
    }
}






/* 
@media (max-height:50px){
    img.front-logo{
        width: 10rem;
        top: 1.1rem;
    }

    .banner{
        position: absolute;
        right:unset;
        bottom:-30rem; 
        left:50%;
        transform:translateX(-50%);
        -webkit-transform:translateX(-50%);
        width: 42rem;
        height: 24.5rem;
        animation: BannerDisplay 5s 9s forwards;
        transform-origin:left;
        -webkit-transform-origin:left;
    }

    .banner h3{
        font-family: 'Mukta Vaani', sans-serif;
        width: 100%;
        font-weight: 200;
        font-size: 3.1rem;
        letter-spacing: 0.5rem;
        text-align: justify;
        margin-bottom: 0rem;
        margin-top: 2rem;
        margin-left: 0.5rem;
    }

    .banner p {
        font-family: 'Mukta Vaani', sans-serif;
        width: 100%;
        font-weight: 500;
        font-size: 6.5rem;
        letter-spacing: 1.2rem;
        text-align: center;
        line-height: 6.5rem;
    }

    @keyframes BannerDisplay{
        0%{
            bottom: -30rem;
            left:50%;
            transform: rotateY(360deg) translateX(-50%);
            -webkit-transform: rotateY(360deg) translateX(-50%);
        }
        100%{
            bottom: 50%;
            left:50%;
            transform: rotateY(0deg) translateX(-50%) translateY(50%);
            -webkit-transform: rotateY(0deg) translateX(-50%) translateY(50%);
        }
    } 

    .header nav li {
        margin-bottom: 0rem;
    }

    .header nav {
        position: absolute;
        top: 14rem;
    }

} */

/* 
@media (max-height:550px) and (max-width:400px) {
     .banner{
        width: 26rem;
        height: 15.5rem;
    }

    .banner h3 {
        font-size: 1.3rem;
        margin-top: 3.2rem;
        margin-left: 0.0rem;
    }

    .banner p {
        font-weight: 500;
        font-size: 2.7rem;
        line-height: 2.8rem;
    }
} */


/* End of responsie  */

</style>
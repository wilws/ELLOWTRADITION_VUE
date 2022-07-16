<template>
<section class="section-2">

    <div class="start">
        <img class="logo" src="@/assets/black_logo.png" alt="logo">
    </div>

    <img class="logo" src="@/assets/white_logo.png" alt="logo">

    
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

.section-1{
    width:100%;
    height:100vh;
    position: relative;
    perspective: 100rem;
    overflow: hidden; 
}



.start{
    position: relative;
    width:100%;
    height:100vh;
    z-index: 20;
    animation: startingScreenDisappear 3s 4s forwards;
}

.start .logo{
    position:absolute;
    opacity: 0;
    transform: translateX(-50%) translateY(-50%); 
    animation: startingLogoAnimation 4s forwards;
}



@keyframes startingLogoAnimation{

    0%{   
        top:50%;
        right:50%;
        opacity: 0;
        transform: translateX(50%) translateY(-50%); 
    }
    40%{
        opacity: 1;
        top:50%;
        right:50%;
        transform: translateX(50%) translateY(-50%); 
    }
    45%{
        opacity: 1;
        top:50%;
        right:50%;
        transform: translateX(50%) translateY(-50%); 
    }
    /* 90%{
        top:2.5rem;
        right:2.5rem;
        opacity: 1; 
        transform: translateX(0) translateY(0); 

    }
    100%{
        top:2.5rem;
        right:2.5rem;
        opacity: 0; 
        transform: translateX(0) translateY(0); 
    } */
    100%{
        top:50%;
        right:50%;
        opacity: 0;
        transform: translateX(50%) translateY(-50%); 
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


.logo{
    position: absolute;
    width:30rem;
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
  height: 100vh;
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

@keyframes scale{
    0%{
        transform: scale(1.3);
        visibility:hidden;
        opacity: 0;
    }
    25%{
        transform: scale(1);
        visibility:visible;
        opacity: 1;
    }
    35%{
      transform: scale(1);
        visibility:hidden;
        opacity: 0;
    }
    100%{
        transform: scale(1);
        visibility:hidden;
        opacity: 0;
    }
}

.banner{
    position: absolute;
    right:2.5rem;
    bottom:-30rem;
    width: 50rem;
    height: 29rem;
    border: rgb(255, 255, 255, 0.4) solid .4rem;
    padding: .5rem;
    z-index: 10;
    animation: BannerDisplay 2s 9s forwards;
}

.banner div {
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
}

.banner h3{
    font-family: 'Mukta Vaani', sans-serif;
    width:100%;
    font-weight: 200;
    font-size: 3.9rem;
    letter-spacing: 0.5rem;
    text-align:justify;
    margin-bottom: 1rem;
    margin-top: 2rem;
    margin-left: 0.5rem;

}

.banner p {
    font-family: 'Mukta Vaani', sans-serif;
    width:100%;
    font-weight: 500;
    font-size: 8rem;
    letter-spacing: 1.2rem;
    text-align: center;
    line-height: 7rem;
}


@keyframes BannerDisplay{
    0%{
       bottom: -30rem;
       transform: rotateY(360deg);
    }
    100%{
        bottom: 10rem;
        transform: rotateY(0deg);
    }
}

@keyframes ShowBannerDetail{
    0%{
        /* padding: 0rem 2rem; */
        visibility: hidden;
        opacity: 0;
        width: 0%;
    }


    100%{
        visibility: visible;
        /* padding: 0rem 2rem; */
        opacity: 1;
        width: 100%;
    }
}

/* End of Index Page */



/* Responsive */
@media (max-width:860px){
    img.logo{
        width: 16rem;
        top: 1.1rem;
    }

    .banner{
        position: absolute;
        right:unset;
        bottom:-30rem; 
        left:50%;
        transform:translateX(-50%);
        width: 42rem;
        height: 24.5rem;
        /* animation: BannerDisplay 2s 9s forwards; */
        animation: BannerDisplay 5s 9s forwards;
        transform-origin:left;
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
        }
        100%{
            bottom: 50%;
            left:50%;
            transform: rotateY(0deg) translateX(-50%) translateY(50%);
        }
    }
}


@media (max-width:510px){
    img.logo{
        width: 10rem;
        top: 1.1rem;
    }

    .banner{
        width: 36rem;
        height: 21.5rem;
    }

    .banner h3 {
        font-size: 2.4rem;
        margin-top: 3.2rem;
        margin-left: 0.0rem;
    }

    .banner p {
        font-weight: 500;
        font-size: 5rem;
        line-height: 4.5rem;
    }
}
@media (max-width:400px){
    


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

}


@media (max-height:550px){
    img.logo{
        width: 10rem;
        top: 1.1rem;
    }

    .banner{
        position: absolute;
        right:unset;
        bottom:-30rem; 
        left:50%;
        transform:translateX(-50%);
        width: 42rem;
        height: 24.5rem;
        animation: BannerDisplay 5s 9s forwards;
        transform-origin:left;
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
        }
        100%{
            bottom: 50%;
            left:50%;
            transform: rotateY(0deg) translateX(-50%) translateY(50%);
        }
    } 

    .header nav li {
        margin-bottom: 0rem;
    }

    .header nav {
        position: absolute;
        top: 14rem;
    }

}


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
}


/* End of responsie  */

</style>
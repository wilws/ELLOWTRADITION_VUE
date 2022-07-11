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
    animation: AppStart2 3s 6s forwards;
}

.start .logo{
    position:absolute;
    opacity: 0;
    transform: translateX(-50%) translateY(-50%); 
    animation: AppStart1 5s forwards;
}

@keyframes AppStart1{

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
    90%{
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
    }
}


@keyframes AppStart2{
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
    right:2.5rem;
    z-index: 10;
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

</style>
<template>
<div class="spinner-container">
        <div class="circles">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>


<script>
export default {
    setup() {
        
    },
}
</script>


<style scoped>

.spinner-container{		
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s;
    z-index:300;
}

.spinner-container.stop {       
    opacity:0;
    visibility: hidden;
}

.circles{						/* contains all the circles */
    width:8rem;
    height:8rem;
    position: relative;
    opacity: 1;
    visibility: visible;	    
    /* border:yellow solid thin; */
    border-radius: 50%;
}


@keyframes displayCircles {
    0%{
        opacity:0;
        visibility: hidden;
    }
    25%{
        opacity: 1;
        visibility: visible;
    }
    90%{
        opacity: 1;
        visibility: visible;
    }
    100%{
        opacity: 0;
        visibility: hidden;
    }
}

.circles div{                  /* Pin of all circles */
    position:absolute;                                		   
    animation: circles 1.2s			
    cubic-bezier(0.5,0,0.5,1)			 
    infinite; 
    top:48%;                    /* all the divs pin on the center of .circles */
    left:48.5%;
    /* border: red solid thin; */
    width:.4rem;
    height:.4rem;
}

.circles div::after{     		/* the circle */
    content:"";
    position:absolute;
    width:.6rem;
    height:.6rem;
    border-radius: 50%;
    background-color: #7D929B;
}

.circles div:nth-child(1){
    animation-delay:-0.036s; 
}

.circles div:nth-child(1)::after{
    top: -0.5rem;
    left: 3.5rem;
}

.circles div:nth-child(2){
    animation-delay:-0.072s;
}

.circles div:nth-child(2)::after{
    top: 0.6rem;
    left: 3.3rem;
}

.circles div:nth-child(3){
    animation-delay:-0.108s;
}

.circles div:nth-child(3)::after{
    top: 1.7rem;
    left: 2.8rem;
}

.circles div:nth-child(4){
    animation-delay:-0.144s
}

.circles div:nth-child(4)::after{
      top: 2.7rem;
    left: 1.9rem;
}

.circles div:nth-child(5){
    animation-delay:-0.18s
}

.circles div:nth-child(5)::after{
     top: 3.3rem;
    left: 0.8rem;
}

.circles div:nth-child(6){
    animation-delay:-0.216s
}


.circles div:nth-child(6)::after{
    top: 3.5rem;
    left: -0.2rem;
}

.circles div:nth-child(7){
    animation-delay:-0.252s
}


.circles div:nth-child(7)::after{
    top: 3.4rem;
    left: -1.3rem;
}

.circles div:nth-child(8){
    animation-delay:-0.288s
}

.circles div:nth-child(8)::after{
    top: 3.1rem;
    left: -2.3rem
}

@keyframes circles {
    0%{
        transform:rotate(0);
        
    }
    100%{
        transform:rotate(360deg);
       
    }
}
</style>
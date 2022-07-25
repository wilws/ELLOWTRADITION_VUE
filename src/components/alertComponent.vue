<template>
    <div class="alert-wrapper">
    <div>
        <i class="fa-solid fa-xmark"></i><br>
        <slot></slot>
    </div>
    <!-- <button>Close</button> -->
    </div>
</template>

<style scoped>
.alert-wrapper{
    position: fixed;
    top:0%;
    left:0%;
    width:100vw;
    height:100vh;
    background:rgba(255,255, 255, 0.7);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.alert-wrapper i {
    color:red;
    font-size: 5rem;
}
.alert-wrapper div{
    width:40rem;
    height:20rem;
    font-size: 2rem;
    background-color: rgb(255, 255, 255);
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: rgba(100, 100, 100, 0.9);
    border-radius: 15px;
    box-shadow: 0.2rem 0.2rem 0.4rem rgb(197, 192, 192) ;
    margin-bottom:5rem;
    text-align: center;
}

.alert-wrapper button{
    border:none;
    width:6rem;
    background-color: transparent;
    font-size: 2rem;
    cursor: pointer;
     background-color: rgb(255, 255, 255);
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: rgba(100, 100, 100, 0.9);
    border-radius: 5px;
    box-shadow: 0.2rem 0.2rem 0.4rem rgb(197, 192, 192) ;
}

</style>
<template>
    <div id="sec">
        <br>
        <div id="title"><p>{{ $t('sec.title') }}</p></div>
        <div id="head">{{ $t('sec.head') }}</div>
    </div>
    <br><br><br>
    <div id="divbut"><button>{{ $t('sec.but') }}</button></div>
    <br><br>
    <div id="divimg"><img src="/Users/abdosallabi/vue-folder/vue-project/src/assets/shop.png" alt=""></div>
</template>


<script>


</script>

<style scoped>
*{
    color: #E6F0FF;
}
#sec{
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    height: 35vh;
    
}
#title{
    display: flex;
    align-items: center;
    font-family: 'Fraunces';
    font-style: 'Fraunces';
    text-align: center;
    padding:1px 75px;
    height: 90%;
    font:bolder;
    font-size: 80px;
    letter-spacing:normal;
    line-height: 1;
    font-weight: 400px;
   
}
#head{text-align: center;color: #B0BCD0;
    font-size: 22px;
}
#divbut{width:100%;
height:fit-content ;
text-align: center;
}
div button{
    width: 200px;
    height: 40px;
    border-radius: 5px;
    align-items: center;
    background-color:#004080 ;
    font-family: 'Space Grotesk';
    text-decoration: none;
    border: none;
    font: bold;
    font-weight: 300px;
}
#divimg{
    height: fit-content;
    width: 100%;
    text-align: center;
}
img{
        width: 90%;
    height: auto;
    border-radius: 20px;
}

@media (max-width: 768px) {
 #title{
    padding:1px 5px;
    font-size: 27px;
}
#head{font-size: 15px;
}

#sec{
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    height: 10vh;
    
}
div button{
    width: 175px;
    height: 32px;
    border-radius: 5px;
    font-weight: 300px;}
img{
    width: 75%;
    height: auto;
    border-radius: 20px;
}

}

</style>
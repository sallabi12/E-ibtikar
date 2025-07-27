<template>
<div id="sec">
        <div>Python</div>
        <div>Django</div>
        <div>Vue.js</div>
        <div>HTML</div>
        <div>Flutter</div>
        <div>Boostrap</div>
        <div>JS</div>
        <div>CSS</div>      
</div>

</template>
<script></script>
<style scoped>
    
#sec{
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}


#sec div{
    font-size: 20px;
    color:#E6F0FF;
    font-family: 'Space Grotesk';
    width: 156px;
    height: fit-content;
    border-radius: 5px;
     background-color:#004080 ;
     text-align: center;
     margin: 5px;
}
#sec div:hover {
    height: 35px;
    cursor: pointer;}


@media (max-width: 768px) {
#sec{ flex-wrap: wrap;     /* Enables horizontal scroll */  /* Prevents line breaks */            /* Optional spacing between items */
  padding: 10px;}
#sec div{font-size: 15px;}
}
</style>
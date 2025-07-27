<template>
     <div id="app" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <router-view />
    <div class="cont">
        <div id="title">{{ $t('proj.title') }}</div>
        <div id="head">{{ $t('proj.head') }}</div>
</div>
<br><br>
        <div id="cn">
            <div class="ap"><p>Spectrum</p></div>
            <div class="ap"><p>Rafaqni</p></div>
            <div class="ap"><p>Al Masar Al Taleme</p></div>
            <div class="ap"><p>Fazaa</p></div>
        </div>
        </div>
    
</template>

<style scoped>
#app{
    height: auto;
}

#title{
    font-size: 70px;
    font-family: 'Fraunces';
    color: #E6F0FF;
    font-style: 'SemiBold';
}
#head{
    font-size: 25px;
    font-family: 'Fraunces';
    color: #B0BCD0;
}
#cn{
    display: flex;
    flex-direction: row;
    align-items: center;   /* vertical */
    justify-content:space-between;
    gap: 25px;
    padding: 1px 50px;
}

.ap{
        height:300px;
        width:300px;
        color: #E6F0FF;
        font-family: 'Playfair Display SC';
        background-color: #001F3F;
        border-radius: 15px;
        text-align: center;
        font-size: 40px;
        display: flex;
        align-items: center;   /* vertical */
        justify-content: center;
}

.ap:hover {
    transform: scale(1.05);
    background-color: #003366;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.ap:active {
    transform: scale(0.97);
    transition: transform 0.1s;
}

@media (max-width: 768px) {
  #title {
    font-size: 36px;
  }

  #head {
    font-size: 18px;

    padding: 0 10px;
  }

  #cn {
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    gap: 15px;
  }

  .ap {
    width: 45%;

    height: 200px;
    font-size: 24px;
  }
   .ap p{  padding:1px 5px;}

  .ap:hover {
    transform: scale(1.05);
    background-color: #003366;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .ap:active {
    transform: scale(0.97);
    transition: transform 0.1s;
  }
}


</style>
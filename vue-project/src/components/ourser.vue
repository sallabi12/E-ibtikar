<template>
     <div id="app" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <router-view />
    <div class="cont">
    <div id="t">{{ $t('ourser.ser') }}</div>
    <br>
    <div id="par">{{  $t('ourser.par') }}</div>
    </br><br><br>
    <div id="line"></div>
    <br><br>
    <div id="ecom">
        <div class="comerce"><p id="pt"><img src="@/assets/tab.png">{{ $t('ourser.ecom') }}</p></div>
        <div class="comerce"><p id="pp">{{ $t('ourser.ecomp') }}</p></div>
    </div>
    <br>
    <div><button><p>{{ $t('ourser.lern') }}</p></button></div>
</div></div>
</template>

<style scoped>

#t{font-size:80px ;
    font-family: 'Fraunces';
    color: #E6F0FF;
    letter-spacing: -1px;
    width:75%;
}
#par{font-size:32px ;
    font-family: 'Space Grotesk';
    color: #B0BCD0;
    letter-spacing: -1px;
    width:75%;
}
#line{width:100%;
    height:1px;
    background-color: #ffffff29;
    margin:auto;}

    #ecom{
        margin: 1px 10px;
        padding:10px 30px;
        height:max-content;
        color: #E6F0FF;
        font-family: 'Playfair Display SC';
        background-color: #001F3F;
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-radius: 15px;
    }
    .comerce{display: flex;
        gap: 10px;
        align-items: top;}

        img{ width: 50px;
        height: 50px;
        margin: 0px 5px;
    }
    #pt{
        font-family:'Playfair Display SC';
        font: 'Playfair Display SC';
        width: fit-content;
        font-size: 40px;
    }
    #pp{
        font-family: 'Space Grotesk';
        font-size: 24px;
    }

    button{
  margin: 1px 10px;
  background: linear-gradient(180deg, #004080 0%, #001F3F 40%, #000A12 80%, #000000 100%);
  border:none;
  padding:5px;
  border-radius: 4px;
  text-align: center;
  color: #E6F0FF;
    }




@media (max-width: 768px) {
  #t {
    font-size: 36px;
    width: 100%;
  }

  #par {
    font-size: 20px;
    width: 100%;
  }

  #ecom {
    padding: 10px 15px;
    gap: 15px;
  }

  .comerce {
    flex-direction: column;
    align-items: flex-start;
  }

  img {
    width: 40px;
    height: 40px;
    margin: 0 0 10px 0;
  }

  #pt {
    font-size: 28px;
  }

  #pp {
    font-size: 16px;
  }

  button {
    width: 95%;
    font-size: 16px;
  }
}
</style>
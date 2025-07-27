<template>
   
   <div id="t">{{ $t('abt.title') }}</div>
    <div id="par">{{  $t('abt.par') }}</div>
    <br>
    <div id="skills">
               <div class="p" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"><div class="logo"><i class="bi bi-graph-up"></i></div>{{ $t('abt.aim') }}</div>
        <div class="p" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'"><div class="logo"><i class="bi bi-star"></i></div>{{ $t('abt.prov') }}</div>
    </div>
</template>


<style scoped>

#t{font-size: 96px;}
div{
    text-align: center;
    color: #E6F0FF ;
    font-family: 'Fraunces';
    letter-spacing: -1px
    
}
#par{margin: auto;
    width:60%;
    font-size: 30px;
    height:fit-content;
    font-family: 'Space Grotesk';
    }

.p{  display: flex;
    justify-content: center;
    align-items: top;
    flex-direction:  row;
    width:50%;
    margin: 10px 100px;
    font-size: 24px;
}
i {
  font-size: 32px; 
  color: #E6F0FF;
  height: 50px;
  width: 50px;
  background-color: #004080;
  border-radius: 50%;
  display: flex;              /* ✅ makes sizing and centering work */
  align-items: center;        /* center icon vertically */
  justify-content: center;  
  margin-bottom: 25px;  /* center icon horizontally */
  margin: 3px 5px;
}
#skills{
    display: flex;
    flex-direction: row;

}


@media (max-width: 768px) {
    #t{font-size: 50px;}
  #par {
    width: 75%;
    font-size: 14px;}

  .p {
    flex-direction: column;
     align-items: center;
    flex-wrap: wrap;
    width: 75%;
    margin: 10px auto;
    font-size: 18px;
    justify-content: center;
  }

  i {
    font-size: 28px;
    height: 50px;
    width: 50px;
    margin-bottom: 0;
  }

  #skills {
    flex-direction: column;
    align-items: center;
  }
}
</style>
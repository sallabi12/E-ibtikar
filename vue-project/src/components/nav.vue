<template>
  <nav>
    <div id="header"><div id="title"><strong>E-IBTIKAR</strong></div>
      <div id="dnav">
        <ul>
          <li><a href="#services">{{ $t('nav.services') }}</a></li>
          <li><a href="#aboutus">{{ $t('nav.about') }}</a></li>
          <li><a href="#contactus">{{ $t('nav.contact') }}</a></li>
          <li><a href="#project">{{ $t('nav.projects') }}</a></li>
          <button @click="toggleLang">{{ currentLang === 'en' ? 'Ar' : 'EN' }}</button>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLang = locale

const toggleLang = () => {
  currentLang.value = currentLang.value === 'en' ? 'ar' : 'en'
  localStorage.setItem('lang', currentLang.value)
}
</script>

<style scoped>
nav,div{
  color: #E6F0FF;
  font-family: 'Space Grotesk';
}
#header{
  display:flex;
  flex-direction: row;
  justify-content:space-between;
  margin-left: 28px;
  margin-right: 20px ;
  align-items: center;
  margin-top: 15px;
  height:48px;
  max-width: 1425px;
  min-width: 700px;
}
#title{
  font-size: 25px;
  width: 149px;
  height: 41px;
}
#dnav{
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 571px;
  height: 48px;
}
ul{ 
 padding-left: 20px;
  padding-right: 20px;
text-align: center;}
li{
  font-size: 20px;
  text-align: center;
  display: inline;
   padding-left: 20px;
  padding-right: 20px;

}
a{
  text-decoration: none;
  color: #E6F0FF;
}
a:hover{
  color: rgb(0, 0, 0);
  border-bottom:3px solid rgb(0, 0, 0);
}
button{
  background: linear-gradient(180deg, #004080 0%, #001F3F 40%, #000A12 80%, #000000 100%);
  height: 25px;
  width:  30px;
  border:none;
  padding:5px;
  padding-right: 10px;
  border-radius: 3px;
  text-align: center;
  color: white;

}


@media (max-width: 768px) {
  #header{margin-left: 14px;
  margin-right: 1px ;
  margin-top: 10px;
  margin-left: 1px;
  height:20px;
  max-width: 712px;
  min-width: 350px;
   justify-content:center;
   gap:50px
}
#title{
  font-size: 14px;
  width:fit-content;
  height: auto;
}
   #dnav{
  display: flex;
  margin-top: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: auto;
} 
ul{ 
 padding-left: 5px;
  padding-right: 5px;
text-align: center;}
li{
  font-size: 13px;
  text-align: center;
  display: inline;
   padding-left: 5px;
  padding-right: 5px;

}

}
</style>
<template>
<div class="cont">
    <div id="app" :dir="$i18n.locale === 'ar' ? 'rtl' : 'ltr'">
    <router-view />
    <div id="title">{{ $t('us.cont') }}</div>
    <div id="head">{{ $t('us.inters') }}</div>
</div>
<br><br>
    <div class="contact-wrapper">
      <div class="contact-info">
        <p><i class="bi bi-telephone-fill"></i> 00218914157444</p>
        <p><i class="bi bi-envelope-fill"></i> Info@ibtikar.com</p>
        <p><i class="bi bi-geo-alt-fill"></i> {{ $t('us.plac') }}</p>
      </div>
      <div class="contact-form">
        <form>
          <div><input type="text" placeholder="First Name" /></div>
          <div><input type="text" placeholder="Last Name" /></div>
          <div><input type="email" placeholder="Email" /></div>
          <div><input type="text" placeholder="Phone Number" /></div>
          <div><input type="text" placeholder="Service" /></div>
          <div><button type="submit">Submit</button></div>
        </form>
      </div>
    </div>

</div>

</template>


<style scoped>
#title{
    font-size:80px ;
    font-family: 'Fraunces';
    color: #E6F0FF;
    letter-spacing: -1px;
    width:75%;}
#head{
    font-size:32px ;
    font-family: 'Space Grotesk';
    color: #B0BCD0;
    letter-spacing: -1px;
    width:75%;}

.contact-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 50px;
  flex-wrap: wrap;
  padding: 20px;
  color: #fff;
}
.contact-info {
  display: flex;
  flex-direction: column;
  gap:25px;
  min-width: fit-content;


}
.contact-info div{
    width: fit;
}
.contact-subtitle {
  font-size: 18px;
  color: #B0BCD0;
  margin-bottom: 20px;
}
.contact-info p {
  font-size: 24px;
  margin: 10px 0;
  color: #E6F0FF;
  font-family: 'Space Grotesk';
}
.contact-info i {
  margin-right: 10px;
  color: #004080;
}
.contact-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  width: 50%;
}
.contact-form div{
width:500px;
padding: 25px 50px;

}

  
 input {
  padding: 12px 16px;
  font-size: 16px;
  border-radius: 3px;
  background-color: #F8FAFC;
  width: 100%;
  height: 30px;
  color: #0e0e0e;
}
button {
  padding: 12px;
  background-color: #004080;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  
}
button:hover {
  background-color: #003366;
}











@media (max-width: 768px) {
  #title{
    font-size: 36px;
    width: 100%;
  }

  #head {
    font-size: 20px;
    width: 100%;
  }

  .contact-info {
  display: flex;
  flex-direction: column;
  gap:25px;
  min-width: fit-content;


}
.contact-info p {
  font-size: 18px;
  margin: 10px 0;
  color: #E6F0FF;
  font-family: 'Space Grotesk';
}
.contact-info i {
  color: #004080;
}

.contact-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  width: 50%;
}
.contact-form div{
width:300px;
padding:15px 5px 15px 0px;

}

  
 input {
  padding: 12px 16px;
  font-size: 16px;
  border-radius: 3px;
  background-color: #F8FAFC;
  width: 100%;
  height: 30px;
   color: #0e0e0e;
}
button {
  padding: 12px;
  background-color: #004080;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  
}
button:hover {
  background-color: #003366;}}


</style>
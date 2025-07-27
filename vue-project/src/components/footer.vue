<template>
<div class="cont"> 
    <img src="@/assets/logoeib.png" alt="">
     <div id="dnav"><ul>
          <li><a href="#services">{{ $t('nav.services') }}</a></li>
          <li><a href="#aboutus">{{ $t('nav.about') }}</a></li>
          <li><a href="#contactus">{{ $t('nav.contact') }}</a></li>
          <li><a href="#project">{{ $t('nav.projects') }}</a></li></ul>
     
    <div class="social-icons">
      <a href="#"><i class="bi bi-instagram"></i></a>
      <a href="https://www.facebook.com/profile.php?id=61565216091400"><i class="bi bi-facebook"></i></a>
      <a href="#"><i class="bi bi-twitter-x"></i></a>
      <a href="#"><i class="bi bi-snapchat"></i></a>
    </div> 
      <p class="copyright">Copyright. All Rights Reserved</p>
      </div>
</div>



</template>


<style>
img{width: 301px;
height: 425px}

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
.social-icons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
}

.social-icons i {
  font-size: 30px;
  color: #E6F0FF;
  transition: transform 0.3s ease;
}

.social-icons a:hover i {
  transform: scale(1.1);
  color: #000;
}
.copyright {
    text-align: center;
    font-size: 14px;
    color: #E6F0FF;
    margin-top: 20px;
  }

@media (max-width: 768px) {
  img {
    width: 50%;
    height: auto;
    display: block;
    margin: 0 auto;
  }

  ul {
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    align-items: center;
  }

  li {
    display: block;
    padding: 8px;
    font-size: 16px;
  }

  .social-icons {
    gap: 15px;
  }

  .copyright {
    text-align: center;
    font-size: 14px;
    color: #E6F0FF;
  }
}


</style>
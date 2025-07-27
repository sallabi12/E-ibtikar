<template> 
 <div id="dead">
  <br>
  <header><nav-one /></header>
  <section id="services"><sec-ser/></section>
  </div>
  <div></div>
  <section id="tools"><sec-tool/></section>
  <section id="aboutus"><about-us/></section>
  <section id="ser"><our-ser/></section><br><br>
  <section id="project"><pro-ject/></section><br><br><br>
  <section id="contactus"><con-us/></section>
  
  <footer id="project"><foot-er/></footer>





</template>

<script>
import NavOne from './components/nav.vue'
import secrvices from './components/services.vue'
import tools from './components/tools.vue'
import aboutus from './components/aboutus.vue'
import ourser from './components/ourser.vue'
import projects from './components/projects.vue'
import contus from './components/contus.vue'
import footer from './components/footer.vue'



export default {
  components: {
    'nav-one': NavOne,
    'sec-ser':secrvices,
     'sec-tool':tools,
     'about-us': aboutus,
     'our-ser': ourser,
     'pro-ject': projects,
     'con-us': contus,
     'foot-er': footer
     
     
  }
}
</script>

<style>

header{height: 20vh;}
#services{height: fit-content;}
#tools{height: 20vh;}
#ser{padding:10px;height: 100vh;}
#aboutus{height: 75vh;}
#project{height: 90vh;}
#footer{height: fit-content;
  
}

#dead{
  background: linear-gradient(180deg, #004080 0%, #001F3F 40%, #000A12 80%, #000000 100%);
}

footer{   background: linear-gradient(180deg,  #000000  0%, #000A12 40%, #001F3F 70%,  #004080 100%);
}





@media (max-width: 768px) {
*{border: none;}

  header{
  height: 10vh;
  
}

#services{height: fit-content;}
#aboutus{height: 50vh;}
}
#ser{padding:10px;height: 85vh;}
#project{height: 75vh;}






</style>
<template>
  <div id="app">
    <Background/>
    <Header/>
    <main>
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import Background from "./components/BackgroundCover";

export default {
  components: {Footer, Header, Background}
}
</script>

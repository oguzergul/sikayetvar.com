<template>
  <div id="app">
    <Background/>
    <Header/>
    <main>
      <transition mode="out-in" name="fade">
        <router-view/>
      </transition>
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

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>

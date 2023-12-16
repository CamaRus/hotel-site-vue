<template>
  <div class="start">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Background></Background>
    <Header></Header>
    <!-- <Start></Start> -->
    <RouterView />
    <!-- <About></About> -->
    <!-- <Numbers></Numbers> -->
    <!-- <HotelTerritory></HotelTerritory> -->
    <!-- <HotelTerritoryBeach></HotelTerritoryBeach> -->
    <!-- <HotelTerritorySPA></HotelTerritorySPA> -->
    <!-- <HotelTerritorySport></HotelTerritorySport> -->
    <!-- <Contacts></Contacts> -->

    <!-- <AboutCard></AboutCard> -->
    <!-- <AboutRightWrapper></AboutRightWrapper> -->
    <!-- <AppartmentCard></AppartmentCard> -->
  </div>
</template>

<script>
import Background from "./components/Background.vue";
import Header from "./components/Header.vue";
// import Start from "./pages/Start.vue";
// import About from "./pages/About.vue";
// import Numbers from "./pages/Numbers.vue";
// import HotelTerritory from "./pages/HotelTerritory.vue";
// import HotelTerritoryBeach from "./pages/HotelTerritoryBeach.vue";
// import HotelTerritorySPA from "./pages/HotelTerritorySPA.vue";
// import HotelTerritorySport from "./pages/HotelTerritorySport.vue";
// import Contacts from "./pages/Contacts.vue";

// import AboutCard from "./components/AboutCard.vue";
// import AboutRightWrapper from "./components/AboutRightWrapper.vue";
// import AppartmentCard from "./components/AppartmentCard.vue";
// import AppartmentCardBig from "./components/AppartmentCardBig.vue";
// import Arrow from "./components/Arrow.vue";
// import Button from "./components/Button.vue";
// import Sticker from "./components/Sticker.vue";

export default {
  name: "App",
  components: {
    Background,
    Header,
    // Start,
    // About,
    // Numbers,
    // HotelTerritory,
    // HotelTerritoryBeach,
    // HotelTerritorySPA,
    // HotelTerritorySport,
    // Contacts,

    // AboutCard,
    // AboutRightWrapper,
    // AppartmentCard,
    // AppartmentCardBig,
    // Arrow,
    // Button,
    // Sticker
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.start {
  position: relative;
  background-color: var(--white);
  width: 100%;
  height: 1040px;
  overflow: hidden;
  text-align: left;
  font-size: var(--p-14book-size);
  color: var(--white);
  font-family: var(--h-64b);
}
</style>

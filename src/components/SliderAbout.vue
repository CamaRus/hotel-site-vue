<template>
  <div>
    <vue-future-slider
      v-model="currentPage"
      :min="0"
      :max="Math.ceil(slides.length / slidesPerPage) - 1"
    />
    <div class="slider-container">
      <button @click="prevPage" :disabled="currentPage === 0">
        <img
          class=""
          alt=""
          src="/theapplication_izquierda_4436.png"
          style="background: aliceblue"
        />
      </button>
      <TransitionGroup name="fade" tag="div" class="">
        <div v-for="(slide, index) in visibleSlides" :key="index" class="">
          <component :is="slide"></component>
        </div>
      </TransitionGroup>
      <button
        @click="nextPage"
        :disabled="currentPage === Math.ceil(slides.length / slidesPerPage) - 1"
      >
        <img
          class=""
          alt=""
          src="/theapplication_izquierda_4436.png"
          style="transform: rotate(180deg); background: aliceblue"
        />
      </button>
    </div>
  </div>
</template>

<script>
import VueFutureSlider from "vue-future-slider";
import "vue-future-slider/dist/vue-future-slider.css";
// import AboutCard from "./AboutCard.vue";
import Slide1 from "./Slider/Slide1/Slide1.vue";
import Slide2 from "./Slider/Slide2/Slide2.vue";
import Slide3 from "./Slider/Slide3/Slide3.vue";

export default {
  components: {
    VueFutureSlider,
    // AboutCard,
    Slide1,
    Slide2,
    Slide3,
    // Добавьте другие компоненты, которые вы используете в slides
  },
  data() {
    return {
      currentPage: 0,
      slidesPerPage: 1,
      slides: [Slide1, Slide2, Slide3, Slide2, Slide1, Slide3],
    };
  },
  computed: {
    visibleSlides() {
      const start = this.currentPage * this.slidesPerPage;
      return this.slides.slice(start, start + this.slidesPerPage);
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 0) {
        this.currentPage -= 1;
      }
    },
    nextPage() {
      if (
        this.currentPage <
        Math.ceil(this.slides.length / this.slidesPerPage) - 1
      ) {
        this.currentPage += 1;
      }
    },
  },
};
</script>

<style scoped>
/* Стилизация слайдера и кнопок, если необходимо */
.slider-container {
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 460px;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0s;
}

.slider {
  display: flex;
  justify-content: center;
}

.slide {
  /* Стилизация отдельного слайда */
  /* flex: 0 0 33.33%; */
  margin-left: 0px;
  margin-right: -10px;
  text-align: left;
  /* text-align: -webkit-center; */
}

button {
  cursor: pointer;
  background-color: rgba(28, 28, 28, 0);
  border: none;
}

button:hover {
  scale: 110%;
}

/* Внутренние стили слайда */
.about-card {
  align-self: stretch;
  border-radius: var(--br-base);
  background-color: var(--color-gray);
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-9xl) var(--padding-13xl);
  gap: var(--gap-9xl);
}

about-card-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
}
</style>

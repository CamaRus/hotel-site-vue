<template>
  <div>
    <vue-future-slider
      v-model="currentPage"
      :min="0"
      :max="Math.ceil(slides.length / slidesPerPage) - 1"
    />
    <div class="slider-container">
      <button @click="prevPage" :disabled="currentPage === 0">
        <svg
          height="32"
          viewBox="0 0 32 32"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <path d="m0 0h32v32h-32z" />
            <path
              d="m16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16-16-7.163444-16-16 7.163444-16 16-16zm2.0710678 8.9-7.0710678 7.0710678.021.0209322-.021.0222136 7.0710678 7.0710678 1.4142136-1.4142136-5.6782814-5.6790678 5.6782814-5.6777864z"
              fill="#202327"
            />
          </g>
        </svg>
      </button>
      <transition-group name="fade" tag="div" class="slider">
        <div v-for="(slide, index) in visibleSlides" :key="index" class="slide">
          <component :is="slide"></component>
        </div>
      </transition-group>
      <button
        @click="nextPage"
        :disabled="currentPage === Math.ceil(slides.length / slidesPerPage) - 1"
      >
        <svg
          height="32"
          viewBox="0 0 32 32"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16-16-7.163444-16-16 7.163444-16 16-16zm-.8769466 9.60710678c-.3905243-.39052429-1.0236892-.39052429-1.4142135 0s-.3905243 1.02368932 0 1.41421352l4.9712279 4.9717475-4.9712279 4.9708932c-.3905243.3905243-.3905243 1.0236893 0 1.4142136s1.0236892.3905243 1.4142135 0l5.6568543-5.6568543c.180242-.1802419.2772953-.4121707.2911601-.6480754v-.1612085c-.0138648-.2359046-.1109181-.4678334-.2911601-.6480754z"
            fill="#202327"
            fill-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import VueFutureSlider from "vue-future-slider";
import "vue-future-slider/dist/vue-future-slider.css";
import AppartmentCardBig from "./AppartmentCardBig.vue";

export default {
  components: {
    VueFutureSlider,
    AppartmentCardBig,
    // Добавьте другие компоненты, которые вы используете в slides
  },
  data() {
    return {
      currentPage: 0,
      slidesPerPage: 3,
      slides: [
        AppartmentCardBig,
        AppartmentCardBig,
        AppartmentCardBig,
        AppartmentCardBig,
        AppartmentCardBig,
        // AppartmentCardBig,
      ],
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
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active в <2.1.8 */ {
  opacity: 0;
}

.slider {
  display: flex;
  justify-content: center;
}

.slide {
  /* Стилизация отдельного слайда */
  flex: 0 0 33.33%; /* Определение размера слайдера для отображения 3 слайдов на странице */
  margin-left: 0px;
  margin-right: -10px;
  text-align: -webkit-center;
}

button {
  cursor: pointer;
  background-color: rgba(28, 28, 28, 0);
  border: none;
}

button:hover {
  scale: 110%;
}
</style>

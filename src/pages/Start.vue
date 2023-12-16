<template>
  <!-- <div class="start"> -->
  <!-- <img class="start-child" alt="" src="/rectangle-35@2x.png" /> -->
  <!-- <div class="header">
      <div class="header1">
        <div class="logos-wrapper">
          <img class="image-1-icon" alt="" src="/image-1@2x.png" />
          <img class="image-2-icon" alt="" src="/image-2@2x.png" />
        </div>
        <div class="main-menu">
          <div class="div">Главная</div>
          <div class="div">Номера</div>
          <div class="div">Развлечения</div>
          <div class="div">Трансфер</div>
          <div class="div">Контакты</div>
        </div>
        <div class="right-wrapper">
          <div class="soc-icons">
            <img class="vk-icon" alt="" src="/vk.svg" />
            <img class="vk-icon" alt="" src="/telegram.svg" />
          </div>
          <div class="button">
            <div class="div">Групповые заезды</div>
          </div>
        </div>
      </div>
    </div> -->
  <div class="best-offers">
    <div class="appartment-card-price">Лучшие предложения</div>
    <div class="best-offers-items">
      <div class="appartment-card">
        <img
          class="appartment-card-image-icon"
          alt=""
          src="/appartmentcard--image@2x.png"
        />
        <div class="appartment-card-right-wrapper">
          <div class="appartment-card-title">Премиум Кинг</div>
          <div class="appartment-card-price-wrapper">
            <div class="appartment-card-ruble">
              <!-- <img class="icon" alt="" src="/.svg" /> -->
              <svg
                width="15"
                height="19"
                viewBox="0 0 15 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.888 11.3079V13.0439H1H0.8V13.2439V14.8039V15.0039H1H2.888V18.0679V18.2679L10.84 10.4839M2.888 11.3079H1H0.8V11.1079V9.28389V9.08389H1H2.888M2.888 11.3079V11.1079H3.088L2.888 11.3079ZM2.888 9.08389V0.931885V0.731885H3.088H7.6C9.7165 0.731885 11.3241 1.15893 12.3842 2.05034C13.4635 2.94449 13.992 4.23874 13.992 5.89988C13.992 7.01909 13.7365 7.99363 13.217 8.81481L13.216 8.8164C12.6951 9.62293 11.9253 10.2386 10.9189 10.6677M2.888 9.08389H3.088V9.28389M2.888 9.08389L3.088 9.28389M10.9189 10.6677C10.9187 10.6677 10.9186 10.6678 10.9184 10.6679L10.84 10.4839M10.9189 10.6677C10.9191 10.6676 10.9193 10.6675 10.9195 10.6674L10.84 10.4839M10.9189 10.6677C9.92659 11.0975 8.70576 11.3079 7.264 11.3079H6.696V11.1079H7.264C8.688 11.1079 9.88 10.8999 10.84 10.4839M3.088 9.28389H2.888M5.448 2.75589H5.248V2.95589H5.448V2.75589ZM6.696 9.28389V9.08389H6.496H5.448V9.28389H6.296H6.496H6.696Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.4"
                />
              </svg>
            </div>
            <div class="appartment-card-price">4 000</div>
          </div>
          <!-- <div class="button1"> -->
          <div class="div">
            <button class="button1">
              <router-link to="/numbers">Подробнее</router-link>
            </button>
          </div>
          <!-- </div> -->
        </div>
      </div>
      <div class="appartment-card">
        <img
          class="appartment-card-image-icon"
          alt=""
          src="/appartmentcard--image1@2x.png"
        />
        <div class="appartment-card-right-wrapper1">
          <div class="div">Эксклюзивный Кинг</div>
          <div class="appartment-card-price-wrapper">
            <div class="appartment-card-ruble">
              <!-- <img class="icon" alt="" src="/.svg" /> -->
              <svg
                width="15"
                height="19"
                viewBox="0 0 15 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.888 11.3079V13.0439H1H0.8V13.2439V14.8039V15.0039H1H2.888V18.0679V18.2679L10.84 10.4839M2.888 11.3079H1H0.8V11.1079V9.28389V9.08389H1H2.888M2.888 11.3079V11.1079H3.088L2.888 11.3079ZM2.888 9.08389V0.931885V0.731885H3.088H7.6C9.7165 0.731885 11.3241 1.15893 12.3842 2.05034C13.4635 2.94449 13.992 4.23874 13.992 5.89988C13.992 7.01909 13.7365 7.99363 13.217 8.81481L13.216 8.8164C12.6951 9.62293 11.9253 10.2386 10.9189 10.6677M2.888 9.08389H3.088V9.28389M2.888 9.08389L3.088 9.28389M10.9189 10.6677C10.9187 10.6677 10.9186 10.6678 10.9184 10.6679L10.84 10.4839M10.9189 10.6677C10.9191 10.6676 10.9193 10.6675 10.9195 10.6674L10.84 10.4839M10.9189 10.6677C9.92659 11.0975 8.70576 11.3079 7.264 11.3079H6.696V11.1079H7.264C8.688 11.1079 9.88 10.8999 10.84 10.4839M3.088 9.28389H2.888M5.448 2.75589H5.248V2.95589H5.448V2.75589ZM6.696 9.28389V9.08389H6.496H5.448V9.28389H6.296H6.496H6.696Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.4"
                />
              </svg>
            </div>
            <div class="appartment-card-price">5 000</div>
          </div>
          <!-- <div class="button1"> -->
          <button class="button1">
            <router-link to="/numbers">Подробнее</router-link>
          </button>
          <!-- </div> -->
        </div>
      </div>
      <div class="appartment-card">
        <img
          class="appartment-card-image-icon"
          alt=""
          src="/appartmentcard--image2@2x.png"
        />
        <div class="appartment-card-right-wrapper">
          <div class="appartment-card-title">Star Кинг</div>
          <div class="appartment-card-price-wrapper">
            <div class="appartment-card-ruble">
              <!-- <img class="icon" alt="" src="/.svg" /> -->
              <svg
                width="15"
                height="19"
                viewBox="0 0 15 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.888 11.3079V13.0439H1H0.8V13.2439V14.8039V15.0039H1H2.888V18.0679V18.2679L10.84 10.4839M2.888 11.3079H1H0.8V11.1079V9.28389V9.08389H1H2.888M2.888 11.3079V11.1079H3.088L2.888 11.3079ZM2.888 9.08389V0.931885V0.731885H3.088H7.6C9.7165 0.731885 11.3241 1.15893 12.3842 2.05034C13.4635 2.94449 13.992 4.23874 13.992 5.89988C13.992 7.01909 13.7365 7.99363 13.217 8.81481L13.216 8.8164C12.6951 9.62293 11.9253 10.2386 10.9189 10.6677M2.888 9.08389H3.088V9.28389M2.888 9.08389L3.088 9.28389M10.9189 10.6677C10.9187 10.6677 10.9186 10.6678 10.9184 10.6679L10.84 10.4839M10.9189 10.6677C10.9191 10.6676 10.9193 10.6675 10.9195 10.6674L10.84 10.4839M10.9189 10.6677C9.92659 11.0975 8.70576 11.3079 7.264 11.3079H6.696V11.1079H7.264C8.688 11.1079 9.88 10.8999 10.84 10.4839M3.088 9.28389H2.888M5.448 2.75589H5.248V2.95589H5.448V2.75589ZM6.696 9.28389V9.08389H6.496H5.448V9.28389H6.296H6.496H6.696Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.4"
                />
              </svg>
            </div>
            <div class="appartment-card-price">8 000</div>
          </div>
          <!-- <div class="button1"> -->
          <button class="button1">
            <router-link to="/numbers">Подробнее</router-link>
          </button>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
  <div class="left-wrapper">
    <div class="stars-wrapper">
      <img class="star-icon" alt="" src="/staricon.svg" />
      <img class="star-icon" alt="" src="/staricon.svg" />
      <img class="star-icon" alt="" src="/staricon.svg" />
      <img class="star-icon" alt="" src="/staricon.svg" />
    </div>
    <b class="div">
      <p class="p">Отель</p>
      <p class="p">«Долина 960»</p>
    </b>
    <!-- <div class="button4">
      <div class="div">Быстрое бронирование</div>
    </div> -->
    <!-- <div class="button4"> -->
    <button>Быстрое бронирование</button>
    <!-- </div> -->
  </div>
  <!-- </div> -->
</template>
<script>
export default {
  name: "Start",
};
</script>
<style scoped>
button {
  border-radius: var(--br-xs);
  background-color: var(--accent);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base) var(--padding-5xl);
  font-size: var(--p-18r-size);
  color: white;
  cursor: pointer;
  font-family: var(--p-16book);
}

.start-child {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 1040px;
  object-fit: cover;
}
.image-1-icon {
  position: relative;
  width: 128px;
  height: 61px;
  object-fit: cover;
}
.image-2-icon {
  position: relative;
  width: 128px;
  height: 47px;
  object-fit: cover;
}
.logos-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
}
.div {
  position: relative;
  line-height: 140%;
}
.main-menu {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-21xl);
}
.vk-icon {
  position: relative;
  width: 32px;
  height: 32px;
  overflow: hidden;
  flex-shrink: 0;
}
.soc-icons {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
}
.button {
  border-radius: var(--br-5xs);
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-xl);
}
.right-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-21xl);
  font-size: var(--p-13r-size);
  color: var(--black);
}
.header1 {
  width: 1296px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-5xl) 0px;
  box-sizing: border-box;
}
.header {
  position: absolute;
  top: 0px;
  left: 312px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-81xl);
}
.appartment-card-image-icon {
  position: relative;
  border-radius: var(--br-xs);
  width: 128px;
  height: 128px;
  object-fit: cover;
}
.appartment-card-title {
  align-self: stretch;
  position: relative;
  line-height: 140%;
}
.icon {
  position: relative;
  width: 13.59px;
  height: 17.94px;
}
.appartment-card-ruble {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.appartment-card-price {
  position: relative;
  line-height: 140%;
  font-weight: 500;
}
.appartment-card-price-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--h-24m-size);
}
.button1 {
  border-radius: var(--br-5xs);
  background-color: var(--accent);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-xl);
  font-size: var(--p-13r-size);
}
.appartment-card-right-wrapper {
  width: 136px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
}
.appartment-card {
  border-radius: var(--br-base);
  background-color: var(--white-35);
  backdrop-filter: var(--blur);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-5xl);
  gap: var(--gap-9xl);
}
.appartment-card-right-wrapper1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
}
.best-offers-items {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  font-size: var(--p-15r-size);
}
.best-offers {
  position: absolute;
  top: 690px;
  left: 312px;
  width: 1296px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 48px;
  font-size: var(--h-24m-size);
}
.star-icon {
  position: relative;
  width: 20px;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
}
.stars-wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
}
.p {
  margin: 0;
}
.button4 {
  border-radius: var(--br-xs);
  background-color: var(--accent);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base) var(--padding-5xl);
  font-size: var(--p-18r-size);
}
.left-wrapper {
  position: absolute;
  top: 209px;
  left: 312px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-21xl);
  font-size: var(--h-64b-size);
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

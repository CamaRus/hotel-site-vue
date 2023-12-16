<template>
  <div class="header">
    <div class="header1">
      <div class="logos-wrapper">
        <img class="image-1-icon" alt="" src="/image-1@2x.png" />
        <img class="image-2-icon" alt="" src="/image-2@2x.png" />
      </div>
      <div class="main-menu">
        <!-- <div class="div">Главная</div>
        <div class="div">Номера</div>
        <div class="div">Развлечения</div>
        <div class="div">Трансфер</div>
        <div class="div">Контакты</div> -->

        <div class="div">
          <RouterLink to="/"><span>Главная</span></RouterLink>
        </div>
        <div class="div"><RouterLink to="/numbers">Номера</RouterLink></div>
        <div class="div"><RouterLink to="/about">Развлечения</RouterLink></div>
        <div class="div"><RouterLink to="/contacts">Трансфер</RouterLink></div>
        <div class="div"><RouterLink to="/contacts">Контакты</RouterLink></div>
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
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style scoped>
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
  gap: 24px;
}
.div {
  position: relative;
  line-height: 140%;
}

.div:hover {
  cursor: pointer;
  box-shadow: black;
  /* box-sizing: content-box; */
  border-bottom: groove;
  /* border-radius: 5px; */
  /* padding: 1px; */
}

a:active {
  text-decoration: auto;
  color: darkkhaki;
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

.vk-icon:hover {
  scale: 120%;
  cursor: pointer;
}
.soc-icons {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
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
  padding: 24px 0px;
  box-sizing: border-box;
}
.header {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 312px 100px;
  box-sizing: border-box;
  text-align: left;
  font-size: var(--p-14book-size);
  color: var(--white);
  font-family: var(--p-14book);
  /* background: black; */
}

/* .start {
  position: relative;
  background-color: var(--white);
  width: 100%;
  height: 1040px;
  overflow: hidden;
  text-align: left;
  font-size: var(--p-14book-size);
  color: var(--white);
  font-family: var(--h-64b);
} */
</style>

<script lang="ts" setup>
import homepageBackground from '~/assets/homepagebackground.png';
</script>

<template>
  <section :class="$style.hero">
    <img :class="$style.photoIcon" alt="Background" :src="homepageBackground" />
    <div :class="$style.content">
      <div :class="$style.makeAnAwesomeContainer">
        <span>Make an </span>
        <i :class="$style.awesome">Awesome</i>
        <span> Website</span>
      </div>
      <div :class="$style.weMadeIt">
        We made it so beautiful and simple. It combines landings, pages, blogs and shop screens. It is definitely the tool you need in your collection!
      </div>
      <div :class="$style.buttons">
        <div :class="$style.purchaseButton">
          <div :class="$style.button" />
          <div :class="$style.purchaseNowForContainer">
            <span>PURCHASE NOW </span>
            <i :class="$style.for">for</i>
            <span> $48</span>
          </div>
        </div>
        <div :class="$style.ghostButton">
          <div :class="$style.ghostButtonInner" />
          <div :class="$style.learnMore">LEARN MORE</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style module>
.hero {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 700px;
  background-color: #222328; 
}

.photoIcon {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  overflow: hidden;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  mix-blend-mode: normal;
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.makeAnAwesomeContainer {
  width: 935px;
  max-width: 100%;
  font-size: 72px;
  letter-spacing: -1px;
  line-height: 82px;
  color: #fff;
  text-align: center;
  display: inline-block;
  font-family: Montserrat;
}

.awesome {
  font-family: 'Droid Serif';
}

.weMadeIt {
  width: 668px;
  max-width: 100%;
  font-size: 18px;
  line-height: 28px;
  font-family: Montserrat;
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  opacity: 0.8;
  mix-blend-mode: normal;
}

.buttons {
  display: flex;
  gap: 20px;
}

.purchaseButton {
  position: relative;
  width: 205px;
  height: 60px;
}

.button {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 30px;
  background-color: #f42267;
  width: 100%;
  height: 60px;
}

.purchaseNowForContainer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 205px;
  font-size: 14px;
  letter-spacing: 1.5px;
  color: #fff;
  text-align: center;
  display: inline-block;
  font-family: Montserrat;
}

.for {
  font-family: 'Droid Serif';
}

.ghostButton {
  position: relative;
  width: 200px;
  height: 60px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  font-family: Montserrat;
}

.ghostButtonInner {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 30px;
  border: 2px solid #fff;
  box-sizing: border-box;
  width: 200px;
  height: 60px;
  opacity: 0.3;
  mix-blend-mode: normal;
}

.learnMore {
  position: absolute;
  top: 21px;
  left: 45px;
  letter-spacing: 1.5px;
}
</style>
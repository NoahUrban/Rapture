<script lang="ts" setup>
import homepageBackground from '~/assets/homepagebackground.png';
</script>

<template>
  <section :class="$style.background">
    <div :class="$style.divider" />

    <div :class="$style.featuresWrapper">
      <!-- Vertical Grid Lines -->
      <div :class="$style.verticalLine" style="left: calc(33.33% - 1px)"></div>
      <div :class="$style.verticalLine" style="left: calc(66.66% - 1px)"></div>
      <!-- Horizontal Grid Line -->
      <div :class="$style.horizontalLine"></div>

      <!-- Feature 1 -->
      <div :class="$style.feature">
        <img :class="[$style.icon, $style.screenIcon]" alt="" src="~/assets/screenicon.png" />
        <div :class="$style.makeItMinimal">MAKE IT MINIMAL</div>
        <div :class="$style.cleanModernLayouts">
          Clean modern layouts match last web design trends.
        </div>
      </div>

      <!-- Feature 2 -->
      <div :class="$style.feature">
        <img :class="[$style.icon, $style.twoWayIcon]" alt="" src="~/assets/twoway.png" />
        <div :class="$style.mixMatchContainer">
          <span>MIX </span>
          <i :class="$style.i">&</i>
          <span> MATCH</span>
        </div>
        <div :class="$style.dragAndDropBlocks">
          Drag-and-drop blocks make it easy to create any web-site.
        </div>
      </div>

      <!-- Feature 3 -->
      <div :class="$style.feature">
        <img :class="[$style.icon, $style.twoTimesIcon]" alt="" src="~/assets/twotimes.png" />
        <div :class="$style.retinaReady">RETINA READY</div>
        <div :class="$style.soTheresNo">
          So there's no need to worry about optimizing your assets.
        </div>
      </div>

      <!-- Feature 4 -->
      <div :class="$style.feature">
        <img :class="[$style.icon, $style.diamondIcon]" alt="" src="~/assets/diamond.png" />
        <div :class="$style.madeForPs">MADE FOR PS & SKETCH</div>
        <div :class="$style.worksInPhotoshop">
          Works in Photoshop CS6+ and Sketch 3.5+
        </div>
      </div>

      <!-- Feature 5 -->
      <div :class="$style.feature">
        <img :class="[$style.icon, $style.lettersIcon]" alt="" src="~/assets/letters.png" />
        <div :class="$style.freeGoogleFonts">FREE GOOGLE FONTS</div>
        <div :class="$style.usedMostPopular">
          Used most popular free fonts: Montserrat & Droid Serif.
        </div>
      </div>

      <!-- Feature 6 -->
      <div :class="$style.feature">
        <img :class="[$style.icon, $style.clockIcon]" alt="" src="~/assets/clock.png" />
        <div :class="$style.saveYourTime">SAVE YOUR TIME</div>
        <div :class="$style.spendYourTime">
          Spend your time creating, not building basic elements.
        </div>
      </div>
    </div>
  </section>
</template>

<style module>
.background {
  width: 100%;
  position: relative;
  background-color: #fff;
  padding: 114px 16px 116px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.divider {
  width: 100%;
  height: 670px;
  background-color: #222328;
  opacity: 0.1;
  position: absolute;
  top: 0;
  mix-blend-mode: normal;
  z-index: 0;
}

.featuresWrapper {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px 48px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  place-items: center;
}

/* Grid lines */
.verticalLine {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: #222328;
  opacity: 0.1;
  mix-blend-mode: normal;
  z-index: 10;
}

.horizontalLine {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background-color: #222328;
  opacity: 0.1;
  mix-blend-mode: normal;
  z-index: 10;
}

.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 256px;
  width: 100%;
}

.icon {
  overflow: hidden;
  object-fit: cover;
  position: relative;
}

.screenIcon {
  height: 83px;
}

.twoWayIcon {
  height: 82px;
}

.twoTimesIcon {
  height: 82px;
}

.diamondIcon {
  height: 48px;
}

.lettersIcon {
  height: 55px;
}

.clockIcon {
  height: 66px;
  margin-top: -12px;
}

.makeItMinimal,
.mixMatchContainer,
.retinaReady,
.madeForPs,
.freeGoogleFonts,
.saveYourTime {
  font-size: 13px;
  letter-spacing: 1.2px;
  line-height: 21px;
  font-family: Montserrat;
  color: #222328;
  margin-top: 13px;
}

.cleanModernLayouts,
.dragAndDropBlocks,
.soTheresNo,
.worksInPhotoshop,
.usedMostPopular,
.spendYourTime {
  font-size: 14px;
  line-height: 22px;
  font-weight: 300;
  font-family: Montserrat;
  color: #8c8f94;
  margin-top: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
}

.cleanModernLayouts,
.dragAndDropBlocks,
.soTheresNo {
  margin-bottom: 80px;
}

.i {
  font-family: 'Droid Serif';
}
</style>

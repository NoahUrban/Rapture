<script lang="ts" setup>
import safariMockup from '~/assets/Safari Mockup.png';
</script>

<template>
  <section :class="$style.background">
    <div :class="$style.leftColumn">
      <div :class="$style.title">
        <div :class="$style.theRaptureStartupContainer">
          <span>THE </span>
          <span :class="$style.rapture">RAPTURE</span>
          <span> STARTUP</span>
        </div>
        <div :class="$style.yourSiteWillContainer">
          <span :class="$style.yourSiteWillContainer1">
            <span>Your site will look </span>
            <i :class="$style.great">great</i>
            <span> and work seamlessly across differences</span>
          </span>
        </div>
        <div :class="$style.builtTheWebsite">
          Built the website you love with 20 high-quality templates, each designed for a specific purpose.
        </div>
      </div>
      <div :class="$style.buttonContainer">
        <div :class="$style.button" />
        <div :class="$style.viewProject">VIEW PROJECT</div>
      </div>
    </div>
    <div :class="$style.rightColumn">
      <img :class="$style.safariMockupIcon" alt="Safari Mockup" :src="safariMockup" />
    </div>
  </section>
</template>

<style module>
.background {
  width: 100%;
  position: relative;
  background-color: #fff;
  min-height: 950px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  padding: 40px 0;
  box-sizing: border-box;
}

.leftColumn {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  flex: 1;
  max-width: 30%;
  margin-left: 212px;
}

.title {
  width: 396px;
  max-width: 100%;
  position: relative;
  height: 397px;
  text-align: left;
  font-size: 18px;
  color: #3a3d4b;
  font-family: Montserrat;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.theRaptureStartupContainer {
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 26px;
}

.rapture {
  font-weight: 600;
}

.yourSiteWillContainer {
  font-size: 42px;
  letter-spacing: -1px;
  line-height: 52px;
  color: #222328;
  height: 208px;
  display: flex;
  align-items: center;
}

.yourSiteWillContainer1 {
  width: 100%;
}

.great {
  font-family: 'Droid Serif';
}

.builtTheWebsite {
  line-height: 28px;
  font-weight: 300;
  width: 355px;
  max-width: 100%;
  height: 84px;
  display: flex;
  align-items: center;
}

.buttonContainer {
  position: relative;
  width: 200px;
  height: 50px;
}

.button {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 25px;
  background-color: #3b55e6;
  width: 100%;
  height: 50px;
}

.viewProject {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 125px;
  font-size: 14px;
  letter-spacing: 1.5px;
  font-family: Montserrat;
  color: #fff;
  text-align: center;
}

.rightColumn {
  flex: 1;
  max-width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 0;
  margin-right: 0;
}

.safariMockupIcon {
  max-width: 1000px;
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-right: 0;
}

@media (max-width: 768px) {
  .background {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .leftColumn,
  .rightColumn {
    max-width: 100%;
    margin: 0;
  }

  .safariMockupIcon {
    max-width: 100%;
  }
}
</style>
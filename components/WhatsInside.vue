<script lang="ts" setup>
import insideicon1 from '~/assets/insideicon1.png';
import insideicon2 from '~/assets/insideicon2.png';
import insideicon3 from '~/assets/insideicon3.png';
</script>

<template>
  <section :class="$style.background">
    <div :class="$style.title">
      <div :class="$style.whatIsInsideContainer">
        <span :class="$style.whatIsInside">
          <span :class="$style.what">What </span>
          <i :class="$style.is">is</i>
          <span> Insid</span>
        </span>
        <span>e</span>
      </div>
      <div :class="$style.wereTalking150">We're talking $150 worth of Photoshop and Sketch templates. Totally customized. We hope you get all you need,</div>
    </div>
    <div :class="$style.counters">
      <div :class="$style.count">
        <img :class="$style.icon" alt="Pages" :src="insideicon1" />
        <div :class="$style.number">
          <span :class="$style.span">2</span>0
        </div>
        <div :class="$style.label">
          <span :class="$style.page">PAGE</span>S
        </div>
      </div>
      <div :class="$style.count">
        <img :class="$style.icon" alt="Blocks" :src="insideicon2" />
        <div :class="$style.number">170</div>
        <div :class="$style.label">
          <span :class="$style.block">BLOCK</span>S
        </div>
      </div>
      <div :class="$style.count">
        <img :class="$style.icon" alt="Elements" :src="insideicon3" />
        <div :class="$style.number">600</div>
        <div :class="$style.label">ELEMENTS</div>
      </div>
    </div>
  </section>
</template>

<style module>
.background {
  width: 100%;
  position: relative;
  background-color: #222328;
  min-height: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 40px;
  box-sizing: border-box;
}

.title {
  width: 639px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  font-family: Montserrat;
}

.whatIsInsideContainer {
  font-size: 32px;
  line-height: 42px;
}

.whatIsInside {
  letter-spacing: -0.5px;
}

.what {
  font-family: Montserrat;
}

.is {
  font-family: 'Droid Serif';
}

.wereTalking150 {
  font-size: 18px;
  line-height: 28px;
  font-weight: 300;
  opacity: 0.8;
  mix-blend-mode: normal;
}

.counters {
  width: 100%;
  max-width: 730px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.count {
  width: 158px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  font-family: Montserrat;
}

.icon {
  width: 70px;
  height: 70px;
  object-fit: cover;
}

.number {
  font-size: 82px;
  letter-spacing: -2px;
  line-height: 92px;
}

.span {
  letter-spacing: -2px;
}

.label {
  letter-spacing: 1px;
  line-height: 24px;
}

.page,
.block {
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .background {
    padding: 20px;
  }

  .title,
  .counters {
    width: 100%;
  }

  .counters {
    flex-direction: column;
    gap: 20px;
  }

  .count {
    width: 100%;
    max-width: 158px;
  }
}
</style>
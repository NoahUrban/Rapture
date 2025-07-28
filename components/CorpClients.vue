<script lang="ts" setup>
import logo1 from '~/assets/Logo 1.png';
import logo2 from '~/assets/Logo 2.png';
import logo3 from '~/assets/Logo 3.png';
import logo4 from '~/assets/Logo 4.png';
import logo5 from '~/assets/Logo 5.png';
</script>

<template>
  <section :class="$style.background">
    <div :class="$style.title">
      <span :class="$style.our">Our </span>
      <i :class="$style.corporate">Corporate</i>
      <span :class="$style.our"> Clients</span>
    </div>
    <div :class="$style.logos">
      <img :class="$style.logo1Icon" alt="Client Logo 1" :src="logo1" />
      <img :class="$style.logo2Icon" alt="Client Logo 2" :src="logo2" />
      <img :class="$style.logo3Icon" alt="Client Logo 3" :src="logo3" />
      <img :class="$style.logo4Icon" alt="Client Logo 4" :src="logo4" />
      <img :class="$style.logo5Icon" alt="Client Logo 5" :src="logo5" />
    </div>
  </section>
</template>

<style module>
.background {
  width: 100%;
  position: relative;
  background-color: #bcc6c9;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 40px;
  box-sizing: border-box;
}

.title {
  width: 322px;
  max-width: 100%;
  font-size: 32px;
  line-height: 42px;
  color: #222328;
  text-align: center;
  font-family: Montserrat;
}

.our {
  letter-spacing: -0.76px;
}

.corporate {
  letter-spacing: -1px;
  font-family: 'Droid Serif';
}

.logos {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.logo1Icon,
.logo2Icon,
.logo3Icon,
.logo4Icon,
.logo5Icon {
  width: 150px;
  height: 90px;
  object-fit: cover;
}

@media (max-width: 768px) {
  .background {
    padding: 20px;
  }

  .title,
  .logos {
    width: 100%;
  }

  .logos {
    flex-wrap: wrap;
    gap: 10px;
  }

  .logo1Icon,
  .logo2Icon,
  .logo3Icon,
  .logo4Icon,
  .logo5Icon {
    width: 120px;
    height: 72px;
  }
}
</style>
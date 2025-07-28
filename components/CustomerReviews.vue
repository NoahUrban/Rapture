<script lang="ts" setup>
import photoLeft from '~/assets/Photo.png';
import photoMiddle from '~/assets/Photo1.png';
import photoRight from '~/assets/Photo2.png';
import arrow1 from '~/assets/Arrow 1.png';
import arrow2 from '~/assets/Arrow 2.png';
import stars from '~/assets/stars.png';
</script>

<template>
  <section :class="$style.background">
    <div :class="$style.title">
      <span>What </span>
      <i :class="$style.ourCustomers">Our Customers</i>
      <span> Say About Us</span>
    </div>
    <div :class="$style.imageRow">
      <img :class="$style.arrow1Icon" alt="Arrow Left" :src="arrow1" />
      <div :class="$style.userpics">
        <img :class="$style.userpic1Icon" alt="Testimonial Left" :src="photoLeft" />
        <img :class="$style.userpic2Icon" alt="Testimonial Middle" :src="photoMiddle" />
        <img :class="$style.userpic3Icon" alt="Testimonial Right" :src="photoRight" />
      </div>
      <img :class="$style.arrow2Icon" alt="Arrow Right" :src="arrow2" />
    </div>
    <div :class="$style.feedback">
      <i :class="$style.craftworkHasCreat">
        “Craftwork has created a sense of comparison and even exploration, but as an instant medium. We must now devise spaces that deliver exploration, but with drama and surprise”
      </i>
      <img :class="$style.starsIcon" alt="Rating" :src="stars" />
      <div :class="$style.cameronDowmanNescContainer">
        <span :class="$style.cameronDowmanNescaf">CAMERON DOWMAN, NESCAFÉ</span>
      </div>
    </div>
  </section>
</template>

<style module>
.background {
  width: 100%;
  position: relative;
  background-color: #f0ecdd;
  min-height: 850px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 40px;
  box-sizing: border-box;
}

.title {
  width: 683px;
  max-width: 100%;
  font-size: 42px;
  letter-spacing: -1px;
  line-height: 52px;
  color: #222328;
  text-align: center;
  font-family: Montserrat;
}

.ourCustomers {
  font-family: 'Droid Serif';
}

.imageRow {
  width: 700px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.userpics {
  width: 600px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 130px;
}

.userpic1Icon,
.userpic3Icon {
  width: 90px;
  height: 90px;
  object-fit: cover;
  opacity: 0.6;
  mix-blend-mode: normal;
}

.userpic2Icon {
  width: 130px;
  height: 130px;
  object-fit: cover;
}

.arrow1Icon,
.arrow2Icon {
  width: 8px;
  height: 8px;
  object-fit: cover;
}

.feedback {
  width: 747px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  font-size: 11px;
  color: #222328;
  font-family: Montserrat;
}

.craftworkHasCreat {
  font-size: 30px;
  line-height: 42px;
  font-family: 'Droid Serif';
  width: 100%;
  height: 168px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.starsIcon {
  width: 150px;
  height: 22px;
}

.cameronDowmanNescaf {
  letter-spacing: 1.5px;
}

.cameronDowmanNescContainer {
  width: 212px;
}

@media (max-width: 768px) {
  .background {
    padding: 20px;
  }

  .title,
  .imageRow,
  .userpics,
  .feedback {
    width: 100%;
  }

  .imageRow {
    flex-wrap: wrap;
    gap: 10px;
  }

  .userpics {
    flex-wrap: wrap;
    gap: 10px;
  }
}
</style>
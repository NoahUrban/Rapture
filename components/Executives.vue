<script lang="ts" setup>
import exec1 from '~/assets/exec1.png';
import exec2 from '~/assets/exec2.png';
import exec3 from '~/assets/exec3.png';
import google from '~/assets/Google.svg';
import facebook from '~/assets/Facebook.svg';
import twitter from '~/assets/twitter.svg';
</script>

<template>
  <section :class="$style.background">
    <div :class="$style.title">
      <div :class="$style.theExecutiveTeamContainer">
        <span>The </span>
        <i :class="$style.executive">Executive</i>
        <span> Team</span>
      </div>
      <div :class="$style.hereAreKey">Here are key stakeholders focused on building our community.</div>
    </div>
    <div :class="$style.members">
      <div :class="$style.member">
        <div :class="$style.placeholder">
          <div :class="$style.placeholder1" />
        </div>
        <img :class="$style.userpicIcon" alt="Steven Kingsman" :src="exec1" />
        <div :class="$style.text">
          <div :class="$style.name">STEVEN KINGSMAN</div>
          <div :class="$style.description">
            As CEO of Craftwork, Steven is driving the company’s vision of connecting businesses with talent faster than ever. He is an expert on working with professionals around the world, having also managed the company’s global tech team of 300+ product managers, designers and engineers.
          </div>
          <div :class="$style.socials">
            <img :class="$style.googleIcon" alt="Google" :src="google" />
            <img :class="$style.facebookIcon" alt="Facebook" :src="facebook" />
            <img :class="$style.twitterIcon" alt="Twitter" :src="twitter" />
          </div>
        </div>
      </div>
      <div :class="$style.member">
        <div :class="$style.placeholder">
          <div :class="$style.placeholder1" />
        </div>
        <img :class="$style.userpicIcon" alt="Alexander Ralphs" :src="exec2" />
        <div :class="$style.text">
          <div :class="$style.name">ALEXANDER RALPHS</div>
          <div :class="$style.description">
            With more than 15 years of business and legal experience focused on the intersection of the Internet and technology, Brian oversees Craftwork's finance, HR, legal and government affairs functions.
          </div>
          <div :class="$style.socials">
            <img :class="$style.facebookIcon" alt="Facebook" :src="facebook" />
            <img :class="$style.twitterIcon" alt="Twitter" :src="twitter" />
          </div>
        </div>
      </div>
      <div :class="$style.member">
        <div :class="$style.placeholder">
          <div :class="$style.placeholder1" />
        </div>
        <img :class="$style.userpicIcon" alt="Taylor Richards" :src="exec3" />
        <div :class="$style.text">
          <div :class="$style.name">TAYLOR RICHARDS</div>
          <div :class="$style.description">
            Hayden leads Upwork’s product and design teams and oversees the company’s products across desktop, web and mobile. She is passionate about the enduring positive impact of Craftwork’s marketplace for matching talent with jobs across traditional economic and geographic boundaries.
          </div>
          <div :class="$style.socials">
            <img :class="$style.googleIcon" alt="Google" :src="google" />
            <img :class="$style.facebookIcon" alt="Facebook" :src="facebook" />
            <img :class="$style.twitterIcon" alt="Twitter" :src="twitter" />
          </div>
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
  min-height: 950px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 40px;
  box-sizing: border-box;
}

.title {
  width: 835px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  font-size: 18px;
  color: #222328;
  font-family: Montserrat;
}

.theExecutiveTeamContainer {
  font-size: 42px;
  letter-spacing: -1px;
  line-height: 52px;
}

.executive {
  font-family: 'Droid Serif';
}

.hereAreKey {
  font-size: 18px;
  line-height: 28px;
  font-weight: 300;
  opacity: 0.8;
  mix-blend-mode: normal;
}

.members {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.member {
  width: 370px;
  height: 550px;
  position: relative;
  overflow: hidden;
}

.placeholder1 {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  border: 2px solid #e8e9e9;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

.placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.userpicIcon {
  position: absolute;
  top: 51px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}

.text {
  position: absolute;
  top: 180px;
  left: 23px;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  text-align: center;
  font-size: 16px;
  color: #8c8f94;
  font-family: Montserrat;
}

.name {
  letter-spacing: 1.5px;
  color: #222328;
}

.description {
  line-height: 26px;
  font-weight: 300;
}

.socials {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 122px;
}

.googleIcon {
  width: 24px;
  height: 15px;
  object-fit: contain;
}

.facebookIcon {
  width: 9px;
  height: 18.1px;
  object-fit: contain;
}

.twitterIcon {
  width: 16.9px;
  height: 14px;
  object-fit: contain;
}

@media (max-width: 768px) {
  .background {
    padding: 20px;
  }

  .title,
  .members {
    width: 100%;
  }

  .members {
    flex-direction: column;
    gap: 20px;
  }

  .member {
    width: 100%;
    max-width: 370px;
  }

  .text {
    top: 160px;
    gap: 10px;
  }
}
</style>
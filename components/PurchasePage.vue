<script lang="ts" setup>
import logo from '~/assets/Logo.png';
import madeByCraftwork from '~/assets/Made by Craftwork.png';
import socials from '~/assets/Socials.png';
</script>

<template>
  <section :class="$style.background">
    <div :class="$style.content">
      <div :class="$style.purchaseSection">
        <div :class="$style.title">
          <div :class="$style.theRaptureStartupContainer">
            <span :class="$style.theRaptureStartupContainer1">
              <p :class="$style.theRaptureStartupWillHelp">
                <span :class="$style.the">The </span>
                <i :class="$style.rapture">Rapture</i>
                <span> Startup will help designers and developers create awesome </span>
              </p>
              <p :class="$style.theRaptureStartupWillHelp">websites for their startups.</p>
            </span>
          </div>
        </div>
        <div :class="$style.bigButton">
          <div :class="$style.button">
            <div :class="$style.purchaseNowForContainer">
              <span>PURCHASE NOW </span>
              <i :class="$style.for">for</i>
              <span> $88</span>
            </div>
          </div>
          <div :class="$style.readLicenseAgreementContainer">
            <span :class="$style.readLicenseAgreement">READ LICENSE AGREEMENT</span>
          </div>
        </div>
      </div>
      <div :class="$style.divider" />
      <div :class="$style.footerInfo">
        <div :class="$style.textSocials">
          <img :class="$style.logoIcon" alt="Logo" :src="logo" />
          <div :class="$style.greatWebUi">Great web UI kit for designers, freelancers or business.</div>
          <img :class="$style.madeByCraftwork" alt="Made by Craftwork" :src="madeByCraftwork" />
          <div :class="$style.socials">
            <img :class="$style.socialsIcon" alt="Socials" :src="socials" />
          </div>
        </div>
        <div :class="$style.menus">
          <div :class="$style.menu">
            <div :class="$style.menuTitle">LEARN MORE</div>
            <ul :class="$style.menuItems">
              <li>How it works?</li>
              <li>Meeting tools</li>
              <li>Live streaming</li>
              <li>Contact method</li>
            </ul>
          </div>
          <div :class="$style.menu">
            <div :class="$style.menuTitle">ABOUT US</div>
            <ul :class="$style.menuItems">
              <li>About us</li>
              <li>Features</li>
              <li>Privacy policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div :class="$style.menu">
            <div :class="$style.menuTitle">SUPPORT</div>
            <ul :class="$style.menuItems">
              <li>F.A.Q.</li>
              <li>Contact us</li>
              <li>Live chat</li>
              <li>Phone call</li>
            </ul>
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
  min-height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  box-sizing: border-box;
}

.content {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.purchaseSection {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.title {
  width: 637px;
  max-width: 100%;
  text-align: left;
  font-size: 32px;
  color: #222328;
  font-family: Montserrat;
}

.theRaptureStartupContainer {
  letter-spacing: -0.76px;
  line-height: 46px;
}

.theRaptureStartupContainer1 {
  width: 100%;
}

.theRaptureStartupWillHelp {
  margin: 0;
}

.the {
  font-family: Montserrat;
}

.rapture,
.for {
  font-family: 'Droid Serif';
}

.bigButton {
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.button {
  width: 270px;
  height: 60px;
  border-radius: 30px;
  background-color: #30ce91;
  display: flex;
  justify-content: center;
  align-items: center;
}

.purchaseNowForContainer {
  font-size: 14px;
  letter-spacing: 1.5px;
  color: #fff;
  text-align: center;
}

.readLicenseAgreementContainer {
  font-size: 11px;
  color: #222328;
}

.readLicenseAgreement {
  letter-spacing: 1.5px;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #222328;
  opacity: 0.1;
  mix-blend-mode: normal;
}

.footerInfo {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
}

.textSocials {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  text-align: left;
  font-size: 16px;
  color: #8c8f94;
  font-family: Montserrat;
}

.logoIcon {
  width: 213px;
  height: 22px;
  object-fit: cover;
}

.greatWebUi {
  line-height: 26px;
  font-weight: 300;
  opacity: 0.8;
  mix-blend-mode: normal;
}

.madeByCraftwork {
  width: 207px;
  height: 29px;
  object-fit: cover;
}

.socials {
  display: flex;
}

.socialsIcon {
  width: 222px;
  height: 19px;
  object-fit: contain;
}

.menus {
  display: flex;
  gap: 40px;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
}

.menuTitle {
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 22px;
  color: #222328;
}

.menuItems {
  font-size: 16px;
  line-height: 36px;
  font-weight: 300;
  color: #8c8f94;
  list-style: none;
  padding: 0;
  margin: 0;
}

@media (max-width: 768px) {
  .background {
    padding: 20px;
  }

  .purchaseSection {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .title {
    width: 100%;
  }

  .footerInfo {
    flex-direction: column;
    align-items: center;
  }

  .textSocials {
    align-items: center;
    text-align: center;
  }

  .socialsIcon {
    width: 150px;
    height: 13px;
  }

  .menus {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  .menu {
    align-items: center;
  }
}
</style>
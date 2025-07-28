<script lang="ts" setup>
</script>

<template>
  <footer :class="$style.background">
    <div :class="$style.footerContent">
      <div :class="$style.copyright">All Rights Reserved.</div>
      <div :class="$style.links">
        <div :class="$style.usefulLinks">Useful Links</div>
        <div :class="$style.store">Store</div>
        <div :class="$style.contactUs">Contact Us</div>
      </div>
    </div>
  </footer>
</template>

<style module>
.background {
  width: 100%;
  position: relative;
  background-color: #222328;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
}

.footerContent {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-family: Montserrat;
  color: #8c8f94;
}

.copyright {
  font-size: 14px;
  line-height: 24px;
  font-weight: 300;
  text-align: left;
}

.links {
  display: flex;
  gap: 30px;
  text-align: right;
}

.usefulLinks,
.store,
.contactUs {
  font-size: 16px;
  line-height: 26px;
  font-weight: 300;
}

@media (max-width: 768px) {
  .background {
    padding: 15px;
  }

  .footerContent {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .copyright {
    order: -1;
  }

  .links {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
}
</style>
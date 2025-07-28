<script setup>
import { useTodoStore } from '~/stores';

const store = useTodoStore();
</script>

<template>
  <div :class="$style.placeholder">
    <nav :class="$style.navBar">
      <img :class="$style.logoIcon" alt="Logo" src="~/assets/HeaderLogo.png" />
      <div :class="$style.navItems">
        <div :class="$style.home">Home</div>
        <div :class="$style.features">Features</div>
        <div :class="$style.blog">Blog</div>
        <div :class="$style.shop">Shop</div>
        <img :class="$style.searchIcon" alt="Search" src="~/assets/Search Icon.svg" />
      </div>
      <div :class="$style.actions">
        <div :class="$style.signIn">SIGN IN</div>
        <button :class="$style.signUp">SIGN UP</button>
      </div>
    </nav>
  </div>
</template>

<style module>
.placeholder {
  width: 100%;
  position: relative;
  background-color: #222328;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.navBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

.logoIcon {
  width: 100px;
  height: 10px;
  object-fit: cover;
}

.navItems {
  display: flex;
  align-items: center;
  gap: 20px;
}

.home {
  width: 50px;
  font-size: 16px;
  font-weight: 300;
  font-family: Montserrat;
  color: #fff;
  text-align: left;
  opacity: 0.2;
  mix-blend-mode: normal;
}

.features {
  width: 69px;
  font-size: 16px;
  font-weight: 300;
  font-family: Montserrat;
  color: #fff;
  text-align: left;
}

.blog {
  width: 38px;
  font-size: 16px;
  font-weight: 300;
  font-family: Montserrat;
  color: #fff;
  text-align: left;
}

.shop {
  width: 42px;
  font-size: 16px;
  font-weight: 300;
  font-family: Montserrat;
  color: #fff;
  text-align: left;
}

.searchIcon {
  width: 14.3px;
  height: 14.3px;
  object-fit: contain;
}

.actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.signIn {
  width: 80px;
  font-size: 11px;
  letter-spacing: 1px;
  font-family: Montserrat;
  color: #fff;
  text-align: left;
}

.signUp {
  width: 80px;
  height: 36px;
  border-radius: 18px;
  background-color: #3b55e6;
  font-size: 11px;
  letter-spacing: 1px;
  font-family: Montserrat;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .placeholder {
    padding: 0 10px;
  }

  .navBar {
    flex-direction: column;
    gap: 10px;
  }

  .navItems {
    flex-wrap: wrap;
    justify-content: center;
  }

  .actions {
    justify-content: center;
  }

  .signUp {
    width: 70px;
  }
}
</style>
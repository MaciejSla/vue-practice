<script setup>
import Icon from './Icon.vue'
</script>

<template>
  <div class="navbar-expand-xl">
    <div class="collapse navbar-collapse" id="menubar2">
      <div class="header__top w-100">
        <div class="container">
          <div class="header__top-area">
            <div class="header__top-left">
              <ul>
                <li>
                  <Icon icon="fa-solid fa-phone" />
                  +8812 345 678 912
                </li>
                <li>
                  <Icon icon="fa-solid fa-envelope" />
                  info@yourmail.com
                </li>
              </ul>
            </div>
            <div class="header__top-center">
              <div class="header__top-logo d-none d-md-block">
                <a href="#"><img src="@/assets/images/logo/01.png" alt="logo" /></a>
              </div>
            </div>
            <div class="header__top-right">
              <div class="header__top-socialsearch">
                <div class="header__top-social">
                  <ul>
                    <li>
                      <a href="#"><Icon icon="fa-brands fa-facebook-f" /></a>
                    </li>
                    <li>
                      <a href="#"><Icon icon="fa-brands fa-twitter" /></a>
                    </li>
                    <li>
                      <a href="#"><Icon icon="fa-brands fa-linkedin-in" /></a>
                    </li>
                    <li>
                      <a href="#"><Icon icon="fa-brands fa-pinterest-p" /></a>
                    </li>
                  </ul>
                </div>
                <div class="header__top-search">
                  <ul>
                    <li class="search__icon"><Icon icon="fa-solid fa-search" /></li>
                    <li class="cart__icon">
                      <Icon icon="fa-solid fa-shopping-bag" /><span>04</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

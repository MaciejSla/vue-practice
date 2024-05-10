<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)

import HeaderTop from './components/HeaderTop.vue'
</script>

<template>
  <header class="header">
    <HeaderTop />
    <div class="header__bottom">
      <div class="container">
        <div class="header__mainmenu navbar navbar-expand-xl navbar-light">
          <div class="header__logo">
            <a href="#" class="d-none d-xl-block">
              <img src="@/assets/images/logo/01-b.png" alt="logo" />
            </a>
            <a href="#" class="d-xl-none"><img src="@/assets/images/logo/01.png" alt="logo" /></a>
          </div>
          <div class="header__bar">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menubar"
              aria-controls="menubar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <button
              class="navbar-toggler header__bar-info"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menubar2"
              aria-controls="menubar2"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="fas fa-info"></span>
            </button>
          </div>
          <div class="header__menu navbar-expand-xl">
            <div class="collapse navbar-collapse" id="menubar">
              <ul>
                <li class="active">
                  <a href="#0">Home</a>
                  <ul>
                    <li><a href="index.html" class="active">Home Page Christian</a></li>
                    <li><a href="index-2.html">Home Page Muslim</a></li>
                    <li><a href="index-3.html">Home Page Hindu</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#0">Events</a>
                  <ul>
                    <li><a href="event.html">Event Two Column</a></li>
                    <li><a href="event-2.html">Event Three Column</a></li>
                    <li><a href="event-single.html">Event Single</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#0">Causes</a>
                  <ul>
                    <li><a href="cause.html">Cause Two Column</a></li>
                    <li><a href="cause-single.html">Cause Single</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#0">Gallery</a>
                  <ul>
                    <li><a href="gallery.html">Gallery Default</a></li>
                    <li><a href="gallery-2.html">Gallery 4 Columns</a></li>
                    <li><a href="gallery-3.html">Gallery 6 Columns</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#0">Sermons</a>
                  <ul>
                    <li><a href="sermon.html">Sermons 2 Columns</a></li>
                    <li><a href="sermon-single.html">Sermons Single</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#0">Blog</a>
                  <ul>
                    <li><a href="blog.html">Blog Default</a></li>
                    <li><a href="blog-2.html">Blog 2 Columns</a></li>
                    <li><a href="blog-single.html">Blog Single</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#0">Shop</a>
                  <ul>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="shop-single.html">Shop Single</a></li>
                    <li><a href="cart.html">Cart Page</a></li>
                    <li><a href="check-out.html">Check Out Page</a></li>
                  </ul>
                </li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul>
              <a href="cause-single.html" class="default-btn">
                <span>Donate Now <Icon icon="fa-solid fa-heart" /></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/./logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
</template>

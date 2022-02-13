<template>
  <div class="banner">
    <Swiper ref="mySwiper" :options="swiperOptions">
      <SwiperSlide class="swiper-slide">
        <img src="@assets/images/banner/inception_movie_banner.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <img src="@assets/images/banner/civil_war_movie_banner.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <img src="@assets/images/banner/avenger_movie_banner.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
    <div
      class="swiper-button-prev swiper-button dpad-focusable"
    ></div>
    <div
      class="swiper-button-next swiper-button dpad-focusable"
    ></div>
  </div>
</template>

<script>
import 'swiper/css/swiper.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Banner',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 1,
        initialSlide: 2,
        lazy: {
          loadPrevNext: true,
          loadOnTransitionStart: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 5000,
        },
        loop: true,
      }
    }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@design';
.banner {
  .swiper-slide {
    width: 50rem;
    img {
      position: relative;
      width: auto;
      min-width: 100%;
      max-width: 100%;
      height: auto;
      pointer-events: none;
      height: 300px;
      opacity: 0.8;
      border-radius: 10px;
    }
  }

  .swiper-button {
    width: 22px;
    height: 44px;
    color: white;
    position: absolute;
    top: 250px;

    &::after {
      font-size: 40px;
      font-weight: 700;
    }

    &:focus {
      color: $color-swiper-button-active
    }
  }
}
</style>

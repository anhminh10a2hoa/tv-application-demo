<template>
  <div class="banner">
    <Swiper ref="mySwiper" :options="swiperOptions">
      <SwiperSlide class="swiper-slide">
        <img src="@assets/img/inception_movie_banner.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <img src="@assets/img/civil_war_movie_banner.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <img src="@assets/img/avenger_movie_banner.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
    <div
      class="swiper-button-prev dpad-focusable"
    ></div>
    <div
      class="swiper-button-next dpad-focusable"
    ></div>
  </div>
</template>

<script>
import 'swiper/css/swiper.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'CarouselContainer',
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
  display: block;
  z-index: -1;
  height: 300px;
  background: linear-gradient(180deg, #242424, black, transparent);
  
  .swiper-slide {
    width: 50rem;
    opacity: 0.7;
    img {
      position: relative;
      width: auto;
      min-width: 99%;
      max-width: 99%;
      height: auto;
      pointer-events: none;
      height: 300px;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 22px;
    height: 44px;
    color: white;
    position: absolute;
    top: 250px;
  }
}
</style>

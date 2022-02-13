<template>
  <div class="gridList">
    <p class="title">{{title}}</p>
    <Swiper :options="swiperOptions">
      <SwiperSlide class="swiper-slide dpad-focusable">
        <img src="@assets/images/program/tinhmong_movie.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide class="swiper-slide dpad-focusable">
        <img src="@assets/images/program/spontaneous_movie.png" alt="" />
      </SwiperSlide>
      <SwiperSlide class="swiper-slide dpad-focusable">
        <img src="@assets/images/program/bigbug_movie.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide class="swiper-slide dpad-focusable">
        <img src="@assets/images/program/chandai_movie.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide class="swiper-slide dpad-focusable">
        <img src="@assets/images/program/dreamland_movie.png" alt="" />
      </SwiperSlide>
      <SwiperSlide class="swiper-slide dpad-focusable">
        <img src="@assets/images/program/bhm_movie.png" alt="" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import 'swiper/css/swiper.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'GridList',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    title: {
      type: String,
      default: 'Movie'
    }
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 5,
        lazy: {
          loadPrevNext: true,
          loadOnTransitionStart: true,
        },
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
.gridList {
  margin-left: 10px;
  margin-right: 10px;

  .swiper-container {
    height: 160px;
  }

  .title {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: -1px;
  }
  .swiper-slide {
    margin-top: 15px;
    img {
      position: relative;
      width: auto;
      min-width: 100%;
      max-width: 100%;
      height: auto;
      height: 130px;
      border-radius: 10px;
    }

    &:focus {
      transform: scale(1.2);
    }
  }
  .swiper-slide-duplicate {
    display:none;
  }
}
</style>

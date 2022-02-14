<template>
  <div class="gridList">
    <p class="title" :class="'title_grid_' + gridId">{{title}}</p>
    <Swiper :options="swiperOptions">
      <SwiperSlide class="swiper-slide dpad-focusable" v-for="(program, index) in programItems" :key="index">
        <img :src="programImage(program)" alt="" />
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
    },
    programItems: {
      type: Array,
      default: () => []
    },
    gridId: {
      type: Number,
      default: -1
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
  methods: {
    programImage(imageName) {
      try {
        const image = require('@assets/images/program/' + imageName)
        return image
      } catch (e) {
        return ''
      }
    },
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
    margin-bottom: 20px;
  }
  .swiper-slide {
    img {
      position: relative;
      width: auto;
      min-width: 99%;
      max-width: 99%;
      height: auto;
      height: 130px;
      border-radius: 10px;
    }

    &:focus {
      img {
        border: 3px solid $color-swiper-button-active;
        z-index: 999;
      }
    }
  }
  .swiper-slide-duplicate {
    display:none;
  }
}
</style>

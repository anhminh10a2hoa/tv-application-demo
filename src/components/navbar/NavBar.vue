<template>
  <div class="navbar">
    <img src="@assets/images/sofia-digital-logo.png" alt="" />
    <div class="navbar-menu">
      <router-link v-for="item in navbarItem" :key="item.title" class="navbar-item dpad-focusable" :id="item.class + '_navbar'" :to="item.routerLink">{{item.title}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    navbarItem: {
      type: Array,
      default: () => []
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@design';
.navbar {
  position: relative;
  margin-top: 20px;
  margin-left: 20px;
  height: 80px;

  img {
    height: 70px;
    display: inline-block;
  }
  .navbar-menu {
    display: inline-block;
    position: absolute;
    right: 0px;
    margin-top: -5px;

    .navbar-item {
      text-decoration: none;
      line-height: 80px;
      height: 80px;
      margin-right: 30px;
      padding: 12px 25px;
      color: $color-title-navbar;
      font-weight: bold;
      font-size: 20px;
      z-index: -1;
      background-color: $color-background-menu-item;
      border-radius: 40px;

      &:focus {
        color: $color-background-menu-item;
        background-color: $color-title-navbar-focus
      }
    }
  }
}
</style>

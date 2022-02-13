<template>
  <div class="navbar">
    <img src="@assets/img/sofia-digital-logo.png" alt="" />
    <div class="navbar-menu">
      <a class="navbar-item" href="#">Video</a>
      <a class="navbar-item" href="#">Feature</a>
      <a class="navbar-item" href="#">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@design';
.navbar {
  margin-top: 20px;
  margin-left: 20px;

  img {
    height: 80px;
    display: inline-block;
  }
  .navbar-menu {
    display: inline-block;
    position: absolute;
    margin-left: 50px;

    .navbar-item {
      text-decoration: none;
      line-height: 80px;
      height: 80px;
      margin-right: 30px;
      padding: 10px;
      color: $color-title-navbar;
      font-weight: 600;
      font-size: 20px;
      z-index: -1;

      &:hover {
        color: $color-title-navbar-hover;
      }

      &:focus {
        color: $color-title-navbar-focus;
      }
    }
  }
}
</style>

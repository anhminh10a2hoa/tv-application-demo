<template>
  <div class="navbar">
    <img src="@assets/images/sofia-digital-logo.png" alt="" />
    <div class="navbar-menu">
      <a class="navbar-item dpad-focusable" href="#">UI App</a>
      <a class="navbar-item dpad-focusable" href="#">Players</a>
      <a class="navbar-item dpad-focusable" href="#">Features</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@design';
.navbar {
  margin-top: 20px;
  margin-left: 50px;
  height: 80px;

  img {
    height: 70px;
    display: inline-block;
  }
  .navbar-menu {
    display: inline-block;
    position: absolute;
    right: 50px;
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

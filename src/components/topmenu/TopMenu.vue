<template>
  <div class="topmenu">
    <img src="@assets/img/sofia-digital-logo.png" alt="" />
    <div class="topmenu__menu">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopMenu',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.topmenu {
  img {
    width: 200px;
    margin-top: 20px;
    margin-left: 20px;
  }
}
</style>

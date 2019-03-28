<template>
  <header class=row>
    <nuxt-link id="header-left" class="col-12 col-lg-6" to="/">
      <img id="blog-icon" src="~/static/moai.svg">
      <p id="blog-title">BlueMoai-Blog</p>
    </nuxt-link>
    <div id="header-right" class="d-none col-lg-6"></div>
  </header>
</template>

<script>
export default {

}
</script>


<style lang="scss">
header {
  padding: 15px 0px;

  #header-left {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;

    #blog-icon {
      height: 3em;
    }
    #blog-title {
      font-size: 1.5em;
      margin: 0;
    }
    #bars-icon {
      float: right;
    }
  }
  #header-right {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;

    svg {
      width: 1.5em;
      height: 1.5em;
    }
  }
}
</style>


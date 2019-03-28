<template>
  <div id="app">
    <index-header />
    <nuxt id="main" />
    <index-footer />
    <float-button class="d-lg-none"/>
  </div>
</template>

<script>
import IndexHeader from '~/components/IndexHeader'
import IndexFooter from '~/components/IndexFooter'
import FloatButton from '~/components/FloatButton'
export default {
  components: {
    IndexHeader,
    IndexFooter,
    FloatButton
  }
}
</script>


<style lang="scss">
body {
  background-color: #e1e2e1;

  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    color: inherit;
    text-decoration: none;
  }
  title {
    padding: 15px;
    font-size: 1.5em;
    color: #4cb6ac;
    margin: 0;
  }
  content {
    padding: 15px;
  }
  #main {
    min-height: 100vh;
  }
}
</style>

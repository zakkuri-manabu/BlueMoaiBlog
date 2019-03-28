<template>
  <footer class="row">
    <div id="footer-center" class="col-12">
      <font-awesome-icon :icon="['fab', 'github']" />
    </div>
    <div class="col-12">
      <h6>
        This page's icons use from 
        <a href="https://seeklogo.com">
          seeklogo.com
        </a>
        <a href="https://fontawesome.com">
          fontawesome.com
        </a>.
      </h6>
    </div>
  </footer>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
footer {
  padding: 15px;
  width: 100%;

  #footer-center {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 2em;
      height: 2em;
    }
  }
}
</style>



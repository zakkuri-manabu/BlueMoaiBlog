<template>
  <div id="side-bar">
    <div class="side-bar-title">
      <h3>タグ一覧</h3>
    </div>
    <div class="side-bar-content">
      <li v-for="tag in tags" :key="tag">{{ tag.name }}</li>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    tags () { return this.$store.state.tags }
  }
}
</script>


<style lang="scss">
#side-bar {
  width: 100%;
  height: 100%;
  box-shadow: 0 2px 5px rgba(0,0,0,0.26);

  .side-bar-title {
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    h3 {
      color: #4cb6ac;
      margin: 0;
    }
  }
  .side-bar-content {
    padding: 0px 15px 15px 15px;
    justify-content: start;
    align-items: start;

    li {
      font-size: 1.25em;
      list-style: none;
    }
  }
}
</style>


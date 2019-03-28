<template>
  <div class="container">
    <div class="row">
      <div class="article-wrap col-md-12 col-lg-9 col-xl-10">
        <div class="article">
          <div class="article-title-wrap">
            <h1 class="article-title" >title</h1>
            <h6 class="article-time" >time</h6>
          </div>
          <div class="article-content">
            <div v-html="$md.render(article)"></div>
          </div>
        </div>
      </div>
      <div id="side-bar-wrap" class="d-none d-lg-flex col-lg-3 col-xl-2">
        <side-bar />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '~/components/SideBar'
export default {
  computed: {
    article () { return this.$store.state.article }
  },
  components: {
    SideBar,
  },
  async fetch({ store }) {
    store.dispatch('getArticles')
    store.dispatch('getTags')
  }
}
</script>

<style lang="scss">
.article-wrap {
  width: 100%;
  padding: 15px;

  .article {
    width: 100%;
    height: 100%;
    box-shadow: 0 2px 5px rgba(0,0,0,0.26);

    .article-title-wrap {
      padding: 15px;

      .article-title {
        color: #4cb6ac;
        margin: 0;
      }
    }
    .article-content {
      padding: 0 15px 15px 15px;
    }
  }
}
#side-bar-wrap {
  padding: 15px;
  width: 100%;
}
</style>


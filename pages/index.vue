<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-lg-9">
        <div class="row">
          <nuxt-link v-for="article in articles" :key="article" :to="{ name: 'articles-id', params: { id: 'id' }}" class="box-wrap col-12 col-sm-6 col-xl-4">
            <div class="box">
              <div class="box-content-wrap">
                <img :src="article.image" class="box-img">
                <div class="box-title-wrap">
                  <p class="box-title">{{ article.title }}</p>
                </div>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div id="side-bar-wrap" class="d-none d-lg-flex col-lg-3">
        <side-bar />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '~/components/SideBar'

export default {
  computed: {
    articles () { return this.$store.state.articles }
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
.box-wrap {
  width: 100%;
  padding: 15px;

  .box {
    width: 100%;
    height: 177.17px;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.26);

    .box-content-wrap {
      position: relative;
      width: 100%;
      height: 100%;

      .box-img {
        opacity: 0.2;
        width: 100%;
        height: 100%;
      }
      .box-title-wrap {
        position: absolute;
        width: 100%;
        bottom: 0;
        
        .box-title {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: bold;
          font-size: 1.2em;
          margin: 0;
        }
      }
    }
  }
}
#side-bar-wrap {
  padding: 15px;
  width: 100%;
}
</style>

const firebase = require('firebase')
require('firebase/firestore')
firebase.initializeApp({
  apiKey: 'AIzaSyBCzdy_XX7wi9E8jUv6asYmLnfCf2IAGoM',
  authDomain: 'bluemoai-blog.firebaseapp.com',
  projectId: 'bluemoai-blog'
})
const db = firebase.firestore()

export const state = () => ({
  articles: null,
  tags: null
})

export const mutations = {
  setArticles(state, data) {
    state.articles = data
  },
  setTags(state, data) {
    state.tags = data
  }
}

export const actions = {
  async getArticles(context) {
    if (!state.articles) {
      const data = []
      await db
        .collection('titles')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            data.push(doc.data())
          })
        })
      await context.commit('setArticles', data)
    }
  },
  async getTags(context) {
    if (!state.tags) {
      const data = []
      await db
        .collection('tags')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            data.push(doc.data())
          })
        })
      await context.commit('setTags', data)
    }
  }
}

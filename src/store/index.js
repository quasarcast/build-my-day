import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import QuasarVuexOrmPlugin from './QuasarVuexOrmPlugin'

export default store(function () {
  const Store = createStore({
    plugins: [QuasarVuexOrmPlugin()],

    strict: process.env.DEBUGGING
  })

  return Store
})

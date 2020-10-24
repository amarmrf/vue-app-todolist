import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


/*
import React from "react";

class Min extends React.Component {
  render() {
    return (
    <div>
      
    </div>
  )
}
}

export default Min
*/

/*
https://jsonplaceholder.typicode.com/todos
*/


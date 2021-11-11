import Vue from 'vue'
import App from './App'

// Pode usar as duas formas, a mais clara de entender e a reduzida.

new Vue({
    //el: "#app",
    /* render(createElement) {
        return createElement(App)
    } */
    render: h => h(App)
}).$mount('#app')


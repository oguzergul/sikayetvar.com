import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import x5GMaps from 'x5-gmaps';
import './styles/index.scss';
import {GOOGLE_MAPS_KEY} from "./utils/keys";

Vue.config.productionTip = false;

Vue.use(x5GMaps, GOOGLE_MAPS_KEY);


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

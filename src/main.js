import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
if (module.hot) {
    module.hot.accept();
}
Vue.directive('focus', {
    inserted: function (el) {
        // 聚焦元素
        el.focus()
    }
})
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
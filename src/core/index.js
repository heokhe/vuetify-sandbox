import Vue from 'vue';

Vue.use({
    install(v){
        v.prototype.$core = null // null is just for fun
    }
})

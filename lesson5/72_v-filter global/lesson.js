Vue.filter('numberFormat', function (value) {
    return value.toLocaleString()
})
Vue.filter('toUSD', function (jpy) {
    return jpy / 100
})
Vue.filter('readMore', function (text, length, suffix) {
    return text.substring(0,length)+suffix
})
var app = new Vue({
    el: '#app',
    data: {
        price: 29800000000,
        jpyPrice: 2980000,
        text : "aaaaaaaaassssssdddddddfffffffgggggggssssssss"
    }
})
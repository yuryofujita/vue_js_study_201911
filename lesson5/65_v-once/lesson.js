var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello vue js'
    },
    methods: {
        clickHandler: function (event) {
            this.message = this.message.split("").reverse().join("");
        }
    }
})
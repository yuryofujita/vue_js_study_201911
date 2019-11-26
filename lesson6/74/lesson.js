var app = new Vue({
    el: '#app',
    data: {
        message:"hello vue js"
    },
    computed: {
        revercedMessage: function() {
            return this.message.split("").reverse().join("")
        }
    }
})
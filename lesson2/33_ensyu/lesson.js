var app = new Vue({
    el: '#app',
    data: {
        message: 'hello world',
        url: 'https://jp.vuejs.org/',
        toggle: true,
        languages: [
            'javascript','ruby','php'
        ]
    },
    methods: {
        clickHandler: function () {
            this.message="clicked."
        }
    }
})
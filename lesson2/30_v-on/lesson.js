var app = new Vue({
    el: '#app',
    data: {
        now: ''
    },
    methods: {
        onclick: function () {
            // alert('onclick!');
            //dataのnowに日付を入れる
            this.now = new Date().toLocaleString();
        }
    }
})
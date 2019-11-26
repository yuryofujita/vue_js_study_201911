var app = new Vue({
    el: '#app',
    data: {
        basePrice: 100
    },
    computed: {
        taxIncludePrice: {
            get: function () {
                console.log("get")
                return parseInt(this.basePrice*1.08)
            },
            set: function (taxIncludePrice) {
                console.log("set")
                this.basePrice = Math.ceil(taxIncludePrice/1.08)
                
            }
        }
    }
})
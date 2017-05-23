<template>
    <div class="m-box">
        <div class="m-box cont">
            <div v-for="item in typeData">
                <div v-for="items in item.Records" v-if="items.Picture">
                    <img class="typeImg" :src="items.Picture" />
                </div>
                <div class="typelist" v-else>
                    <span>{{items.SlideName}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'IndexTab',
        data() {
            return {
                typeData: []
            }
        },
        components: {

        },
        created() {
            this.getTypeData();
        },
        methods: {
            getTypeData: function () {
                this.$http.get('/api/categpry').then(function (response) {
                    this.typeData = response.data.data;

                }, function (response) {
                    console.log(response)
                })
            }
        }
    }
</script>
<style scoped lang='less'>
    .cont {
        background: #fff;
    }
    
    .typeImg {
        width: 100%;
    }
    
    .typeImg img {
        width: 100%;
    }
    
    .typelist {
        background: #fff;
        display: inline-block;
        border: 1px solid #e6e6e6;
        padding: 5px 10px;
        margin-left: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    
    .typelist span {
        display: block;
    }
</style>
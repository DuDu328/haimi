<template>
    <div>
        <div class="picturepage">
            <ul>
                <li><img :src="imgData" alt=""></li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'picture',
        props: ['imgData']
    }
</script>
<style scoped lang='less'>
    .picturepage {
        padding-bottom: 10px;
        ul li {
            width: 50px;
            height: 50px;
            overflow: hidden;
        }
        img {
            width: 100%;
        }
    }
</style>
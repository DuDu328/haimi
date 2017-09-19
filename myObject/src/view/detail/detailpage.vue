<template>
    <div class="main">
        <fullwater :fullData="fullData"></fullwater>
    </div>

</template>
<script>
    import fullwater from '@/components/fullwater/fullwater'
    export default {
        name: 'detailpage',
        components: {
            fullwater
        },
        props: ["fullData"]
    }
</script>
<style>

</style>